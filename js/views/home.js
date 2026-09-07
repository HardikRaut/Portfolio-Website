/**
 * Home Page View
 * High editorial aesthetic, spacious hero, magazine spreads, philosophy, and live data
 */

import { store } from '../store.js';

export function renderHome() {
  const config = store.getConfig();
  const featuredProjects = store.getFeaturedProjects();
  const notes = store.getNotes().slice(0, 2);
  const research = store.getResearch();

  return `
    <!-- 1. HERO SECTION -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <span class="mono-label hero-eyebrow" style="color: var(--accent);">
              ${config.name.toUpperCase()} — ${config.title.toUpperCase()}
            </span>
            <h1 class="hero-headline">
              I build machines for problems that don't have easy answers.
            </h1>
            <p class="hero-subtext">
              ${config.bio}
            </p>
            <div class="hero-actions">
              <a href="#/work" class="link-arrow" style="font-size: 1.1rem; font-weight: 600;">
                Explore the work <span class="arrow">→</span>
              </a>
              <span style="color: var(--border-color);">|</span>
              <a href="#/about" class="link-arrow" style="color: var(--text-secondary);">
                Read biography <span class="arrow">→</span>
              </a>
            </div>
          </div>

          <div class="hero-image-wrapper">
            <img src="assets/images/hero_boom.jpg" alt="CubeSat Deployable Boom Mechanism Hardware Prototype" loading="eager" />
            <div class="hero-image-caption">
              <span>DEPLOYABLE BOOM MECHANISM</span>
              <span>CSAT · REV 04</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. INTRODUCTION -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <span class="mono-label">01 — THE WORK</span>
          <h2 class="intro-heading">Engineering across disciplines.</h2>
          <p class="intro-text">
            My background is in manufacturing engineering, but the problems I am interested in rarely belong to a single discipline. I move between mechanical design, simulation, electronics, robotics, manufacturing and space systems depending on what needs to be built.
          </p>
          <div class="discipline-strip">
            <span>SPACE SYSTEMS</span>
            <span>PROPULSION</span>
            <span>ROBOTICS</span>
            <span>ELECTRONICS</span>
            <span>MANUFACTURING</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. SELECTED WORK (EDITORIAL MAGAZINE SPREADS) -->
    <section class="section-spacing">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="mono-label">SELECTED WORK</span>
            <h2 style="font-size: clamp(2.4rem, 4vw, 3.4rem); margin-top: 0.3rem;">Physical systems & experiments</h2>
            <p style="margin-top: 0.5rem; font-size: 1.1rem;">A selection of mechanisms, propulsion setups and prototypes I've built or explored.</p>
          </div>
          <a href="#/work" class="link-arrow" style="font-weight: 600;">
            View all projects (${store.getProjects().length}) <span class="arrow">→</span>
          </a>
        </div>

        <div class="project-showcase-list">
          ${featuredProjects.map((project, idx) => `
            <article class="editorial-project-item ${idx % 2 === 1 ? 'reverse' : ''}">
              <div class="project-media-col">
                <a href="#/work/${project.slug}" class="project-img-frame" style="display: block;">
                  <img src="${project.heroImage}" alt="${project.title} Prototype" loading="lazy" />
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

                <h3 class="project-item-title">
                  <a href="#/work/${project.slug}">${project.title}</a>
                </h3>

                <p class="project-item-desc">
                  ${project.shortDescription}
                </p>

                <div class="project-tags-row">
                  ${(project.tags || []).slice(0, 3).map(tag => `<span class="mono-tag">${tag}</span>`).join('')}
                </div>

                <div style="margin-top: 1rem;">
                  <a href="#/work/${project.slug}" class="link-arrow" style="font-weight: 600;">
                    View project case study <span class="arrow">→</span>
                  </a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 4. CURRENTLY BUILDING & THINKING -->
    <section class="currently-section">
      <div class="container">
        <div class="currently-grid">
          <div class="currently-building-card">
            <span class="mono-label" style="color: var(--accent);">CURRENTLY ON THE WORKBENCH</span>
            <h2 class="currently-headline">
              ${config.currentlyBuilding}
            </h2>
            <div class="currently-timestamp">
              ● Updated ${config.currentlyBuildingDate}
            </div>
            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary); margin-top: 0.75rem;">
              Currently finalizing TVAC cold-junction calibration for the tape-spring deployer and gathering optical pressure telemetry on the water electrolysis test manifold.
            </p>
          </div>

          <div>
            <span class="mono-label">CURRENTLY THINKING ABOUT</span>
            <ul class="thinking-list">
              ${config.currentlyThinking.map(topic => `
                <li class="thinking-item">${topic}</li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. ENGINEERING PHILOSOPHY -->
    <section class="philosophy-section">
      <div class="container">
        <div class="philosophy-box">
          <span class="mono-label" style="color: var(--accent);">CORE PRINCIPLE</span>
          <h2 class="philosophy-title">${config.philosophy.headline}</h2>
          <p class="philosophy-quote">
            "${config.philosophy.text}"
          </p>
        </div>
      </div>
    </section>

    <!-- 6. LATEST WORKBENCH NOTES PREVIEW -->
    <section class="section-spacing" style="border-top: 1px solid var(--border-subtle); background: var(--bg-warm-tint);">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="mono-label">RESEARCH & FIELD LOGS</span>
            <h2 style="font-size: clamp(2.2rem, 3.5vw, 3rem); margin-top: 0.25rem;">Notes from the workbench</h2>
          </div>
          <a href="#/notes" class="link-arrow" style="font-weight: 600;">
            All engineering notes <span class="arrow">→</span>
          </a>
        </div>

        <div class="notes-grid" style="margin-top: 0;">
          ${notes.map(note => `
            <article class="glass-panel note-card">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span class="mono-label" style="color: var(--accent);">${note.category}</span>
                  <span class="mono-label">${note.date}</span>
                </div>
                <h3 class="note-card-title">
                  <a href="#/notes/${note.slug}">${note.title}</a>
                </h3>
                <p class="note-card-excerpt">
                  ${note.summary}
                </p>
              </div>
              <div>
                <a href="#/notes/${note.slug}" class="link-arrow" style="font-size: 0.88rem;">
                  Read note <span class="arrow">→</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
