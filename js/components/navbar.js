/**
 * Navigation Bar Component
 * Sticky frosted glassmorphic navigation bar with active route indicators
 */

import { store } from '../store.js';

export function renderNavbar(currentPath) {
  const config = store.getConfig();
  const isBackstage = currentPath.startsWith('/backstage');

  // Determine active states
  const isWork = currentPath.startsWith('/work');
  const isResearch = currentPath.startsWith('/research');
  const isNotes = currentPath.startsWith('/notes');
  const isAbout = currentPath.startsWith('/about');
  const isResume = currentPath.startsWith('/resume');
  const isContact = currentPath.startsWith('/contact');

  return `
    <header class="site-header" id="site-header">
      <div class="nav-container">
        <a href="#/" class="nav-brand" aria-label="Hardik Raut Home">
          <span class="nav-brand-title">${config.name.toUpperCase()}</span>
          <span class="nav-brand-subtitle">${config.title.toUpperCase()}</span>
        </a>

        <ul class="nav-links">
          <li class="nav-item">
            <a href="#/work" class="${isWork ? 'active' : ''}">Work</a>
          </li>
          <li class="nav-item">
            <a href="#/research" class="${isResearch ? 'active' : ''}">Research</a>
          </li>
          <li class="nav-item">
            <a href="#/notes" class="${isNotes ? 'active' : ''}">Notes</a>
          </li>
          <li class="nav-item">
            <a href="#/about" class="${isAbout ? 'active' : ''}">About</a>
          </li>
          <li class="nav-item">
            <a href="#/resume" class="${isResume ? 'active' : ''}">Resume</a>
          </li>
          ${isBackstage ? `
            <li class="nav-item">
              <a href="#/backstage" class="active" style="color: var(--accent);">Backstage</a>
            </li>
          ` : ''}
        </ul>

        <div style="display: flex; align-items: center; gap: 1rem;">
          <a href="#/contact" class="nav-contact-btn ${isContact ? 'active' : ''}">
            Contact <span>→</span>
          </a>
          <button class="mobile-nav-toggle" id="mobile-menu-btn" aria-label="Toggle Navigation Menu">
            Menu
          </button>
        </div>
      </div>

      <!-- Mobile Slide-Down Menu Overlay -->
      <div class="mobile-menu-overlay" id="mobile-nav-menu">
        <a href="#/work" class="mobile-nav-link">Work</a>
        <a href="#/research" class="mobile-nav-link">Research</a>
        <a href="#/notes" class="mobile-nav-link">Notes</a>
        <a href="#/about" class="mobile-nav-link">About</a>
        <a href="#/resume" class="mobile-nav-link">Resume</a>
        <a href="#/contact" class="mobile-nav-link">Contact →</a>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-nav-menu');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      toggleBtn.textContent = isOpen ? 'Close' : 'Menu';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggleBtn.textContent = 'Menu';
      });
    });
  }
}
