import{x as e}from"./lit-element-D_Wi02Oa.js";import{i as r}from"./icon-D_WKR1UM.js";const L=({label:t="",open:i=!1,content:c="",customIcon:$=!1,onToggle:d})=>e`
    <div class="accordion">
      <details ?open=${i} @toggle=${b=>{const A=b.currentTarget;d&&d(A.open)}}>
        <summary class="accordion__summary">
          ${$?e`<span class="accordion__icon"> ${r({type:"tipo_posizione",size:"medium"})} </span>`:null}
          <span class="accordion__label">${t}</span>
          <span class="accordion__icon">
            <span class="tipo_freccia_alto">
              ${r({type:"tipo_freccia_alto",size:"medium"})}
            </span>
            <span class="tipo_freccia_basso">
              ${r({type:"tipo_freccia_basso",size:"medium"})}
            </span>
          </span>
        </summary>
        <div class="accordion__content">
          ${c}
        </div>
      </details>
    </div>
  `,O={title:"Accordion",tags:["autodocs"],argTypes:{label:{control:"text",description:"Testo del pulsante di apertura dell accordion"},open:{control:"boolean",description:"Stato dell accordion"},customIcon:{control:"boolean",description:"Se presente icona a sinistra"},onToggle:{action:"toggled"}},parameters:{docs:{description:{component:"Vai al link del componente Accordion sul Figma: [link componente Accordion](https://www.figma.com/design/201b1LgGLEDCibrm9arMve/UI-KIT-Mondoconv?node-id=399-646)"}}}},l=t=>{const i=e`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  `;return e`
    <div style="max-width: 500px; margin: 0 auto;">
      ${L({...t,content:i,onToggle:c=>console.log("Accordion toggled:",c)})}
    </div>
  `},o=l.bind({});o.args={label:"Accordion Title",open:!1,customIcon:!1};const a=l.bind({});a.args={...o.args,open:!0};const s=l.bind({});s.args={...o.args,customIcon:!0};const q=e`
  <p>Questo è un paragrafo di testo più lungo per mostrare come l'accordion si comporta con contenuti estesi.</p>
  <p>Puoi inserire qualsiasi contenuto HTML qui, inclusi altri componenti personalizzati.</p>
  <ul>
    <li>Elemento lista 1</li>
    <li>Elemento lista 2</li>
    <li>Elemento lista 3</li>
  </ul>
`,C=t=>e`
  <div style="max-width: 500px; margin: 0 auto;">
    ${L({...t,content:q,onToggle:i=>console.log("Accordion toggled:",i)})}
  </div>
`,n=C.bind({});n.storyName="Con Contenuto Lungo";n.args={...o.args};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  // Definire il contenuto HTML per l'accordion
  const contentHtml = html\`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  \`;
  return html\`
    <div style="max-width: 500px; margin: 0 auto;">
      \${accordion({
    ...args,
    content: contentHtml,
    onToggle: isOpen => console.log('Accordion toggled:', isOpen)
  })}
    </div>
  \`;
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,T,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  // Definire il contenuto HTML per l'accordion
  const contentHtml = html\`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  \`;
  return html\`
    <div style="max-width: 500px; margin: 0 auto;">
      \${accordion({
    ...args,
    content: contentHtml,
    onToggle: isOpen => console.log('Accordion toggled:', isOpen)
  })}
    </div>
  \`;
}`,...(_=(T=a.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var f,v,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  // Definire il contenuto HTML per l'accordion
  const contentHtml = html\`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  \`;
  return html\`
    <div style="max-width: 500px; margin: 0 auto;">
      \${accordion({
    ...args,
    content: contentHtml,
    onToggle: isOpen => console.log('Accordion toggled:', isOpen)
  })}
    </div>
  \`;
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,y,H;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
  <div style="max-width: 500px; margin: 0 auto;">
    \${accordion({
  ...args,
  content: longContentTemplate,
  onToggle: isOpen => console.log('Accordion toggled:', isOpen)
})}
  </div>
\``,...(H=(y=n.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const D=["Default","ApertoByDefault","ConIcona","WithLongContent"];export{a as ApertoByDefault,s as ConIcona,o as Default,n as WithLongContent,D as __namedExportsOrder,O as default};
