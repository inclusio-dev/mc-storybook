import { createTabs } from '@/components/tab/tab';
import type { LitTabsProps } from '@/components/tab/tab';
import type { StoryFn, Meta } from '@storybook/web-components';
import { html } from 'lit';

export default {
    title: 'Tab',
    tags: ['autodocs'],
  } as Meta;

const Template: StoryFn<Omit<LitTabsProps, 'container'>> = (args: any) => {
  const container = document.createElement('div');

  container.innerHTML = '';

  createTabs({
    ...args,
    container,
    tabs: args.tabs.map((tab: any) => ({
        ...tab,
        content: typeof tab.content === 'function' ? tab.content() : tab.content,
      })),
  });
  return container;
};

export const TabDefault = Template.bind({});
TabDefault.args = {
  tabs: [
    {
      label: 'Prima',
      content:
        'Contenuto della prima tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      label: 'Seconda',
      content:
        'Contenuto della seconda tab. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.',
    },
    {
      label: 'Terza',
      content: () => html`<p>Contenuto della terza tab. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>`
    },
  ],
  variant: 'default',
  activeTab: 0,
};

export const TabPieno = Template.bind({});
TabPieno.args = {
  tabs: [
    {
      label: 'Prima',
      content:
        'Contenuto della prima tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      label: 'Seconda',
      content:
        'Contenuto della seconda tab. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.',
    },
    {
      label: 'Terza',
      content: () => html`<p>Contenuto della terza tab. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>`
    },
  ],
  variant: 'pieno',
  activeTab: 0,
};