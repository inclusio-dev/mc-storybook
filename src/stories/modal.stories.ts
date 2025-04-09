import { html } from 'lit';
import { modal, ModalProps } from '@/components/modal/modal';
import { button } from '@/components/button/button';
import { StoryFn } from '@storybook/web-components';

export default {
  title: 'Components/Modal',
  component: 'my-modal',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template : StoryFn<ModalProps> = (args) => {

  const openModal = () => {
    const modalOverlay = document.querySelector('#modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.add('is-open');
    }
  };

  const defaultContent = html`
    <p>Questo è il contenuto della modale. La modale può essere chiusa in diversi modi:</p>
    <ul>
      <li>Premendo il pulsante "Chiudi"</li>
      <li>Premendo il tasto ESC sulla tastiera</li>
      <li>Cliccando all'esterno della modale</li>
    </ul>
    <p>Questi metodi di chiusura rendono la modale più accessibile e facile da usare.</p>
    <footer class="modal-footer">
      ${button({
        label: "primo pulsante",
        variant: 'primario',
        type: 'contorno',
        onClick: () => console.log("faccio una funzione")
      })}
    </footer>
  `;

  return html`
    <button 
        type="button" 
        @click=${openModal}
      >
      Apri Modale
    </button>
    ${modal({
      ...args,
      content: defaultContent,})}
  `;
};


export const Default = {
  render: Template,
  args: {
    title: 'Titolo della Modale',
  }
};
