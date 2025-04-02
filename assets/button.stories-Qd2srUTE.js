import{x as _}from"./lit-element-D_Wi02Oa.js";import{i as b,g as y}from"./icon-B2F652rT.js";const pe=({variant:e="primario",type:ae="pieno",disabled:ce,iconleft:g,iconright:u,iconsize:h="medium",width:se,height:le,label:x,onClick:de})=>_`
    <button
      type="button"
      class=${["button",`button--${e}-${ae}`,`button-width-${se}`,`button-height-${le}`,`button-${x===""?"rounded":"normal"}`,`button-icon${h}`].join(" ")}
      @click=${de}
      ?disabled=${ce}
    >
      ${e=="findomestic"?_`<img src='./assets/findomestic.svg'>`:null}
      ${g?b({type:g,size:h}):null}
      ${x}
      ${u?b({type:u,size:h}):null}
    </button>
  `,he={title:"Button",tags:["autodocs"],render:e=>pe(e),argTypes:{iconleft:{control:{type:"select"},options:[null,...y()],description:"Icona da visualizzare a sinistra"},iconright:{control:{type:"select"},options:[null,...y()],description:"Icona da visualizzare a destra"},iconsize:{control:{type:"select"},options:["small","medium","large"],description:"Dimensioni delle icone laterali"},width:{control:{type:"select"},options:["fitcontent","fixed"],description:"Larghezza"},height:{control:{type:"select"},options:["fitcontent","fixed"],description:"Altezza"},variant:{control:{type:"select"},options:["primario","secondario","terziario","dolcecasa","dolcecasanero","findomestic","carrello"],description:"Versioni"},type:{control:{type:"select"},options:["pieno","contorno"],description:"Stile dello sfondo"},disabled:{control:{type:"boolean"},description:"Se disabilitato"},label:{control:{type:"text"},description:"Testo interno al pulsante"}},parameters:{docs:{description:{component:"Vai al link del componente Button sul Figma: [link componente Button](https://www.figma.com/design/201b1LgGLEDCibrm9arMve/UI-KIT-Mondoconv?node-id=243-188&t=grO56kgmhjb5kRnO-4)"}}}},i={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"primario",type:"pieno",disabled:!1,label:"Testo"}},o={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"primario",type:"contorno",label:"Testo"}},n={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"secondario",type:"pieno",label:"Testo"}},t={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"secondario",type:"contorno",label:"Testo"}},r={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"terziario",type:"pieno",label:"Testo"}},a={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"dolcecasa",type:"pieno",label:"Testo"}},c={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"dolcecasanero",type:"pieno",label:"Testo"}},s={args:{iconleft:"tipo_freccia_sx",iconright:"tipo_freccia_dx",iconsize:"small",width:"fixed",height:"fixed",variant:"primario",type:"pieno",disabled:!0,label:"Testo"}},l={args:{iconleft:"tipo_carrello",iconright:null,iconsize:"medium",width:"fitcontent",height:"fixed",variant:"primario",type:"pieno",label:""}},d={args:{iconleft:"tipo_carrello",iconright:null,iconsize:"small",width:"fitcontent",height:"fixed",variant:"primario",type:"pieno",label:""}},p={args:{iconleft:null,iconright:null,iconsize:"small",width:"fixed",height:"fitcontent",variant:"secondario",type:"pieno",disabled:!1,label:"Testo"}},f={args:{iconleft:null,iconright:null,iconsize:"small",width:"fitcontent",height:"fitcontent",variant:"findomestic",type:"pieno",disabled:!1,label:"Paga a rate"}},m={args:{iconleft:null,iconright:"tipo_riproduci",iconsize:"medium",width:"fixed",height:"fixed",variant:"carrello",type:"pieno",disabled:!1,label:"Procedi con l'acquisto"}};var z,S,v;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    disabled: false,
    label: 'Testo'
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,T,$;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'primario',
    type: 'contorno',
    label: 'Testo'
  }
}`,...($=(T=o.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var P,D,C;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'secondario',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var k,M,I;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'secondario',
    type: 'contorno',
    label: 'Testo'
  }
}`,...(I=(M=t.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var q,A,B;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'terziario',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(B=(A=r.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,L,O;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'dolcecasa',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(O=(L=a.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var j,E,V;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'dolcecasanero',
    type: 'pieno',
    label: 'Testo'
  }
}`,...(V=(E=c.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var G,K,R;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_freccia_sx',
    iconright: 'tipo_freccia_dx',
    iconsize: 'small',
    width: 'fixed',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    disabled: true,
    label: 'Testo'
  }
}`,...(R=(K=s.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,H,J;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_carrello',
    iconright: null,
    iconsize: 'medium',
    width: 'fitcontent',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    label: ''
  }
}`,...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var N,Q,W;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    iconleft: 'tipo_carrello',
    iconright: null,
    iconsize: 'small',
    width: 'fitcontent',
    height: 'fixed',
    variant: 'primario',
    type: 'pieno',
    label: ''
  }
}`,...(W=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    iconleft: null,
    iconright: null,
    iconsize: 'small',
    width: 'fixed',
    height: 'fitcontent',
    variant: 'secondario',
    type: 'pieno',
    disabled: false,
    label: 'Testo'
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ie,oe;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    iconleft: null,
    iconright: null,
    iconsize: 'small',
    width: 'fitcontent',
    height: 'fitcontent',
    variant: 'findomestic',
    type: 'pieno',
    disabled: false,
    label: 'Paga a rate'
  }
}`,...(oe=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ne,te,re;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    iconleft: null,
    iconright: 'tipo_riproduci',
    iconsize: 'medium',
    width: 'fixed',
    height: 'fixed',
    variant: 'carrello',
    type: 'pieno',
    disabled: false,
    label: 'Procedi con l\\'acquisto'
  }
}`,...(re=(te=m.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const ge=["PrimarioSolido","PrimarioContorno","SecondarioSolido","SecondarioContorno","TerziarioSolido","DolcecasaSolido","DolcecasaneroSolido","PrimarioSolidoDisabilitato","CarrelloDesktop","CarrelloMobile","SecondarioSolidoMenu","Findomestic","ProcediAcquisto"];export{l as CarrelloDesktop,d as CarrelloMobile,a as DolcecasaSolido,c as DolcecasaneroSolido,f as Findomestic,o as PrimarioContorno,i as PrimarioSolido,s as PrimarioSolidoDisabilitato,m as ProcediAcquisto,t as SecondarioContorno,n as SecondarioSolido,p as SecondarioSolidoMenu,r as TerziarioSolido,ge as __namedExportsOrder,he as default};
