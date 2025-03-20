import { html } from 'lit';

import './button.css';
import frecciasx from '@/components/icons/frecciasx';
import frecciadx from '@/components/icons/frecciadx';
import carrello from '@/components/icons/carrello';

export interface ButtonProps {
  iconleft?: boolean;
  iconright?: boolean;
  iconsize?: 'small' | 'medium' | 'large';
  iconname?: string;
  width?: 'fitcontent' | 'fixed';
  variant?: 'primario' | 'secondario' | 'terziario' | 'dolcecasa' | 'dolcecasanero';
  type?: 'pieno' | 'contorno';
  label: string;
  onClick?: () => void;
}

export const button = ({ variant = "primario", type = "pieno", iconleft, iconright, iconsize, iconname, width, label, onClick }: ButtonProps) => {

  return html`
    <button
      type="button"
      class=${['button', `button--${variant}-${type}`, `button-${width}`, `button-${label === "" ? "rounded" : "normal"}`, `button-icon${iconsize}`].join(' ')}
      @click=${onClick}
    >
      ${iconleft ? iconname === "carrello" ? carrello() : frecciasx() : null}
      ${label}
      ${iconright ? frecciadx() : null}
    </button>
  `;
};
