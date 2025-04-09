import{x as s}from"./lit-element-D_Wi02Oa.js";import{i as $}from"./icon-B2F652rT.js";const c=({variant:o="primario",type:b="pieno",disabled:e,iconleft:n,iconright:u,iconsize:t="medium",width:m,height:r,label:i,onClick:d})=>s`
    <button
      type="button"
      class=${["button",`button--${o}-${b}`,`button-width-${m}`,`button-height-${r}`,`button-${i===""?"rounded":"normal"}`,`button-icon${t}`].join(" ")}
      @click=${d}
      ?disabled=${e}
    >
      ${o=="findomestic"?s`<img src='./assets/findomestic.svg'>`:null}
      ${n?$({type:n,size:t}):null}
      ${i}
      ${u?$({type:u,size:t}):null}
    </button>
  `;export{c as b};
