import { Meta, StoryObj } from '@storybook/web-components';
import { carousel, CarouselProps } from '@/components/carousel/carousel';
import '@/components/carousel/carousel.css';

export default {
  title: 'Carosello',
  tags: ['autodocs'],
  // Utilizziamo una funzione di rendering per il componente
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
    image: 'https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__',
    alt: 'Descrizione della prima immagine',
    title: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__',
    alt: 'Descrizione della seconda immagine',
    title: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__',
    alt: 'Descrizione della terza immagine',
    title: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__',
    alt: 'Descrizione della quarta immagine',
    title: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__',
    alt: 'Descrizione della quinta immagine',
    title: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__',
    alt: 'Descrizione della sesta immagine',
    title: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__',
    alt: 'Descrizione della settima immagine',
    title: 'Slide 7',
    caption: 'Slide 7'
  }
];

export const Default: Story = {
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    delay: 5000,
    multiSlide: true,
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: false,
    showPagination: true,
    showCaptions: true
  },
};

export const ThreeSlides: Story = {
  args: {
    ...Default.args,
    slidesPerView: 3,
    spaceBetween: 30,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con visualizzazione di 3 slide contemporaneamente e più spazio tra di esse.'
      },
    },
  },
};

export const CenteredSlides: Story = {
  args: {
    ...Default.args,
    centeredSlides: true,
    slidesPerView: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con la slide attiva centrata e le slide adiacenti parzialmente visibili.'
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

export const ResponsiveBreakpoints: Story = {
  args: {
    ...Default.args,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello multi-slide con breakpoint responsivi personalizzati. Ridimensiona la finestra per vedere il comportamento su diverse larghezze dello schermo.'
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
        story: 'Carosello multi-slide senza i pallini di paginazione. Utilizza solo le frecce di navigazione.'
      },
    },
  },
};

export const NoCaptions: Story = {
  args: {
    ...Default.args,
    showCaptions: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello multi-slide senza le didascalie sotto le immagini.'
      },
    },
  },
};