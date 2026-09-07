/**
 * Work / Projects Index View
 * Clean text category filters, live search, and full editorial magazine showcase
 */

import { store } from '../store.js';

let currentCategory = 'All';
let currentSearch = '';

export function renderWork() {
  const projects = store.getProjects(currentCategory, currentSearch);
  const categories = ['All', 'Space Systems', 'Propulsion', 'Robotics', 'Electronics', 'Manufacturing', 'Physics'];

  return `
    <section class="section-spacing">
      <div class="container">
        <!-- Header -->
        <div style="max-width: 780px; margin-bottom: 2rem;">
          <span class="mono-label" style="color: var(--accent);">PROJECT ARCHIVE</span>
          <h1 style="font-size: clamp(2.8rem, 5vw, 4.5rem); margin: 0.5rem 0 1rem 0;">Things I've built.</h1>
          <p style="font-size: 1.18rem; line-height: 1.7;">
            An archive of physical systems, space mechanisms, propulsion experiments, robotics, and custom tooling built through first-principles engineering and iterative testing.
          </p>
        </div>

        <!-- Filter & Search Bar (Glassmorphic) -->
        <div class="filter-bar glass-panel">
          <div class="filter-categories" id="work-filter-categories">
            ${categories.map(cat => `
              <button class="filter-btn ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input 
              type="text" 
              class="search-input" 
              id="work-search-input" 
              placeholder="Search projects, tags..." 
              value="${currentSearch}"
            />
          </div>
        </div>

        <!-- Project Results List -->
        ${projects.length === 0 ? `
          <div class="glass-panel" style="padding: 4rem 2rem; text-align: center; margin: 3rem 0;">
            <p style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 0.5rem;">No projects matched your criteria.</p>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Try clearing your search query or selecting 'All'.</p>
            <button class="btn-secondary" id="reset-filter-btn" style="margin-top: 1.5rem;">
              Reset Filters
            </button>
          </div>
        ` : `
          <div class="project-showcase-list" style="margin-top: 4rem;">
            ${projects.map((project, idx) => `
              <article class="editorial-project-item ${idx % 2 === 1 ? 'reverse' : ''}">
                <div class="project-media-col">
                  <a href="#/work/${project.slug}" class="project-img-frame" style="display: block;">
                    <img src="${project.heroImage}" alt="${project.title} Hardware Prototype" loading="lazy" />
                  </a>
                </div>

                <div class="project-info-col">
                  <div class="project-meta-header">
                    <span class="mono-label" style="color: var(--accent);">${project.projectNumber}</span>
                    <span style="color: var(--border-color);">·</span>
                    <span class="mono-label">${project.category.toUpperCase()} / ${project.subcategory ? project.subcategory.toUpperCase() : ''}</span>
                    <span style="color: var(--border-color);">·</span>
                    <span class="status-indicator">
                      <span class="status-dot ${project.statusType === 'active' ? 'active' : ''}"></span>
                      ${project.status}
                    </span>
                  </div>

                  <h2 class="project-item-title">
                    <a href="#/work/${project.slug}">${project.title}</a>
                  </h2>

                  <p class="project-item-desc">
                    ${project.shortDescription}
                  </p>

                  <div class="project-tags-row">
                    ${(project.tags || []).map(tag => `<span class="mono-tag">${tag}</span>`).join('')}
                  </div>

                  <div style="margin-top: 1rem;">
                    <a href="#/work/${project.slug}" class="link-arrow" style="font-weight: 600;">
                      Read case study <span class="arrow">→</span>
                    </a>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        `}
      </div>
    </section>
  `;
}

export function initWorkEvents(rerender) {
  const filterContainer = document.getElementById('work-filter-categories');
  const searchInput = document.getElementById('work-search-input');
  const resetBtn = document.getElementById('reset-filter-btn');

  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (btn) {
        currentCategory = btn.dataset.category;
        rerender();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      // Debounce or immediate rerender
      clearTimeout(window._searchTimer);
      window._searchTimer = setTimeout(() => {
        rerender();
      }, 200);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCategory = 'All';
      currentSearch = '';
      rerender();
    });
  }
}
