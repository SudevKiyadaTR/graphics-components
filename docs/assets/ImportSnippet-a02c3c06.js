import{R as t,r as o}from"./index-67e30b50.js";import{S as i,p as m}from"./prism-0b9b88fb.js";import{s as u}from"./scss-efc2351e.js";const d="_title_daft4_1",g="_table_daft4_20",f="_importsnippet_daft4_125",r={title:d,table:g,importsnippet:f};i.registerLanguage("scss",u);const _=s=>{const[e,c]=o.useState(!1);let a;o.useEffect(()=>{a&&clearTimeout(a),a=setTimeout(()=>{c(!1)},1500)},[e]);const n=async({partial:p})=>{const l=`@import "@reuters-graphics/graphics-components/dist/scss/colours/${p}";`;await navigator.clipboard.writeText(l),c(!0)};return t.createElement("button",{className:"copy-btn",onClick:()=>n(s)},t.createElement("span",{className:"material-symbols-outlined"},"content_copy"),e&&t.createElement("span",{className:"copy-tag"},"Copied"))},h=({included:s=!1,partial:e="thematic/_tr.scss"})=>s?t.createElement("div",{className:r.importsnippet},t.createElement("p",null,"Included")):t.createElement("div",{className:r.importsnippet},t.createElement(i,{language:"scss",style:m},`// global.scss 
@import "@reuters-graphics/graphics-components/dist/scss/colours/${e}";`),t.createElement(_,{partial:e}));export{h as I,r as c};
//# sourceMappingURL=ImportSnippet-a02c3c06.js.map