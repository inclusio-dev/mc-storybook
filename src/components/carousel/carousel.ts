import { html } from 'lit';
import './carousel.css';

let Swiper: any;
let SwiperModules: any;

export interface CarouselTexts {
  imageGallery: string;
  previousSlide: string;
  nextSlide: string;
  currentSlide: string;
  slide: string;
  startCarousel: string;
  pauseCarousel: string;
  navigationInstructions: string;
  goToSlide: string;
  firstSlide: string;
  lastSlide: string;
}

export const defaultTexts: CarouselTexts = {
  imageGallery: 'Galleria di immagini',
  previousSlide: 'Slide precedente',
  nextSlide: 'Slide successiva',
  currentSlide: 'Slide corrente',
  slide: 'Slide',
  startCarousel: 'Avvia il carosello',
  pauseCarousel: 'Metti in pausa il carosello',
  navigationInstructions: 'Usa le frecce sinistra e destra per navigare tra le slide',
  goToSlide: 'Vai alla slide',
  firstSlide: 'Questa è la prima slide',
  lastSlide: 'Questa è l\'ultima slide'
};

export enum NavigationButtonPosition {
  OVERLAY = 'overlay',
  OUTSIDE = 'outside'
}

export interface CarouselProps {
  slides?: Array<{
    image: string;
    caption?: string;
  }>;
  autoplay?: boolean;
  loop?: boolean;
  delay?: number;
  multiSlide?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  centeredSlides?: boolean;
  showPagination?: boolean;
  showCaptions?: boolean;
  navigationButtonPosition?: NavigationButtonPosition;
  breakpoints?: {
    [width: number]: {
      slidesPerView?: number;
      spaceBetween?: number;
    };
  };
  onSlideChange?: (index: number) => void;
  texts?: Partial<CarouselTexts>;
}

const DEFAULT_IMAGES = [
  'https://via.placeholder.com/800x400/3498db/ffffff?text=Slide+1',
  'https://via.placeholder.com/800x400/e74c3c/ffffff?text=Slide+2',
  'https://via.placeholder.com/800x400/2ecc71/ffffff?text=Slide+3',
  'https://via.placeholder.com/800x400/f39c12/ffffff?text=Slide+4'
];

const swiperInstances = new Map();

export const carousel = (props: CarouselProps) => {

  const carouselId = `carousel-${Math.floor(Math.random() * 10000)}`;
  
  const texts = { ...defaultTexts, ...(props.texts || {}) };
  
  const mergedProps = {
    slides: props.slides || DEFAULT_IMAGES.map((image, i) => ({
      image,
      alt: `${texts.slide} ${i + 1}`,
      caption: `${texts.slide} ${i + 1}`
    })),
    autoplay: props.autoplay || false,
    loop: props.loop !== undefined ? props.loop : true,
    delay: props.delay || 5000,
    multiSlide: props.multiSlide || false,
    slidesPerView: props.slidesPerView || (props.multiSlide ? 3 : 1),
    spaceBetween: props.spaceBetween || 20,
    centeredSlides: props.centeredSlides || false,
    showPagination: props.showPagination !== undefined ? props.showPagination : true,
    showCaptions: props.showCaptions !== undefined ? props.showCaptions : true,
    navigationButtonPosition: props.navigationButtonPosition || NavigationButtonPosition.OVERLAY,
    texts
  };

  setTimeout(() => initCarousel(carouselId, mergedProps), 0);
  
  if (typeof window !== 'undefined') {
    const cleanup = () => destroySwiper(carouselId);
    window.removeEventListener('beforeunload', cleanup);
    window.addEventListener('beforeunload', cleanup);
  }
  
  return html`
    <div id="${carouselId}" class="carousel-container ${mergedProps.multiSlide ? 'carousel-multi-slide' : ''} nav-${mergedProps.navigationButtonPosition}">
      <h2 id="carousel-title-${carouselId}" class="visually-hidden">${mergedProps.texts.imageGallery}</h2>
      
      <div class="swiper-mask">
        <div class="swiper" role="region" aria-roledescription="carousel" aria-labelledby="carousel-title-${carouselId}">
        <!-- Play/Pause button -->
        <button 
          class="carousel-play-pause" 
          type="button"
          aria-label="${mergedProps.autoplay ? mergedProps.texts.pauseCarousel : mergedProps.texts.startCarousel}"
          aria-pressed="${mergedProps.autoplay ? 'true' : 'false'}"
        >
          <span class="${mergedProps.autoplay ? 'pause-icon' : 'play-icon'}"></span>
        </button>
        
        <!-- Accessibility instructions -->
        <div class="visually-hidden" aria-live="polite">
          ${mergedProps.texts.navigationInstructions}
        </div>
        
        <!-- Slides -->
        <div class="swiper-wrapper">
          ${mergedProps.slides.map((slide, index) => html`
            <div 
              class="swiper-slide" 
              role="group" 
              aria-roledescription="slide"
              aria-label="${slide.caption}"
              tabindex="${index === 0 ? '0' : '-1'}"
              aria-hidden="${index === 0 ? 'false' : 'true'}"
              ${index === 0 ? 'aria-current="true"' : ''}
            >
              <img 
                src="${slide.image}" 
                alt="" 
                loading="lazy"
              />
              ${slide.caption && mergedProps.showCaptions ? html`
                <div class="slide-caption">${slide.caption}</div>
              ` : ''}
            </div>
          `)}
        </div>
        
        <!-- Navigation -->
        <div class="swiper-button-prev" role="button" aria-label="${mergedProps.texts.previousSlide}"></div>
        <div class="swiper-button-next" role="button" aria-label="${mergedProps.texts.nextSlide}"></div>
        
        <!-- Pagination -->
        ${mergedProps.showPagination ? html`
          <div class="swiper-pagination"></div>
        ` : ''}
      </div>
    </div>
    <div class="carousel-live-region visually-hidden" role="alert"></div>
  `;
};

async function initCarousel(carouselId: string, props: CarouselProps) {
  const container = document.getElementById(carouselId);
  const swiperContainer = container?.querySelector('.swiper');
  
  if (!container || !swiperContainer) return;
  
  (container as any).carouselTexts = props.texts || defaultTexts;

  destroySwiper(carouselId);
  
  if (!Swiper) {
    const imports = await Promise.all([
      import('swiper'),
      import('swiper/modules')
    ]);
    
    Swiper = imports[0].Swiper;
    SwiperModules = imports[1];
    
    if (!document.getElementById('swiper-core-styles')) {
      const styleEl = document.createElement('link');
      styleEl.id = 'swiper-core-styles';
      styleEl.rel = 'stylesheet';
      styleEl.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(styleEl);
    }
  }
  
  try {

    const { Navigation, Pagination, A11y, Autoplay } = SwiperModules;
    Swiper.use([Navigation, Pagination, A11y, Autoplay]);
    
    const slidesPerGroup = 1; 

    const swiper = new Swiper(swiperContainer, {
      slidesPerView: props.slidesPerView,
      slidesPerGroup: slidesPerGroup,
      spaceBetween: props.spaceBetween,
      centeredSlides: props.centeredSlides,
      loop: props.loop,
      autoplay: props.autoplay ? {
        delay: props.delay,
        disableOnInteraction: false
      } : false,
      loopedSlides: props.loop ? Math.max(3, props.slidesPerView || 1) : 0,
      loopFillGroupWithBlank: props.multiSlide,
      watchSlidesProgress: true, 
      slideVisibleClass: 'swiper-slide-visible',
      preventInteractionOnTransition: true, 
      cssMode: false,
      breakpoints: props.multiSlide ? (props.breakpoints || {
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: props.slidesPerView, spaceBetween: props.spaceBetween }
      }) : undefined,
      
      navigation: {
        nextEl: `#${carouselId} .swiper-button-next`,
        prevEl: `#${carouselId} .swiper-button-prev`,
      },
      
      pagination: props.showPagination ? {
        el: `#${carouselId} .swiper-pagination`,
        clickable: true,
        renderBullet: function (index: number, className: string) {
          const texts = props.texts || defaultTexts;
          return `<button class="${className}" aria-label="${texts.goToSlide} ${index + 1}"></button>`;
        }
      } : false,
      
      a11y: {
        enabled: true,
        prevSlideMessage: (props.texts || defaultTexts).previousSlide,
        nextSlideMessage: (props.texts || defaultTexts).nextSlide
      },
      
      on: {

        init: function() {
          const swiperInstance = this as any;
          const currentSlide = swiperInstance.realIndex ?? swiperInstance.activeIndex ?? 0;
          
          updateAriaAttributes(carouselId, currentSlide);
          
          const container = document.getElementById(carouselId);
          if (container) {
            const liveRegion = container.querySelector('.carousel-live-region');
            if (liveRegion) {
              const totalSlides = props.slides?.length || 0;
              liveRegion.setAttribute('data-position', `1 / ${totalSlides}`);
            }
          }
        },
        
        slideChange: function() {
          const swiperInstance = this as any;
          
          let currentSlide;
          
          if (props.loop) {
            currentSlide = swiperInstance.realIndex !== undefined ? 
              swiperInstance.realIndex : 
              ((swiperInstance.activeIndex - swiperInstance.loopedSlides) % 
                (swiperInstance.slides.length - swiperInstance.loopedSlides * 2));
            
            if (currentSlide < 0) {
              currentSlide += (swiperInstance.slides.length - swiperInstance.loopedSlides * 2);
            }
          } else {
            currentSlide = swiperInstance.activeIndex || 0;
          }
          
          updateAriaAttributes(carouselId, currentSlide);
          
          const container = document.getElementById(carouselId);
          if (container) {
            announceSlideChange(container, props.slides?.[currentSlide]);
          }
          
          if (props.onSlideChange) {
            props.onSlideChange(currentSlide);
          }
        }
      }
    });
    
    swiperInstances.set(carouselId, swiper);
    
    setupKeyboardControls(carouselId, props);
    
    setupPlayPauseButton(carouselId);
    
  } catch (error) {
    console.error(`Error initializing carousel ${carouselId}:`, error);
  }
}

// Destroy Swiper instance
function destroySwiper(carouselId: string) {
  if (swiperInstances.has(carouselId)) {
    const swiper = swiperInstances.get(carouselId);
    if (swiper) {
      swiper.destroy(true, true);
      swiperInstances.delete(carouselId);
    }
  }
}

// Update ARIA attributes for current slide 
function updateAriaAttributes(carouselId: string, currentSlide: number) {
  const container = document.getElementById(carouselId);
  if (!container) return;
  
  const slides = container.querySelectorAll('.swiper-slide');
  const totalSlides = slides.length;
  
  slides.forEach((slide, index) => {
   
    const isCurrent = index === currentSlide;
    
    slide.setAttribute('tabindex', isCurrent ? '0' : '-1');
    
    slide.setAttribute('aria-hidden', isCurrent ? 'false' : 'true');
    
    if (isCurrent) {
      slide.setAttribute('aria-current', 'true');
    } else {
      slide.removeAttribute('aria-current');
    }
  });
  
  const liveRegion = container.querySelector('.carousel-live-region');
  if (liveRegion) {
    const positionInfo = `${currentSlide + 1} / ${totalSlides}`;
    liveRegion.setAttribute('data-position', positionInfo);
  }
}

// Enhanced slide change announcement
function announceSlideChange(container: Element, slide?: { caption?: string }) {
  const liveRegion = container.querySelector('.carousel-live-region');
  if (!liveRegion || !slide) return;

  const positionInfo = liveRegion.getAttribute('data-position') || '';
  
  liveRegion.textContent = '';
  liveRegion.textContent = `${slide.caption} - ${positionInfo}`;
  
}

// Setup keyboard controls - Updated function
function setupKeyboardControls(carouselId: string, props: CarouselProps) {

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!document.activeElement?.closest(`#${carouselId}`)) return;
    
    const swiper = swiperInstances.get(carouselId);
    if (!swiper) return;
    
    const now = Date.now();
    
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      
      if (event.key === 'ArrowLeft') {
        const prevButton = document.querySelector(`#${carouselId} .swiper-button-prev`);
        if (prevButton) {
          (prevButton as HTMLElement).click();
        }
      } else if (event.key === 'ArrowRight') {
        const nextButton = document.querySelector(`#${carouselId} .swiper-button-next`);
        if (nextButton) {
          (nextButton as HTMLElement).click();
        }
      } else if (event.key === 'Home') {
        swiper.slideTo(0);
      } else if (event.key === 'End') {
        const lastSlideIndex = props.slides ? props.slides.length - 1 : swiper.slides.length - 1;
        swiper.slideTo(lastSlideIndex);
      }
      
      let currentIndex = swiper.realIndex;
      if (currentIndex === undefined) {
        if (swiper.params.loop) {
          currentIndex = (swiper.activeIndex - swiper.loopedSlides) % (swiper.slides.length - swiper.loopedSlides * 2);
          if (currentIndex < 0) currentIndex += (swiper.slides.length - swiper.loopedSlides * 2);
        } else {
          currentIndex = swiper.activeIndex;
        }
      }
      
      updateAriaAttributes(carouselId, currentIndex);
      
      const container = document.getElementById(carouselId);
      if (container && props.slides && props.slides[currentIndex]) {
        announceSlideChange(container, props.slides?.[currentIndex]);
      }
    }
  };

  document.removeEventListener('keydown', handleKeyDown);
  document.addEventListener('keydown', handleKeyDown);
}

// Setup play/pause button
function setupPlayPauseButton(carouselId: string) {
  const container = document.getElementById(carouselId);
  const button = container?.querySelector('.carousel-play-pause');
  if (!button || !container) return;
  
  const texts = (container as any).carouselTexts || defaultTexts;
  
  button.addEventListener('click', () => {
    const swiper = swiperInstances.get(carouselId);
    if (!swiper || !swiper.autoplay) return;
    
    const isRunning = swiper.autoplay.running;
    const icon = button.querySelector('span');
    
    if (isRunning) {
      swiper.autoplay.stop();
      icon?.classList.replace('pause-icon', 'play-icon');
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-label', texts.startCarousel);
    } else {
      swiper.autoplay.start();
      icon?.classList.replace('play-icon', 'pause-icon');
      button.setAttribute('aria-pressed', 'true');
      button.setAttribute('aria-label', texts.pauseCarousel);
    }
  });
}