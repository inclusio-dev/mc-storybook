import { html } from 'lit';
import { StoryFn, Meta } from '@storybook/web-components';
import { accordion, AccordionProps } from '@/components/accordion/accordion';
import '@/components/accordion/accordion.css';

export default {
  title: 'Accordion',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Testo del pulsante di apertura dell accordion', },
    open: { control: 'boolean', description: 'Stato dell accordion', },
    customIcon: { control: 'boolean', description: 'Se presente icona a sinistra', },
    onToggle: { action: 'toggled' }
  },
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => {
  // Definire il contenuto HTML per l'accordion
  const contentHtml = html`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  `;
  
  return html`
    <div style="max-width: 500px; margin: 0 auto;">
      ${accordion({
        ...args,
        content: contentHtml,
        onToggle: (isOpen) => console.log('Accordion toggled:', isOpen),
      })}
    </div>
  `;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Accordion Title',
  open: false,
  customIcon: false,
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  ...Default.args,
  open: true,
};

export const WithCustomIcons = Template.bind({});
WithCustomIcons.args = {
  ...Default.args,
  customIcon: true,
};

// Definizione del contenuto lungo fuori dalla funzione decoratore
const longContentTemplate = html`
  <p>Questo è un paragrafo di testo più lungo per mostrare come l'accordion si comporta con contenuti estesi.</p>
  <p>Puoi inserire qualsiasi contenuto HTML qui, inclusi altri componenti personalizzati.</p>
  <ul>
    <li>Elemento lista 1</li>
    <li>Elemento lista 2</li>
    <li>Elemento lista 3</li>
  </ul>
`;

// Creazione della storia con contenuto lungo
const LongContentTemplate: StoryFn<AccordionProps> = (args) => html`
  <div style="max-width: 500px; margin: 0 auto;">
    ${accordion({
      ...args,
      content: longContentTemplate,
      onToggle: (isOpen) => console.log('Accordion toggled:', isOpen)
    })}
  </div>
`;

export const WithLongContent = LongContentTemplate.bind({});
WithLongContent.storyName = 'With Long Content';
WithLongContent.args = {
  ...Default.args
};