const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./swiper-bTNwr3SU.js","./utils-DH6Lzeoh.js","./index-BI9D0mIr.js"])))=>i.map(i=>d[i]);
import{_ as B}from"./iframe-CrYSqtEb.js";import{x as h}from"./lit-element-D_Wi02Oa.js";let w,C;const f={imageGallery:"Galleria di immagini",previousSlide:"Slide precedente",nextSlide:"Slide successiva",currentSlide:"Slide corrente",slide:"Slide",startCarousel:"Avvia il carosello",pauseCarousel:"Metti in pausa il carosello",navigationInstructions:"Usa le frecce sinistra e destra per navigare tra le slide",goToSlide:"Vai alla slide",firstSlide:"Questa è la prima slide",lastSlide:"Questa è l'ultima slide"};var m=(e=>(e.OVERLAY="overlay",e.OUTSIDE="outside",e))(m||{});const G=["https://via.placeholder.com/800x400/3498db/ffffff?text=Slide+1","https://via.placeholder.com/800x400/e74c3c/ffffff?text=Slide+2","https://via.placeholder.com/800x400/2ecc71/ffffff?text=Slide+3","https://via.placeholder.com/800x400/f39c12/ffffff?text=Slide+4"],g=new Map,$=e=>{const i=`carousel-${Math.floor(Math.random()*1e4)}`,a={...f,...e.texts||{}},o={slides:e.slides||G.map((t,n)=>({image:t,alt:`${a.slide} ${n+1}`,caption:`${a.slide} ${n+1}`})),autoplay:e.autoplay||!1,loop:e.loop!==void 0?e.loop:!0,delay:e.delay||5e3,multiSlide:e.multiSlide||!1,slidesPerView:e.slidesPerView||(e.multiSlide?3:1),spaceBetween:e.spaceBetween||20,centeredSlides:e.centeredSlides||!1,showPagination:e.showPagination!==void 0?e.showPagination:!0,showCaptions:e.showCaptions!==void 0?e.showCaptions:!0,navigationButtonPosition:e.navigationButtonPosition||"overlay",texts:a};if(setTimeout(()=>j(i,o),0),typeof window<"u"){const t=()=>H(i);window.removeEventListener("beforeunload",t),window.addEventListener("beforeunload",t)}return h`
    <div id="${i}" class="carousel-container ${o.multiSlide?"carousel-multi-slide":""} nav-${o.navigationButtonPosition}">
      <h2 id="carousel-title-${i}" class="visually-hidden">${o.texts.imageGallery}</h2>
      
      <div class="swiper-mask">
        <div class="swiper" role="region" aria-roledescription="carousel" aria-labelledby="carousel-title-${i}">
        <!-- Play/Pause button -->
        <button 
          class="carousel-play-pause" 
          type="button"
          aria-label="${o.autoplay?o.texts.pauseCarousel:o.texts.startCarousel}"
          aria-pressed="${o.autoplay?"true":"false"}"
        >
          <span class="${o.autoplay?"pause-icon":"play-icon"}"></span>
        </button>
        
        <!-- Accessibility instructions -->
        <div class="visually-hidden" aria-live="polite">
          ${o.texts.navigationInstructions}
        </div>
        
        <!-- Slides -->
        <div class="swiper-wrapper">
          ${o.slides.map((t,n)=>h`
            <div 
              class="swiper-slide" 
              role="group" 
              aria-roledescription="slide"
              aria-label="${t.caption}"
              tabindex="${n===0?"0":"-1"}"
              aria-hidden="${n===0?"false":"true"}"
              ${n===0?'aria-current="true"':""}
            >
              <img 
                src="${t.image}" 
                alt="" 
                loading="lazy"
              />
              ${t.caption&&o.showCaptions?h`
                <div class="slide-caption">${t.caption}</div>
              `:""}
            </div>
          `)}
        </div>
        
        <!-- Navigation -->
        <div class="swiper-button-prev" role="button" aria-label="${o.texts.previousSlide}"></div>
        <div class="swiper-button-next" role="button" aria-label="${o.texts.nextSlide}"></div>
        
        <!-- Pagination -->
        ${o.showPagination?h`
          <div class="swiper-pagination"></div>
        `:""}
      </div>
    </div>
    <div class="carousel-live-region visually-hidden" role="alert"></div>
  `};async function j(e,i){const a=document.getElementById(e),o=a==null?void 0:a.querySelector(".swiper");if(!(!a||!o)){if(a.carouselTexts=i.texts||f,H(e),!w){const t=await Promise.all([B(()=>import("./swiper-bTNwr3SU.js"),__vite__mapDeps([0,1]),import.meta.url),B(()=>import("./index-BI9D0mIr.js"),__vite__mapDeps([2,1]),import.meta.url)]);if(w=t[0].Swiper,C=t[1],!document.getElementById("swiper-core-styles")){const n=document.createElement("link");n.id="swiper-core-styles",n.rel="stylesheet",n.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(n)}}try{const{Navigation:t,Pagination:n,A11y:s,Autoplay:r}=C;w.use([t,n,s,r]);const u=1,c=new w(o,{slidesPerView:i.slidesPerView,slidesPerGroup:u,spaceBetween:i.spaceBetween,centeredSlides:i.centeredSlides,loop:i.loop,autoplay:i.autoplay?{delay:i.delay,disableOnInteraction:!1}:!1,loopedSlides:i.loop?Math.max(3,i.slidesPerView||1):0,loopFillGroupWithBlank:i.multiSlide,watchSlidesProgress:!0,slideVisibleClass:"swiper-slide-visible",preventInteractionOnTransition:!0,cssMode:!1,breakpoints:i.multiSlide?i.breakpoints||{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:i.slidesPerView,spaceBetween:i.spaceBetween}}:void 0,navigation:{nextEl:`#${e} .swiper-button-next`,prevEl:`#${e} .swiper-button-prev`},pagination:i.showPagination?{el:`#${e} .swiper-pagination`,clickable:!0,renderBullet:function(l,d){const p=i.texts||f;return`<button class="${d}" aria-label="${p.goToSlide} ${l+1}"></button>`}}:!1,a11y:{enabled:!0,prevSlideMessage:(i.texts||f).previousSlide,nextSlideMessage:(i.texts||f).nextSlide},on:{init:function(){var v;const l=this,d=l.realIndex??l.activeIndex??0;x(e,d);const p=document.getElementById(e);if(p){const k=p.querySelector(".carousel-live-region");if(k){const X=((v=i.slides)==null?void 0:v.length)||0;k.setAttribute("data-position",`1 / ${X}`)}}},slideChange:function(){var v;const l=this;let d;i.loop?(d=l.realIndex!==void 0?l.realIndex:(l.activeIndex-l.loopedSlides)%(l.slides.length-l.loopedSlides*2),d<0&&(d+=l.slides.length-l.loopedSlides*2)):d=l.activeIndex||0,x(e,d);const p=document.getElementById(e);p&&Q(p,(v=i.slides)==null?void 0:v[d]),i.onSlideChange&&i.onSlideChange(d)}}});g.set(e,c),M(e,i),Z(e)}catch(t){console.error(`Error initializing carousel ${e}:`,t)}}}function H(e){if(g.has(e)){const i=g.get(e);i&&(i.destroy(!0,!0),g.delete(e))}}function x(e,i){const a=document.getElementById(e);if(!a)return;const o=a.querySelectorAll(".swiper-slide"),t=o.length;o.forEach((s,r)=>{const u=r===i;s.setAttribute("tabindex",u?"0":"-1"),s.setAttribute("aria-hidden",u?"false":"true"),u?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")});const n=a.querySelector(".carousel-live-region");if(n){const s=`${i+1} / ${t}`;n.setAttribute("data-position",s)}}function Q(e,i){const a=e.querySelector(".carousel-live-region");if(!a||!i)return;const o=a.getAttribute("data-position")||"";a.textContent="",a.textContent=`${i.caption} - ${o}`}function M(e,i){const a=o=>{var n,s;if(!((n=document.activeElement)!=null&&n.closest(`#${e}`)))return;const t=g.get(e);if(t&&["ArrowLeft","ArrowRight","Home","End"].includes(o.key)){if(o.preventDefault(),o.key==="ArrowLeft"){const c=document.querySelector(`#${e} .swiper-button-prev`);c&&c.click()}else if(o.key==="ArrowRight"){const c=document.querySelector(`#${e} .swiper-button-next`);c&&c.click()}else if(o.key==="Home")t.slideTo(0);else if(o.key==="End"){const c=i.slides?i.slides.length-1:t.slides.length-1;t.slideTo(c)}let r=t.realIndex;r===void 0&&(t.params.loop?(r=(t.activeIndex-t.loopedSlides)%(t.slides.length-t.loopedSlides*2),r<0&&(r+=t.slides.length-t.loopedSlides*2)):r=t.activeIndex),x(e,r);const u=document.getElementById(e);u&&i.slides&&i.slides[r]&&Q(u,(s=i.slides)==null?void 0:s[r])}};document.removeEventListener("keydown",a),document.addEventListener("keydown",a)}function Z(e){const i=document.getElementById(e),a=i==null?void 0:i.querySelector(".carousel-play-pause");if(!a||!i)return;const o=i.carouselTexts||f;a.addEventListener("click",()=>{const t=g.get(e);if(!t||!t.autoplay)return;const n=t.autoplay.running,s=a.querySelector("span");n?(t.autoplay.stop(),s==null||s.classList.replace("pause-icon","play-icon"),a.setAttribute("aria-pressed","false"),a.setAttribute("aria-label",o.startCarousel)):(t.autoplay.start(),s==null||s.classList.replace("play-icon","pause-icon"),a.setAttribute("aria-pressed","true"),a.setAttribute("aria-label",o.pauseCarousel))})}const N={title:"Carosello",tags:["autodocs"],render:e=>((()=>{if(!document.getElementById("swiper-styles")){const a=document.createElement("link");a.id="swiper-styles",a.rel="stylesheet",a.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(a)}})(),$(e)),argTypes:{autoplay:{control:"boolean",description:"Attiva/disattiva la riproduzione automatica del carosello",defaultValue:!1},loop:{control:"boolean",description:"Attiva/disattiva la ripetizione continua del carosello",defaultValue:!0},delay:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Tempo in millisecondi tra i cambi di slide in modalità autoplay",defaultValue:5e3},multiSlide:{control:"boolean",description:"Attiva la modalità multi-slide",defaultValue:!0},slidesPerView:{control:{type:"number",min:1,max:10,step:1},description:"Numero di slide visibili contemporaneamente",defaultValue:5},spaceBetween:{control:{type:"number",min:0,max:50,step:1},description:"Spazio tra le slide in pixel",defaultValue:20},centeredSlides:{control:"boolean",description:"Centra la slide attiva",defaultValue:!1},showPagination:{control:"boolean",description:"Mostra/nascondi i pallini di paginazione",defaultValue:!0},showCaptions:{control:"boolean",description:"Mostra/nascondi le didascalie delle slide",defaultValue:!0},navigationButtonPosition:{control:"radio",options:[m.OVERLAY,m.OUTSIDE],description:"Posizione dei pulsanti di navigazione (sovrapposti o esterni)",defaultValue:m.OVERLAY},slides:{control:"object",description:"Array di oggetti slide con proprietà image, alt, title e caption"},onSlideChange:{action:"slideChanged"}},parameters:{docs:{description:{component:`
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
  - **Contrasto**: contrasto di colore migliorato per i controlli`}},a11y:{config:{rules:[{id:"button-name",enabled:!0},{id:"image-alt",enabled:!0}]}}}},P=[{image:"https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__",caption:"Titolo prodotto carousel1",href:"#"},{image:"https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__",caption:"Titolo prodotto carousel2",href:"#"},{image:"https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__",caption:"Titolo prodotto carousel3",href:"#"},{image:"https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__",caption:"Titolo prodotto carousel4",href:"#"},{image:"https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__",caption:"Titolo prodotto carousel5",href:"#"},{image:"https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__",caption:"Titolo prodotto carousel6",href:"#"},{image:"https://s3-alpha-sig.figma.com/img/cc27/81af/b14cbd720508f1fe1d84958268bdb889?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WLnx4HLOIrz0bYkWf0Bt02jiWXoTaPhtqorhBtl9e0ZonLJkGcK2WOI6gyMr2nvXwktj8ZJFST066zkt~FTuQFm-GLfhuh3xBeXDT5lzsSLb2OiXek4mVuQ9wv06p591BvKK7xhfd7GDNm4hBLo1DLDvmKz5UjiJkSMs3e2R94t7Q-AMzlvH83lj1oogrV57sv2wL7nDL8CrxmVfJL5cbPCw1JFOoojCrAurvhoKvORuDyXabkH5S7qSKHk7-9GSii77iS3PC7dS7nJ0b00aHk03-~kwWZ0a2yFQ9fFr1N861T3W7Z4TL38IDZJgyT6qpKI~H8oLtYdzX8amciOENg__",caption:"Titolo prodotto carousel7",href:"#"}],S={args:{slides:P,autoplay:!1,loop:!0,delay:5e3,multiSlide:!1,slidesPerView:1,spaceBetween:20,centeredSlides:!1,showPagination:!0,showCaptions:!0,navigationButtonPosition:m.OVERLAY}},y={args:{slides:P,autoplay:!1,loop:!0,delay:5e3,multiSlide:!0,slidesPerView:5,spaceBetween:30,centeredSlides:!1,showPagination:!1,showCaptions:!0,navigationButtonPosition:m.OUTSIDE},parameters:{docs:{description:{story:"Carosello con visualizzazione di 5 slide contemporaneamente con immagini di dimensioni 200x120px."}}}},b={args:{...S.args,autoplay:!0},parameters:{docs:{description:{story:"Carosello multi-slide con riproduzione automatica attivata. Si mette in pausa quando l'utente interagisce con esso."}}}},L={args:{slides:P,autoplay:!1,loop:!0,multiSlide:!0,slidesPerView:3,spaceBetween:20,showCaptions:!0,navigationButtonPosition:m.OUTSIDE},parameters:{docs:{description:{story:"Carosello con pulsanti di navigazione posizionati all'esterno dell'area delle slide, con un padding di 2rem dai bordi."}}}};var z,T,O;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  }
}`,...(O=(T=S.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var A,K,D;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      }
    }
  }
}`,...(D=(K=y.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var I,W,V;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(W=b.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var E,F,J;L.parameters={...L.parameters,docs:{...(E=L.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
        story: 'Carosello con pulsanti di navigazione posizionati all\\'esterno dell\\'area delle slide, con un padding di 2rem dai bordi.'
      }
    }
  }
}`,...(J=(F=L.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};const R=["Default","FiveSlides","WithAutoplay","OutsideNavigation"];export{S as Default,y as FiveSlides,L as OutsideNavigation,b as WithAutoplay,R as __namedExportsOrder,N as default};
