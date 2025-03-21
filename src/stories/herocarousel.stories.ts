import { Meta, StoryObj } from '@storybook/web-components';
import { heroCarousel, HeroCarouselProps } from '@/components/herocarousel/herocarousel';
import '@/components/herocarousel/herocarousel.css';

export default {
  title: 'Hero Carosello',
  tags: ['autodocs'],
  render: (args) => {
    // Caricamento dinamico dei CSS di Swiper nel preview di Storybook
    const injectSwiperStyles = () => {
      // Verifica se gli stili sono già caricati
      if (!document.getElementById('swiper-styles')) {
        const swiperCoreStyle = document.createElement('link');
        swiperCoreStyle.id = 'swiper-styles';
        swiperCoreStyle.rel = 'stylesheet';
        swiperCoreStyle.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.head.appendChild(swiperCoreStyle);
      }
    };

    // Eseguiamo questa funzione per ogni rendering
    injectSwiperStyles();

    // Rendiamo il componente
    return heroCarousel(args);
  },
  argTypes: {
    autoplay: {
      control: 'boolean',
      description: 'Attiva/disattiva la riproduzione automatica del carosello',
      defaultValue: false,
    },
    loop: {
      control: 'boolean',
      description: 'Attiva/disattiva la ripetizione continua del carosello',
      defaultValue: true,
    },
    delay: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Tempo in millisecondi tra i cambi di slide in modalità autoplay',
      defaultValue: 5000,
    },
    showPagination: {
      control: 'boolean',
      description: 'Mostra/nascondi i pallini di paginazione',
      defaultValue: true,
    },
    backgroundColor: {
      control: 'color',
      description: 'Colore di sfondo predefinito per l\'area di testo',
      defaultValue: '#1e88e5',
    },
    slides: {
      control: 'object',
      description: 'Array di oggetti slide con proprietà image, title, description, linkText, linkUrl',
    },
    onSlideChange: { action: 'slideChanged' }
  },
  parameters: {
    docs: {
      description: {
        component: `
  ### Hero Carosello con area di testo e immagine
  
  Questo carosello presenta slide con un layout a due colonne: un'area di testo con sfondo colorato a sinistra e un'immagine a destra.
  Ogni slide include un titolo, una descrizione e un link d'azione.
  
  ### Caratteristiche principali
  - Layout responsive che si adatta a tutte le dimensioni dello schermo
  - Area di testo personalizzabile con sfondo colorato
  - Supporto per titoli, descrizioni e link d'azione
  - Transizioni fluide tra le slide
  
  ### Caratteristiche di accessibilità
  - Navigazione da tastiera completa
  - Supporto per screen reader
  - Controlli di pause/play
  - Focus visibile ben definito
  - Conformità con gli standard WCAG`
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'button-name', enabled: true },
          { id: 'image-alt', enabled: true },
        ],
      },
    },
  },
} as Meta<HeroCarouselProps>;

type Story = StoryObj<HeroCarouselProps>;

// Dati di esempio per tutte le storie
const sampleSlides = [
  {
    image: 'https://via.placeholder.com/800x500/3498db/ffffff?text=Immagine+1',
    alt: 'Immagine promozionale 1',
    title: 'Offerte speciali di primavera',
    description: 'Scopri le nostre offerte esclusive per la stagione primaverile. Approfitta di sconti fino al 50% su una selezione di prodotti.',
    linkText: 'Scopri le offerte',
    linkUrl: '#'
  },
  {
    image: 'https://via.placeholder.com/800x500/e74c3c/ffffff?text=Immagine+2',
    alt: 'Immagine promozionale 2',
    title: 'Nuova collezione disponibile',
    description: 'È arrivata la nuova collezione 2025. Design innovativi e materiali sostenibili per un comfort senza precedenti.',
    linkText: 'Sfoglia la collezione',
    linkUrl: '#',
    backgroundColor: '#d32f2f'
  },
  {
    image: 'https://via.placeholder.com/800x500/2ecc71/ffffff?text=Immagine+3',
    alt: 'Immagine promozionale 3',
    title: 'Servizio clienti premium',
    description: 'Il nostro servizio clienti è disponibile 24/7 per aiutarti. Contattaci per qualsiasi domanda o supporto di cui hai bisogno.',
    linkText: 'Contattaci ora',
    linkUrl: '#',
    backgroundColor: '#388e3c'
  }
];

export const Default: Story = {
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    delay: 5000,
    showPagination: true,
    backgroundColor: '#1e88e5'
  },
};

export const WithAutoplay: Story = {
  args: {
    ...Default.args,
    autoplay: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero carosello con autoplay attivato. Si mette in pausa quando l\'utente interagisce con esso.'
      },
    },
  },
};

export const NoPagination: Story = {
  args: {
    ...Default.args,
    showPagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero carosello senza i pallini di paginazione. Utilizza solo le frecce di navigazione.'
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    ...Default.args,
    backgroundColor: '#212121',
    slides: sampleSlides.map(slide => ({
      ...slide,
      backgroundColor: slide.backgroundColor || '#212121'
    }))
  },
  parameters: {
    docs: {
      description: {
        story: 'Versione con tema scuro del carosello hero.'
      },
    },
  },
};

export const CustomColors: Story = {
  args: {
    ...Default.args,
    slides: [
      {
        ...sampleSlides[0],
        backgroundColor: '#673ab7'
      },
      {
        ...sampleSlides[1],
        backgroundColor: '#ff5722'
      },
      {
        ...sampleSlides[2],
        backgroundColor: '#009688'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello hero con colori personalizzati per ogni slide.'
      },
    },
  },
};