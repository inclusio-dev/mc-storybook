import{x as l,B as L}from"./lit-element-D_Wi02Oa.js";const h=({tabs:o,activeTab:s=0,variant:n="default",container:b})=>{let t=s;const y=e=>{const r=b.querySelector(`#tab-${e}`);r&&r.focus()},u=e=>{t=e,d(),y(e)},C=e=>{e.key==="ArrowLeft"&&t>0?u(t-1):e.key==="ArrowRight"&&t<o.length-1&&u(t+1)},d=()=>{const e=l`
      <div class="tabs tabs--${n}">
        <div role="tablist" aria-labelledby="tablist-1" @keydown=${C}>
          ${o.map((r,a)=>l`
                <span>
                    <button
                        id="tab-${a}"
                        type="button"
                        role="tab"
                        aria-selected="${a===t}"
                        aria-controls="tabpanel-${a}"
                        tabindex="${a===t?"0":"-1"}"
                        @click=${()=>u(a)}
                        class="tab-button tab-button--${n} ${a===t?"tab-button--active":""}"
                    >
                        ${r.label}
                    </button>
                </span>
            `)}
        </div>
        ${o.map((r,a)=>l`
            <div
              id="tabpanel-${a}"
              role="tabpanel"
              aria-labelledby="tab-${a}"
              class="tabpanel ${a!==t?"is-hidden":""}"
              ?hidden=${a!==t}
            >
              ${r.content}
            </div>
          `)}
      </div>
    `;L(e,b)};return d(),{update:u,getActiveTab:()=>t}},S={title:"Tab",tags:["autodocs"]},$=o=>{const s=document.createElement("div");return s.innerHTML="",h({...o,container:s,tabs:o.tabs.map(n=>({...n,content:typeof n.content=="function"?n.content():n.content}))}),s},c=$.bind({});c.args={tabs:[{label:"Prima",content:"Contenuto della prima tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{label:"Seconda",content:"Contenuto della seconda tab. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis."},{label:"Terza",content:()=>l`<p>Contenuto della terza tab. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>`}],variant:"default",activeTab:0};const i=$.bind({});i.args={tabs:[{label:"Prima",content:"Contenuto della prima tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{label:"Seconda",content:"Contenuto della seconda tab. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis."},{label:"Terza",content:()=>l`<p>Contenuto della terza tab. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>`}],variant:"pieno",activeTab:0};var p,m,T;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`(args: any) => {
  const container = document.createElement('div');
  container.innerHTML = '';
  createTabs({
    ...args,
    container,
    tabs: args.tabs.map((tab: any) => ({
      ...tab,
      content: typeof tab.content === 'function' ? tab.content() : tab.content
    }))
  });
  return container;
}`,...(T=(m=c.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var g,v,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(args: any) => {
  const container = document.createElement('div');
  container.innerHTML = '';
  createTabs({
    ...args,
    container,
    tabs: args.tabs.map((tab: any) => ({
      ...tab,
      content: typeof tab.content === 'function' ? tab.content() : tab.content
    }))
  });
  return container;
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const k=["TabDefault","TabPieno"];export{c as TabDefault,i as TabPieno,k as __namedExportsOrder,S as default};
