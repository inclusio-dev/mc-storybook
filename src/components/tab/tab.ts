import { html, render } from 'lit';
import type { TemplateResult } from 'lit';
import './tab.css';

export interface TabProps {
  label: string;
  content: string | TemplateResult | Function;

}

export interface LitTabsProps {
  tabs: TabProps[];
  activeTab?: number;
  variant?: 'default' | 'pieno';
  container: HTMLElement;
}

/**
 * Funzione che crea e gestisce un componente tab.
 */
export const createTabs = ({
  tabs,
  activeTab = 0,
  variant = 'default',
  container,
}: LitTabsProps) => {
  // Stato locale per il tab attivo
  let currentActiveTab = activeTab;

  // Funzione per mettere a fuoco il bottone del tab
  const focusTab = (index: number) => {
    const tabButton = container.querySelector(`#tab-${index}`);
    if (tabButton) {
      (tabButton as HTMLElement).focus();
    }
  };

  // Aggiorna lo stato e re-renderizza il componente
  const updateActiveTab = (index: number) => {
    currentActiveTab = index;
    renderTabs();
    focusTab(index);
  };

  // Gestione della navigazione con le frecce
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' && currentActiveTab > 0) {
      updateActiveTab(currentActiveTab - 1);
    } else if (event.key === 'ArrowRight' && currentActiveTab < tabs.length - 1) {
      updateActiveTab(currentActiveTab + 1);
    }
  };

  // Funzione di rendering che usa lit.render() per aggiornare il container
  const renderTabs = () => {
    const template = html`
      <div class="tabs tabs--${variant}">
        <div role="tablist" aria-labelledby="tablist-1" @keydown=${handleKeydown}>
          ${tabs.map(
            (tab, index) => html`
                <span>
                    <button
                        id="tab-${index}"
                        type="button"
                        role="tab"
                        aria-selected="${index === currentActiveTab}"
                        aria-controls="tabpanel-${index}"
                        tabindex="${index === currentActiveTab ? '0' : '-1'}"
                        @click=${() => updateActiveTab(index)}
                        class="tab-button tab-button--${variant} ${index === currentActiveTab
                        ? 'tab-button--active'
                        : ''}"
                    >
                        ${tab.label}
                    </button>
                </span>
            `
          )}
        </div>
        ${tabs.map(
          (tab, index) => html`
            <div
              id="tabpanel-${index}"
              role="tabpanel"
              aria-labelledby="tab-${index}"
              class="tabpanel ${index !== currentActiveTab ? 'is-hidden' : ''}"
              ?hidden=${index !== currentActiveTab}
            >
              ${tab.content}
            </div>
          `
        )}
      </div>
    `;
    render(template, container);
  };

  // Render iniziale
  renderTabs();

  // Ritorna un oggetto utile per interagire eventualmente con il componente
  return {
    update: updateActiveTab,
    getActiveTab: () => currentActiveTab,
  };
};
