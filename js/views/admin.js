/**
 * Admin CMS Portal View
 * Lightweight, private, fully functional CMS with live local storage and JSON backup
 */

import { store } from '../store.js';
import { showToast } from '../components/toast.js';
import { openModal, closeModal } from '../components/modal.js';

let activeTab = 'projects';
let editingProjectId = null;

export function renderAdmin() {
  if (!store.isAuthenticated()) {
    return renderLogin();
  }

  const config = store.getConfig();
  const projects = store.getProjects();
  const research = store.getResearch();
  const notes = store.getNotes();

  return `
    <div class="admin-wrapper container">
      <!-- Admin Header -->
      <div class="admin-header">
        <div class="admin-title-group">
          <span class="mono-label" style="color: var(--accent);">PORTFOLIO CMS · AUTHORIZED ACCESS</span>
          <h2>Studio Dashboard</h2>
          <p>Logged in as administrator · Live LocalStorage & Export Engine</p>
        </div>

        <div style="display: flex; gap: 1rem; align-items: center;">
          <a href="#/" class="btn-secondary" style="font-size: 0.85rem;">
            View Public Site ↗
          </a>
          <button class="btn-primary" id="admin-logout-btn" style="background: #333; font-size: 0.85rem;">
            Log out 🔒
          </button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="admin-stats-grid">
        <div class="glass-panel stat-card">
          <span class="stat-num">${projects.length}</span>
          <span class="stat-label">Total Projects</span>
        </div>
        <div class="glass-panel stat-card">
          <span class="stat-num">${(research.publications || []).length + (research.patents || []).length}</span>
          <span class="stat-label">Papers & Patents</span>
        </div>
        <div class="glass-panel stat-card">
          <span class="stat-num">${notes.length}</span>
          <span class="stat-label">Workbench Notes</span>
        </div>
        <div class="glass-panel stat-card">
          <span class="stat-num">${(research.conferences || []).length}</span>
          <span class="stat-label">Conferences</span>
        </div>
      </div>

      <!-- Admin Tabs -->
      <div class="admin-tabs">
        <button class="admin-tab-btn ${activeTab === 'projects' ? 'active' : ''}" data-tab="projects">
          Projects (${projects.length})
        </button>
        <button class="admin-tab-btn ${activeTab === 'research' ? 'active' : ''}" data-tab="research">
          Research & Patents
        </button>
        <button class="admin-tab-btn ${activeTab === 'notes' ? 'active' : ''}" data-tab="notes">
          Workbench Notes (${notes.length})
        </button>
        <button class="admin-tab-btn ${activeTab === 'settings' ? 'active' : ''}" data-tab="settings">
          Site Settings
        </button>
        <button class="admin-tab-btn ${activeTab === 'backup' ? 'active' : ''}" data-tab="backup">
          Backup / Export JSON
        </button>
      </div>

      <!-- Tab Content Area -->
      <div id="admin-tab-content">
        ${renderTabContent(activeTab)}
      </div>
    </div>
  `;
}

function renderLogin() {
  return `
    <div class="container">
      <div class="glass-panel admin-login-box">
        <span class="mono-label" style="color: var(--accent);">RESTRICTED AREA</span>
        <h3>Admin Portal</h3>
        <p>Enter the private admin passcode to manage portfolio content, research logs, and site settings.</p>

        <form class="admin-login-form" id="admin-login-form">
          <div class="form-group" style="text-align: left;">
            <label for="admin-pass" class="form-label">Passcode</label>
            <input type="password" id="admin-pass" class="form-input" placeholder="Enter admin passcode (e.g. builder2026)" required autofocus />
          </div>

          <button type="submit" class="btn-primary" style="padding: 0.85rem;">
            Authenticate <span>→</span>
          </button>
        </form>
        <p style="margin-top: 1.5rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">Default development passcode: builder2026</p>
      </div>
    </div>
  `;
}

function renderTabContent(tab) {
  if (tab === 'projects') return renderProjectsTab();
  if (tab === 'research') return renderResearchTab();
  if (tab === 'notes') return renderNotesTab();
  if (tab === 'settings') return renderSettingsTab();
  if (tab === 'backup') return renderBackupTab();
  return '';
}

function renderProjectsTab() {
  const projects = store.getProjects();

  return `
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.6rem;">Manage Projects</h3>
        <button class="btn-primary" id="btn-create-project" style="font-size: 0.88rem;">
          + New Project
        </button>
      </div>

      <div class="admin-list-container">
        ${projects.map(p => `
          <div class="admin-item-row">
            <div class="admin-item-meta">
              <img src="${p.heroImage}" alt="${p.title}" class="admin-item-thumb" onerror="this.src='assets/images/hero_boom.jpg'" />
              <div class="admin-item-info">
                <h4>${p.title}</h4>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                  <span class="mono-label" style="color: var(--accent);">${p.projectNumber}</span>
                  <span style="color: var(--border-color);">·</span>
                  <span class="mono-label">${p.category}</span>
                  <span style="color: var(--border-color);">·</span>
                  <span class="mono-label">${p.status}</span>
                </div>
              </div>
            </div>

            <div class="admin-item-actions">
              <a href="#/work/${p.slug}" target="_blank" class="btn-secondary btn-small">
                Preview ↗
              </a>
              <button class="btn-secondary btn-small btn-edit-project" data-id="${p.id}">
                Edit
              </button>
              <button class="btn-small btn-danger btn-delete-project" data-id="${p.id}">
                Delete
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderResearchTab() {
  const research = store.getResearch();

  return `
    <div>
      <div style="margin-bottom: 3rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.5rem;">Publications & Manuscripts</h3>
          <button class="btn-secondary btn-small" id="btn-add-pub">+ Add Publication</button>
        </div>

        <div class="admin-list-container">
          ${(research.publications || []).map(pub => `
            <div class="admin-item-row">
              <div>
                <h4 style="font-size: 1.1rem;">${pub.title}</h4>
                <span class="mono-label">${pub.venue} · ${pub.year} · ${pub.status}</span>
              </div>
              <button class="btn-small btn-danger btn-del-research" data-type="publications" data-id="${pub.id}">Delete</button>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.5rem;">Patents in Progress</h3>
          <button class="btn-secondary btn-small" id="btn-add-pat">+ Add Patent</button>
        </div>

        <div class="admin-list-container">
          ${(research.patents || []).map(pat => `
            <div class="admin-item-row">
              <div>
                <h4 style="font-size: 1.1rem;">${pat.title}</h4>
                <span class="mono-label">${pat.status} · ${pat.year}</span>
              </div>
              <button class="btn-small btn-danger btn-del-research" data-type="patents" data-id="${pat.id}">Delete</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderNotesTab() {
  const notes = store.getNotes();

  return `
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.6rem;">Workbench Notes & Field Logs</h3>
        <button class="btn-primary" id="btn-create-note" style="font-size: 0.88rem;">
          + New Note Entry
        </button>
      </div>

      <div class="admin-list-container">
        ${notes.map(n => `
          <div class="admin-item-row">
            <div class="admin-item-info">
              <h4>${n.title}</h4>
              <span class="mono-label" style="color: var(--accent);">${n.category}</span>
              <span style="color: var(--border-color);">·</span>
              <span class="mono-label">${n.date}</span>
            </div>

            <div class="admin-item-actions">
              <a href="#/notes/${n.slug}" target="_blank" class="btn-secondary btn-small">Preview ↗</a>
              <button class="btn-small btn-danger btn-delete-note" data-id="${n.id}">Delete</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSettingsTab() {
  const config = store.getConfig();

  return `
    <div class="glass-panel admin-card-section" style="max-width: 800px;">
      <h3 class="admin-section-title">Site Profile & Live Broadcast</h3>

      <form id="admin-settings-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="admin-field-row">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" id="cfg-name" class="form-input" value="${config.name}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Professional Title</label>
            <input type="text" id="cfg-title" class="form-input" value="${config.title}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Short Tagline / Bio</label>
          <textarea id="cfg-bio" class="form-input" rows="3">${config.bio}</textarea>
        </div>

        <div class="admin-field-row">
          <div class="form-group">
            <label class="form-label">Primary Email</label>
            <input type="email" id="cfg-email" class="form-input" value="${config.email}" required />
          </div>
          <div class="form-group">
            <label class="form-label">LinkedIn URL</label>
            <input type="url" id="cfg-linkedin" class="form-input" value="${config.linkedin}" required />
          </div>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; margin-top: 0.5rem;">
          <h4 style="font-size: 1.2rem; margin-bottom: 1rem;">Currently On The Workbench (Live Broadcast)</h4>
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label">Status Broadcast Text</label>
            <input type="text" id="cfg-building" class="form-input" value="${config.currentlyBuilding}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Updated Month / Year</label>
            <input type="text" id="cfg-building-date" class="form-input" value="${config.currentlyBuildingDate}" required />
          </div>
        </div>

        <button type="submit" class="btn-primary" style="margin-top: 1rem; align-self: flex-start; padding: 0.8rem 2rem;">
          Save Site Settings ✓
        </button>
      </form>
    </div>
  `;
}

function renderBackupTab() {
  const json = store.exportJson();

  return `
    <div class="glass-panel admin-card-section" style="max-width: 800px;">
      <h3 class="admin-section-title">Data Backup & Sync</h3>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">
        You can export the entire database as a JSON string to keep local backups or paste updated JSON to restore content instantly.
      </p>

      <div class="form-group" style="margin-bottom: 1.5rem;">
        <label class="form-label">Current JSON Dataset</label>
        <textarea class="json-box" id="json-export-area">${json}</textarea>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button class="btn-primary" id="btn-copy-json">
          Copy JSON to Clipboard
        </button>
        <button class="btn-secondary" id="btn-import-json">
          Apply / Import JSON Updates
        </button>
        <button class="btn-small btn-danger" id="btn-reset-defaults" style="margin-left: auto;">
          Reset to Factory Defaults
        </button>
      </div>
    </div>
  `;
}

export function initAdminEvents(rerender) {
  // Login form handler
  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = document.getElementById('admin-pass').value;
      if (store.login(pass)) {
        showToast('Authentication successful. Welcome to Studio CMS.', 'success');
        rerender();
      } else {
        showToast('Invalid passcode. Try "builder2026"', 'error');
      }
    });
    return;
  }

  // Logout
  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      store.logout();
      showToast('Logged out of admin session.', 'info');
      rerender();
    });
  }

  // Tab switching
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      rerender();
    });
  });

  // Settings Save
  const settingsForm = document.getElementById('admin-settings-form');
  if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      store.updateConfig({
        name: document.getElementById('cfg-name').value,
        title: document.getElementById('cfg-title').value,
        bio: document.getElementById('cfg-bio').value,
        email: document.getElementById('cfg-email').value,
        linkedin: document.getElementById('cfg-linkedin').value,
        currentlyBuilding: document.getElementById('cfg-building').value,
        currentlyBuildingDate: document.getElementById('cfg-building-date').value,
      });
      showToast('Site settings updated and saved.', 'success');
    });
  }

  // Delete project
  document.querySelectorAll('.btn-delete-project').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this project?')) {
        store.deleteProject(btn.dataset.id);
        showToast('Project deleted.', 'info');
        rerender();
      }
    });
  });

  // Delete note
  document.querySelectorAll('.btn-delete-note').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Delete this note entry?')) {
        store.deleteNote(btn.dataset.id);
        showToast('Note deleted.', 'info');
        rerender();
      }
    });
  });

  // Delete research item
  document.querySelectorAll('.btn-del-research').forEach(btn => {
    btn.addEventListener('click', () => {
      store.deleteResearchItem(btn.dataset.type, btn.dataset.id);
      showToast('Item deleted.', 'info');
      rerender();
    });
  });

  // Project Editor Modal (New / Edit)
  const createProjBtn = document.getElementById('btn-create-project');
  if (createProjBtn) {
    createProjBtn.addEventListener('click', () => {
      openProjectEditor(null, rerender);
    });
  }

  document.querySelectorAll('.btn-edit-project').forEach(btn => {
    btn.addEventListener('click', () => {
      const proj = store.getProjectBySlug(btn.dataset.id);
      if (proj) openProjectEditor(proj, rerender);
    });
  });

  // Note Editor Modal
  const createNoteBtn = document.getElementById('btn-create-note');
  if (createNoteBtn) {
    createNoteBtn.addEventListener('click', () => {
      openNoteEditor(null, rerender);
    });
  }

  // Backup handlers
  const copyJsonBtn = document.getElementById('btn-copy-json');
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener('click', () => {
      const txt = document.getElementById('json-export-area').value;
      navigator.clipboard?.writeText(txt);
      showToast('JSON copied to clipboard.', 'success');
    });
  }

  const importJsonBtn = document.getElementById('btn-import-json');
  if (importJsonBtn) {
    importJsonBtn.addEventListener('click', () => {
      const txt = document.getElementById('json-export-area').value;
      const res = store.importJson(txt);
      if (res.success) {
        showToast('Portfolio database successfully updated from JSON.', 'success');
        rerender();
      } else {
        showToast(`Import failed: ${res.error}`, 'error');
      }
    });
  }

  const resetBtn = document.getElementById('btn-reset-defaults');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset entire database back to default initial state?')) {
        store.resetToDefaults();
        showToast('Reset to default dataset.', 'info');
        rerender();
      }
    });
  }
}

function openProjectEditor(project, rerender) {
  const isEdit = !!project;
  const p = project || {
    id: '',
    title: '',
    slug: '',
    projectNumber: 'PROJECT NEW',
    category: 'Space Systems',
    subcategory: 'Mechanisms',
    year: '2026',
    status: 'In Development',
    statusType: 'active',
    featured: true,
    heroImage: 'assets/images/hero_boom.jpg',
    shortDescription: '',
    leadQuote: '',
    story: {
      problem: '',
      idea: '',
      engineering: '',
      design: '',
      building: '',
      testing: '',
      whatFailed: '',
      whatChanged: '',
      currentStatus: '',
      whatsNext: ''
    },
    specs: [],
    tags: []
  };

  openModal({
    title: isEdit ? `Edit: ${p.title}` : 'Create New Project',
    maxWidth: '780px',
    content: `
      <form id="project-editor-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div class="admin-field-row">
          <div class="form-group">
            <label class="form-label">Project Title</label>
            <input type="text" id="pe-title" class="form-input" value="${p.title}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Project Number</label>
            <input type="text" id="pe-num" class="form-input" value="${p.projectNumber}" required />
          </div>
        </div>

        <div class="admin-field-row">
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="pe-category" class="form-input">
              <option value="Space Systems" ${p.category === 'Space Systems' ? 'selected' : ''}>Space Systems</option>
              <option value="Propulsion" ${p.category === 'Propulsion' ? 'selected' : ''}>Propulsion</option>
              <option value="Robotics" ${p.category === 'Robotics' ? 'selected' : ''}>Robotics</option>
              <option value="Electronics" ${p.category === 'Electronics' ? 'selected' : ''}>Electronics</option>
              <option value="Manufacturing" ${p.category === 'Manufacturing' ? 'selected' : ''}>Manufacturing</option>
              <option value="Physics" ${p.category === 'Physics' ? 'selected' : ''}>Physics</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Subcategory / Area</label>
            <input type="text" id="pe-subcat" class="form-input" value="${p.subcategory || ''}" />
          </div>
        </div>

        <div class="admin-field-row">
          <div class="form-group">
            <label class="form-label">Hero Image Path</label>
            <input type="text" id="pe-image" class="form-input" value="${p.heroImage}" />
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <input type="text" id="pe-status" class="form-input" value="${p.status}" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Lead Quote</label>
          <input type="text" id="pe-quote" class="form-input" value="${p.leadQuote || ''}" />
        </div>

        <div class="form-group">
          <label class="form-label">Short Description</label>
          <textarea id="pe-desc" class="form-input" rows="2">${p.shortDescription}</textarea>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
          <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem;">Case Study Narrative Blocks</h4>
          
          <div class="form-group" style="margin-bottom: 0.75rem;">
            <label class="form-label">The Problem</label>
            <textarea id="pe-problem" class="form-input" rows="2">${p.story?.problem || ''}</textarea>
          </div>

          <div class="form-group" style="margin-bottom: 0.75rem;">
            <label class="form-label">The Idea</label>
            <textarea id="pe-idea" class="form-input" rows="2">${p.story?.idea || ''}</textarea>
          </div>

          <div class="form-group" style="margin-bottom: 0.75rem;">
            <label class="form-label">Engineering Architecture</label>
            <textarea id="pe-eng" class="form-input" rows="2">${p.story?.engineering || ''}</textarea>
          </div>

          <div class="form-group" style="margin-bottom: 0.75rem;">
            <label class="form-label">What Failed (Lessons Learned)</label>
            <textarea id="pe-failed" class="form-input" rows="2">${p.story?.whatFailed || ''}</textarea>
          </div>

          <div class="form-group">
            <label class="form-label">What Changed (Design Iterations)</label>
            <textarea id="pe-changed" class="form-input" rows="2">${p.story?.whatChanged || ''}</textarea>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
          <button type="button" class="btn-secondary" onclick="document.getElementById('active-modal').remove()">Cancel</button>
          <button type="submit" class="btn-primary">Save Project ✓</button>
        </div>
      </form>
    `
  });

  const form = document.getElementById('project-editor-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const updated = {
        ...p,
        title: document.getElementById('pe-title').value,
        projectNumber: document.getElementById('pe-num').value,
        category: document.getElementById('pe-category').value,
        subcategory: document.getElementById('pe-subcat').value,
        heroImage: document.getElementById('pe-image').value,
        status: document.getElementById('pe-status').value,
        leadQuote: document.getElementById('pe-quote').value,
        shortDescription: document.getElementById('pe-desc').value,
        story: {
          ...(p.story || {}),
          problem: document.getElementById('pe-problem').value,
          idea: document.getElementById('pe-idea').value,
          engineering: document.getElementById('pe-eng').value,
          whatFailed: document.getElementById('pe-failed').value,
          whatChanged: document.getElementById('pe-changed').value,
        }
      };

      store.saveProject(updated);
      closeModal();
      showToast('Project saved successfully!', 'success');
      rerender();
    });
  }
}

function openNoteEditor(note, rerender) {
  const isEdit = !!note;
  const n = note || {
    id: '',
    title: '',
    slug: '',
    category: 'Space Mechanisms',
    date: 'September 2026',
    readTime: '3 min read',
    summary: '',
    content: '',
    tags: []
  };

  openModal({
    title: isEdit ? `Edit Note: ${n.title}` : 'Create Workbench Note',
    maxWidth: '680px',
    content: `
      <form id="note-editor-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div class="form-group">
          <label class="form-label">Note Title</label>
          <input type="text" id="ne-title" class="form-input" value="${n.title}" required />
        </div>

        <div class="admin-field-row">
          <div class="form-group">
            <label class="form-label">Category</label>
            <input type="text" id="ne-category" class="form-input" value="${n.category}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Date String</label>
            <input type="text" id="ne-date" class="form-input" value="${n.date}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Executive Summary</label>
          <textarea id="ne-summary" class="form-input" rows="2" required>${n.summary}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label">Full Note Content</label>
          <textarea id="ne-content" class="form-input" rows="8" required>${n.content}</textarea>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
          <button type="button" class="btn-secondary" onclick="document.getElementById('active-modal').remove()">Cancel</button>
          <button type="submit" class="btn-primary">Save Note ✓</button>
        </div>
      </form>
    `
  });

  const form = document.getElementById('note-editor-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const updated = {
        ...n,
        title: document.getElementById('ne-title').value,
        category: document.getElementById('ne-category').value,
        date: document.getElementById('ne-date').value,
        summary: document.getElementById('ne-summary').value,
        content: document.getElementById('ne-content').value,
      };

      store.saveNote(updated);
      closeModal();
      showToast('Note saved successfully!', 'success');
      rerender();
    });
  }
}
