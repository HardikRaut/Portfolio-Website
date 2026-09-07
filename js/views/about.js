/**
 * About Page View
 * Editorial biography, education, experience, skill matrix, hardware stack, and awards
 */

import { store } from '../store.js';

export function renderAbout() {
  const config = store.getConfig();
  const about = store.getAboutData();
  const research = store.getResearch();

  return `
    <section class="section-spacing">
      <div class="container">
        <!-- 1. Hero Grid -->
        <div class="about-hero-grid">
          <div>
            <span class="mono-label" style="color: var(--accent);">BIOGRAPHY & MINDSET</span>
            <h1 style="font-size: clamp(2.6rem, 4.5vw, 4.2rem); line-height: 1.1; margin: 0.5rem 0 1.5rem 0;">
              ${config.aboutHeading}
            </h1>
            <p style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.5rem;">
              ${config.aboutBio}
            </p>
            <p style="font-size: 1.15rem; line-height: 1.8;">
              I believe real engineering happens when theoretical simulation confronts physical hardware. Whether milling thin-walled aluminum chassis on a desktop CNC or testing microsecond plasma pulses at 10⁻⁶ mbar vacuum, building things with one's own hands teaches lessons no textbook contains.
            </p>
          </div>

          <div class="hero-image-wrapper">
            <img src="assets/images/workbench.jpg" alt="Prototyping workbench scene with sketches, calipers, and electronics" loading="eager" />
            <div class="hero-image-caption">
              <span>WORKBENCH PROTOTYPING DESK</span>
              <span>PUNE, INDIA</span>
            </div>
          </div>
        </div>

        <!-- 2. Education & Experience -->
        <div style="margin: 6rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 4rem;">
          <!-- Education -->
          <div>
            <span class="mono-label" style="color: var(--accent);">01 — ACADEMIC FOUNDATION</span>
            <h2 style="font-size: 2rem; margin: 0.5rem 0 2rem 0;">Education</h2>
            
            ${(about.education || []).map(edu => `
              <div class="glass-panel" style="padding: 2.2rem;">
                <span class="mono-label">${edu.location}</span>
                <h3 style="font-size: 1.5rem; margin: 0.35rem 0 0.5rem 0;">${edu.institution}</h3>
                <p style="font-weight: 600; color: var(--accent); font-size: 1.05rem; margin-bottom: 0.75rem;">
                  ${edu.degree}
                </p>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">
                  ${edu.note}
                </p>
              </div>
            `).join('')}
          </div>

          <!-- Experience -->
          <div>
            <span class="mono-label" style="color: var(--accent);">02 — INDUSTRY & ROLES</span>
            <h2 style="font-size: 2rem; margin: 0.5rem 0 2rem 0;">Experience</h2>

            <div class="timeline-list" style="padding-left: 1.5rem;">
              ${(about.experience || []).map(exp => `
                <div class="timeline-node">
                  <div class="timeline-year">${exp.type.toUpperCase()}</div>
                  <h3 class="timeline-title">${exp.company}</h3>
                  <p style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.5rem;">
                    ${exp.role}
                  </p>
                  <ul style="list-style-type: square; padding-left: 1.25rem; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
                    ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 3. Skills Matrix by Discipline -->
        <div style="margin: 6rem 0;">
          <span class="mono-label" style="color: var(--accent);">03 — TECHNICAL CAPABILITIES</span>
          <h2 style="font-size: clamp(2.2rem, 3.5vw, 3rem); margin: 0.5rem 0 1rem 0;">Skills across domains</h2>
          <p style="max-width: 700px; font-size: 1.1rem; color: var(--text-secondary);">
            Deep technical capability requires fluid movement between analytical math, CAD software, machining tools, and embedded code.
          </p>

          <div class="skills-matrix">
            ${(about.skills || []).map(skillGroup => `
              <div class="glass-panel skill-category-box">
                <h3 class="skill-category-title">${skillGroup.category}</h3>
                <div class="skill-tag-list">
                  ${skillGroup.items.map(item => `<span class="mono-tag">${item}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4. Hardware & Microcontrollers Stack -->
        <div class="glass-panel" style="padding: 3rem; margin: 5rem 0;">
          <span class="mono-label" style="color: var(--accent);">04 — HARDWARE PLATFORMS</span>
          <h2 style="font-size: 2rem; margin: 0.5rem 0 1.5rem 0;">Hardware & silicon stack</h2>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">
            Hardware devices, microcontrollers, FPGAs, and RF transceivers frequently integrated into active prototypes:
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            ${(about.hardware || []).map(h => `
              <span class="mono-tag" style="font-size: 0.82rem; padding: 0.45rem 0.9rem; background: var(--bg-surface); border: 1px solid var(--border-color); font-weight: 500;">
                ${h}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- 5. Honors & Awards -->
        <div style="margin: 5rem 0;">
          <span class="mono-label" style="color: var(--accent);">05 — RECOGNITION</span>
          <h2 style="font-size: 2rem; margin: 0.5rem 0 2rem 0;">Awards & honors</h2>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
            ${(research.awards || []).map(award => `
              <div class="glass-panel" style="padding: 2rem;">
                <span class="mono-label">${award.year} · AWARD</span>
                <h3 style="font-size: 1.4rem; margin: 0.5rem 0 0.5rem 0; color: var(--accent);">
                  ${award.title}
                </h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">
                  For: <strong>${award.forItem}</strong>
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Beyond Engineering -->
        <div class="glass-panel" style="padding: 3rem; margin: 5rem 0; background: var(--bg-warm-tint);">
          <span class="mono-label">06 — PERSPECTIVE</span>
          <h2 style="font-size: 2rem; margin: 0.5rem 0 1.5rem 0;">Beyond the projects</h2>
          <p style="color: var(--text-secondary); max-width: 750px; line-height: 1.75; margin-bottom: 1.5rem;">
            Outside dedicated project builds, I explore questions in particle physics, systems-level computing, precision mechanical horology, astronomy, and AI-assisted engineering synthesis.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.6rem;">
            ${(about.beyond || []).map(item => `
              <span class="mono-tag" style="background: var(--bg-surface);">${item}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
