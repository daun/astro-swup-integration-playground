import s from"@swup/plugin";class t extends s{constructor(s){void 0===s&&(s={}),super(),this.name="SwupBodyClassPlugin",this.requires={swup:">=4"},this.defaults={prefix:""},this.options={...this.defaults,...s}}mount(){this.on("content:replace",this.updateBodyClass)}updateBodyClass(s,t){let{page:{html:e}}=t;this.updateClassNames(document.body,this.getBodyElement(e))}getBodyElement(s){return(new DOMParser).parseFromString(s,"text/html").querySelector("body")}updateClassNames(s,t){const e=[...s.classList].filter(s=>this.isValidClassName(s)),a=[...t.classList].filter(s=>this.isValidClassName(s));s.classList.remove(...e),s.classList.add(...a)}isValidClassName(s){return s&&s.startsWith(this.options.prefix)}}export{t as default};
//# sourceMappingURL=index.module.js.map