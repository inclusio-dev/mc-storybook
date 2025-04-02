import{f as X}from"./index-mUr1L4K7.js";import{x as Y}from"./lit-element-D_Wi02Oa.js";import{i as u,g}from"./icon-BKOcSNub.js";const Z=({variant:p="primario",type:J="pieno",disabled:N,iconleft:m,iconright:f,iconsize:d="medium",width:Q,label:_,onClick:W})=>Y`
    <button
      type="button"
      class=${["button",`button--${p}-${J}`,`button-${Q}`,`button-${_===""?"rounded":"normal"}`,`button-icon${d}`].join(" ")}
      @click=${W}
      ?disabled=${N}
    >
      ${m?u({type:m,size:d}):null}
      ${_}
      ${f?u({type:f,size:d}):null}
    </button>
  `,ro={title:"Button",tags:["autodocs"],render:p=>Z(p),argTypes:{iconleft:{control:{type:"select"},options:[null,...g()],description:"Icona da visualizzare a sinistra"},iconright:{control:{type:"select"},options:[null,...g()],description:"Icona da visualizzare a destra"},iconsize:{control:{type:"select"},options:["small","medium","large"]},width:{control:{type:"select"},options:["fitcontent","fixed"]},variant:{control:{type:"select"},options:["primario","secondario","terziario","dolcecasa","dolcecasanero"]},type:{control:{type:"select"},options:["pieno","contorno"]},disabled:{control:{type:"boolean"},description:"Se disabilitato"},label:{control:{type:"text"}}},args:{onClick:X()},parameters:{docs:{description:{component:"Vai al link del componente Button sul Figma: [link componente Button](https://www.figma.com/design/201b1LgGLEDCibrm9arMve/UI-KIT-Mondoconv?node-id=243-188&t=grO56kgmhjb5kRnO-4)"}}}},o={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",variant:"primario",type:"pieno",disabled:!1,label:"Testo"}},i={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",variant:"primario",type:"contorno",label:"Testo"}},e={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",variant:"secondario",type:"pieno",label:"Testo"}},r={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",variant:"secondario",type:"contorno",label:"Testo"}},a={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",variant:"terziario",type:"pieno",label:"Testo"}},n={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",variant:"dolcecasa",type:"pieno",label:"Testo"}},t={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",variant:"dolcecasanero",type:"pieno",label:"Testo"}},c={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",variant:"primario",type:"pieno",disabled:!0,label:"Testo"}},s={args:{iconleft:"tipo_carrello",iconright:null,iconsize:"medium",width:"fitcontent",variant:"primario",type:"pieno",label:""}},l={args:{iconleft:"tipo_carrello",iconright:null,iconsize:"small",width:"fitcontent",variant:"primario",type:"pieno",label:""}};var x,b,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    variant: 'primario',
    type: 'pieno',
    disabled: false,
    label: 'Testo'
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,z,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    variant: 'primario',
    type: 'contorno',
    label: 'Testo'
  }
}`,...(S=(z=i.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var v,w,T;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    variant: 'secondario',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(T=(w=e.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var $,C,D;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    variant: 'secondario',
    type: 'contorno',
    label: 'Testo'
  }
}`,...(D=(C=r.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,P,I;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    variant: 'terziario',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(I=(P=a.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var M,B,O;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    variant: 'dolcecasa',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(O=(B=n.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var j,E,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    variant: 'dolcecasanero',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(L=(E=t.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var A,F,G;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    variant: 'primario',
    type: 'pieno',
    disabled: true,
    label: 'Testo'
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,R,U;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_carrello',
    iconright: null,
    iconsize: 'medium',
    width: 'fitcontent',
    variant: 'primario',
    type: 'pieno',
    label: ''
  }
}`,...(U=(R=s.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,q,H;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_carrello',
    iconright: null,
    iconsize: 'small',
    width: 'fitcontent',
    variant: 'primario',
    type: 'pieno',
    label: ''
  }
}`,...(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const ao=["PrimarioSolido","PrimarioContorno","SecondarioSolido","SecondarioContorno","TerziarioSolido","DolcecasaSolido","DolcecasaneroSolido","PrimarioSolidoDisabilitato","CarrelloDesktop","CarrelloMobile"];export{s as CarrelloDesktop,l as CarrelloMobile,n as DolcecasaSolido,t as DolcecasaneroSolido,i as PrimarioContorno,o as PrimarioSolido,c as PrimarioSolidoDisabilitato,r as SecondarioContorno,e as SecondarioSolido,a as TerziarioSolido,ao as __namedExportsOrder,ro as default};
