import{x as g}from"./lit-element-D_Wi02Oa.js";import{i as b,g as O}from"./icon-B2F652rT.js";const D=({href:a="#",target:d="_self",variant:r="header",label:u,withIcon:e=null,border:E=!1,borderRadius:M=!1,dataActive:p=!1,onClick:f})=>{const F=H=>{f&&f();const j=new CustomEvent("link-click",{bubbles:!0,composed:!0,detail:{href:a}});H.target.dispatchEvent(j)};return g`
    <a
      class=${["link",`link--${r}`,E?"link-border":null,M?"link-borderradius":null,p?"active":null].join(" ")}
      href="${a}"
      target="${d}"
      rel="${d==="_blank"?"noopener noreferrer":""}"
      @click=${F}
      ${p?"aria-current:page":""}
    >
      ${e&&r=="header"?b({type:e,size:"medium"}):null}
      ${u}
      ${e&&r=="inline"?b({type:e,size:"small"}):null}
    </a>
  `},B={title:"Link",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["header","tag","inline"],description:"Stile visuale del link",defaultValue:"header"},href:{control:"text",description:"URL a cui il link punta",defaultValue:"#"},target:{control:{type:"select"},options:["_self","_blank","_parent","_top"],description:"Attributo target per il link",defaultValue:"_self"},label:{control:"text",description:"Testo del link"},withIcon:{control:{type:"select"},options:[null,...O()],description:"Icona da visualizzare a destra"},border:{control:{type:"boolean"},description:"Mostra il bordo del link",defaultValue:!1},borderRadius:{control:{type:"boolean"},description:"Mostra il bordo arrotondato del link",defaultValue:!1},dataActive:{control:{type:"boolean"},description:"Attiva lo stato attivo del link",defaultValue:!1}}},c=a=>D(a),t=c.bind({});t.args={variant:"header",href:"#",target:"_self",label:"Punti Vendita",withIcon:"tipo_posizione"};const n=c.bind({});n.args={variant:"inline",href:"#a",target:"_self",label:"Link Primario",withIcon:"tipo_freccia_dx",border:!1,borderRadius:!1};const l=c.bind({});l.args={variant:"tag",href:"#",target:"_self",label:"Link Primario",withIcon:null,border:!0,borderRadius:!1};const i=c.bind({});i.args={variant:"tag",href:"#a",target:"_self",label:"Link Primario",withIcon:null,border:!0,borderRadius:!0};const C=a=>{const{variant:d,borderRadius:r,tags:u}=a;return g`
    <ul style="display: flex; list-style: none; padding: 0; margin: 0; overflow: scroll; scrollbar-width: none;">
      ${u.map(e=>g`
        <li>
          ${D({variant:d,href:e.href||"#",target:"_self",label:e.label,withIcon:e.withIcon||null,border:!0,borderRadius:r,dataActive:!!e.active})}
        </li>
      `)}
    </ul>
  `},s=C.bind({});s.args={variant:"tag",borderRadius:!1,tags:[{label:"Matrimoniale",href:"#",active:!0},{label:"1 piazza e mezza",href:"#",active:!1},{label:"Singolo",href:"#",active:!1}]};const o=C.bind({});o.args={variant:"tag",borderRadius:!0,tags:[{label:"Tutto",href:"#",active:!0},{label:"Promozioni",href:"#",active:!1},{label:"Piani cottura",href:"#",active:!1},{label:"Forni",href:"#",active:!1},{label:"Lavastoviglie da incasso",href:"#",active:!1},{label:"Forni a microonde",href:"#",active:!1},{label:"Piano cottura a induzione",href:"#",active:!1}]};var m,h,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return link(args);
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var k,I,_;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return link(args);
}`,...(_=(I=n.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var y,R,$;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return link(args);
}`,...($=(R=l.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var w,T,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return link(args);
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var z,x,V;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const {
    variant,
    borderRadius,
    tags
  } = args as {
    variant: LinkVariant;
    borderRadius: boolean;
    tags: TagItem[];
  };
  return html\`
    <ul style="display: flex; list-style: none; padding: 0; margin: 0; overflow: scroll; scrollbar-width: none;">
      \${tags.map((tagItem: TagItem) => html\`
        <li>
          \${link({
    variant: variant,
    href: tagItem.href || '#',
    target: '_self',
    label: tagItem.label,
    withIcon: tagItem.withIcon || null,
    border: true,
    borderRadius: borderRadius,
    dataActive: tagItem.active ? true : false
  })}
        </li>
      \`)}
    </ul>
  \`;
}`,...(V=(x=s.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var S,P,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const {
    variant,
    borderRadius,
    tags
  } = args as {
    variant: LinkVariant;
    borderRadius: boolean;
    tags: TagItem[];
  };
  return html\`
    <ul style="display: flex; list-style: none; padding: 0; margin: 0; overflow: scroll; scrollbar-width: none;">
      \${tags.map((tagItem: TagItem) => html\`
        <li>
          \${link({
    variant: variant,
    href: tagItem.href || '#',
    target: '_self',
    label: tagItem.label,
    withIcon: tagItem.withIcon || null,
    border: true,
    borderRadius: borderRadius,
    dataActive: tagItem.active ? true : false
  })}
        </li>
      \`)}
    </ul>
  \`;
}`,...(A=(P=o.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const G=["Header","ConIcona","tag1","tag2","ListaDiTag1","ListaDiTag2"];export{n as ConIcona,t as Header,s as ListaDiTag1,o as ListaDiTag2,G as __namedExportsOrder,B as default,l as tag1,i as tag2};
