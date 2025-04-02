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
  parameters: {
    docs: {
      description: {
        component: `Vai al link del componente Accordion sul Figma: [link componente Accordion](https://www.figma.com/design/201b1LgGLEDCibrm9arMve/UI-KIT-Mondoconv?node-id=399-646)`
      }
    }
  }
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

export const ApertoByDefault = Template.bind({});
ApertoByDefault.args = {
  ...Default.args,
  open: true,
};

export const ConIcona = Template.bind({});
ConIcona.args = {
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
WithLongContent.storyName = 'Con Contenuto Lungo';
WithLongContent.args = {
  ...Default.args
};

// Definizione dei dati per la lista di accordion
const accordionListItems = [
  {
    label: 'Primo Accordion',
    content: html`<p>Contenuto del primo accordion nella lista.</p>`,
    open: false,
    customIcon: true
  },
  {
    label: 'Secondo Accordion',
    content: html`
      <p>Contenuto del secondo accordion nella lista.</p>
      <ul>
        <li>Sottoelemento 1</li>
        <li>Sottoelemento 2</li>
      </ul>
    `,
    open: false,
    customIcon: true
  },
  {
    label: 'Terzo Accordion',
    content: html`
      <p>Contenuto del terzo accordion nella lista con più elementi.</p>
      <p>Questo accordion ha più contenuti per mostrare la flessibilità.</p>
    `,
    open: false,
    customIcon: true
  },
  {
    label: 'Quarto Accordion',
    content: html`<p>Contenuto del primo accordion nella lista.</p>`,
    open: false,
    customIcon: true
  },
  {
    label: 'Quinto Accordion',
    content: html`
      <p>Contenuto del secondo accordion nella lista.</p>
      <ul>
        <li>Sottoelemento 1</li>
        <li>Sottoelemento 2</li>
      </ul>
    `,
    open: false,
    customIcon: true
  },
  {
    label: 'Sesto Accordion',
    content: html`
      <p>Contenuto del terzo accordion nella lista con più elementi.</p>
      <p>Questo accordion ha più contenuti per mostrare la flessibilità.</p>
    `,
    open: false,
    customIcon: true
  }
];

// Template per la lista di accordion
const AccordionListTemplate: StoryFn = () => html`
  <div style="max-width: 365px; margin: 0 auto;">
    <ul class="accordion-list" style="list-style-type: none; padding: 0;">
      ${accordionListItems.map(item => html`
        <li>
          ${accordion({
            label: item.label,
            content: item.content,
            open: item.open,
            customIcon: item.customIcon,
            onToggle: (isOpen) => console.log(`${item.label} toggled:`, isOpen)
          })}
        </li>
      `)}
    </ul>
  </div>
`;

export const AccordionList = AccordionListTemplate.bind({});
AccordionList.storyName = 'Lista di Accordion';
AccordionList.parameters = {
  docs: {
    description: {
      story: 'Questo esempio mostra come utilizzare più accordion all\'interno di una lista per creare un menu a più livelli o una FAQ.'
    }
  }
};