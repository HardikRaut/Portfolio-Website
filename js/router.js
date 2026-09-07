/**
 * Client-Side Router
 * Hash-based single page application routing with dynamic view rendering & SEO titles
 */

import { renderNavbar, initNavbarEvents } from './components/navbar.js';
import { renderFooter } from './components/footer.js';

import { renderHome } from './views/home.js';
import { renderWork, initWorkEvents } from './views/work.js';
import { renderProjectDetail, initProjectDetailEvents } from './views/project-detail.js';
import { renderResearch, initResearchEvents } from './views/research.js';
import { renderNotes, initNotesEvents } from './views/notes.js';
import { renderNoteDetail } from './views/note-detail.js';
import { renderAbout } from './views/about.js';
import { renderResume, initResumeEvents } from './views/resume.js';
import { renderContact, initContactEvents } from './views/contact.js';
import { renderAdmin, initAdminEvents } from './views/admin.js';
import { renderNotFound } from './views/not-found.js';

import { store } from './store.js';

class Router {
  constructor() {
    this.appEl = document.getElementById('app');
    this.currentPath = '';
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
    window.addEventListener('portfolio:data-changed', () => this.handleRoute(false));
  }

  handleRoute(scrollToTop = true) {
    let hash = window.location.hash.slice(1);
    if (!hash || hash === '') hash = '/';

    this.currentPath = hash;
    const config = store.getConfig();

    let viewHtml = '';
    let pageTitle = `${config.name} — ${config.title}`;
    let showFooterCTA = true;
    let postRenderInit = () => {};

    // Route matching
    if (hash === '/' || hash === '') {
      viewHtml = renderHome();
      pageTitle = `${config.name} — Independent Deep-Tech Builder`;
    } else if (hash === '/work') {
      viewHtml = renderWork();
      pageTitle = `Selected Work — ${config.name}`;
      postRenderInit = () => initWorkEvents(() => this.handleRoute(false));
    } else if (hash.startsWith('/work/')) {
      const slug = hash.replace('/work/', '');
      viewHtml = renderProjectDetail(slug);
      const proj = store.getProjectBySlug(slug);
      if (proj) pageTitle = `${proj.title} — ${config.name}`;
      showFooterCTA = false;
      postRenderInit = () => initProjectDetailEvents();
    } else if (hash === '/research') {
      viewHtml = renderResearch();
      pageTitle = `Research & Patents — ${config.name}`;
      postRenderInit = () => initResearchEvents();
    } else if (hash === '/notes') {
      viewHtml = renderNotes();
      pageTitle = `Notes from the Workbench — ${config.name}`;
      postRenderInit = () => initNotesEvents(() => this.handleRoute(false));
    } else if (hash.startsWith('/notes/')) {
      const slug = hash.replace('/notes/', '');
      viewHtml = renderNoteDetail(slug);
      const note = store.getNoteBySlug(slug);
      if (note) pageTitle = `${note.title} — ${config.name}`;
    } else if (hash === '/about') {
      viewHtml = renderAbout();
      pageTitle = `About & Journey — ${config.name}`;
    } else if (hash === '/resume') {
      viewHtml = renderResume();
      pageTitle = `Curriculum Vitae — ${config.name}`;
      showFooterCTA = false;
      postRenderInit = () => initResumeEvents();
    } else if (hash === '/contact') {
      viewHtml = renderContact();
      pageTitle = `Contact & Transmission — ${config.name}`;
      showFooterCTA = false;
      postRenderInit = () => initContactEvents();
    } else if (hash === '/admin' || hash.startsWith('/admin/')) {
      viewHtml = renderAdmin();
      pageTitle = `Studio Admin CMS — ${config.name}`;
      showFooterCTA = false;
      postRenderInit = () => initAdminEvents(() => this.handleRoute(false));
    } else {
      viewHtml = renderNotFound();
      pageTitle = `404 Not Found — ${config.name}`;
    }

    document.title = pageTitle;

    // Render Master Layout
    this.appEl.innerHTML = `
      ${renderNavbar(this.currentPath)}
      <main id="main-content" tabindex="-1">
        ${viewHtml}
      </main>
      ${renderFooter(showFooterCTA)}
    `;

    // Initialize Global Components & View specific handlers
    initNavbarEvents();
    postRenderInit();

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
}

export const router = new Router();
