/**
 * Central State Store with LocalStorage Persistence
 * Allows full CRUD in Admin mode while maintaining clean fallback defaults
 */

import { INITIAL_DATA } from './data/initial-data.js';

const STORAGE_KEY = 'hardik_portfolio_data_v2';
const AUTH_KEY = 'hardik_portfolio_admin_auth';

class PortfolioStore {
  constructor() {
    this.data = this.loadData();
  }

  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with initial data to ensure complete schema
        return {
          ...INITIAL_DATA,
          ...parsed,
          config: { ...INITIAL_DATA.config, ...(parsed.config || {}) },
          research: { ...INITIAL_DATA.research, ...(parsed.research || {}) },
          about: { ...INITIAL_DATA.about, ...(parsed.about || {}) }
        };
      }
    } catch (e) {
      console.warn('Could not load from localStorage, falling back to initial dataset', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      window.dispatchEvent(new CustomEvent('portfolio:data-changed', { detail: this.data }));
      return true;
    } catch (e) {
      console.error('Failed to save to localStorage', e);
      return false;
    }
  }

  resetToDefaults() {
    this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.saveData();
    return this.data;
  }

  // --- Auth helpers ---
  isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === 'true';
  }

  login(password) {
    // Secret backstage passcode
    const valid = password === 'Space_Heart8104' || password === (this.data.config.adminPassword || 'Space_Heart8104');
    if (valid) {
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.hash = '#/';
  }

  // --- Getters ---
  getConfig() {
    return this.data.config;
  }

  getProjects(filterCategory = 'All', searchQuery = '') {
    let list = this.data.projects || [];
    
    if (filterCategory && filterCategory !== 'All') {
      const cat = filterCategory.toLowerCase();
      list = list.filter(p => 
        (p.category && p.category.toLowerCase().includes(cat)) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(cat))
      );
    }

    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(q))
      );
    }

    return list;
  }

  getFeaturedProjects() {
    const list = this.data.projects || [];
    return list.filter(p => p.featured);
  }

  getProjectBySlug(slug) {
    return (this.data.projects || []).find(p => p.slug === slug || p.id === slug);
  }

  getResearch() {
    return this.data.research || { publications: [], patents: [], conferences: [], awards: [] };
  }

  getNotes(category = 'All') {
    let list = this.data.notes || [];
    if (category && category !== 'All') {
      list = list.filter(n => n.category.toLowerCase() === category.toLowerCase());
    }
    return list;
  }

  getNoteBySlug(slug) {
    return (this.data.notes || []).find(n => n.slug === slug || n.id === slug);
  }

  getAboutData() {
    return this.data.about || {};
  }

  // --- Setters / Modifiers (Admin) ---
  updateConfig(newConfig) {
    this.data.config = { ...this.data.config, ...newConfig };
    this.saveData();
    return this.data.config;
  }

  saveProject(project) {
    if (!project.slug) {
      project.slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    
    const index = (this.data.projects || []).findIndex(p => p.id === project.id);
    if (index >= 0) {
      this.data.projects[index] = { ...this.data.projects[index], ...project };
    } else {
      const newId = String((this.data.projects.length + 1)).padStart(2, '0');
      project.id = project.id || newId;
      project.projectNumber = project.projectNumber || `PROJECT ${project.id}`;
      this.data.projects.unshift(project);
    }
    this.saveData();
    return project;
  }

  deleteProject(id) {
    this.data.projects = (this.data.projects || []).filter(p => p.id !== id);
    this.saveData();
  }

  saveNote(note) {
    if (!note.slug) {
      note.slug = note.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    const index = (this.data.notes || []).findIndex(n => n.id === note.id);
    if (index >= 0) {
      this.data.notes[index] = { ...this.data.notes[index], ...note };
    } else {
      note.id = note.id || `note-${Date.now()}`;
      this.data.notes.unshift(note);
    }
    this.saveData();
    return note;
  }

  deleteNote(id) {
    this.data.notes = (this.data.notes || []).filter(n => n.id !== id);
    this.saveData();
  }

  saveResearchItem(type, item) {
    if (!this.data.research[type]) {
      this.data.research[type] = [];
    }
    const list = this.data.research[type];
    const index = list.findIndex(i => i.id === item.id);
    if (index >= 0) {
      list[index] = { ...list[index], ...item };
    } else {
      item.id = item.id || `${type}-${Date.now()}`;
      list.unshift(item);
    }
    this.saveData();
    return item;
  }

  deleteResearchItem(type, id) {
    if (this.data.research && this.data.research[type]) {
      this.data.research[type] = this.data.research[type].filter(i => i.id !== id);
      this.saveData();
    }
  }

  // Backup & Restore
  exportJson() {
    return JSON.stringify(this.data, null, 2);
  }

  importJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.projects && parsed.config) {
        this.data = parsed;
        this.saveData();
        return { success: true };
      }
      return { success: false, error: 'Invalid schema: missing projects or config.' };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
}

export const store = new PortfolioStore();
