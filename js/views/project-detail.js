/**
 * Project Detail / Case Study View
 * Deep-tech editorial presentation with comprehensive engineering narrative
 */

import { store } from '../store.js';
import { openModal } from '../components/modal.js';
import { showToast } from '../components/toast.js';

export function renderProjectDetail(slug) {
  const project = store.getProjectBySlug(slug);

  if (!project) {
    return `
      <div class="container section-spacing" style="text-align: center;">
        <span class="mono-label" style="color: var(--accent);">404 — NOT FOUND</span>
        <h1 style="margin: 1rem 0;">Project not found.</h1>
        <p style="margin-bottom: 2rem;">The project you are looking for might have been moved or renamed.</p>
        <a href="#/work" class="btn-primary">← Back to all projects</a>
      </div>
    `;
  }

  const allProjects = store.getProjects();
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return `
    <article class="project-case-study">
      <!-- 1. Header & Metadata -->
      <section class="project-detail-header">
        <div class="container">
          <a href="#/work" class="project-back-link">
            ← Back to all projects
          </a>

          <div class="project-meta-header" style="margin-bottom: 1rem;">
            <span class="mono-label" style="color: var(--accent);">${project.projectNumber}</span>
            <span style="color: var(--border-color);">·</span>
            <span class="mono-label">${project.category.toUpperCase()} / ${project.subcategory ? project.subcategory.toUpperCase() : ''}</span>
            <span style="color: var(--border-color);">·</span>
            <span class="mono-label">YEAR ${project.year}</span>
            <span style="color: var(--border-color);">·</span>
            <span class="status-indicator">
              <span class="status-dot ${project.statusType === 'active' ? 'active' : ''}"></span>
              ${project.status}
            </span>
          </div>

          <h1 class="project-detail-title">${project.title}</h1>

          ${project.leadQuote ? `
            <p class="project-lead-quote">
              "${project.leadQuote}"
            </p>
          ` : ''}

          <!-- Hero Image -->
          <div class="project-hero-media">
            <img src="${project.heroImage}" alt="${project.title} Hardware Prototype" id="hero-img-zoom" style="cursor: zoom-in;" />
          </div>
        </div>
      </section>

      <!-- 2. Main Narrative & Specs Layout -->
      <section class="container">
        <div class="case-study-layout">
          <!-- Main Narrative Column -->
          <div class="story-content-col">
            ${project.story.problem ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">01 — THE PROBLEM</span>
                <h2 class="story-chapter-title">The challenge & constraints</h2>
                <div class="story-chapter-text">${project.story.problem}</div>
              </div>
            ` : ''}

            ${project.story.idea ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">02 — THE IDEA</span>
                <h2 class="story-chapter-title">Initial concept & architecture</h2>
                <div class="story-chapter-text">${project.story.idea}</div>
              </div>
            ` : ''}

            ${project.story.engineering ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">03 — ENGINEERING</span>
                <h2 class="story-chapter-title">System mechanics & kinematics</h2>
                <div class="story-chapter-text">${project.story.engineering}</div>
              </div>
            ` : ''}

            ${project.story.design ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">04 — DESIGN & CAD</span>
                <h2 class="story-chapter-title">Materials, tolerance & CAD modeling</h2>
                <div class="story-chapter-text">${project.story.design}</div>
              </div>
            ` : ''}

            ${project.story.building ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">05 — BUILDING & FABRICATION</span>
                <h2 class="story-chapter-title">Machining, assembly & firmware</h2>
                <div class="story-chapter-text">${project.story.building}</div>
              </div>
            ` : ''}

            ${project.story.testing ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">06 — EXPERIMENTAL TESTING</span>
                <h2 class="story-chapter-title">Telemetry, calibration & data results</h2>
                <div class="story-chapter-text">${project.story.testing}</div>
              </div>
            ` : ''}

            ${project.story.whatFailed ? `
              <div class="story-chapter" style="background: rgba(194, 65, 12, 0.03); padding: 2rem; border-radius: var(--radius-sm); border: 1px solid rgba(194, 65, 12, 0.15);">
                <span class="mono-label" style="color: var(--accent);">07 — WHAT FAILED</span>
                <h2 class="story-chapter-title" style="color: var(--accent);">Failure modes & unexpected physics</h2>
                <div class="story-chapter-text">${project.story.whatFailed}</div>
              </div>
            ` : ''}

            ${project.story.whatChanged ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">08 — WHAT CHANGED</span>
                <h2 class="story-chapter-title">Design iterations & solutions</h2>
                <div class="story-chapter-text">${project.story.whatChanged}</div>
              </div>
            ` : ''}

            ${project.story.currentStatus ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">09 — CURRENT STATUS</span>
                <h2 class="story-chapter-title">Where the system stands</h2>
                <div class="story-chapter-text">${project.story.currentStatus}</div>
              </div>
            ` : ''}

            ${project.story.whatsNext ? `
              <div class="story-chapter">
                <span class="mono-label" style="color: var(--accent);">10 — WHAT'S NEXT</span>
                <h2 class="story-chapter-title">Upcoming roadmap & flight prep</h2>
                <div class="story-chapter-text">${project.story.whatsNext}</div>
              </div>
            ` : ''}
          </div>

          <!-- Specs Sidebar Column -->
          <aside class="specs-sidebar-col">
            <div class="specs-card glass-panel">
              <h3 class="specs-title">Technical Specifications</h3>
              <div class="specs-list">
                ${(project.specs || []).map(spec => `
                  <div class="spec-item">
                    <span class="spec-label">${spec.label}</span>
                    <span class="spec-val">${spec.value}</span>
                  </div>
                `).join('')}
              </div>

              <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
                <span class="spec-label">TAGS</span>
                <div class="project-tags-row" style="margin-top: 0.5rem;">
                  ${(project.tags || []).map(t => `<span class="mono-tag">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <!-- 3. Editorial Image Gallery -->
        ${project.gallery && project.gallery.length > 0 ? `
          <div style="margin: 5rem 0 3rem 0;">
            <span class="mono-label">PHOTOGRAPHY ARCHIVE</span>
            <h2 style="font-size: 2.2rem; margin: 0.5rem 0 2rem 0;">Hardware close-ups & testbench</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem;">
              ${project.gallery.map(img => `
                <figure style="margin: 0;">
                  <div class="project-img-frame" style="cursor: zoom-in;" data-img-zoom="${img.url}">
                    <img src="${img.url}" alt="${img.caption}" loading="lazy" />
                  </div>
                  <figcaption style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem;">
                    ${img.caption}
                  </figcaption>
                </figure>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 4. Next Project Footer Navigation -->
        <div style="margin: 6rem 0 2rem 0; padding-top: 3rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;">
          <a href="#/work" class="link-arrow">
            ← All projects
          </a>

          ${nextProject ? `
            <a href="#/work/${nextProject.slug}" style="text-align: right; display: flex; flex-direction: column; gap: 0.25rem;">
              <span class="mono-label">NEXT PROJECT →</span>
              <span style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--text-primary);">
                ${nextProject.title}
              </span>
            </a>
          ` : ''}
        </div>
      </section>
    </article>
  `;
}

export function initProjectDetailEvents() {
  // Image zoom handler
  document.querySelectorAll('[data-img-zoom], #hero-img-zoom').forEach(el => {
    el.addEventListener('click', (e) => {
      const src = el.getAttribute('data-img-zoom') || el.src;
      openModal({
        content: `
          <div style="text-align: center;">
            <img src="${src}" style="max-height: 80vh; max-width: 100%; border-radius: 6px; box-shadow: var(--shadow-lg);" />
          </div>
        `,
        maxWidth: '900px'
      });
    });
  });
}
