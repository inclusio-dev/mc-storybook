import { Meta, StoryObj } from '@storybook/web-components';
import { carousel, CarouselProps } from '@/components/carousel/carousel';
import '@/components/carousel/carousel.css';

// Nota: Non importiamo direttamente i CSS di Swiper qui perché causerebbe errori
// Dobbiamo caricare i CSS di Swiper in modo diverso (vedi sotto)

export default {
  title: 'Carosello',
  tags: ['autodocs'],
  // Utilizziamo una funzione di rendering per il component
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
    return carousel(args);
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
    slides: {
      control: 'object',
      description: 'Array di oggetti slide con proprietà image, alt, title e caption',
    },
    onSlideChange: { action: 'slideChanged' }
  },
  parameters: {
    docs: {
      description: {
        component: `
  ### Caratteristiche di accessibilità
  - **Navigazione da tastiera**: utilizzare le frecce sinistra/destra per navigare, Home/End per la prima/ultima slide
  - **Supporto screen reader**: annunci ARIA per cambi di slide e descrizioni appropriate
  - **Pausa automatica**: l'autoplay si mette in pausa quando l'utente interagisce con il carosello
  - **Controlli grandi**: pulsanti di navigazione con dimensioni adeguate (44x44px) 
  - **Focus visibile**: indicatori di focus chiaramente visibili
  - **Contrasto**: contrasto di colore migliorato per i controlli`
      },
    },
    a11y: {
      config: {
        // Configurazioni specifiche per i test di accessibilità
        rules: [
          { id: 'button-name', enabled: true },
          { id: 'image-alt', enabled: true },
        ],
      },
    },
  },
} as Meta<CarouselProps>;

type Story = StoryObj<CarouselProps>;

// Dati di esempio per tutte le storie
const sampleSlides = [
  {
    image: 'https://www.mondoconv.it/media/scandiweb/slider/r/e/reel_catalogo_gennaio_2025_desktop_copia_4.jpg',
    alt: 'Descrizione della prima immagine',
    title: 'Slide 1'
  },
  {
    image: 'https://www.mondoconv.it/media/scandiweb/slider/n/o/non_solo_convenienza_1_3.jpg',
    alt: 'Descrizione della seconda immagine',
    title: 'Slide 2'
  },
  {
    image: 'https://www.mondoconv.it/media/scandiweb/slider/d/o/dolce_casa_desktop_copia_2.jpg',
    alt: 'Descrizione della terza immagine',
    title: 'Slide 3'
  },
  {
    image: 'https://www.mondoconv.it/media/scandiweb/slider/r/e/reel_gennaio2024_desktop.jpg',
    alt: 'Descrizione della quarta immagine',
    title: 'Slide 4'
  }
];

export const Default: Story = {
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: false,
    delay: 1000
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
        story: 'Carosello con riproduzione automatica attivata. Si mette in pausa quando l\'utente interagisce con esso.'
      },
    },
  },
};

export const NoLoop: Story = {
  args: {
    ...Default.args,
    loop: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello senza ripetizione infinita. Si ferma all\'ultima o alla prima slide.'
      },
    },
  },
};

export const FastTransition: Story = {
  args: {
    ...Default.args,
    autoplay: true,
    delay: 2000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con transizioni più rapide (2 secondi tra le slide).'
      },
    },
  },
};

// Storia con documentazione aggiuntiva sull'accessibilità
export const AccessibilityFeatures: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Caratteristiche di accessibilità
- **Navigazione da tastiera**: utilizzare le frecce sinistra/destra per navigare, Home/End per la prima/ultima slide
- **Supporto screen reader**: annunci ARIA per cambi di slide e descrizioni appropriate
- **Pausa automatica**: l'autoplay si mette in pausa quando l'utente interagisce con il carosello
- **Controlli grandi**: pulsanti di navigazione con dimensioni adeguate (44x44px) 
- **Focus visibile**: indicatori di focus chiaramente visibili
- **Contrasto**: contrasto di colore migliorato per i controlli`
      },
    },
  },
};