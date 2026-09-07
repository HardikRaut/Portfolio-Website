/**
 * Footer Component
 * Minimal editorial footer with collaborative CTA and clean public links
 */

import { store } from '../store.js';

export function renderFooter(showCTA = true) {
  const config = store.getConfig();
  const currentYear = new Date().getFullYear();

  return `
    ${showCTA ? `
      <section class="section-spacing" style="border-top: 1px solid var(--border-color); background: var(--bg-warm-tint);">
        <div class="container" style="text-align: center; max-width: 860px;">
          <span class="mono-label" style="color: var(--accent);">OPEN INVITATION · COLLABORATION & VENTURES</span>
          <h2 style="margin: 1rem 0 1.5rem 0; font-size: clamp(2.4rem, 4.5vw, 3.8rem); line-height: 1.15;">
            Building at the frontier is a collective pursuit.
          </h2>
          <p style="max-width: 720px; margin: 0 auto 2rem auto; font-size: 1.15rem; line-height: 1.75; color: var(--text-secondary);">
            Whether you are an engineer or researcher looking to co-develop, a creator documenting hard-tech breakthroughs, or an investor backing high-conviction physical systems—I am always eager to connect on ambitious ideas and bold frontiers.
          </p>

          <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2.5rem;">
            <span class="mono-tag" style="background: var(--bg-surface); padding: 0.45rem 0.9rem; font-size: 0.78rem;">Engineering Co-Development</span>
            <span class="mono-tag" style="background: var(--bg-surface); padding: 0.45rem 0.9rem; font-size: 0.78rem;">Deep-Tech Investors & Angels</span>
            <span class="mono-tag" style="background: var(--bg-surface); padding: 0.45rem 0.9rem; font-size: 0.78rem;">Content Creators & Media</span>
            <span class="mono-tag" style="background: var(--bg-surface); padding: 0.45rem 0.9rem; font-size: 0.78rem;">Academic & Research Labs</span>
          </div>

          <a href="#/contact" class="btn-primary" style="padding: 0.95rem 2.5rem; font-size: 1.05rem;">
            Start a conversation <span>→</span>
          </a>
        </div>
      </section>
    ` : ''}

    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h4>${config.name.toUpperCase()}</h4>
            <p style="margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
              ${config.title}
            </p>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
              Space Systems · Propulsion · Robotics · Electronics · Manufacturing
            </p>
          </div>

          <div class="footer-links-group">
            <h5>Navigation</h5>
            <ul class="footer-links-list">
              <li><a href="#/work">Selected Work</a></li>
              <li><a href="#/research">Research & Writing</a></li>
              <li><a href="#/notes">Workbench Notes</a></li>
              <li><a href="#/about">About & Journey</a></li>
              <li><a href="#/resume">Curriculum Vitae</a></li>
            </ul>
          </div>

          <div class="footer-links-group">
            <h5>Direct Contacts</h5>
            <ul class="footer-links-list">
              <li>
                <a href="mailto:${config.email}" style="color: var(--accent); font-family: var(--font-mono); font-size: 0.88rem;">
                  ${config.email}
                </a>
              </li>
              <li>
                <a href="${config.linkedin}" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile ↗
                </a>
              </li>
              ${config.github ? `
                <li>
                  <a href="${config.github}" target="_blank" rel="noopener noreferrer">
                    GitHub Profile ↗
                  </a>
                </li>
              ` : ''}
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© ${currentYear} ${config.name}. Independent builder portfolio.</span>
          <span>Crafted with typography & precision engineering</span>
        </div>
      </div>
    </footer>
  `;
}
