/**
 * Note Detail View
 * Full single note entry from the workbench journal
 */

import { store } from '../store.js';

export function renderNoteDetail(slug) {
  const note = store.getNoteBySlug(slug);

  if (!note) {
    return `
      <div class="container section-spacing" style="text-align: center;">
        <span class="mono-label" style="color: var(--accent);">404 — NOT FOUND</span>
        <h1 style="margin: 1rem 0;">Note entry not found.</h1>
        <a href="#/notes" class="btn-primary">← Back to workbench notes</a>
      </div>
    `;
  }

  return `
    <article class="container-text section-spacing">
      <a href="#/notes" class="project-back-link">
        ← Back to workbench notes
      </a>

      <div style="display: flex; gap: 1rem; align-items: center; margin: 1.5rem 0 1rem 0;">
        <span class="mono-label" style="color: var(--accent);">${note.category}</span>
        <span style="color: var(--border-color);">·</span>
        <span class="mono-label">${note.date}</span>
        <span style="color: var(--border-color);">·</span>
        <span class="mono-label">${note.readTime || '3 min read'}</span>
      </div>

      <h1 style="font-size: clamp(2.4rem, 4.5vw, 3.8rem); line-height: 1.15; margin-bottom: 2rem;">
        ${note.title}
      </h1>

      <div class="glass-panel" style="padding: 1.5rem 2rem; margin-bottom: 3rem; border-left: 3px solid var(--accent);">
        <p style="font-style: italic; font-size: 1.1rem; color: var(--text-primary); margin: 0;">
          "${note.summary}"
        </p>
      </div>

      <div class="note-content-body">
        ${note.content}
      </div>

      <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div class="project-tags-row">
          ${(note.tags || []).map(t => `<span class="mono-tag">${t}</span>`).join('')}
        </div>

        <a href="#/notes" class="link-arrow" style="font-weight: 600;">
          ← Back to all notes
        </a>
      </div>
    </article>
  `;
}
