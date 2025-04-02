import{x as e}from"./lit-element-D_Wi02Oa.js";import{i as r}from"./icon-D_WKR1UM.js";const $=({label:t="",open:i=!1,content:c="",customIcon:L=!1,onToggle:d})=>e`
    <div class="accordion">
      <details ?open=${i} @toggle=${b=>{const O=b.currentTarget;d&&d(O.open)}}>
        <summary class="accordion__summary">
          ${L?e`<span class="accordion__icon"> ${r({type:"tipo_posizione",size:"medium"})} </span>`:null}
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
  `,D={title:"Accordion",tags:["autodocs"],argTypes:{label:{control:"text",description:"Testo del pulsante di apertura dell accordion"},open:{control:"boolean",description:"Stato dell accordion"},customIcon:{control:"boolean",description:"Se presente icona a sinistra"},onToggle:{action:"toggled"}}},l=t=>{const i=e`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  `;return e`
    <div style="max-width: 500px; margin: 0 auto;">
      ${$({...t,content:i,onToggle:c=>console.log("Accordion toggled:",c)})}
    </div>
  `},o=l.bind({});o.args={label:"Accordion Title",open:!1,customIcon:!1};const s=l.bind({});s.args={...o.args,open:!0};const a=l.bind({});a.args={...o.args,customIcon:!0};const q=e`
  <p>Questo è un paragrafo di testo più lungo per mostrare come l'accordion si comporta con contenuti estesi.</p>
  <p>Puoi inserire qualsiasi contenuto HTML qui, inclusi altri componenti personalizzati.</p>
  <ul>
    <li>Elemento lista 1</li>
    <li>Elemento lista 2</li>
    <li>Elemento lista 3</li>
  </ul>
`,A=t=>e`
  <div style="max-width: 500px; margin: 0 auto;">
    ${$({...t,content:q,onToggle:i=>console.log("Accordion toggled:",i)})}
  </div>
`,n=A.bind({});n.storyName="With Long Content";n.args={...o.args};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,T,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,y,H;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
  <div style="max-width: 500px; margin: 0 auto;">
    \${accordion({
  ...args,
  content: longContentTemplate,
  onToggle: isOpen => console.log('Accordion toggled:', isOpen)
})}
  </div>
\``,...(H=(y=n.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const w=["Default","OpenByDefault","WithCustomIcons","WithLongContent"];export{o as Default,s as OpenByDefault,a as WithCustomIcons,n as WithLongContent,w as __namedExportsOrder,D as default};
