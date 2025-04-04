import{x as u}from"./lit-element-D_Wi02Oa.js";import{i as B,g as k}from"./icon-B2F652rT.js";const R=({label:d,content:g,variant:r="iconLabel",dropdownWidth:f="auto",dropdownClass:v="",labelOnTopRight:T="2",iconName:h=null})=>{const c=`dropdown-${Math.random().toString(36).substring(2,11)}`,p=t=>{const e=t.currentTarget.closest(".dropdown"),n=e==null?void 0:e.querySelector(".dropdown__content"),a=e==null?void 0:e.querySelector(".dropdown__button");if(n&&a){const o=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",(!o).toString()),n.style.display=o?"none":"block",a.setAttribute("aria-expanded",(!o).toString())}t.stopPropagation()},A=t=>{const e=t.currentTarget.closest(".dropdown"),n=e==null?void 0:e.querySelector(".dropdown__content"),a=n.getAttribute("aria-expanded")==="true",o=e==null?void 0:e.querySelector(".dropdown__button");switch(t.key){case"Escape":a&&p(t);break;case"Tab":if(a){const m=n.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'),z=m[m.length-1];(document.activeElement===z&&!t.shiftKey||document.activeElement===o&&t.shiftKey)&&p(t)}break}};document.addEventListener("click",t=>{document.querySelectorAll(".dropdown").forEach(n=>{if(!n.contains(t.target)){const a=n.querySelector(".dropdown__content"),o=n.querySelector(".dropdown__button");a&&a.getAttribute("aria-expanded")==="true"&&(a.setAttribute("aria-expanded","false"),a.style.display="none",o&&o.setAttribute("aria-expanded","false"))}})});const q=f?`width: ${f};`:"";return u`
    <div 
      id=${c}
      class=${["dropdown",`dropdown--${r}`].join(" ")}
      @keydown=${A}
    >
      <button
        class=${["dropdown__button",`button--${r}`].join(" ")}
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="${c}-dropdown"
        @click=${p}
      >
        
        ${(r=="iconLabel"||r=="iconLabelCart")&&h?B({type:h,size:"large"}):null}
        <span class="dropdown__label">${d}</span>
        ${r=="iconLabelCart"?u`<span class="labelOnTopRight">${T}</span>`:null}
      </button>
      
      <div 
        id="${c}-dropdown"
        class=${["dropdown__content",v].join(" ")}
        style=${q}
        aria-labelledby=${c}
        aria-expanded="false"
      >
            ${g}
      </div>
    </div>
  `},N={title:"Dropdown",tags:["autodocs"],argTypes:{label:{control:"text",description:"Etichetta del pulsante"},variant:{control:{type:"select"},options:["iconLabel","iconLabelCart","onlyLabel"],description:"Variante del dropdown"},iconName:{control:{type:"select"},options:[null,...k()],description:"Icona da visualizzare"},dropdownWidth:{control:"text",description:"Larghezza del dropdown"},dropdownClass:{contro:"text",description:"Classe CSS per il dropdown"},labelOnTopRight:{control:"text",description:"Numero prodotti nel carrello"}}},b=d=>{const g=u`
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
  `;return u`
    ${R({...d,content:d.content||g})}
  `},i=b.bind({});i.args={label:"Catalogo",variant:"iconLabel",iconName:"tipo_catalogo",dropdownWidth:"470px"};const l=b.bind({});l.args={label:"Carrello",variant:"iconLabelCart",iconName:"tipo_carrello",dropdownWidth:"470px",labelOnTopRight:"2"};const s=b.bind({});s.args={label:"Bagni",variant:"onlyLabel",iconName:null,dropdownWidth:"470px"};var w,y,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
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
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,S,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var $,L,M;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
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
}`,...(M=(L=s.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const O=["iconLabel","iconLabelCart","onlyLabel"];export{O as __namedExportsOrder,N as default,i as iconLabel,l as iconLabelCart,s as onlyLabel};
