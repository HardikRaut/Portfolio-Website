/**
 * Research & Writing View
 * Publications, Manuscripts, Patents, and Conference Timeline
 */

import { store } from '../store.js';
import { showToast } from '../components/toast.js';

export function renderResearch() {
  const research = store.getResearch();

  return `
    <section class="section-spacing">
      <div class="container">
        <!-- Header -->
        <div style="max-width: 800px; margin-bottom: 4rem;">
          <span class="mono-label" style="color: var(--accent);">SCHOLARLY WORK & IP</span>
          <h1 style="font-size: clamp(2.8rem, 5vw, 4.5rem); margin: 0.5rem 0 1rem 0;">Research & writing</h1>
          <p style="font-size: 1.18rem; line-height: 1.7;">
            Alongside building hardware, I document the engineering questions, physical experiments and finite element models behind it.
          </p>
        </div>

        <div class="research-grid">
          <!-- 1. Publications & Manuscripts -->
          <div class="research-category-block">
            <span class="mono-label" style="color: var(--accent);">01 — PUBLICATIONS & MANUSCRIPTS</span>
            <h2 style="font-size: 2.2rem; margin: 0.5rem 0 2rem 0;">Technical papers</h2>

            <div style="display: flex; flex-direction: column; gap: 1.75rem;">
              ${(research.publications || []).map(pub => `
                <article class="glass-panel research-item-card">
                  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                    <span class="mono-label">${pub.venue} · ${pub.year}</span>
                    <span class="mono-tag" style="background: rgba(194, 65, 12, 0.08); color: var(--accent); font-weight: 600;">
                      ${pub.status}
                    </span>
                  </div>

                  <h3 class="research-item-title">${pub.title}</h3>
                  <p style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem;">
                    Authors: ${pub.authors}
                  </p>

                  <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem;">
                    ${pub.abstract}
                  </p>

                  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                      ${(pub.tags || []).map(t => `<span class="mono-tag">${t}</span>`).join('')}
                    </div>
                    <button class="btn-secondary req-manuscript-btn" data-title="${pub.title}" style="font-size: 0.85rem; padding: 0.4rem 0.9rem;">
                      Request Manuscript PDF ↓
                    </button>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>

          <!-- 2. Patents & Intellectual Property -->
          <div class="research-category-block">
            <span class="mono-label" style="color: var(--accent);">02 — PATENTS & INVENTIONS</span>
            <h2 style="font-size: 2.2rem; margin: 0.5rem 0 2rem 0;">Patents in progress</h2>

            <div style="display: flex; flex-direction: column; gap: 1.75rem;">
              ${(research.patents || []).map(pat => `
                <article class="glass-panel research-item-card">
                  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                    <span class="mono-label">${pat.year} · INTELLECTUAL PROPERTY</span>
                    <span class="status-indicator">
                      <span class="status-dot active"></span>
                      ${pat.status}
                    </span>
                  </div>

                  <h3 class="research-item-title" style="letter-spacing: 0.02em;">${pat.title}</h3>
                  
                  <p style="font-size: 0.92rem; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 0.75rem;">
                    Context: ${pat.context}
                  </p>

                  <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary);">
                    ${pat.summary}
                  </p>
                </article>
              `).join('')}
            </div>
          </div>

          <!-- 3. Conference Presentations Timeline -->
          <div class="research-category-block" style="border-bottom: none;">
            <span class="mono-label" style="color: var(--accent);">03 — CONFERENCES & SYMPOSIA</span>
            <h2 style="font-size: 2.2rem; margin: 0.5rem 0 2rem 0;">Presentations & panels</h2>

            <div class="timeline-list">
              ${(research.conferences || []).map(conf => `
                <div class="timeline-node">
                  <div class="timeline-year">${conf.year} · ${conf.location.toUpperCase()}</div>
                  <h3 class="timeline-title">${conf.title}</h3>
                  <p class="timeline-desc">${conf.topic}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initResearchEvents() {
  document.querySelectorAll('.req-manuscript-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title;
      showToast(`Manuscript request noted. Connecting to preprint draft...`, 'success');
    });
  });
}
