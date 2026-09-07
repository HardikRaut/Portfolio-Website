/**
 * Modal Viewer Component
 * Glassmorphic modal for document previews, image zoom, and simulated downloads
 */

export function openModal({ title, content, maxWidth = '680px' }) {
  closeModal(); // Close any existing modal

  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.id = 'active-modal';

  backdrop.innerHTML = `
    <div class="modal-glass-container" style="max-width: ${maxWidth};">
      <button class="modal-close-btn" id="modal-close-trigger" aria-label="Close modal">×</button>
      ${title ? `<h3 style="margin-bottom: 1.5rem; font-size: 1.8rem;">${title}</h3>` : ''}
      <div class="modal-body-content">
        ${content}
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.style.overflow = 'hidden';

  const closeBtn = backdrop.querySelector('#modal-close-trigger');
  closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', handleEscape);
}

function handleEscape(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

export function closeModal() {
  const modal = document.getElementById('active-modal');
  if (modal) {
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
    modal.remove();
  }
}
