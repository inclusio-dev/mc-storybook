import { StoryFn, Meta } from '@storybook/web-components';
import { link, LinkProps, LinkVariant } from '@/components/link/link';
import { getAllIconTypes, IconType } from '@/components/icon/iconSvgs';
import { html } from 'lit';

export default {
  title: 'Link',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['header', 'tag', 'inline'],
      description: 'Stile visuale del link',
      defaultValue: 'header',
    },
    href: {
      control: 'text',
      description: 'URL a cui il link punta',
      defaultValue: '#',
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Attributo target per il link',
      defaultValue: '_self',
    },
    label: {
      control: 'text',
      description: 'Testo del link',
    },
    withIcon: {
        control: { type: 'select' },
        options: [null, ...getAllIconTypes()],
        description: 'Icona da visualizzare a destra',
    },
    border: {
        control: { type: 'boolean' },
        description: 'Mostra il bordo del link',
        defaultValue: false,
    },
    borderRadius: {
        control: { type: 'boolean' },
        description: 'Mostra il bordo arrotondato del link',
        defaultValue: false,
    },
    dataActive: {
        control: { type: 'boolean' },
        description: 'Attiva lo stato attivo del link',
        defaultValue: false,    
    }
  },
} as Meta;

const Template: StoryFn<LinkProps> = (args) => {
  return link(args);
};

export const Header = Template.bind({});
Header.args = {
  variant: 'header',
  href: '#',
  target: '_self',
  label: 'Punti Vendita',
  withIcon: "tipo_posizione",
};

export const ConIcona = Template.bind({});
ConIcona.args = {
  variant: 'inline',
  href: '#a',
  target: '_self',
  label: 'Link Primario',
  withIcon: "tipo_freccia_dx",
  border: false,
  borderRadius: false,
};


export const tag1 = Template.bind({});
tag1.args = {
  variant: 'tag',
  href: '#',
  target: '_self',
  label: 'Link Primario',
  withIcon: null,
  border: true,
  borderRadius: false,
};

export const tag2 = Template.bind({});
tag2.args = {
  variant: 'tag',
  href: '#a',
  target: '_self',
  label: 'Link Primario',
  withIcon: null,
  border: true,
  borderRadius: true,
};

// Nuove storie con liste di tag

// Definisco un'interfaccia per i tag nella lista
interface TagItem {
  label: string;
  href?: string;
  withIcon?: IconType | null;
  active?: boolean;
}

// Template personalizzato per le liste di tag
const TagListTemplate: StoryFn = (args) => {
  const { variant, borderRadius, tags } = args as { 
    variant: LinkVariant;
    borderRadius: boolean;
    tags: TagItem[];
  };
  
  return html`
    <ul style="display: flex; list-style: none; padding: 0; margin: 0; overflow: scroll; scrollbar-width: none;">
      ${tags.map((tagItem: TagItem) => html`
        <li>
          ${link({
            variant: variant,
            href: tagItem.href || '#',
            target: '_self',
            label: tagItem.label,
            withIcon: tagItem.withIcon || null,
            border: true,
            borderRadius: borderRadius,
            dataActive: tagItem.active ? true : false
          })}
        </li>
      `)}
    </ul>
  `;
};

export const ListaDiTag1 = TagListTemplate.bind({});
ListaDiTag1.args = {
  variant: 'tag',
  borderRadius: false,
  tags: [
    { label: 'Matrimoniale', href: '#', active: true },
    { label: '1 piazza e mezza', href: '#', active: false },
    { label: 'Singolo', href: '#', active: false },
  ]
};

export const ListaDiTag2 = TagListTemplate.bind({});
ListaDiTag2.args = {
  variant: 'tag',
  borderRadius: true,
  tags: [
    { label: 'Tutto', href: '#', active: true },
    { label: 'Promozioni', href: '#', active: false },
    { label: 'Piani cottura', href: '#', active: false },
    { label: 'Forni', href: '#', active: false },
    { label: 'Lavastoviglie da incasso', href: '#', active: false },
    { label: 'Forni a microonde', href: '#', active: false },
    { label: 'Piano cottura a induzione', href: '#', active: false },
  ]
};