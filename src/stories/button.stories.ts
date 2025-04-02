import type { Meta, StoryObj } from '@storybook/web-components';
import type { ButtonProps } from '@/components/button/button';
import { button } from '@/components/button/button';
import { getAllIconTypes } from '@/components/icon/iconSvgs';

const meta = {
  title: 'Button',
  tags: ['autodocs'],
  render: (args) => button(args),
  argTypes: {
    iconleft: {
      control: { type: 'select' },
      options: [null, ...getAllIconTypes()],
      description: 'Icona da visualizzare a sinistra',
    },
    iconright: {
      control: { type: 'select' },
      options: [null, ...getAllIconTypes()],
      description: 'Icona da visualizzare a destra',
    },
    iconsize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Dimensioni delle icone laterali',
    },
    width: {
      control: { type: 'select' },
      options: ['fitcontent', 'fixed'],
      description: 'Larghezza',
    },
    height: {
      control: { type: 'select' },
      options: ['fitcontent', 'fixed'],
      description: 'Altezza',
    },
    variant: {
      control: { type: 'select' },
      options: ['primario', 'secondario', 'terziario', 'dolcecasa', 'dolcecasanero', 'findomestic', 'carrello'],
      description: 'Versioni',
    },
    type: {
      control: { type: 'select' },
      options: ['pieno', 'contorno'],
      description: 'Stile dello sfondo',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se disabilitato',
    },
    label: {
      control: { type: 'text' },
      description: 'Testo interno al pulsante',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Vai al link del componente Button sul Figma: [link componente Button](https://www.figma.com/design/201b1LgGLEDCibrm9arMve/UI-KIT-Mondoconv?node-id=243-188&t=grO56kgmhjb5kRnO-4)`
      }
    }
  }
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const PrimarioSolido: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    disabled: false,
    label: 'Testo',
  },
};

export const PrimarioContorno: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'primario',
    type: 'contorno',
    label: 'Testo',
  },
};

export const SecondarioSolido: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'secondario',
    type: 'pieno',
    label: 'Testo',
  },
};

export const SecondarioContorno: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'secondario',
    type: 'contorno',
    label: 'Testo',
  },
};

export const TerziarioSolido: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'terziario',
    type: 'pieno',
    label: 'Testo',
  },
};

export const DolcecasaSolido: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'dolcecasa',
    type: 'pieno',
    label: 'Testo',
  },
};

export const DolcecasaneroSolido: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'dolcecasanero',
    type: 'pieno',
    label: 'Testo',
  },
};

export const PrimarioSolidoDisabilitato: Story = {
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    disabled: true,
    label: 'Testo',
  },
};

export const CarrelloDesktop: Story = {
  args: {
    iconleft: 'tipo_carrello',
    iconright: null,
    iconsize: 'medium',
    width: 'fitcontent',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    label: '',
  },
};

export const CarrelloMobile: Story = {
  args: {
    iconleft: 'tipo_carrello',
    iconright: null,
    iconsize: 'small',
    width: 'fitcontent',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    label: '',
  },
};

export const SecondarioSolidoMenu: Story = {
  args: {
    iconleft: null,
    iconright: null,
    iconsize: 'small',
    width: 'fixed',
    height: 'fitcontent',
    variant: 'secondario',
    type: 'pieno',
    disabled: false,
    label: 'Testo',
  },
};

export const Findomestic: Story = {
  args: {
    iconleft: null,
    iconright: null,
    iconsize: 'small',
    width: 'fitcontent',
    height: 'fitcontent',
    variant: 'findomestic',
    type: 'pieno',
    disabled: false,
    label: 'Paga a rate',
  },
};

export const ProcediAcquisto: Story = {
  args: {
    iconleft: null,
    iconright: 'tipo_riproduci',
    iconsize: 'medium',
    width: 'fixed',
    height: 'fixed',
    variant: 'carrello',
    type: 'pieno',
    disabled: false,
    label: 'Procedi con l\'acquisto',
  },
};