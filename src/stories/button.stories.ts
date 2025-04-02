import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/web-components';

import type { ButtonProps } from '@/components/button/button';
import { button } from '@/components/button/button';
import { getAllIconTypes } from '@/components/icon/iconSvgs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
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
    },
    width: {
      control: { type: 'select' },
      options: ['fitcontent', 'fixed'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primario', 'secondario', 'terziario', 'dolcecasa', 'dolcecasanero'],
    },
    type: {
      control: { type: 'select' },
      options: ['pieno', 'contorno'],
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se disabilitato',
    },
    label: {
      control: { type: 'text' },
    }
  },
  args: { onClick: fn() },
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
    variant: 'primario',
    type: 'pieno',
    label: '',
  },
};