import { html } from 'lit';

import './herocarousel.css';

// Aggiungiamo gli stili direttamente nel componente
// per evitare problemi di caricamento in Storybook
const ensureSwiperStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('swiper-core-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'swiper-core-styles';
    styleEl.textContent = `
      /* Stili base di Swiper */
      .swiper {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        width: 100%;
        height: auto;
      }
      .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
      }
      .swiper-slide {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;
      }
      /* Frecce di navigazione */
      .swiper-button-prev,
      .swiper-button-next {
        border: 2px solid #fff;
        position: absolute;
        top: 50%;
        width: 44px;
        height: 44px;
        margin-top: -22px;
        z-index: 10;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--swiper-navigation-color, #fff);
        transition: opacity 0.3s ease;
      }
      .swiper-button-prev:after,
      .swiper-button-next:after {
        font-family: swiper-icons;
        font-size: 24px;
        font-weight: bold;
        text-transform: none !important;
        letter-spacing: 0;
      }
      .swiper-button-prev.swiper-button-disabled,
      .swiper-button-next.swiper-button-disabled {
        opacity: 0.35;
        cursor: auto;
        pointer-events: none;
      }
      .swiper-button-prev {
        left: 10px;
        right: auto;
      }
      .swiper-button-prev:after {
        content: 'prev';
      }
      .swiper-button-next {
        right: 10px;
        left: auto;
      }
      .swiper-button-next:after {
        content: 'next';
      }
      
      /* Paginazione */
      .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: 300ms opacity;
        transform: translate3d(0, 0, 0);
        z-index: 10;
        bottom: 10px;
        left: 0;
        width: 100%;
      }
      .swiper-pagination-bullets {
        bottom: 10px;
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        display: inline-block;
        border-radius: 50%;
        background: var(--swiper-pagination-color, #000);
        opacity: 0.2;
        margin: 0 4px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .swiper-pagination-bullet:hover {
        opacity: 0.5;
      }
      .swiper-pagination-bullet:focus {
        outline: 2px solid var(--swiper-outline-color, #000);
        outline-offset: 2px;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
        background: var(--swiper-pagination-color, #007aff);
      }

      /* Regole di accessibilità specifiche */
      .swiper-button-prev:focus,
      .swiper-button-next:focus {
        outline: 2px solid var(--swiper-navigation-color, #007aff);
        outline-offset: 2px;
      }

      @font-face {
        font-family: 'swiper-icons';
        src: url('data:application/font-woff;charset=utf-8;base64, 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');
        font-weight: 400;
        font-style: normal;
      }
    `;
    document.head.appendChild(styleEl);
  }
};

// Definizione delle slide di default
const DEFAULT_HERO_SLIDES = [
  {
    image: 'https://via.placeholder.com/800x500/3498db/ffffff?text=Slide+1',
    alt: 'Slide 1',
    title: 'Titolo della prima slide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    linkText: 'Scopri di più',
    linkUrl: '#'
  },
  {
    image: 'https://via.placeholder.com/800x500/e74c3c/ffffff?text=Slide+2',
    alt: 'Slide 2',
    title: 'Titolo della seconda slide',
    description: 'Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst.',
    linkText: 'Leggi tutto',
    linkUrl: '#'
  },
  {
    image: 'https://via.placeholder.com/800x500/2ecc71/ffffff?text=Slide+3',
    alt: 'Slide 3',
    title: 'Titolo della terza slide',
    description: 'Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.',
    linkText: 'Vai all\'offerta',
    linkUrl: '#'
  }
];

export interface HeroSlide {
  image: string;
  alt?: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  backgroundColor?: string | null;
}

export interface HeroCarouselProps {
  slides?: HeroSlide[];
  autoplay?: boolean;
  loop?: boolean;
  delay?: number;
  showPagination?: boolean;
  backgroundColor?: string;
  onSlideChange?: (index: number) => void;
}

// Ottiene le slide, usando quelle di default se non specificate
const getSlides = (props: HeroCarouselProps) => {
  if (props.slides && props.slides.length > 0) {
    return props.slides;
  }
  
  // Crea slide di default se non specificate
  return DEFAULT_HERO_SLIDES;
};

// Variabili globali
let swiper: any = null;
let liveRegion: HTMLElement | null = null;
let currentSlide = 0;
let swiperInitialized = false;

const destroySwiper = () => {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
    swiperInitialized = false;
  }
};

const initSwiper = (container: Element, props: HeroCarouselProps) => {
  // Distruggi l'istanza precedente se esiste
  destroySwiper();
  
  // Carica dinamicamente Swiper
  Promise.all([
    import('swiper'),
    import('swiper/modules')
  ]).then(([{ Swiper }, { Navigation, Pagination, A11y, Autoplay }]) => {
    if (!container) return;
    
    // Registra i moduli necessari
    Swiper.use([Navigation, Pagination, A11y, Autoplay]);
    
    // Inizializza una nuova istanza di Swiper
    swiper = new Swiper(container as HTMLElement, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: props.loop,
      autoplay: props.autoplay ? {
        delay: props.delay || 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      } : false,
      
      // Impostazioni di navigazione accessibili
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      pagination: props.showPagination !== false ? {
        el: '.swiper-pagination',
        clickable: true,
        bulletElement: 'button',
        renderBullet: function (index: number, className: string) {
          return `<button class="${className}" aria-label="Vai alla slide ${index + 1}"></button>`;
        }
      } : false,
      
      // Miglioramenti per l'accessibilità
      a11y: {
        enabled: true,
        prevSlideMessage: 'Slide precedente',
        nextSlideMessage: 'Slide successiva',
        firstSlideMessage: 'Questa è la prima slide',
        lastSlideMessage: 'Questa è l\'ultima slide',
        paginationBulletMessage: 'Vai alla slide {{index}}',
        containerMessage: 'Carosello di presentazione',
        containerRoleDescriptionMessage: 'Carosello',
        itemRoleDescriptionMessage: 'Slide'
      },
      
      // Velocità di transizione ridotta per una migliore accessibilità
      speed: 500,
      
      // Per migliorare l'accessibilità, disabilitiamo temporaneamente gli effetti 
      // di transizione quando viene utilizzata la navigazione da tastiera
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      
      // Gestisci gli eventi
      on: {
        slideChange: function(swiperInstance) {
          if (swiper) {
            currentSlide = swiper.realIndex;
            
            // Aggiorna la regione live per utenti screen reader
            const slides = getSlides(props);
            const slide = slides[currentSlide];
            if (slide && liveRegion) {
              liveRegion.textContent = `Slide corrente: ${slide.title}`;
            }
            
            // Aggiorna gli attributi tabindex per la navigazione da tastiera
            updateTabIndex();
            
            // Chiama il callback se definito
            if (props.onSlideChange) {
              props.onSlideChange(currentSlide);
            }
          }
        },
        // Utilizziamo questo evento per gestire meglio il focus
        slideChangeTransitionEnd: function() {
          const activeSlide = document.querySelector('.swiper-slide-active');
          if (activeSlide) {
            activeSlide.setAttribute('tabindex', '0');
          }
        }
      }
    });
    
    swiperInitialized = true;
    
    // Aggiungi controlli da tastiera personalizzati
    setupKeyboardControls(props);
    
    // Inizializza correttamente lo stato di tabindex
    updateTabIndex();
  }).catch(error => {
    console.error('Errore durante l\'inizializzazione di Swiper:', error);
  });
};

// Aggiunge funzione per aggiornare gli attributi tabindex
const updateTabIndex = () => {
  if (!swiper) return;
  
  // Otteniamo tutte le slide
  const slides = document.querySelectorAll('.swiper-slide');
  
  slides.forEach((slide, index) => {
    // Impostiamo tabindex=0 solo sulla slide attiva, -1 sulle altre
    if (index === currentSlide) {
      slide.setAttribute('tabindex', '0');
    } else {
      slide.setAttribute('tabindex', '-1');
    }
  });
};

// Miglioriamo i controlli da tastiera
const setupKeyboardControls = (props: HeroCarouselProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!document.activeElement?.closest('.hero-carousel-container')) return;
    
    const isNavigationKey = ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key);
    
    // Se stiamo usando tasti di navigazione, assicuriamoci che le transizioni siano immediate
    if (isNavigationKey && swiper) {
      // Salva lo stato attuale della velocità di transizione
      const originalSpeed = swiper.params.speed;
      
      // Imposta la velocità a 0 temporaneamente per una transizione immediata
      swiper.params.speed = 0;
      
      switch(event.key) {
        case 'ArrowLeft':
          swiper.slidePrev();
          break;
        case 'ArrowRight':
          swiper.slideNext();
          break;
        case 'Home':
          swiper.slideTo(0);
          break;
        case 'End':
          swiper.slideTo(getSlides(props).length - 1);
          break;
      }
      
      // Aggiorna immediatamente gli attributi tabindex
      updateTabIndex();
      
      // Ripristina la velocità originale dopo un breve delay
      setTimeout(() => {
        if (swiper) {
          swiper.params.speed = originalSpeed;
        }
      }, 50);
      
      event.preventDefault();
    }
  };

  // Rimuovi listener precedenti per evitare duplicati
  document.removeEventListener('keydown', handleKeyDown);
  document.addEventListener('keydown', handleKeyDown);
};

const addA11yAnnouncer = (container: Element) => {
  // Crea un elemento per annunci ARIA live
  if (liveRegion) container.removeChild(liveRegion);
  
  liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.classList.add('visually-hidden');
  liveRegion.id = 'hero-carousel-announcer';
  container.appendChild(liveRegion);
};

const pauseAutoplay = () => {
  if (swiper && swiper.autoplay && swiper.autoplay.running) {
    swiper.autoplay.stop();
    
    // Aggiorna lo stato visivo del pulsante
    const button = document.querySelector('.hero-carousel-play-pause');
    if (button) {
      const icon = button.querySelector('span');
      if (icon) {
        icon.className = 'play-icon';
      }
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-label', 'Avvia il carosello');
    }
  }
};

const resumeAutoplay = (props: HeroCarouselProps) => {
  if (swiper && swiper.autoplay && props.autoplay) {
    swiper.autoplay.start();
    
    // Aggiorna lo stato visivo del pulsante
    const button = document.querySelector('.hero-carousel-play-pause');
    if (button) {
      const icon = button.querySelector('span');
      if (icon) {
        icon.className = 'pause-icon';
      }
      button.setAttribute('aria-pressed', 'true');
      button.setAttribute('aria-label', 'Metti in pausa il carosello');
    }
  }
};

const toggleAutoplay = (props: HeroCarouselProps, buttonElement: HTMLButtonElement | HTMLElement) => {
  if (!swiper || !swiper.autoplay) return;
  
  // Ottieni lo stato corrente
  const isRunning = swiper.autoplay.running;

  // Ottieni l'elemento icon
  const icon = buttonElement.querySelector('span');
  
  if (isRunning) {
    // Se è in esecuzione, fermalo
    swiper.autoplay.stop();
    
    // Aggiorna l'icona e il pulsante
    if (icon) {
      icon.className = 'play-icon';
    }
    
    buttonElement.setAttribute('aria-pressed', 'false');
    buttonElement.setAttribute('aria-label', 'Avvia il carosello');
    
    console.log('Autoplay fermato');
  } else {
    // Se è fermo, avvialo
    swiper.autoplay.start();
    
    // Aggiorna l'icona e il pulsante
    if (icon) {
      icon.className = 'pause-icon';
    }
    
    buttonElement.setAttribute('aria-pressed', 'true');
    buttonElement.setAttribute('aria-label', 'Metti in pausa il carosello');
    
    console.log('Autoplay avviato');
  }
};

// Funzione di supporto per ottenere il colore di sfondo valido
const getBgColor = (slide: HeroSlide, props: HeroCarouselProps): string => {
  // Verifichiamo se la slide ha un colore di sfondo e non è null
  if (slide.backgroundColor) {
    return slide.backgroundColor;
  }
  
  // Altrimenti utilizziamo il colore predefinito delle props
  if (props.backgroundColor) {
    return props.backgroundColor;
  }
  
  // Valore fallback sicuro
  return '#1e88e5';
};

// Componente principale
export const heroCarousel = (props: HeroCarouselProps) => {
  const mergedProps = {
    ...props,
    slides: getSlides(props),
    autoplay: props.autoplay || false,
    loop: props.loop !== undefined ? props.loop : true,
    delay: props.delay || 5000,
    showPagination: props.showPagination !== undefined ? props.showPagination : true,
    backgroundColor: props.backgroundColor || '#1e88e5' // Default azzurro
  };
  
  // Assicuriamoci che gli stili di Swiper siano caricati
  ensureSwiperStyles();
  
  // Setup del carosello dopo il rendering
  setTimeout(() => {
    const container = document.querySelector('.hero-carousel-container');
    const swiperContainer = document.querySelector('.swiper');
    
    if (container && swiperContainer) {
      addA11yAnnouncer(container);
      initSwiper(swiperContainer, mergedProps);
      
      // Aggiungi event listener diretto sul pulsante dopo l'inizializzazione
      const playPauseButton = document.querySelector('.hero-carousel-play-pause');
      if (playPauseButton) {
        // Rimuovi eventuali event listener precedenti
        const newButton = playPauseButton.cloneNode(true);
        if (playPauseButton.parentNode) {
          playPauseButton.parentNode.replaceChild(newButton, playPauseButton);
        }
        
        // Aggiungi event listener direttamente
        newButton.addEventListener('click', () => {
          toggleAutoplay(mergedProps, newButton as HTMLElement);
        });
      }
      
      // Debug info
      console.log('Hero carosello inizializzato con:', {
        slides: mergedProps.slides.length,
        autoplay: mergedProps.autoplay,
        loop: mergedProps.loop,
        autoplay_running: swiper?.autoplay?.running
      });
    }
  }, 0);
  
  // Gestisci la pulizia quando l'elemento viene rimosso
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', destroySwiper);
  }
  
  // Renderizza l'HTML del carosello
  return html`
    <div class="hero-carousel-container">
      <!-- Titolo accessibile del carosello -->
      <h2 id="hero-carousel-title" class="visually-hidden">Carosello di presentazione</h2>
      
      <!-- Istruzioni di accessibilità per screen reader -->
      <div class="visually-hidden" aria-live="polite">
        Utilizzare i tasti freccia sinistra e destra per navigare tra le slide. 
        Premere Home per andare alla prima slide, End per l'ultima.
      </div>
      
      <!-- Swiper container -->
      <div 
        class="swiper" 
        role="region"
        aria-roledescription="carosello" 
        aria-labelledby="hero-carousel-title"
      >
        <!-- Pulsante Play/Pausa -->
        <button 
          class="hero-carousel-play-pause" 
          type="button"
          aria-label="${mergedProps.autoplay ? 'Metti in pausa il carosello' : 'Avvia il carosello'}"
          aria-pressed="${mergedProps.autoplay ? 'true' : 'false'}"
        >
          <span class="${mergedProps.autoplay ? 'pause-icon' : 'play-icon'}"></span>
        </button>
        
        <div class="swiper-wrapper">
          ${mergedProps.slides.map((slide, index) => html`
            <div 
              class="swiper-slide hero-slide" 
              role="group" 
              aria-roledescription="slide"
              aria-label="${slide.title}"
              tabindex="${currentSlide === index ? '0' : '-1'}"
              aria-hidden="${currentSlide === index ? 'false' : 'true'}"
            >
              <div class="hero-content-wrapper">
                <!-- Utilizziamo una funzione di supporto per ottenere il colore corretto -->
                <div class="hero-text-container" style="background-color: ${getBgColor(slide, mergedProps)}">
                  <div class="hero-text-content">
                    <h3 class="hero-title">${slide.title}</h3>
                    <p class="hero-description">${slide.description}</p>
                    <a href="${slide.linkUrl}" class="hero-link">${slide.linkText}</a>
                  </div>
                </div>
                <div class="hero-image-container">
                  <img 
                    src="${slide.image}" 
                    alt="${slide.alt || ''}" 
                    loading="lazy"
                    class="hero-image"
                  />
                </div>
              </div>
            </div>
          `)}
        </div>
        
        <!-- Controlli di navigazione -->
        <div class="swiper-button-prev" role="button" aria-label="Slide precedente" tabindex="0"></div>
        <div class="swiper-button-next" role="button" aria-label="Slide successiva" tabindex="0"></div>
        
        <!-- Paginazione (condizionale) -->
        ${mergedProps.showPagination ? html`
        <div class="swiper-pagination" role="group" aria-label="Selezione slide"></div>
        ` : ''}
      </div>
    </div>
  `;
};