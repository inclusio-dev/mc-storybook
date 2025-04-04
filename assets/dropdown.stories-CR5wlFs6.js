import{x as p}from"./lit-element-D_Wi02Oa.js";import{i as T,g as A}from"./icon-B2F652rT.js";const q=({label:l,content:u,variant:s="iconLabelCart",dropdownWidth:g="auto",dropdownClass:$="",labelOnTopRight:b="2",iconName:f=null})=>{const d=`dropdown-${Math.random().toString(36).substring(2,11)}`,c=t=>{const e=t.currentTarget.closest(".dropdown"),n=e==null?void 0:e.querySelector(".dropdown__content"),o=e==null?void 0:e.querySelector(".dropdown__button");if(n&&o){const a=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",(!a).toString()),n.style.display=a?"none":"block",o.setAttribute("aria-expanded",(!a).toString())}t.stopPropagation()},L=t=>{const e=t.currentTarget.closest(".dropdown"),n=e==null?void 0:e.querySelector(".dropdown__content"),o=n.getAttribute("aria-expanded")==="true",a=e==null?void 0:e.querySelector(".dropdown__button");switch(t.key){case"Escape":o&&c(t);break;case"Tab":if(o){const h=n.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'),v=h[h.length-1];(document.activeElement===v&&!t.shiftKey||document.activeElement===a&&t.shiftKey)&&c(t)}break}};document.addEventListener("click",t=>{document.querySelectorAll(".dropdown").forEach(n=>{if(!n.contains(t.target)){const o=n.querySelector(".dropdown__content"),a=n.querySelector(".dropdown__button");o&&o.getAttribute("aria-expanded")==="true"&&(o.setAttribute("aria-expanded","false"),o.style.display="none",a&&a.setAttribute("aria-expanded","false"))}})});const M=g?`width: ${g};`:"";return p`
    <div 
      id=${d}
      class=${["dropdown",`dropdown--${s}`].join(" ")}
      @keydown=${L}
    >
      <button
        class=${["dropdown__button",`button--${s}`].join(" ")}
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="${d}-dropdown"
        @click=${c}
      >
        
        ${s=="iconLabelCart"&&f?T({type:f,size:"large"}):null}
        <span class="dropdown__label">${l}</span>
        ${parseInt(b)>0&&s=="iconLabelCart"?p`<span class="labelOnTopRight">${b}</span>`:null}
      </button>
      
      <div 
        id="${d}-dropdown"
        class=${["dropdown__content",$].join(" ")}
        style=${M}
        aria-labelledby=${d}
        aria-expanded="false"
      >
            ${u}
      </div>
    </div>
  `},B={title:"Dropdown",tags:["autodocs"],argTypes:{label:{control:"text",description:"Etichetta del pulsante"},variant:{control:{type:"select"},options:["iconLabelCart","onlyLabel"],description:"Variante del dropdown"},iconName:{control:{type:"select"},options:[null,...A()],description:"Icona da visualizzare"},dropdownWidth:{control:"text",description:"Larghezza del dropdown"},dropdownClass:{contro:"text",description:"Classe CSS per il dropdown"},labelOnTopRight:{control:"text",description:"Numero prodotti nel carrello"}}},_=l=>{const u=p`
    <h3>Bagni</h3>
    <div>
        <ul style="display: grid;grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(3, 1fr);grid-column-gap: 0px;grid-row-gap: 0px;">
        <li><a href="#">Mobili bagno a terra</a></li>
        <li><a href="#">Mobili bagno sospesi</a></li>
        <li><a href="#">Mobiletti multiuso</a></li>
        <li><a href="#">Scarpiere</a></li>
        <li><a href="#">Specchi bagno</a></li>
        <li><a href="#">Rubinetteria bagno</a></li>
        </ul>
    </div>
    <a href="#">Collezione bagni</a>
  `;return p`
    ${q({...l,content:l.content||u})}
  `},r=_.bind({});r.args={label:"Carrello",variant:"iconLabelCart",iconName:"tipo_carrello",dropdownWidth:"470px",labelOnTopRight:"2"};const i=_.bind({});i.args={label:"Bagni",variant:"onlyLabel",iconName:null,dropdownWidth:"470px"};var m,w,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  // Definisci un contenuto HTML predefinito per la storia, ma permette di sovrascriverlo
  const defaultContent = html\`
    <h3>Bagni</h3>
    <div>
        <ul style="display: grid;grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(3, 1fr);grid-column-gap: 0px;grid-row-gap: 0px;">
        <li><a href="#">Mobili bagno a terra</a></li>
        <li><a href="#">Mobili bagno sospesi</a></li>
        <li><a href="#">Mobiletti multiuso</a></li>
        <li><a href="#">Scarpiere</a></li>
        <li><a href="#">Specchi bagno</a></li>
        <li><a href="#">Rubinetteria bagno</a></li>
        </ul>
    </div>
    <a href="#">Collezione bagni</a>
  \`;
  return html\`
    \${dropdown({
    ...args,
    content: args.content || defaultContent
  })}
  \`;
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var x,C,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  // Definisci un contenuto HTML predefinito per la storia, ma permette di sovrascriverlo
  const defaultContent = html\`
    <h3>Bagni</h3>
    <div>
        <ul style="display: grid;grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(3, 1fr);grid-column-gap: 0px;grid-row-gap: 0px;">
        <li><a href="#">Mobili bagno a terra</a></li>
        <li><a href="#">Mobili bagno sospesi</a></li>
        <li><a href="#">Mobiletti multiuso</a></li>
        <li><a href="#">Scarpiere</a></li>
        <li><a href="#">Specchi bagno</a></li>
        <li><a href="#">Rubinetteria bagno</a></li>
        </ul>
    </div>
    <a href="#">Collezione bagni</a>
  \`;
  return html\`
    \${dropdown({
    ...args,
    content: args.content || defaultContent
  })}
  \`;
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const R=["iconLabelCart","onlyLabel"];export{R as __namedExportsOrder,B as default,r as iconLabelCart,i as onlyLabel};
