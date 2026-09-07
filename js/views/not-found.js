/**
 * 404 Not Found View
 * Minimalist editorial 404 page
 */

export function renderNotFound() {
  return `
    <section class="section-spacing" style="min-height: 60vh; display: flex; align-items: center;">
      <div class="container" style="text-align: center; max-width: 700px;">
        <span class="mono-label" style="color: var(--accent);">404 — ANOMALY DETECTED</span>
        <h1 style="font-size: clamp(2.4rem, 4.5vw, 3.8rem); line-height: 1.15; margin: 1rem 0 1.5rem 0;">
          Lost somewhere between the prototype and the final build.
        </h1>
        <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 2.5rem;">
          This page doesn't seem to exist or has been relocated to another subsystem.
        </p>
        <a href="#/work" class="btn-primary" style="padding: 0.85rem 2rem;">
          Back to the work <span>→</span>
        </a>
      </div>
    </section>
  `;
}
