import{x as s,B as g}from"./lit-element-D_Wi02Oa.js";import{i as l}from"./icon-D_WKR1UM.js";const $=({label:e="",open:t=!1,content:a="",onToggle:p})=>s`
    <div class="accordion">
      <details ?open=${t} @toggle=${b=>{const c=b.currentTarget,m=c.querySelector(".accordion__icon");c.open?g(l({type:"tipo_freccia_basso",size:"medium"}),m):g(l({type:"tipo_freccia_alto",size:"medium"}),m),p&&p(c.open)}}>
        <summary class="accordion__summary">
          <span class="accordion__label">${e}</span>
          <span class="accordion__icon">
            ${l({type:"tipo_freccia_basso",size:"medium"})}
          </span>
        </summary>
        <div class="accordion__content">
          ${a}
        </div>
      </details>
    </div>
  `,z={title:"Components/Accordion",argTypes:{label:{control:"text"},open:{control:"boolean"},onToggle:{action:"toggled"}}},d=e=>{const t=s`
    <p>Questo è il contenuto dell'accordion. Puoi inserire qualsiasi elemento HTML qui dentro.</p>
  `;return s`
    <div style="max-width: 500px; margin: 0 auto;">
      ${$({...e,content:t,onToggle:a=>console.log("Accordion toggled:",a)})}
    </div>
  `},o=d.bind({});o.args={label:"Accordion Title",open:!1};const i=d.bind({});i.args={...o.args,open:!0};const r=d.bind({});r.args={...o.args};const C=s`
  <p>Questo è un paragrafo di testo più lungo per mostrare come l'accordion si comporta con contenuti estesi.</p>
  <p>Puoi inserire qualsiasi contenuto HTML qui, inclusi altri componenti personalizzati.</p>
  <ul>
    <li>Elemento lista 1</li>
    <li>Elemento lista 2</li>
    <li>Elemento lista 3</li>
  </ul>
`,A=e=>s`
  <div style="max-width: 500px; margin: 0 auto;">
    ${$({...e,content:C,onToggle:t=>console.log("Accordion toggled:",t)})}
  </div>
`,n=A.bind({});n.storyName="With Long Content";n.args={...o.args};var u,T,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var _,f,y;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,x,H;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(H=(x=r.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var L,q,O;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`args => html\`
  <div style="max-width: 500px; margin: 0 auto;">
    \${accordion({
  ...args,
  content: longContentTemplate,
  onToggle: isOpen => console.log('Accordion toggled:', isOpen)
})}
  </div>
\``,...(O=(q=n.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const P=["Default","OpenByDefault","WithCustomIcons","WithLongContent"];export{o as Default,i as OpenByDefault,r as WithCustomIcons,n as WithLongContent,P as __namedExportsOrder,z as default};
