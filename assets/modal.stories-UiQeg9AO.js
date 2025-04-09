import{x as d}from"./lit-element-D_Wi02Oa.js";import{b as c}from"./button-fbg3-bwL.js";import"./icon-B2F652rT.js";const m=({title:t,content:i=""})=>{const e=()=>{console.log("close modal ");const o=document.querySelector("#modal-overlay");o&&o.classList.remove("is-open")},l=o=>{o.target.id==="modal-overlay"&&e&&e()};return document.addEventListener("keydown",o=>{o.key==="Escape"&&e()}),d`
    <div 
      id="modal-overlay" 
      class="modal-overlay" 
      role="presentation" 
      tabindex="-1"
      @click=${l}
    >
      <div 
        id="modal" 
        role="dialog"
        class="modal" 
        aria-labelledby="modal-title" 
        aria-describedby="modal-desc" 
        aria-modal="true"
        
      >
        <header class="modal-header">
          <h2 id="modal-title" class="modal-title">${t}</h2>
          ${c({iconleft:"tipo_chiudi",iconsize:"small",label:"",variant:"primario",type:"contorno",onClick:e,width:"fitcontent",height:"fitcontent"})}
        </header>
        <div id="modal-desc" class="modal-content">
         ${i}
        </div>

      </div>
    </div>
  `},y={title:"Components/Modal",component:"my-modal",tags:["autodocs"],argTypes:{title:{control:"text"},content:{control:"text"}}},u=t=>{const i=()=>{const l=document.querySelector("#modal-overlay");l&&l.classList.add("is-open")},e=d`
    <p>Questo è il contenuto della modale. La modale può essere chiusa in diversi modi:</p>
    <ul>
      <li>Premendo il pulsante "Chiudi"</li>
      <li>Premendo il tasto ESC sulla tastiera</li>
      <li>Cliccando all'esterno della modale</li>
    </ul>
    <p>Questi metodi di chiusura rendono la modale più accessibile e facile da usare.</p>
    <footer class="modal-footer">
      ${c({label:"primo pulsante",variant:"primario",type:"contorno",onClick:()=>console.log("faccio una funzione")})}
    </footer>
  `;return d`
    <button 
        type="button" 
        @click=${i}
      >
      Apri Modale
    </button>
    ${m({...t,content:e})}
  `},a={render:u,args:{title:"Titolo della Modale"}};var n,r,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Titolo della Modale'
  }
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,y as default};
