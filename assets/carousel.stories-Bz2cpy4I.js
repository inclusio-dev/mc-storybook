const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./swiper-bTNwr3SU.js","./utils-DH6Lzeoh.js","./index-BI9D0mIr.js"])))=>i.map(i=>d[i]);
import{_}from"./iframe-BbyfS7Ki.js";import{x as w}from"./lit-element-D_Wi02Oa.js";let y,$;const m={imageGallery:"Galleria di immagini",previousSlide:"Slide precedente",nextSlide:"Slide successiva",currentSlide:"Slide corrente",slide:"Slide",startCarousel:"Avvia il carosello",pauseCarousel:"Metti in pausa il carosello",navigationInstructions:"Usa le frecce sinistra e destra per navigare tra le slide",goToSlide:"Vai alla slide",firstSlide:"Questa è la prima slide",lastSlide:"Questa è l'ultima slide"};var f=(e=>(e.OVERLAY="overlay",e.OUTSIDE="outside",e))(f||{});const q=["https://via.placeholder.com/800x400/3498db/ffffff?text=Slide+1","https://via.placeholder.com/800x400/e74c3c/ffffff?text=Slide+2","https://via.placeholder.com/800x400/2ecc71/ffffff?text=Slide+3","https://via.placeholder.com/800x400/f39c12/ffffff?text=Slide+4"],g=new Map,D=e=>{const i=`carousel-${Math.floor(Math.random()*1e4)}`,o={...m,...e.texts||{}},a={slides:e.slides||q.map((t,s)=>({image:t,alt:`${o.slide} ${s+1}`,caption:`${o.slide} ${s+1}`})),autoplay:e.autoplay||!1,loop:e.loop!==void 0?e.loop:!0,delay:e.delay||5e3,multiSlide:e.multiSlide||!1,slidesPerView:e.slidesPerView||(e.multiSlide?3:1),spaceBetween:e.spaceBetween||20,centeredSlides:e.centeredSlides||!1,showPagination:e.showPagination!==void 0?e.showPagination:!0,showCaptions:e.showCaptions!==void 0?e.showCaptions:!0,navigationButtonPosition:e.navigationButtonPosition||"overlay",href:e.href||"#",width:e.width||"100%",texts:o};if(setTimeout(()=>M(i,a),0),typeof window<"u"){const t=()=>I(i);window.removeEventListener("beforeunload",t),window.addEventListener("beforeunload",t)}return w`
    <div id="${i}" class="carousel-container ${a.multiSlide?"carousel-multi-slide":""} nav-${a.navigationButtonPosition}">
      <h2 id="carousel-title-${i}" class="visually-hidden">${a.texts.imageGallery}</h2>
      
      <!-- Play/Pause button -->
      <button 
        class="carousel-play-pause" 
        type="button"
        aria-label="${a.autoplay?a.texts.pauseCarousel:a.texts.startCarousel}"
        aria-pressed="${a.autoplay?"true":"false"}"
      >
        <span class="${a.autoplay?"pause-icon":"play-icon"}"></span>
      </button>

      <div class="swiper-mask">
        <div class="swiper" role="region" aria-roledescription="carousel" aria-labelledby="carousel-title-${i}">
        
          <!-- Accessibility instructions -->
          ${a.multiSlide?"":w`<div class="visually-hidden" aria-live="polite">${a.texts.navigationInstructions}</div>`}
                
          <!-- Slides -->
          <div class="swiper-wrapper">
            ${a.slides.map((t,s)=>w`
              <div 
                class="swiper-slide" 
                role="group" 
                aria-roledescription="slide"
                aria-label="${t.caption}"
                tabindex="${s===0?"0":"-1"}"
                aria-hidden="${s===0?"false":"true"}"
                ${s===0?'aria-current="true"':""}
              >
                <a href="${a.href}" class="slide-link" target="_self"> 
                  <img 
                    src="${t.image}" 
                    alt="" 
                    loading="lazy"
                  />
                  ${t.caption&&a.showCaptions?w`
                    <div class="slide-caption">${t.caption}</div>
                  `:""}
                </a>
              </div>
            `)}
          </div>

        
        </div>
      </div>

      <!-- Navigation -->
      <div class="swiper-button-prev" role="button" aria-label="${a.texts.previousSlide}" aria-hidden="${!!a.multiSlide}"></div>
      <div class="swiper-button-next" role="button" aria-label="${a.texts.nextSlide}" aria-hidden="${!!a.multiSlide}"></div>
      
      <!-- Pagination -->
      ${a.showPagination?w`
        <div class="swiper-pagination"></div>
      `:""}


    </div>
    <div class="carousel-live-region visually-hidden" role="alert"></div>
  `};async function M(e,i){const o=document.getElementById(e),a=o==null?void 0:o.querySelector(".swiper");if(!(!o||!a)){if(o.carouselTexts=i.texts||m,I(e),!y){const t=await Promise.all([_(()=>import("./swiper-bTNwr3SU.js"),__vite__mapDeps([0,1]),import.meta.url),_(()=>import("./index-BI9D0mIr.js"),__vite__mapDeps([2,1]),import.meta.url)]);if(y=t[0].Swiper,$=t[1],!document.getElementById("swiper-core-styles")){const s=document.createElement("link");s.id="swiper-core-styles",s.rel="stylesheet",s.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(s)}}try{const{Navigation:t,Pagination:s,A11y:r,Autoplay:n}=$;y.use([t,s,r,n]);const p=1,d=new y(a,{slidesPerView:i.slidesPerView,slidesPerGroup:p,spaceBetween:i.spaceBetween,centeredSlides:i.centeredSlides,loop:i.loop,autoplay:i.autoplay?{delay:i.delay,disableOnInteraction:!1}:!1,loopedSlides:i.loop?Math.max(3,i.slidesPerView||1):0,loopFillGroupWithBlank:i.multiSlide,watchSlidesProgress:!0,slideVisibleClass:"swiper-slide-visible",preventInteractionOnTransition:!0,cssMode:!1,breakpoints:i.multiSlide?i.breakpoints||{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:i.slidesPerView,spaceBetween:i.spaceBetween}}:void 0,navigation:{nextEl:`#${e} .swiper-button-next`,prevEl:`#${e} .swiper-button-prev`},pagination:i.showPagination?{el:`#${e} .swiper-pagination`,clickable:!0,renderBullet:function(l,c){const u=i.texts||m;return`<button class="${c}" aria-label="${u.goToSlide} ${l+1}"></button>`}}:!1,a11y:{enabled:!0,prevSlideMessage:(i.texts||m).previousSlide,nextSlideMessage:(i.texts||m).nextSlide},on:{init:function(){var v;const l=this,c=l.realIndex??l.activeIndex??0;console.log(l.allowSlideNext),console.log(l),x(e,c,l.passedParams.slidesPerView);const u=document.getElementById(e);if(u){const P=u.querySelector(".carousel-live-region");if(P){const j=((v=i.slides)==null?void 0:v.length)||0;P.setAttribute("data-position",`1 / ${j}`)}}},slideChange:function(){var v;const l=this;let c;i.loop?(c=l.realIndex!==void 0?l.realIndex:(l.activeIndex-l.loopedSlides)%(l.slides.length-l.loopedSlides*2),c<0&&(c+=l.slides.length-l.loopedSlides*2)):c=l.activeIndex||0,console.log(l),x(e,c,l.passedParams.slidesPerView);const u=document.getElementById(e);u&&O(u,(v=i.slides)==null?void 0:v[c]),i.onSlideChange&&i.onSlideChange(c)}}});g.set(e,d),G(e,i),N(e)}catch(t){console.error(`Error initializing carousel ${e}:`,t)}}}function I(e){if(g.has(e)){const i=g.get(e);i&&(i.destroy(!0,!0),g.delete(e))}}function x(e,i,o){const a=document.getElementById(e);if(!a)return;const t=a.querySelectorAll(".swiper-slide"),s=t.length;t.forEach((n,p)=>{const d=p===i;o>1?(n.setAttribute("tabindex","0"),n.setAttribute("aria-hidden","false")):(n.setAttribute("tabindex",d?"0":"-1"),n.setAttribute("aria-hidden",d?"false":"true")),d&&o==1?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current")});const r=a.querySelector(".carousel-live-region");if(r){const n=`${i+1} / ${s}`;r.setAttribute("data-position",n)}}function O(e,i){const o=e.querySelector(".carousel-live-region");if(!o||!i)return;const a=o.getAttribute("data-position")||"";o.textContent="",o.textContent=`${i.caption} - ${a}`}function G(e,i){const o=a=>{var s,r;if(!((s=document.activeElement)!=null&&s.closest(`#${e}`)))return;const t=g.get(e);if(t&&["ArrowLeft","ArrowRight"].includes(a.key)){if(a.preventDefault(),a.key==="ArrowLeft"){const d=document.querySelector(`#${e} .swiper-button-prev`);d&&(console.log("prevButton",d),d.click())}else if(a.key==="ArrowRight"){const d=document.querySelector(`#${e} .swiper-button-next`);d&&d.click()}let n=t.realIndex;n===void 0&&(t.params.loop?(n=(t.activeIndex-t.loopedSlides)%(t.slides.length-t.loopedSlides*2),n<0&&(n+=t.slides.length-t.loopedSlides*2)):n=t.activeIndex),x(e,n,t.params.slidesPerView);const p=document.getElementById(e);p&&i.slides&&i.slides[n]&&O(p,(r=i.slides)==null?void 0:r[n])}};document.removeEventListener("keydown",o),document.addEventListener("keydown",o)}function N(e){const i=document.getElementById(e),o=i==null?void 0:i.querySelector(".carousel-play-pause");if(!o||!i)return;const a=i.carouselTexts||m;o.addEventListener("click",()=>{const t=g.get(e);if(!t||!t.autoplay)return;const s=t.autoplay.running,r=o.querySelector("span");s?(t.autoplay.stop(),r==null||r.classList.replace("pause-icon","play-icon"),o.setAttribute("aria-pressed","false"),o.setAttribute("aria-label",a.startCarousel)):(t.autoplay.start(),r==null||r.classList.replace("play-icon","pause-icon"),o.setAttribute("aria-pressed","true"),o.setAttribute("aria-label",a.pauseCarousel))})}const Y={title:"Carosello",tags:["autodocs"],render:e=>((()=>{if(!document.getElementById("swiper-styles")){const o=document.createElement("link");o.id="swiper-styles",o.rel="stylesheet",o.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(o)}})(),D(e)),argTypes:{autoplay:{control:"boolean",description:"Attiva/disattiva la riproduzione automatica del carosello",defaultValue:!1},loop:{control:"boolean",description:"Attiva/disattiva la ripetizione continua del carosello",defaultValue:!0},delay:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Tempo in millisecondi tra i cambi di slide in modalità autoplay",defaultValue:5e3},multiSlide:{control:"boolean",description:"Attiva la modalità multi-slide",defaultValue:!0},slidesPerView:{control:{type:"number",min:1,max:10,step:1},description:"Numero di slide visibili contemporaneamente",defaultValue:5},spaceBetween:{control:{type:"number",min:0,max:50,step:1},description:"Spazio tra le slide in pixel",defaultValue:20},centeredSlides:{control:"boolean",description:"Centra la slide attiva",defaultValue:!1},showPagination:{control:"boolean",description:"Mostra/nascondi i pallini di paginazione",defaultValue:!0},showCaptions:{control:"boolean",description:"Mostra/nascondi le didascalie delle slide",defaultValue:!0},navigationButtonPosition:{control:"radio",options:[f.OVERLAY,f.OUTSIDE],description:"Posizione dei pulsanti di navigazione (sovrapposti o esterni)",defaultValue:f.OVERLAY},slides:{control:"object",description:"Array di oggetti slide con proprietà image, alt, title e caption"},width:{control:"text",description:"Larghezza del carosello (es. 100%, 1200px)",defaultValue:"100%"},onSlideChange:{action:"slideChanged"}},parameters:{docs:{description:{component:`
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
  - **Contrasto**: contrasto di colore migliorato per i controlli`}},a11y:{config:{rules:[{id:"button-name",enabled:!0},{id:"image-alt",enabled:!0}]}}}},R=[{image:"https://media.mondoconv.it/media/scandiweb/slider/b/u/buono_500_aprile_2025_desktop2.jpg",caption:"Titolo prodotto carousel1",href:"#"},{image:"https://media.mondoconv.it/media/scandiweb/slider/b/u/buono_500_aprile_2025_desktop2.jpg",caption:"Titolo prodotto carousel2",href:"#"},{image:"https://media.mondoconv.it/media/scandiweb/slider/b/u/buono_500_aprile_2025_desktop2.jpg",caption:"Titolo prodotto carousel3",href:"#"},{image:"https://media.mondoconv.it/media/scandiweb/slider/b/u/buono_500_aprile_2025_desktop2.jpg",caption:"Titolo prodotto carousel4",href:"#"},{image:"https://media.mondoconv.it/media/scandiweb/slider/b/u/buono_500_aprile_2025_desktop2.jpg",caption:"Titolo prodotto carousel5",href:"#"},{image:"https://media.mondoconv.it/media/scandiweb/slider/b/u/buono_500_aprile_2025_desktop2.jpg",caption:"Titolo prodotto carousel6",href:"#"},{image:"https://media.mondoconv.it/media/scandiweb/slider/b/u/buono_500_aprile_2025_desktop2.jpg",caption:"Titolo prodotto carousel7",href:"#"}],h={args:{slides:R,autoplay:!1,loop:!0,delay:5e3,multiSlide:!1,slidesPerView:1,spaceBetween:20,centeredSlides:!1,showPagination:!0,showCaptions:!1,navigationButtonPosition:f.OVERLAY,width:"100%"}},b={args:{slides:R,autoplay:!1,loop:!1,delay:5e3,multiSlide:!0,slidesPerView:5,spaceBetween:30,centeredSlides:!1,showPagination:!1,showCaptions:!0,navigationButtonPosition:f.OUTSIDE,width:"1200px"},parameters:{docs:{description:{story:"Carosello con visualizzazione di 5 slide contemporaneamente con immagini di dimensioni 200x120px."}}}},S={args:{...h.args,autoplay:!0},parameters:{docs:{description:{story:"Carosello multi-slide con riproduzione automatica attivata. Si mette in pausa quando l'utente interagisce con esso."}}}};var C,A,B;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    showCaptions: false,
    navigationButtonPosition: NavigationButtonPosition.OVERLAY,
    width: '100%'
  }
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,V,z;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: false,
    delay: 5000,
    multiSlide: true,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: false,
    showPagination: false,
    showCaptions: true,
    navigationButtonPosition: NavigationButtonPosition.OUTSIDE,
    width: '1200px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con visualizzazione di 5 slide contemporaneamente con immagini di dimensioni 200x120px.'
      }
    }
  }
}`,...(z=(V=b.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var k,T,L;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoplay: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello multi-slide con riproduzione automatica attivata. Si mette in pausa quando l\\'utente interagisce con esso.'
      }
    }
  }
}`,...(L=(T=S.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const Q=["Default","FiveSlides","WithAutoplay"];export{h as Default,b as FiveSlides,S as WithAutoplay,Q as __namedExportsOrder,Y as default};
