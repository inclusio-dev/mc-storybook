import{x as o}from"./lit-element-D_Wi02Oa.js";import{i as r}from"./icon-B2F652rT.js";const d=({label:n="",open:t=!1,content:s="",customIcon:H=!1,onToggle:m})=>o`
    <div class="accordion">
      <details ?open=${t} @toggle=${S=>{const w=S.currentTarget;m&&m(w.open)}}>
        <summary class="accordion__summary">
          ${H?o`<span class="accordion__icon"> ${r({type:"tipo_posizione",size:"medium"})} </span>`:null}
          <span class="accordion__label">${n}</span>
          <span class="accordion__icon">
            <span class="tipo_freccia_basso">
              ${r({type:"tipo_freccia_basso",size:"medium"})}
            </span>
            <span class="tipo_freccia_alto">
              ${r({type:"tipo_freccia_alto",size:"medium"})}
            </span>
          </span>
        </summary>
        <div class="accordion__content">
          ${s}
        </div>
      </details>
    </div>
  `,P={title:"Accordion",tags:["autodocs"],argTypes:{label:{control:"text",description:"Testo del pulsante di apertura dell accordion"},open:{control:"boolean",description:"Stato dell accordion"},customIcon:{control:"boolean",description:"Se presente icona a sinistra"},onToggle:{action:"toggled"}},parameters:{docs:{description:{component:"Vai al link del componente Accordion sul Figma: [link componente Accordion](https://www.figma.com/design/201b1LgGLEDCibrm9arMve/UI-KIT-Mondoconv?node-id=399-646)"}}}},p=n=>{const t=o`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  `;return o`
    <div style="max-width: 500px; margin: 0 auto;">
      ${d({...n,content:t,onToggle:s=>console.log("Accordion toggled:",s)})}
    </div>
  `},e=p.bind({});e.args={label:"Accordion Title",open:!1,customIcon:!1};const a=p.bind({});a.args={...e.args,open:!0};const l=p.bind({});l.args={...e.args,customIcon:!0};const z=o`
  <p>Questo è un paragrafo di testo più lungo per mostrare come l'accordion si comporta con contenuti estesi.</p>
  <p>Puoi inserire qualsiasi contenuto HTML qui, inclusi altri componenti personalizzati.</p>
  <ul>
    <li>Elemento lista 1</li>
    <li>Elemento lista 2</li>
    <li>Elemento lista 3</li>
  </ul>
`,O=n=>o`
  <div style="max-width: 500px; margin: 0 auto;">
    ${d({...n,content:z,onToggle:t=>console.log("Accordion toggled:",t)})}
  </div>
`,i=O.bind({});i.storyName="Con Contenuto Lungo";i.args={...e.args};const Q=[{label:"Primo Accordion",content:o`<p>Contenuto del primo accordion nella lista.</p>`,open:!1,customIcon:!0},{label:"Secondo Accordion",content:o`
      <p>Contenuto del secondo accordion nella lista.</p>
      <ul>
        <li>Sottoelemento 1</li>
        <li>Sottoelemento 2</li>
      </ul>
    `,open:!1,customIcon:!0},{label:"Terzo Accordion",content:o`
      <p>Contenuto del terzo accordion nella lista con più elementi.</p>
      <p>Questo accordion ha più contenuti per mostrare la flessibilità.</p>
    `,open:!1,customIcon:!0},{label:"Quarto Accordion",content:o`<p>Contenuto del primo accordion nella lista.</p>`,open:!1,customIcon:!0},{label:"Quinto Accordion",content:o`
      <p>Contenuto del secondo accordion nella lista.</p>
      <ul>
        <li>Sottoelemento 1</li>
        <li>Sottoelemento 2</li>
      </ul>
    `,open:!1,customIcon:!0},{label:"Sesto Accordion",content:o`
      <p>Contenuto del terzo accordion nella lista con più elementi.</p>
      <p>Questo accordion ha più contenuti per mostrare la flessibilità.</p>
    `,open:!1,customIcon:!0}],q=()=>o`
  <div style="max-width: 365px; margin: 0 auto;">
    <ul class="accordion-list" style="list-style-type: none; padding: 0;">
      ${Q.map(n=>o`
        <li>
          ${d({label:n.label,content:n.content,open:n.open,customIcon:n.customIcon,onToggle:t=>console.log(`${n.label} toggled:`,t)})}
        </li>
      `)}
    </ul>
  </div>
`,c=q.bind({});c.storyName="Lista di Accordion";c.parameters={docs:{description:{story:"Questo esempio mostra come utilizzare più accordion all'interno di una lista per creare un menu a più livelli o una FAQ."}}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,T,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(y=(T=a.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var v,A,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(h=(A=l.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var _,x,L;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`args => html\`
  <div style="max-width: 500px; margin: 0 auto;">
    \${accordion({
  ...args,
  content: longContentTemplate,
  onToggle: isOpen => console.log('Accordion toggled:', isOpen)
})}
  </div>
\``,...(L=(x=i.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var $,I,C;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`() => html\`
  <div style="max-width: 365px; margin: 0 auto;">
    <ul class="accordion-list" style="list-style-type: none; padding: 0;">
      \${accordionListItems.map(item => html\`
        <li>
          \${accordion({
  label: item.label,
  content: item.content,
  open: item.open,
  customIcon: item.customIcon,
  onToggle: isOpen => console.log(\`\${item.label} toggled:\`, isOpen)
})}
        </li>
      \`)}
    </ul>
  </div>
\``,...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const E=["Default","ApertoByDefault","ConIcona","WithLongContent","AccordionList"];export{c as AccordionList,a as ApertoByDefault,l as ConIcona,e as Default,i as WithLongContent,E as __namedExportsOrder,P as default};
