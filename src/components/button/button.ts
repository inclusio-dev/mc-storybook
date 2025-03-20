import { html } from 'lit';

import './button.css';
import { icon } from '../icon/icon';

export interface ButtonProps {
  iconleft?: boolean;
  iconright?: boolean;
  iconsize?: 'small' | 'medium' | 'large';
  width?: 'fitcontent' | 'fixed';
  variant?: 'primario' | 'secondario' | 'terziario' | 'dolcecasa' | 'dolcecasanero';
  type?: 'pieno' | 'contorno';
  label: string;
  onClick?: () => void;
}

export const button = ({ variant = "primario", type = "pieno", iconleft, iconright, iconsize, width, label, onClick }: ButtonProps) => {

  return html`
    <button
      type="button"
      class=${['button', `button--${variant}-${type}`, `button-${width}`, `button-${label === "" ? "rounded" : "normal"}`, `button-icon${iconsize}`].join(' ')}
      @click=${onClick}
    >
      ${iconleft ? icon({ type: 'tipo_freccia_sx', size: 'medium' }) : null}
      ${label}
      ${iconright ? icon({ type: 'tipo_freccia_dx', size: 'medium' }) : null}
    </button>
  `;
};
