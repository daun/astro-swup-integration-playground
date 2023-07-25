import t from"@swup/plugin";class s{constructor(t){let{className:s="progress-bar",styleAttr:e="data-progressbar-styles data-swup-theme",animationDuration:i=300,minValue:r=.1,initialValue:n=.25,trickleValue:o=.03}=void 0===t?{}:t;this.styleElement=null,this.progressElement=null,this.value=0,this.visible=!1,this.hiding=!1,this.trickleInterval=null,this.trickle=()=>{const t=Math.random()*this.trickleValue;this.setValue(this.value+t)},this.className=s,this.styleAttr=e,this.animationDuration=i,this.minValue=r,this.initialValue=n,this.trickleValue=o,this.styleElement=this.createStyleElement(),this.progressElement=this.createProgressElement()}get defaultStyles(){return`\n\t\t.${this.className} {\n\t\t\t\tposition: fixed;\n\t\t\t\tdisplay: block;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 3px;\n\t\t\t\tbackground-color: black;\n\t\t\t\tz-index: 9999;\n\t\t\t\ttransition:\n\t\t\t\t\twidth ${this.animationDuration}ms ease-out,\n\t\t\t\t\topacity ${this.animationDuration/2}ms ${this.animationDuration/2}ms ease-in;\n\t\t\t\ttransform: translate3d(0, 0, 0);\n\t\t\t}\n\t\t`}show(){this.visible||(this.visible=!0,this.installStyleElement(),this.installProgressElement(),this.startTrickling())}hide(){this.visible&&!this.hiding&&(this.hiding=!0,this.fadeProgressElement(()=>{this.uninstallProgressElement(),this.stopTrickling(),this.visible=!1,this.hiding=!1}))}setValue(t){this.value=Math.min(1,Math.max(this.minValue,t)),this.refresh()}installStyleElement(){document.head.insertBefore(this.styleElement,document.head.firstChild)}installProgressElement(){this.progressElement.style.width="0%",this.progressElement.style.opacity="1",document.documentElement.insertBefore(this.progressElement,document.body),this.progressElement.scrollTop=0,this.setValue(Math.random()*this.initialValue)}fadeProgressElement(t){this.progressElement.style.opacity="0",setTimeout(t,1.5*this.animationDuration)}uninstallProgressElement(){this.progressElement.parentNode&&document.documentElement.removeChild(this.progressElement)}startTrickling(){this.trickleInterval||(this.trickleInterval=window.setInterval(this.trickle,this.animationDuration))}stopTrickling(){window.clearInterval(this.trickleInterval),delete this.trickleInterval}refresh(){requestAnimationFrame(()=>{this.progressElement.style.width=100*this.value+"%"})}createStyleElement(){const t=document.createElement("style");return this.styleAttr.split(" ").forEach(s=>t.setAttribute(s,"")),t.textContent=this.defaultStyles,t}createProgressElement(){const t=document.createElement("div");return t.className=this.className,t}}class e extends t{constructor(t){void 0===t&&(t={}),super(),this.name="SwupProgressPlugin",this.defaults={className:"swup-progress-bar",delay:300,transition:void 0,minValue:void 0,initialValue:void 0,finishAnimation:!0},this.showProgressBarTimeout=null,this.hideProgressBarTimeout=null,this.options={...this.defaults,...t};const{className:e,minValue:i,initialValue:r,transition:n}=this.options;this.progressBar=new s({className:e,minValue:i,initialValue:r,animationDuration:n})}mount(){this.on("visit:start",this.startShowingProgress),this.on("page:view",this.stopShowingProgress)}startShowingProgress(){this.progressBar.setValue(0),this.showProgressBarAfterDelay()}stopShowingProgress(){this.progressBar.setValue(1),this.options.finishAnimation?this.finishAnimationAndHideProgressBar():this.hideProgressBar()}showProgressBar(){this.cancelHideProgressBarTimeout(),this.progressBar.show()}showProgressBarAfterDelay(){this.cancelShowProgressBarTimeout(),this.cancelHideProgressBarTimeout(),this.showProgressBarTimeout=window.setTimeout(this.showProgressBar.bind(this),this.options.delay)}hideProgressBar(){this.cancelShowProgressBarTimeout(),this.progressBar.hide()}finishAnimationAndHideProgressBar(){this.cancelShowProgressBarTimeout(),this.hideProgressBarTimeout=window.setTimeout(this.hideProgressBar.bind(this),this.options.transition)}cancelShowProgressBarTimeout(){window.clearTimeout(this.showProgressBarTimeout),delete this.showProgressBarTimeout}cancelHideProgressBarTimeout(){window.clearTimeout(this.hideProgressBarTimeout),delete this.hideProgressBarTimeout}}export{e as default};
//# sourceMappingURL=index.module.js.map
