import { html } from 'lit';
import './accordion.css';
import { icon } from '@/components/icon/icon';
import { render } from 'lit-html';
import { TemplateResult } from 'lit';

export interface AccordionProps {
  label: string;
  open?: boolean;
  content?: string | HTMLElement | TemplateResult;
  onToggle?: (isOpen: boolean) => void;
}

export const accordion = ({ 
  label = '', 
  open = false, 
  content = '', 
  onToggle 
}: AccordionProps) => {
  
  const handleToggle = (e: Event) => {
    const details = e.currentTarget as HTMLDetailsElement;
    const iconContainer = details.querySelector('.accordion__icon') as HTMLElement;
    

   /*  if (iconContainer.firstChild) {
      iconContainer.removeChild(iconContainer.firstChild);
    } */
  
    //iconContainer.innerHTML = '';
    // Aggiorna l'icona in base allo stato attuale
    if (details.open) {
      // Accordion aperto - mostra l'icona "tipo_freccia_basso"
      render(icon({ type: 'tipo_freccia_basso', size: 'medium' }), iconContainer);
    } else {
      // Accordion chiuso - mostra l'icona "tipo_freccia_alto"
      render(icon({ type: 'tipo_freccia_alto', size: 'medium' }), iconContainer);
    }
    
    if (onToggle) {
      onToggle(details.open);
    }
  };

  return html`
    <div class="accordion">
      <details ?open=${open} @toggle=${handleToggle}>
        <summary class="accordion__summary">
          <span class="accordion__label">${label}</span>
          <span class="accordion__icon">
            ${icon({ type: 'tipo_freccia_basso', size: 'medium' }) }
          </span>
        </summary>
        <div class="accordion__content">
          ${content}
        </div>
      </details>
    </div>
  `;
};