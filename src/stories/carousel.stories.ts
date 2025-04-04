import { Meta, StoryObj } from '@storybook/web-components';
import { carousel, CarouselProps, NavigationButtonPosition } from '@/components/carousel/carousel';
import '@/components/carousel/carousel.css';

export default {
  title: 'Carosello',
  tags: ['autodocs'],
  render: (args) => {
    // Caricamento dinamico dei CSS di Swiper
    const injectSwiperStyles = () => {
      if (!document.getElementById('swiper-styles')) {
        const swiperCoreStyle = document.createElement('link');
        swiperCoreStyle.id = 'swiper-styles';
        swiperCoreStyle.rel = 'stylesheet';
        swiperCoreStyle.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.head.appendChild(swiperCoreStyle);
      }
    };

    // Carica gli stili di Swiper
    injectSwiperStyles();

    // Renderizza il componente
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
    multiSlide: {
      control: 'boolean',
      description: 'Attiva la modalità multi-slide',
      defaultValue: true,
    },
    slidesPerView: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Numero di slide visibili contemporaneamente',
      defaultValue: 5,
    },
    spaceBetween: {
      control: { type: 'number', min: 0, max: 50, step: 1 },
      description: 'Spazio tra le slide in pixel',
      defaultValue: 20,
    },
    centeredSlides: {
      control: 'boolean',
      description: 'Centra la slide attiva',
      defaultValue: false,
    },
    showPagination: {
      control: 'boolean',
      description: 'Mostra/nascondi i pallini di paginazione',
      defaultValue: true,
    },
    showCaptions: {
      control: 'boolean',
      description: 'Mostra/nascondi le didascalie delle slide',
      defaultValue: true,
    },
    navigationButtonPosition: {
      control: 'radio',
      options: [NavigationButtonPosition.OVERLAY, NavigationButtonPosition.OUTSIDE],
      description: 'Posizione dei pulsanti di navigazione (sovrapposti o esterni)',
      defaultValue: NavigationButtonPosition.OVERLAY,
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
  ### Carosello con visualizzazione multi-slide
  
  Questa versione del carosello permette di visualizzare più slide contemporaneamente.
  È possibile personalizzare il numero di slide visibili, lo spazio tra di esse e molte altre proprietà.
  
  ### Opzioni principali
  - **multiSlide**: attiva la modalità multi-slide
  - **slidesPerView**: imposta il numero di slide visibili contemporaneamente
  - **spaceBetween**: regola lo spazio tra le slide
  - **showPagination**: mostra o nasconde i punti di navigazione
  - **showCaptions**: mostra o nasconde le didascalie delle immagini
  - **navigationButtonPosition**: imposta la posizione dei pulsanti di navigazione (overlay o outside)
  
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
    image: 'https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__',
    caption: 'Titolo prodotto carousel1',
    href: '#'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__',
    caption: 'Titolo prodotto carousel2',
    href: '#'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__',
    caption: 'Titolo prodotto carousel3',
    href: '#'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__',
    caption: 'Titolo prodotto carousel4',
    href: '#'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__',
    caption: 'Titolo prodotto carousel5',
    href: '#'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__',
    caption: 'Titolo prodotto carousel6',
    href: '#'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__',
    caption: 'Titolo prodotto carousel7',
    href: '#'
  }
];

export const Default: Story = {
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    delay: 5000,
    multiSlide: false,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    showPagination: true,
    showCaptions: true,
    navigationButtonPosition: NavigationButtonPosition.OVERLAY
  },
};

export const FiveSlides: Story = {
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    delay: 5000,
    multiSlide: true,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: false,
    showPagination: false,
    showCaptions: true,
    navigationButtonPosition: NavigationButtonPosition.OUTSIDE
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con visualizzazione di 5 slide contemporaneamente con immagini di dimensioni 200x120px.'
      },
    },
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
        story: 'Carosello multi-slide con riproduzione automatica attivata. Si mette in pausa quando l\'utente interagisce con esso.'
      },
    },
  },
};

export const OutsideNavigation: Story = {
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    multiSlide: true,
    slidesPerView: 3,
    spaceBetween: 20,
    showCaptions: true,
    navigationButtonPosition: NavigationButtonPosition.OUTSIDE
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con pulsanti di navigazione posizionati all\'esterno dell\'area delle slide, con un padding di 2rem dai bordi.'
      },
    },
  },
};