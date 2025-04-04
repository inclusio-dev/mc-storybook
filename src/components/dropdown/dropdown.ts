import { html, TemplateResult } from 'lit';

import './dropdown.css';
import { icon } from '@/components/icon/icon';
import { IconType } from '@/components/icon/iconSvgs';

export interface DropdownProps {
  label: string;
  content: TemplateResult | string;
  variant?: 'iconLabelCart' | 'onlyLabel' ;
  iconName?: IconType | null;
  dropdownWidth?: string;
  dropdownClass?: string;
  labelOnTopRight?: string;
}

export const dropdown = ({
  label,
  content,
  variant = 'iconLabelCart',
  dropdownWidth = 'auto',
  dropdownClass = '',
  labelOnTopRight = '2',
  iconName = null
}: DropdownProps) => {
  const uniqueId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;
  

  const handleToggle = (event: Event) => {
    
    
    const dropdownElement = (event.currentTarget as Element).closest('.dropdown');
    const dropdownContent = dropdownElement?.querySelector('.dropdown__content') as HTMLElement;
    const triggerButton = dropdownElement?.querySelector('.dropdown__button') as HTMLButtonElement;
    
    if (dropdownContent && triggerButton) {
      const isExpanded = dropdownContent.getAttribute('aria-expanded') === 'true';
      dropdownContent.setAttribute('aria-expanded', (!isExpanded).toString());
      dropdownContent.style.display = isExpanded ? 'none' : 'block';
      triggerButton.setAttribute('aria-expanded', (!isExpanded).toString());
    }
    
    event.stopPropagation();
  };
  

  const handleKeyDown = (event: KeyboardEvent) => {
    
    const dropdownElement = (event.currentTarget as Element).closest('.dropdown');
    const dropdownContent = dropdownElement?.querySelector('.dropdown__content') as HTMLElement;
    const isExpanded = dropdownContent.getAttribute('aria-expanded') === 'true';
    const triggerButton = dropdownElement?.querySelector('.dropdown__button') as HTMLButtonElement;
    
    switch (event.key) {
      case 'Escape':
        if (isExpanded) {
          handleToggle(event);
        }
        break;
        
      case 'Tab':
      
        if (isExpanded) {
          const focusableElements = dropdownContent.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
          const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (document.activeElement === lastFocusable && !event.shiftKey) {
            handleToggle(event);
          } else if (document.activeElement === triggerButton && event.shiftKey) {
            handleToggle(event);
          }
        }
        break;
    }
  };
  
  document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target as Node)) {
        const dropdownContent = dropdown.querySelector('.dropdown__content') as HTMLElement;
        const triggerButton = dropdown.querySelector('.dropdown__button') as HTMLButtonElement;
        
        if (dropdownContent && dropdownContent.getAttribute('aria-expanded') === 'true') {
          dropdownContent.setAttribute('aria-expanded', 'false');
          dropdownContent.style.display = 'none';
          if (triggerButton) {
            triggerButton.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });
  
  const customStyles = dropdownWidth ? `width: ${dropdownWidth};` : '';
  
  return html`
    <div 
      id=${uniqueId}
      class=${['dropdown', `dropdown--${variant}`,].join(' ')}
      @keydown=${handleKeyDown}
    >
      <button
        class=${['dropdown__button', `button--${variant}`].join(' ')}
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="${uniqueId}-dropdown"
        @click=${handleToggle}
      >
        
        ${ variant == "iconLabelCart" ? (iconName ? icon({ type: iconName, size: "large" }) : null) : null}
        <span class="dropdown__label">${label}</span>
        ${parseInt(labelOnTopRight) > 0 && variant == "iconLabelCart" ? html`<span class="labelOnTopRight">${labelOnTopRight}</span>` : null}
      </button>
      
      <div 
        id="${uniqueId}-dropdown"
        class=${['dropdown__content', dropdownClass].join(' ')}
        style=${customStyles}
        aria-labelledby=${uniqueId}
        aria-expanded="false"
      >
            ${content}
      </div>
    </div>
  `;
};