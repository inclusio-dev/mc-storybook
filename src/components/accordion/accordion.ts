import { html } from 'lit';
import './accordion.css';
import { icon } from '@/components/icon/icon';
import { TemplateResult } from 'lit';

export interface AccordionProps {
  label: string;
  open?: boolean;
  content?: string | HTMLElement | TemplateResult;
  customIcon?: boolean,
  onToggle?: (isOpen: boolean) => void;
}

export const accordion = ({ 
  label = '', 
  open = false, 
  content = '', 
  customIcon = false,
  onToggle 
}: AccordionProps) => {
  
  return html`
    <div class="accordion">
      <details ?open=${open} @toggle=${(e: Event) => {
        const details = e.currentTarget as HTMLDetailsElement;
        if (onToggle) {
          onToggle(details.open);
        }
      }}>
        <summary class="accordion__summary">
          ${customIcon ? html`<span class="accordion__icon"> ${icon({ type: 'tipo_posizione', size: 'medium' })} </span>` : null}
          <span class="accordion__label">${label}</span>
          <span class="accordion__icon">
            <span class="tipo_freccia_alto">
              ${icon({ type: 'tipo_freccia_alto', size: 'medium' })}
            </span>
            <span class="tipo_freccia_basso">
              ${icon({ type: 'tipo_freccia_basso', size: 'medium' })}
            </span>
          </span>
        </summary>
        <div class="accordion__content">
          ${content}
        </div>
      </details>
    </div>
  `;
};