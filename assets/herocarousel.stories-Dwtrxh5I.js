const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./swiper-bTNwr3SU.js","./utils-DH6Lzeoh.js","./index-BI9D0mIr.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./iframe-le7TMry5.js";import{x as b}from"./lit-element-D_Wi02Oa.js";const T=()=>{if(typeof document<"u"&&!document.getElementById("swiper-core-styles")){const i=document.createElement("style");i.id="swiper-core-styles",i.textContent=`
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
    `,document.head.appendChild(i)}},L=[{image:"https://via.placeholder.com/800x500/3498db/ffffff?text=Slide+1",alt:"Slide 1",title:"Titolo della prima slide",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",linkText:"Scopri di più",linkUrl:"#"},{image:"https://via.placeholder.com/800x500/e74c3c/ffffff?text=Slide+2",alt:"Slide 2",title:"Titolo della seconda slide",description:"Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst.",linkText:"Leggi tutto",linkUrl:"#"},{image:"https://via.placeholder.com/800x500/2ecc71/ffffff?text=Slide+3",alt:"Slide 3",title:"Titolo della terza slide",description:"Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.",linkText:"Vai all'offerta",linkUrl:"#"}],y=i=>i.slides&&i.slides.length>0?i.slides:L;let a=null,r=null,c=0;const R=()=>{a&&(a.destroy(!0,!0),a=null)},F=(i,e)=>{R(),Promise.all([x(()=>import("./swiper-bTNwr3SU.js"),__vite__mapDeps([0,1]),import.meta.url),x(()=>import("./index-BI9D0mIr.js"),__vite__mapDeps([2,1]),import.meta.url)]).then(([{Swiper:o},{Navigation:t,Pagination:l,A11y:n,Autoplay:d}])=>{i&&(o.use([t,l,n,d]),a=new o(i,{slidesPerView:1,spaceBetween:0,loop:e.loop,autoplay:e.autoplay?{delay:e.delay||5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1}:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:e.showPagination!==!1?{el:".swiper-pagination",clickable:!0,bulletElement:"button",renderBullet:function(A,w){return`<button class="${w}" aria-label="Vai alla slide ${A+1}"></button>`}}:!1,a11y:{enabled:!0,prevSlideMessage:"Slide precedente",nextSlideMessage:"Slide successiva",firstSlideMessage:"Questa è la prima slide",lastSlideMessage:"Questa è l'ultima slide",paginationBulletMessage:"Vai alla slide {{index}}",containerMessage:"Carosello di presentazione",containerRoleDescriptionMessage:"Carosello",itemRoleDescriptionMessage:"Slide"},speed:500,keyboard:{enabled:!0,onlyInViewport:!0},on:{slideChange:function(A){if(a){c=a.realIndex;const v=y(e)[c];v&&r&&(r.textContent=`Slide corrente: ${v.title}`),h(),e.onSlideChange&&e.onSlideChange(c)}},slideChangeTransitionEnd:function(){const A=document.querySelector(".swiper-slide-active");A&&A.setAttribute("tabindex","0")}}}),H(e),h())}).catch(o=>{console.error("Errore durante l'inizializzazione di Swiper:",o)})},h=()=>{if(!a)return;document.querySelectorAll(".swiper-slide").forEach((e,o)=>{o===c?e.setAttribute("tabindex","0"):e.setAttribute("tabindex","-1")})},H=i=>{const e=o=>{var l;if(!((l=document.activeElement)!=null&&l.closest(".hero-carousel-container")))return;if(["ArrowLeft","ArrowRight","Home","End"].includes(o.key)&&a){const n=a.params.speed;switch(a.params.speed=0,o.key){case"ArrowLeft":a.slidePrev();break;case"ArrowRight":a.slideNext();break;case"Home":a.slideTo(0);break;case"End":a.slideTo(y(i).length-1);break}h(),setTimeout(()=>{a&&(a.params.speed=n)},50),o.preventDefault()}};document.removeEventListener("keydown",e),document.addEventListener("keydown",e)},V=i=>{r&&i.removeChild(r),r=document.createElement("div"),r.setAttribute("aria-live","polite"),r.setAttribute("aria-atomic","true"),r.classList.add("visually-hidden"),r.id="hero-carousel-announcer",i.appendChild(r)},Z=(i,e)=>{if(!a||!a.autoplay)return;const o=a.autoplay.running,t=e.querySelector("span");o?(a.autoplay.stop(),t&&(t.className="play-icon"),e.setAttribute("aria-pressed","false"),e.setAttribute("aria-label","Avvia il carosello"),console.log("Autoplay fermato")):(a.autoplay.start(),t&&(t.className="pause-icon"),e.setAttribute("aria-pressed","true"),e.setAttribute("aria-label","Metti in pausa il carosello"),console.log("Autoplay avviato"))},j=(i,e)=>i.backgroundColor?i.backgroundColor:e.backgroundColor?e.backgroundColor:"#1e88e5",O=i=>{const e={...i,slides:y(i),autoplay:i.autoplay||!1,loop:i.loop!==void 0?i.loop:!0,delay:i.delay||5e3,showPagination:i.showPagination!==void 0?i.showPagination:!0,backgroundColor:i.backgroundColor||"#1e88e5"};return T(),setTimeout(()=>{var l;const o=document.querySelector(".hero-carousel-container"),t=document.querySelector(".swiper");if(o&&t){V(o),F(t,e);const n=document.querySelector(".hero-carousel-play-pause");if(n){const d=n.cloneNode(!0);n.parentNode&&n.parentNode.replaceChild(d,n),d.addEventListener("click",()=>{Z(e,d)})}console.log("Hero carosello inizializzato con:",{slides:e.slides.length,autoplay:e.autoplay,loop:e.loop,autoplay_running:(l=a==null?void 0:a.autoplay)==null?void 0:l.running})}},0),typeof window<"u"&&window.addEventListener("beforeunload",R),b`
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
          aria-label="${e.autoplay?"Metti in pausa il carosello":"Avvia il carosello"}"
          aria-pressed="${e.autoplay?"true":"false"}"
        >
          <span class="${e.autoplay?"pause-icon":"play-icon"}"></span>
        </button>
        
        <div class="swiper-wrapper">
          ${e.slides.map((o,t)=>b`
            <div 
              class="swiper-slide hero-slide" 
              role="group" 
              aria-roledescription="slide"
              aria-label="${o.title}"
              tabindex="${c===t?"0":"-1"}"
              aria-hidden="${c===t?"false":"true"}"
            >
              <div class="hero-content-wrapper">
                <!-- Utilizziamo una funzione di supporto per ottenere il colore corretto -->
                <div class="hero-text-container" style="background-color: ${j(o,e)}">
                  <div class="hero-text-content">
                    <h3 class="hero-title">${o.title}</h3>
                    <p class="hero-description">${o.description}</p>
                    <a href="${o.linkUrl}" class="hero-link">${o.linkText}</a>
                  </div>
                </div>
                <div class="hero-image-container">
                  <img 
                    src="${o.image}" 
                    alt="${o.alt||""}" 
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
        ${e.showPagination?b`
        <div class="swiper-pagination" role="group" aria-label="Selezione slide"></div>
        `:""}
      </div>
    </div>
  `},W={title:"Hero Carosello",tags:["autodocs"],render:i=>((()=>{if(!document.getElementById("swiper-styles")){const o=document.createElement("link");o.id="swiper-styles",o.rel="stylesheet",o.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(o)}})(),O(i)),argTypes:{autoplay:{control:"boolean",description:"Attiva/disattiva la riproduzione automatica del carosello",defaultValue:!1},loop:{control:"boolean",description:"Attiva/disattiva la ripetizione continua del carosello",defaultValue:!0},delay:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Tempo in millisecondi tra i cambi di slide in modalità autoplay",defaultValue:5e3},showPagination:{control:"boolean",description:"Mostra/nascondi i pallini di paginazione",defaultValue:!0},backgroundColor:{control:"color",description:"Colore di sfondo predefinito per l'area di testo",defaultValue:"#1e88e5"},slides:{control:"object",description:"Array di oggetti slide con proprietà image, title, description, linkText, linkUrl"},onSlideChange:{action:"slideChanged"}},parameters:{docs:{description:{component:`
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
  - Conformità con gli standard WCAG`}},a11y:{config:{rules:[{id:"button-name",enabled:!0},{id:"image-alt",enabled:!0}]}}}},p=[{image:"https://via.placeholder.com/800x500/3498db/ffffff?text=Immagine+1",alt:"Immagine promozionale 1",title:"Offerte speciali di primavera",description:"Scopri le nostre offerte esclusive per la stagione primaverile. Approfitta di sconti fino al 50% su una selezione di prodotti.",linkText:"Scopri le offerte",linkUrl:"#"},{image:"https://via.placeholder.com/800x500/e74c3c/ffffff?text=Immagine+2",alt:"Immagine promozionale 2",title:"Nuova collezione disponibile",description:"È arrivata la nuova collezione 2025. Design innovativi e materiali sostenibili per un comfort senza precedenti.",linkText:"Sfoglia la collezione",linkUrl:"#",backgroundColor:"#d32f2f"},{image:"https://via.placeholder.com/800x500/2ecc71/ffffff?text=Immagine+3",alt:"Immagine promozionale 3",title:"Servizio clienti premium",description:"Il nostro servizio clienti è disponibile 24/7 per aiutarti. Contattaci per qualsiasi domanda o supporto di cui hai bisogno.",linkText:"Contattaci ora",linkUrl:"#",backgroundColor:"#388e3c"}],s={args:{slides:p,autoplay:!1,loop:!0,delay:5e3,showPagination:!0,backgroundColor:"#1e88e5"}},u={args:{...s.args,autoplay:!0},parameters:{docs:{description:{story:"Hero carosello con autoplay attivato. Si mette in pausa quando l'utente interagisce con esso."}}}},g={args:{...s.args,showPagination:!1},parameters:{docs:{description:{story:"Hero carosello senza i pallini di paginazione. Utilizza solo le frecce di navigazione."}}}},m={args:{...s.args,backgroundColor:"#212121",slides:p.map(i=>({...i,backgroundColor:i.backgroundColor||"#212121"}))},parameters:{docs:{description:{story:"Versione con tema scuro del carosello hero."}}}},f={args:{...s.args,slides:[{...p[0],backgroundColor:"#673ab7"},{...p[1],backgroundColor:"#ff5722"},{...p[2],backgroundColor:"#009688"}]},parameters:{docs:{description:{story:"Carosello hero con colori personalizzati per ogni slide."}}}};var C,z,B;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    delay: 5000,
    showPagination: true,
    backgroundColor: '#1e88e5'
  }
}`,...(B=(z=s.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var S,k,E;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoplay: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero carosello con autoplay attivato. Si mette in pausa quando l\\'utente interagisce con esso.'
      }
    }
  }
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var Y,P,D;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showPagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero carosello senza i pallini di paginazione. Utilizza solo le frecce di navigazione.'
      }
    }
  }
}`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var G,M,I;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      }
    }
  }
}`,...(I=(M=m.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var N,Q,U;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    slides: [{
      ...sampleSlides[0],
      backgroundColor: '#673ab7'
    }, {
      ...sampleSlides[1],
      backgroundColor: '#ff5722'
    }, {
      ...sampleSlides[2],
      backgroundColor: '#009688'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello hero con colori personalizzati per ogni slide.'
      }
    }
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const J=["Default","WithAutoplay","NoPagination","DarkTheme","CustomColors"];export{f as CustomColors,m as DarkTheme,s as Default,g as NoPagination,u as WithAutoplay,J as __namedExportsOrder,W as default};
