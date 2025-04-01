import{f as N}from"./index-mUr1L4K7.js";import{x as Q}from"./lit-element-D_Wi02Oa.js";import{i as d}from"./icon-D_WKR1UM.js";const R=({variant:l="primario",type:G="pieno",iconleft:H,iconright:I,iconsize:J,width:K,label:p,onClick:L})=>Q`
    <button
      type="button"
      class=${["button",`button--${l}-${G}`,`button-${K}`,`button-${p===""?"rounded":"normal"}`,`button-icon${J}`].join(" ")}
      @click=${L}
    >
      ${H?d({type:"tipo_freccia_sx",size:"medium"}):null}
      ${p}
      ${I?d({type:"tipo_freccia_dx",size:"medium"}):null}
    </button>
  `,X={title:"Button",tags:["autodocs"],render:l=>R(l),argTypes:{iconleft:{control:{type:"boolean"},description:"Se presente icona a sinistra"},iconright:{control:{type:"boolean"},description:"Se presente icona a destra"},iconsize:{control:{type:"select"},options:["small","medium","large"]},width:{control:{type:"select"},options:["fitcontent","fixed"]},variant:{control:{type:"select"},options:["primario","secondario","terziario","dolcecasa","dolcecasanero"]},type:{control:{type:"select"},options:["pieno","contorno"]},label:{control:{type:"text"}}},args:{onClick:N()}},e={args:{iconleft:!0,iconright:!0,iconsize:"small",width:"fixed",variant:"primario",type:"pieno",label:"Testo"}},o={args:{iconleft:!0,iconright:!0,iconsize:"small",width:"fixed",variant:"primario",type:"contorno",label:"Testo"}},r={args:{iconleft:!0,iconright:!0,iconsize:"small",width:"fixed",variant:"secondario",type:"pieno",label:"Testo"}},n={args:{iconleft:!0,iconright:!0,iconsize:"small",width:"fixed",variant:"secondario",type:"contorno",label:"Testo"}},t={args:{iconleft:!0,iconright:!0,iconsize:"small",width:"fixed",variant:"terziario",type:"pieno",label:"Testo"}},i={args:{iconleft:!0,iconright:!0,iconsize:"small",width:"fixed",variant:"dolcecasa",type:"pieno",label:"Testo"}},a={args:{iconleft:!0,iconright:!0,iconsize:"small",width:"fixed",variant:"dolcecasanero",type:"pieno",label:"Testo"}},s={args:{iconleft:!0,iconright:!1,iconsize:"medium",width:"fitcontent",variant:"primario",type:"pieno",label:""}},c={args:{iconleft:!0,iconright:!1,iconsize:"small",width:"fitcontent",variant:"primario",type:"pieno",label:""}};var m,u,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'primario',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(f=(u=e.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'primario',
    type: 'contorno',
    label: 'Testo'
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,z,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'secondario',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var x,v,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'secondario',
    type: 'contorno',
    label: 'Testo'
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var T,$,C;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'terziario',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(C=($=t.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var D,_,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'dolcecasa',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var P,M,j;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: true,
    iconsize: 'small',
    width: 'fixed',
    variant: 'dolcecasanero',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(j=(M=a.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var B,E,O;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: false,
    iconsize: 'medium',
    width: 'fitcontent',
    variant: 'primario',
    type: 'pieno',
    label: ''
  }
}`,...(O=(E=s.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var q,A,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    iconleft: true,
    iconright: false,
    iconsize: 'small',
    width: 'fitcontent',
    variant: 'primario',
    type: 'pieno',
    label: ''
  }
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const Y=["PrimarioSolido","PrimarioContorno","SecondarioSolido","SecondarioContorno","TerziarioSolido","DolcecasaSolido","DolcecasaneroSolido","CarrelloDesktop","CarrelloMobile"];export{s as CarrelloDesktop,c as CarrelloMobile,i as DolcecasaSolido,a as DolcecasaneroSolido,o as PrimarioContorno,e as PrimarioSolido,n as SecondarioContorno,r as SecondarioSolido,t as TerziarioSolido,Y as __namedExportsOrder,X as default};
