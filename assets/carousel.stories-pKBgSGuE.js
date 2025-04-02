const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./swiper-bTNwr3SU.js","./utils-DH6Lzeoh.js","./index-BI9D0mIr.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./iframe-Cb_GfsRk.js";import{x as m}from"./lit-element-D_Wi02Oa.js";const D=()=>{if(typeof document<"u"&&!document.getElementById("swiper-core-styles")){const t=document.createElement("style");t.id="swiper-core-styles",t.textContent=`
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    `,document.head.appendChild(t)}},E=["https://via.placeholder.com/800x400/3498db/ffffff?text=Slide+1","https://via.placeholder.com/800x400/e74c3c/ffffff?text=Slide+2","https://via.placeholder.com/800x400/2ecc71/ffffff?text=Slide+3","https://via.placeholder.com/800x400/f39c12/ffffff?text=Slide+4","https://via.placeholder.com/800x400/9b59b6/ffffff?text=Slide+5","https://via.placeholder.com/800x400/34495e/ffffff?text=Slide+6","https://via.placeholder.com/800x400/1abc9c/ffffff?text=Slide+7"],h=t=>t.slides&&t.slides.length>0?t.slides:E.map((e,i)=>({image:e,alt:`Slide ${i+1}`,title:`Slide ${i+1}`,caption:`Didascalia per la slide ${i+1}`}));let r=new Map,l=null;const N=t=>{if(r.has(t)){const e=r.get(t);e&&(e.destroy(!0,!0),r.delete(t))}},Q=(t,e,i)=>{N(i),Promise.all([x(()=>import("./swiper-bTNwr3SU.js"),__vite__mapDeps([0,1]),import.meta.url),x(()=>import("./index-BI9D0mIr.js"),__vite__mapDeps([2,1]),import.meta.url)]).then(([{Swiper:a},{Navigation:s,Pagination:n,A11y:o,Autoplay:w}])=>{var S;if(!t)return;a.use([s,n,o,w]);const d=e.multiSlide?e.slidesPerView||5:1,y=e.multiSlide?e.spaceBetween||20:30,C=e.multiSlide&&e.centeredSlides!==void 0?e.centeredSlides:!1,I=new a(t,{slidesPerView:d,spaceBetween:y,centeredSlides:C,loop:e.loop,autoplay:e.autoplay?{delay:e.delay||5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1}:!1,breakpoints:e.multiSlide?e.breakpoints||{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:15},1024:{slidesPerView:d,spaceBetween:y}}:void 0,navigation:{nextEl:`#${i} .swiper-button-next`,prevEl:`#${i} .swiper-button-prev`},pagination:e.showPagination!==!1?{el:`#${i} .swiper-pagination`,clickable:!0,bulletElement:"button",renderBullet:function(c,A){return`<button class="${A}" aria-label="Vai alla slide ${c+1}"></button>`}}:!1,a11y:{enabled:!0,prevSlideMessage:"Slide precedente",nextSlideMessage:"Slide successiva",firstSlideMessage:"Questa è la prima slide",lastSlideMessage:"Questa è l'ultima slide",paginationBulletMessage:"Vai alla slide {{index}}",containerMessage:"Carosello di immagini",containerRoleDescriptionMessage:"Carosello",itemRoleDescriptionMessage:"Slide"},speed:300,keyboard:{enabled:!0,onlyInViewport:!0},on:{slideChange:function(){const A=this,p=A.realIndex!==void 0?A.realIndex:A.activeIndex||0,B=h(e)[p];B&&l&&(l.textContent=`Slide corrente: ${B.title||`Slide ${p+1}`}`),v(i,p),e.onSlideChange&&e.onSlideChange(p)},slideChangeTransitionEnd:function(){const c=document.querySelector(`#${i} .swiper-slide-active`);c&&c.setAttribute("tabindex","0")}}});r.set(i,I),L(e,i),v(i,0);const b=document.querySelector(`#${i} .carousel-play-pause`);b&&b.addEventListener("click",()=>{W(e,b,i)}),console.log(`Carosello ${i} inizializzato con:`,{slides:(S=e.slides)==null?void 0:S.length,autoplay:e.autoplay,loop:e.loop,multiSlide:e.multiSlide,slidesPerView:e.slidesPerView,showPagination:e.showPagination,showCaptions:e.showCaptions})}).catch(a=>{console.error(`Errore durante l'inizializzazione di Swiper per ${i}:`,a)})},v=(t,e)=>{document.querySelectorAll(`#${t} .swiper-slide`).forEach((a,s)=>{s===e?a.setAttribute("tabindex","0"):a.setAttribute("tabindex","-1")})},L=(t,e)=>{const i=a=>{var n;if(!((n=document.activeElement)!=null&&n.closest(`#${e}`)))return;if(["ArrowLeft","ArrowRight","Home","End"].includes(a.key)&&r.has(e)){const o=r.get(e);if(!o)return;const w=o.params.speed;switch(o.params.speed=0,a.key){case"ArrowLeft":o.slidePrev();break;case"ArrowRight":o.slideNext();break;case"Home":o.slideTo(0);break;case"End":o.slideTo(h(t).length-1);break}const d=o;v(e,d.realIndex!==void 0?d.realIndex:d.activeIndex||0),setTimeout(()=>{o&&(o.params.speed=w)},50),a.preventDefault()}};document.removeEventListener("keydown",i),document.addEventListener("keydown",i)},R=t=>{if(l)try{t.removeChild(l)}catch{}l=document.createElement("div"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),l.classList.add("visually-hidden"),l.id="carousel-announcer",t.appendChild(l)},W=(t,e,i)=>{if(!r.has(i))return;const a=r.get(i);if(!a||!a.autoplay)return;const s=a.autoplay.running,n=e.querySelector("span");s?(a.autoplay.stop(),n&&(n.className="play-icon"),e.setAttribute("aria-pressed","false"),e.setAttribute("aria-label","Avvia il carosello"),console.log(`Autoplay fermato per ${i}`)):(a.autoplay.start(),n&&(n.className="pause-icon"),e.setAttribute("aria-pressed","true"),e.setAttribute("aria-label","Metti in pausa il carosello"),console.log(`Autoplay avviato per ${i}`))},Z=t=>{const e=`carousel-${Math.floor(Math.random()*1e4)}`,i={...t,slides:h(t),autoplay:t.autoplay||!1,loop:t.loop!==void 0?t.loop:!0,delay:t.delay||5e3,multiSlide:t.multiSlide||!1,slidesPerView:t.slidesPerView||5,spaceBetween:t.spaceBetween||20,centeredSlides:t.centeredSlides||!1,showPagination:t.showPagination!==void 0?t.showPagination:!0,showCaptions:t.showCaptions!==void 0?t.showCaptions:!0};if(D(),setTimeout(()=>{const a=document.getElementById(e),s=a==null?void 0:a.querySelector(".swiper");a&&s&&(R(a),Q(s,i,e))},0),typeof window<"u"){const a=()=>{N(e)};window.removeEventListener("beforeunload",a),window.addEventListener("beforeunload",a)}return m`
    <div id="${e}" class="carousel-container ${i.multiSlide?"carousel-multi-slide":""}">
      <!-- Titolo accessibile del carosello -->
      <h2 id="carousel-title-${e}" class="visually-hidden">Galleria di immagini</h2>
      
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
        aria-labelledby="carousel-title-${e}"
      >
        <!-- Pulsante Play/Pausa riposizionato con icone Unicode chiare -->
        <button 
          class="carousel-play-pause" 
          type="button"
          aria-label="${i.autoplay?"Metti in pausa il carosello":"Avvia il carosello"}"
          aria-pressed="${i.autoplay?"true":"false"}"
        >
          <span class="${i.autoplay?"pause-icon":"play-icon"}"></span>
        </button>
        
        <div class="swiper-wrapper">
          ${i.slides.map((a,s)=>m`
            <div 
              class="swiper-slide" 
              role="group" 
              aria-roledescription="slide"
              aria-label="${a.title||`Slide ${s+1}`}"
              tabindex="${s===0?"0":"-1"}"
              aria-hidden="${s===0?"false":"true"}"
            >
              <img 
                src="${a.image}" 
                alt="${a.alt||""}" 
                loading="lazy"
                width="800"
                height="400"
              />
              ${a.caption&&i.showCaptions?m`
                <div class="slide-caption">${a.caption}</div>
              `:""}
            </div>
          `)}
        </div>
        
        <!-- Controlli di navigazione -->
        <div class="swiper-button-prev" role="button" aria-label="Slide precedente" tabindex="0"></div>
        <div class="swiper-button-next" role="button" aria-label="Slide successiva" tabindex="0"></div>
        
        <!-- Paginazione (condizionale) -->
        ${i.showPagination?m`
        <div class="swiper-pagination" role="group" aria-label="Selezione slide"></div>
        `:""}
      </div>
    </div>
  `},U={title:"Carosello",tags:["autodocs"],render:t=>((()=>{if(!document.getElementById("swiper-styles")){const i=document.createElement("link");i.id="swiper-styles",i.rel="stylesheet",i.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(i)}})(),Z(t)),argTypes:{autoplay:{control:"boolean",description:"Attiva/disattiva la riproduzione automatica del carosello",defaultValue:!1},loop:{control:"boolean",description:"Attiva/disattiva la ripetizione continua del carosello",defaultValue:!0},delay:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Tempo in millisecondi tra i cambi di slide in modalità autoplay",defaultValue:5e3},multiSlide:{control:"boolean",description:"Attiva la modalità multi-slide",defaultValue:!0},slidesPerView:{control:{type:"number",min:1,max:10,step:1},description:"Numero di slide visibili contemporaneamente",defaultValue:5},spaceBetween:{control:{type:"number",min:0,max:50,step:1},description:"Spazio tra le slide in pixel",defaultValue:20},centeredSlides:{control:"boolean",description:"Centra la slide attiva",defaultValue:!1},showPagination:{control:"boolean",description:"Mostra/nascondi i pallini di paginazione",defaultValue:!0},showCaptions:{control:"boolean",description:"Mostra/nascondi le didascalie delle slide",defaultValue:!0},slides:{control:"object",description:"Array di oggetti slide con proprietà image, alt, title e caption"},onSlideChange:{action:"slideChanged"}},parameters:{docs:{description:{component:`
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
  - **Contrasto**: contrasto di colore migliorato per i controlli`}},a11y:{config:{rules:[{id:"button-name",enabled:!0},{id:"image-alt",enabled:!0}]}}}},M=[{image:"https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__",alt:"Descrizione della prima immagine",title:"Slide 1",caption:"Slide 1"},{image:"https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__",alt:"Descrizione della seconda immagine",title:"Slide 2",caption:"Slide 2"},{image:"https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__",alt:"Descrizione della terza immagine",title:"Slide 3",caption:"Slide 3"},{image:"https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__",alt:"Descrizione della quarta immagine",title:"Slide 4",caption:"Slide 4"},{image:"https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__",alt:"Descrizione della quinta immagine",title:"Slide 5",caption:"Slide 5"},{image:"https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__",alt:"Descrizione della sesta immagine",title:"Slide 6",caption:"Slide 6"},{image:"https://s3-alpha-sig.figma.com/img/027e/a82d/45ec7620cce609e308b6f1004373c00d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Spq-Fq94m~HLDr4wMHj4FGgfakls2HxZwj5V2~kuUJZ0n4Wlt4WVlLrTOv7Rd6os5dWzHTEVm-ISmB61~1i~xTI7FNWqhTGfPU0iiDRw-kpC915ewkFUKk7TARrWoroRFZG18RquAjArqztkzyZINnVMoNDZTvNPF5xBY5AAHbnMPvK~TxuGYf4QzIJbmKWGYBKkhwbFsNV-yyv4d8uNuKDDkFMJoNckoCbUS9VGkKnooFn3aYK402JaldkvLTAnt1IsbZBKjvYhYIhz0gqbXnG-yLkMjwvVdmlYK-Ti0pVNc7A4PIuTXoLL11QwIzc10PXmQkRcQ7NB0~a5LTbsow__",alt:"Descrizione della settima immagine",title:"Slide 7",caption:"Slide 7"}],u={args:{slides:M,autoplay:!1,loop:!0,delay:5e3,multiSlide:!1,slidesPerView:1,spaceBetween:20,centeredSlides:!1,showPagination:!0,showCaptions:!1}},g={args:{slides:M,autoplay:!1,loop:!0,delay:5e3,multiSlide:!0,slidesPerView:5,spaceBetween:20,centeredSlides:!1,showPagination:!1,showCaptions:!0},parameters:{docs:{description:{story:"Carosello con visualizzazione di 3 slide contemporaneamente e più spazio tra di esse."}}}},f={args:{...u.args,autoplay:!0},parameters:{docs:{description:{story:"Carosello multi-slide con riproduzione automatica attivata. Si mette in pausa quando l'utente interagisce con esso."}}}};var k,z,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    showCaptions: false
  }
}`,...(P=(z=u.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var Y,G,F;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    slides: sampleSlides,
    autoplay: false,
    loop: true,
    delay: 5000,
    multiSlide: true,
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: false,
    showPagination: false,
    showCaptions: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Carosello con visualizzazione di 3 slide contemporaneamente e più spazio tra di esse.'
      }
    }
  }
}`,...(F=(G=g.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var V,K,T;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(K=f.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};const O=["Default","FiveSlides","WithAutoplay"];export{u as Default,g as FiveSlides,f as WithAutoplay,O as __namedExportsOrder,U as default};
