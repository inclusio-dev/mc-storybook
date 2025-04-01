import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/web-components';

import type { ButtonProps } from '@/components/button/button';
import { button } from '@/components/button/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Button',
  tags: ['autodocs'],
  render: (args) => button(args),
  argTypes: {
    iconleft: {
      control: { type: 'boolean' },
      description: 'Se presente icona a sinistra',
    },
    iconright: {
      control: { type: 'boolean' },
      description: 'Se presente icona a destra',
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
    label: {
      control: { type: 'text' },
    }
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimarioSolido: Story = {
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'primario',
    type: 'pieno',
    label: 'Testo',
  },
};

export const PrimarioContorno: Story = {
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'primario',
    type: 'contorno',
    label: 'Testo',
  },
};

export const SecondarioSolido: Story = {
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'secondario',
    type: 'pieno',
    label: 'Testo',
  },
};

export const SecondarioContorno: Story = {
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'secondario',
    type: 'contorno',
    label: 'Testo',
  },
};

export const TerziarioSolido: Story = {
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'terziario',
    type: 'pieno',
    label: 'Testo',
  },
};

export const DolcecasaSolido: Story = {
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'dolcecasa',
    type: 'pieno',
    label: 'Testo',
  },
};

export const DolcecasaneroSolido: Story = {
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'dolcecasanero',
    type: 'pieno',
    label: 'Testo',
  },
};

export const CarrelloDesktop: Story = {
  args: {
    iconleft: true,
    iconright: false,
    iconsize: 'medium',
    width: 'fitcontent',
    variant: 'primario',
    type: 'pieno',
    label: '',
  },
};

export const CarrelloMobile: Story = {
  args: {
    iconleft: true,
    iconright: false,
    iconsize: 'small',
    width: 'fitcontent',
    variant: 'primario',
    type: 'pieno',
    label: '',
  },
};