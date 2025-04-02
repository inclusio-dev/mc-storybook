import { html } from 'lit';

import './button.css';
import { icon } from '../icon/icon';
import { IconType } from '../icon/iconSvgs';

export interface ButtonProps {
  iconleft?: IconType | null;
  iconright?: IconType | null;
  iconsize?: 'small' | 'medium' | 'large';
  width?: 'fitcontent' | 'fixed';
  variant?: 'primario' | 'secondario' | 'terziario' | 'dolcecasa' | 'dolcecasanero';
  type?: 'pieno' | 'contorno';
  disabled?: boolean,
  label: string;
  onClick?: () => void;
}

export const button = ({ variant = "primario", type = "pieno", disabled, iconleft, iconright, iconsize = 'medium', width, label, onClick }: ButtonProps) => {

  return html`
    <button
      type="button"
      class=${['button', `button--${variant}-${type}`, `button-${width}`, `button-${label === "" ? "rounded" : "normal"}`, `button-icon${iconsize}`].join(' ')}
      @click=${onClick}
      ?disabled=${disabled}
    >
      ${iconleft ? icon({ type: iconleft, size: iconsize }) : null}
      ${label}
      ${iconright ? icon({ type: iconright, size: iconsize }) : null}
    </button>
  `;
};