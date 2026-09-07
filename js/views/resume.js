/**
 * Resume / Curriculum Vitae View
 * Structured editorial CV with Print / PDF download trigger
 */

import { store } from '../store.js';
import { showToast } from '../components/toast.js';

export function renderResume() {
  const config = store.getConfig();
  const about = store.getAboutData();
  const research = store.getResearch();
  const projects = store.getProjects().slice(0, 4);

  return `
    <section class="section-spacing">
      <div class="container-narrow">
        <!-- Action Toolbar -->
        <div class="no-print" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
          <a href="#/about" class="link-arrow">
            ← Back to About
          </a>

          <div style="display: flex; gap: 1rem;">
            <button class="btn-primary" id="print-resume-btn">
              Download / Print PDF ↓
            </button>
          </div>
        </div>

        <!-- Resume Document Paper -->
        <div class="resume-paper" id="resume-document">
          <header class="resume-header">
            <div>
              <h1 style="font-size: 2.4rem; font-family: var(--font-sans); font-weight: 700; letter-spacing: -0.01em; margin-bottom: 0.2rem;">
                ${config.name.toUpperCase()}
              </h1>
              <p style="font-family: var(--font-mono); font-size: 0.88rem; color: var(--accent); font-weight: 600; text-transform: uppercase;">
                ${config.title} · ${config.supportingTitle}
              </p>
            </div>

            <div style="text-align: right; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">
              <div>${config.email}</div>
              <div>${config.location}</div>
              <div>linkedin.com/in/hardik-raut-09164936b</div>
            </div>
          </header>

          <!-- 1. Summary -->
          <section class="resume-section">
            <h2 class="resume-section-title">Professional Summary</h2>
            <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
              Independent deep-tech builder and manufacturing engineer developing physical hardware across space systems, experimental propulsion, robotics, and digital manufacturing. Proven record leading satellite structural subsystems, designing high-precision CubeSat mechanisms, and publishing original research in structural optimization.
            </p>
          </section>

          <!-- 2. Education -->
          <section class="resume-section">
            <h2 class="resume-section-title">Education</h2>
            ${(about.education || []).map(edu => `
              <div style="margin-bottom: 0.8rem;">
                <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.98rem;">
                  <span>${edu.institution}</span>
                  <span style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted);">${edu.location}</span>
                </div>
                <div style="color: var(--accent); font-size: 0.92rem; font-weight: 500;">
                  ${edu.degree}
                </div>
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.2rem;">
                  ${edu.note}
                </p>
              </div>
            `).join('')}
          </section>

          <!-- 3. Experience -->
          <section class="resume-section">
            <h2 class="resume-section-title">Engineering Experience</h2>
            ${(about.experience || []).map(exp => `
              <div style="margin-bottom: 1.25rem;">
                <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 1rem;">
                  <span>${exp.company}</span>
                  <span style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted);">${exp.type}</span>
                </div>
                <div style="color: var(--text-primary); font-size: 0.92rem; font-weight: 500; margin-bottom: 0.35rem;">
                  ${exp.role}
                </div>
                <ul style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">
                  ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </section>

          <!-- 4. Selected Key Projects -->
          <section class="resume-section">
            <h2 class="resume-section-title">Selected Engineering Projects</h2>
            ${projects.map(p => `
              <div style="margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.95rem;">
                  <span>${p.title} (${p.category})</span>
                  <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${p.year}</span>
                </div>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                  ${p.shortDescription}
                </p>
              </div>
            `).join('')}
          </section>

          <!-- 5. Intellectual Property & Research -->
          <section class="resume-section">
            <h2 class="resume-section-title">Patents & Research Publications</h2>
            ${(research.patents || []).map(pat => `
              <div style="margin-bottom: 0.6rem; font-size: 0.88rem;">
                <strong>[Patent Pending]</strong> ${pat.title} — ${pat.context} (${pat.year})
              </div>
            `).join('')}
            ${(research.publications || []).map(pub => `
              <div style="margin-bottom: 0.6rem; font-size: 0.88rem;">
                <strong>[Manuscript]</strong> "${pub.title}" — ${pub.authors} (${pub.year})
              </div>
            `).join('')}
          </section>

          <!-- 6. Honors & Awards -->
          <section class="resume-section">
            <h2 class="resume-section-title">Honors & Awards</h2>
            ${(research.awards || []).map(aw => `
              <div style="font-size: 0.88rem; margin-bottom: 0.4rem;">
                <strong>${aw.title}</strong> — ${aw.forItem} (${aw.year})
              </div>
            `).join('')}
          </section>

          <!-- 7. Technical Skills & Tools -->
          <section class="resume-section" style="margin-bottom: 0;">
            <h2 class="resume-section-title">Technical Skills & Software</h2>
            <div style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
              <div><strong>Mechanical:</strong> CAD (SolidWorks, Siemens NX, Inventor), FEA, Vibration, DFM, CNC Milling</div>
              <div><strong>Space Systems:</strong> CubeSat Bus, Deployable Tape Booms, Space Mechanisms, TVAC Testing</div>
              <div><strong>Electronics & Firmware:</strong> Embedded C/C++, KiCad PCB, AVR/ARM Cortex, FPGA, ROS 2, Linux</div>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

export function initResumeEvents() {
  const printBtn = document.getElementById('print-resume-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      showToast('Opening print dialog for PDF export...', 'info');
      setTimeout(() => {
        window.print();
      }, 300);
    });
  }
}
