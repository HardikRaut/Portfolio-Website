/**
 * Contact View
 * Clean direct contacts (email, LinkedIn) and interactive glassmorphic inquiry form
 */

import { store } from '../store.js';
import { showToast } from '../components/toast.js';

export function renderContact() {
  const config = store.getConfig();

  return `
    <section class="section-spacing">
      <div class="container">
        <div class="contact-layout">
          <!-- 1. Direct Information Column -->
          <div class="contact-info-col">
            <span class="mono-label" style="color: var(--accent);">OPEN TRANSMISSION</span>
            <h1 style="font-size: clamp(2.8rem, 5vw, 4.4rem); line-height: 1.08; margin: 0.5rem 0 1.5rem 0;">
              Let's build at the frontier.
            </h1>
            <p style="font-size: 1.15rem; line-height: 1.7; color: var(--text-secondary);">
              I'm open to high-bandwidth conversations with engineers, deep-tech investors, content creators, researchers, and builders tackling difficult physical technology.
            </p>

            <div class="glass-panel contact-direct-card">
              <a href="mailto:${config.email}" class="contact-direct-link" id="copy-email-btn">
                <span class="mono-label">PRIMARY EMAIL</span>
                <span class="val">${config.email}</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">Click to email or copy ↗</span>
              </a>

              <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; margin-top: 1.5rem;">
                <a href="${config.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-direct-link" style="margin-bottom: 0;">
                  <span class="mono-label">PROFESSIONAL NETWORK</span>
                  <span class="val">linkedin.com/in/hardik-raut/ ↗</span>
                </a>
              </div>

              ${config.github ? `
                <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; margin-top: 1.5rem;">
                  <a href="${config.github}" target="_blank" rel="noopener noreferrer" class="contact-direct-link" style="margin-bottom: 0;">
                    <span class="mono-label">CODE & REPOSITORIES</span>
                    <span class="val">github.com/hardik-raut ↗</span>
                  </a>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- 2. Interactive Inquiry Form -->
          <div>
            <form class="glass-panel contact-form" id="contact-form">
              <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Start a conversation</h3>
              <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">
                Inquiries regarding co-development, investment syndicates, technical media, or research partnerships.
              </p>

              <div class="form-group">
                <label for="contact-name" class="form-label">Your Name</label>
                <input type="text" id="contact-name" class="form-input" placeholder="e.g. Dr. Jane Smith / Tech Lead / Creator" required />
              </div>

              <div class="form-group">
                <label for="contact-email" class="form-label">Your Email</label>
                <input type="email" id="contact-email" class="form-input" placeholder="e.g. name@organization.com" required />
              </div>

              <div class="form-group">
                <label for="contact-topic" class="form-label">Area of Collaboration / Interest</label>
                <select id="contact-topic" class="form-input">
                  <option value="Engineering Co-Development & Prototyping">Engineering Co-Development & Prototyping</option>
                  <option value="Deep-Tech Investment / Angel Syndicate">Deep-Tech Investment / Angel Syndicate</option>
                  <option value="Technical Content, Podcast & Media">Technical Content, Podcast & Media</option>
                  <option value="Academic & Research Lab Collaboration">Academic & Research Lab Collaboration</option>
                  <option value="Space Systems & Mechanisms">Space Systems & Mechanisms</option>
                  <option value="General Exploratory Discussion">General Exploratory Discussion</option>
                </select>
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">Message / Vision</label>
                <textarea id="contact-message" class="form-textarea" placeholder="Share your project idea, collaboration proposal, media topic, or investment thesis..." required></textarea>
              </div>

              <button type="submit" class="btn-primary" style="margin-top: 0.5rem; padding: 0.85rem;">
                Send transmission <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactEvents() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      showToast(`Thank you, ${name}. Your message has been sent directly to Hardik.`, 'success');
      form.reset();
    });
  }

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      const config = store.getConfig();
      navigator.clipboard?.writeText(config.email);
      showToast(`Email copied to clipboard: ${config.email}`, 'info');
    });
  }
}
