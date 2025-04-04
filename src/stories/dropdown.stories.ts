import { StoryFn, Meta } from '@storybook/web-components';
import { html } from 'lit';
import { dropdown, DropdownProps } from '@/components/dropdown/dropdown';
import { getAllIconTypes } from '@/components/icon/iconSvgs';

export default {
  title: 'Dropdown',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' , description: 'Etichetta del pulsante',},
    variant: { 
      control: { type: 'select' }, 
      options: ['iconLabel', 'iconLabelCart', 'onlyLabel'],
      description: 'Variante del dropdown',
    },
    iconName: {
          control: { type: 'select' },
          options: [null, ...getAllIconTypes()],
          description: 'Icona da visualizzare',
        },
    dropdownWidth: { control: 'text', description: 'Larghezza del dropdown',},
    dropdownClass: {contro: 'text', description: 'Classe CSS per il dropdown',},
    labelOnTopRight: { control: 'text', description: 'Numero prodotti nel carrello',}
  }
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => {
  // Definisci un contenuto HTML predefinito per la storia, ma permette di sovrascriverlo
  const defaultContent = html`
    <h3>Bagni</h3>
    <div>
        <ul style="display: grid;grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(3, 1fr);grid-column-gap: 0px;grid-row-gap: 0px;">
        <li><a href="#">Mobili bagno a terra</a></li>
        <li><a href="#">Mobili bagno sospesi</a></li>
        <li><a href="#">Mobiletti multiuso</a></li>
        <li><a href="#">Scarpiere</a></li>
        <li><a href="#">Specchi bagno</a></li>
        <li><a href="#">Rubinetteria bagno</a></li>
        </ul>
    </div>
    <a href="#">Collezione bagni</a>
  `;

  return html`
    ${dropdown({
      ...args,
      content: args.content || defaultContent
    })}
  `;
};

export const iconLabel = Template.bind({});
iconLabel.args = {
  label: 'Catalogo',
  variant: 'iconLabel',
  iconName: 'tipo_catalogo',
  dropdownWidth: '470px'
};

export const iconLabelCart = Template.bind({});
iconLabelCart.args = {
  label: 'Carrello',
  variant: 'iconLabelCart',
  iconName: 'tipo_carrello',
  dropdownWidth: '470px',
  labelOnTopRight: '2'
};

export const onlyLabel = Template.bind({});
onlyLabel.args = {
  label: 'Bagni',
  variant: 'onlyLabel',
  iconName: null,
  dropdownWidth: '470px'
};