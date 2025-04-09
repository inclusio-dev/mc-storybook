import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

// Importa il componente button
import { button } from '../button/button';
import './modal.css';

export interface ModalProps {
  title: string;
  content?: string | HTMLElement | TemplateResult;
}

export const modal = ({ 
  title, 
  content = '', 
}: ModalProps) => {

    // Funzione che permette la chiusura del modale
    const closeModal = () => {
        console.log("close modal ")
        const modalOverlay = document.querySelector('#modal-overlay');
        if (modalOverlay) {
        modalOverlay.classList.remove('is-open');
        }
    };

    // Funzione che ascolta il click esterno all'area del div con id modal-overlay
    // per avere la funzinalità di chiusura del modale al click fuori dal modale
    const handleOverlayClick = (e: Event) => {
        if ((e.target as HTMLElement).id === 'modal-overlay' && closeModal) {
            closeModal();
        }
    };

    /* const modalOverlay = document.querySelector('#modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e: Event) => {
            if (((e.target) as HTMLElement).id === 'modal' && closeModal) {
                console.log("chiudo 2")
                closeModal();
            }
        });
    } */

    // Funzione di ascolto del pulsante esc nella tastiera
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    });


  return html`
    <div 
      id="modal-overlay" 
      class="modal-overlay" 
      role="presentation" 
      tabindex="-1"
      @click=${handleOverlayClick}
    >
      <div 
        id="modal" 
        role="dialog"
        class="modal" 
        aria-labelledby="modal-title" 
        aria-describedby="modal-desc" 
        aria-modal="true"
        
      >
        <header class="modal-header">
          <h2 id="modal-title" class="modal-title">${title}</h2>
          ${button({
            iconleft: "tipo_chiudi",
            iconsize: "small",
            label: "",
            variant: 'primario',
            type: 'contorno',
            onClick: closeModal,
            width: 'fitcontent',
            height: 'fitcontent'
          })}
        </header>
        <div id="modal-desc" class="modal-content">
         ${content}
        </div>

      </div>
    </div>
  `;
};