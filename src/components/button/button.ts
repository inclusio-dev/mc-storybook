import { html } from 'lit';

import './button.css';
import { icon } from '../icon/icon';
import { IconType } from '../icon/iconSvgs';

export interface ButtonProps {
  iconleft?: IconType | null;
  iconright?: IconType | null;
  iconsize?: 'small' | 'medium' | 'large';
  width?: 'fitcontent' | 'fixed';
  height?: 'fitcontent' | 'fixed';
  variant?: 'primario' | 'secondario' | 'terziario' | 'dolcecasa' | 'dolcecasanero' | 'findomestic' | 'carrello';
  type?: 'pieno' | 'contorno';
  disabled?: boolean,
  label: string;
  onClick?: () => void;
}

export const button = ({ variant = "primario", type = "pieno", disabled, iconleft, iconright, iconsize = 'medium', width, height, label, onClick }: ButtonProps) => {

  return html`
    <button
      type="button"
      class=${['button', `button--${variant}-${type}`, `button-width-${width}`, `button-height-${height}`, `button-${label === "" ? "rounded" : "normal"}`, `button-icon${iconsize}` ].join(' ')}
      @click=${onClick}
      ?disabled=${disabled}
    >
      ${variant == "findomestic" ? html`<img src='./assets/findomestic.svg'>` : null}
      ${iconleft ? icon({ type: iconleft, size: iconsize }) : null}
      ${label}
      ${iconright ? icon({ type: iconright, size: iconsize }) : null}
    </button>
  `;
};