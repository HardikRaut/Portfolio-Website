/**
 * Notes from the Workbench Index View
 * Ongoing engineering logbook, lab observations, and experimental notes
 */

import { store } from '../store.js';

let currentCategory = 'All';

export function renderNotes() {
  const notes = store.getNotes(currentCategory);
  const categories = ['All', 'Space Mechanisms', 'Propulsion', 'Manufacturing', 'Electronics'];

  return `
    <section class="section-spacing">
      <div class="container">
        <!-- Header -->
        <div style="max-width: 780px; margin-bottom: 2rem;">
          <span class="mono-label" style="color: var(--accent);">LAB LOGBOOK</span>
          <h1 style="font-size: clamp(2.8rem, 5vw, 4.5rem); margin: 0.5rem 0 1rem 0;">Notes from the workbench.</h1>
          <p style="font-size: 1.18rem; line-height: 1.7;">
            An ongoing collection of hardware experiments, mathematical derivations, failure logs, and technical observations from the shop floor.
          </p>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar glass-panel">
          <div class="filter-categories" id="notes-filter-categories">
            ${categories.map(cat => `
              <button class="filter-btn ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Notes Grid -->
        <div class="notes-grid">
          ${notes.map(note => `
            <article class="glass-panel note-card">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                  <span class="mono-label" style="color: var(--accent);">${note.category}</span>
                  <span class="mono-label">${note.date}</span>
                </div>

                <h2 class="note-card-title">
                  <a href="#/notes/${note.slug}">${note.title}</a>
                </h2>

                <p class="note-card-excerpt">
                  ${note.summary}
                </p>

                <div class="project-tags-row" style="margin-bottom: 1.5rem;">
                  ${(note.tags || []).map(t => `<span class="mono-tag">${t}</span>`).join('')}
                </div>
              </div>

              <div>
                <a href="#/notes/${note.slug}" class="link-arrow" style="font-weight: 600;">
                  Read workbench entry <span class="arrow">→</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initNotesEvents(rerender) {
  const filterContainer = document.getElementById('notes-filter-categories');
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (btn) {
        currentCategory = btn.dataset.category;
        rerender();
      }
    });
  }
}
