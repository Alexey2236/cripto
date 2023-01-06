(function(){"use strict";var e={2186:function(e,t,r){var s=r(9242),i=r(3396),n=r(7139);const a=e=>((0,i.dD)("data-v-2ed365d9"),e=e(),(0,i.Cn)(),e),o={class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},l={class:"container"},c=a((()=>(0,i._)("div",{class:"w-full my-4"},null,-1))),d={class:"flex gap-5 items-center"},h={class:"max-w-xs"},u=a((()=>(0,i._)("label",{for:"wallet",class:"block text-sm font-medium text-gray-700"},"Тикер ",-1))),g={class:"mt-1 relative rounded-md shadow-md"},p={key:0,class:"flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap mt-2"},m=["onClick"],f={key:1,class:"text-sm text-red-600 mt-2"},y=a((()=>(0,i._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1))),w={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},x=["onClick"],v={class:"text-sm font-medium text-gray-500 truncate"},k={class:"mt-1 text-3xl font-semibold text-gray-900"},b=a((()=>(0,i._)("div",{class:"w-full border-t border-gray-200"},null,-1))),C=["onClick"],L=a((()=>(0,i._)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[(0,i._)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1))),_={key:0,class:"flex gap-5 justify-center mt-2"},D=a((()=>(0,i._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1))),I={key:2,class:"text-center text-red-600 text-2xl mt-5"},z={key:3,class:"relative"},j={class:"text-lg leading-6 font-medium text-gray-900 my-8"},O={class:"flex items-end border-gray-600 border-b border-l h-64",ref:"graphRef"},F={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},E=a((()=>(0,i._)("g",null,[(0,i._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"})],-1))),M=[E];function S(e,t,r,a,E,S){const G=(0,i.up)("plus-sign-icon");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",l,[c,(0,i._)("section",null,[(0,i._)("div",d,[(0,i._)("div",h,[u,(0,i._)("div",g,[(0,i.wy)((0,i._)("input",{ref:"inpittop","onUpdate:modelValue":t[0]||(t[0]=e=>E.ticker=e),onKeydown:t[1]||(t[1]=(0,s.D2)(((...e)=>S.add&&S.add(...e)),["enter"])),type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"Например DOGE"},null,544),[[s.nr,E.ticker]])]),""!==E.ticker&&0!==E.hints.length?((0,i.wg)(),(0,i.iD)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(E.hints.slice(0,4),(e=>((0,i.wg)(),(0,i.iD)("span",{onClick:t=>S.addHint(e),key:e.Id,class:"inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"},(0,n.zw)(e.Symbol),9,m)))),128))])):(0,i.kq)("",!0),E.presenceCoinList?((0,i.wg)(),(0,i.iD)("div",f," Такой тикер уже добавлен ")):(0,i.kq)("",!0)]),(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>E.selectedCurrency=e),class:"h-10 mt-6 pr-10 flex items-center shadow-lg border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(E.currencyList.sort(),(e=>((0,i.wg)(),(0,i.iD)("option",{key:e},(0,n.zw)(e),1)))),128))],512),[[s.bM,E.selectedCurrency]])]),(0,i._)("button",{onClick:t[3]||(t[3]=(...e)=>S.add&&S.add(...e)),type:"button",class:"shadow-lg my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[(0,i.Wm)(G),(0,i.Uk)(" Добавить ")])]),S.filterFavoritFn.length||E.tickers.length?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,"onUpdate:modelValue":t[4]||(t[4]=e=>E.filterFavorites=e),type:"text",name:"search",id:"wallet",class:"block w-full shadow-lg pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"Найти в избранном"},null,512)),[[s.nr,E.filterFavorites]]):(0,i.kq)("",!0),E.tickers.length?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[y,(0,i._)("dl",w,[(0,i.Wm)(s.W3,{name:"card-list"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(S.paginatedTickers,(e=>((0,i.wg)(),(0,i.iD)("div",{class:(0,n.C_)([{"border-4":E.sel===e},"bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"]),key:e.name,onClick:t=>E.sel=e},[(0,i._)("div",{class:(0,n.C_)(["px-4 py-5 sm:p-6 text-center",{"bg-red-100":!0===e.error}])},[(0,i._)("dt",v,(0,n.zw)(e.name.toUpperCase())+" - "+(0,n.zw)(E.selectedCurrency),1),(0,i._)("dd",k,(0,n.zw)(e.price),1)],2),b,(0,i._)("button",{onClick:(0,s.iM)((t=>S.handleDelete(e)),["stop"]),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},[L,(0,i.Uk)("Удалить ")],8,C)],10,x)))),128))])),_:1})]),E.tickers.length?((0,i.wg)(),(0,i.iD)("div",_,[E.page>1?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:t[5]||(t[5]=e=>E.page=E.page-1),class:"shadow-2xl my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Назад ")):(0,i.kq)("",!0),S.hasNextPage?((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:t[6]||(t[6]=e=>E.page=E.page+1),class:"shadow-2xl my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}," Вперед ")):(0,i.kq)("",!0)])):(0,i.kq)("",!0),D],64)):((0,i.wg)(),(0,i.iD)("h1",I,"Монет нет")),E.sel?((0,i.wg)(),(0,i.iD)("section",z,[(0,i._)("h3",j,(0,n.zw)(E.sel.name.toUpperCase())+" - "+(0,n.zw)(E.selectedCurrency),1),(0,i._)("div",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(S.normalizedGraph,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,style:(0,n.j5)({height:`${e}%`,width:`${this.widthGraphElement}px`}),class:"bg-purple-800 border"},null,4)))),128))],512),(0,i._)("button",{onClick:t[7]||(t[7]=e=>E.sel=null),type:"button",class:"absolute top-0 right-0"},[((0,i.wg)(),(0,i.iD)("svg",F,M))])])):(0,i.kq)("",!0)])])}r(541),r(7658);const G=(e,t)=>{try{return fetch(`https://min-api.cryptocompare.com/data/price?fsym=${e}&tsyms=${t}&api_key=02c4841bd6065d7d3c1eaaad3ee4834a3d251f61ee44545bad3141968e472d3f`).then((e=>e.json()))}catch(r){console.log(r.message)}},H=()=>{try{return fetch("https://min-api.cryptocompare.com/data/all/coinlist?summary=true").then((e=>e.json()))}catch(e){console.log(e.message)}},P=()=>{try{return fetch("https://www.cbr-xml-daily.ru/latest.js").then((e=>e.json()))}catch(e){console.log(e.message)}},T={class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},U=(0,i._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},null,-1),$=[U];function q(e,t){return(0,i.wg)(),(0,i.iD)("svg",T,$)}var V=r(89);const B={},K=(0,V.Z)(B,[["render",q]]);var R=K,Y={components:{PlusSignIcon:R},data(){return{ticker:"",tickers:[],sel:null,graphList:[],maxGraphElements:1,widthGraphElement:38,coinsList:[],hints:[],presenceCoinList:!1,filterFavorites:"",page:1,clearId:null,currencyList:[],selectedCurrency:"RUB"}},mounted(){if(this.$refs.inpittop.focus(),localStorage.getItem("tickers"))try{this.tickers=JSON.parse(localStorage.getItem("tickers"))}catch(e){localStorage.removeItem("tickers")}localStorage.selectedCurrency&&(this.selectedCurrency=localStorage.selectedCurrency),this.getPriceCript(),this.getListCoins(),this.getCurrency(),window.addEventListener("resize",this.calculateMaxGraphElements)},unmounted(){clearInterval(this.clearId)},beforeUnmount(){window.removeEventListener("resize",this.calculateMaxGraphElements)},methods:{saveTickers(){const e=JSON.stringify(this.tickers);localStorage.setItem("tickers",e)},add(){if(this.isIncludesItemOfList(),!this.ticker||this.presenceCoinList)return;const e={name:this.ticker,price:"...",prevPrice:[],error:!1};this.tickers.unshift(e),this.filterFavorites="",this.getPriceCript(),this.saveTickers(),this.ticker=""},select(e){this.sel=e,this.$nextTick((()=>{this.calculateMaxGraphElements()}))},isIncludesItemOfList(){const e=e=>e.name.toLocaleLowerCase()===this.ticker.toLocaleLowerCase();this.presenceCoinList=this.tickers.some(e)},addHint(e){this.ticker=e.Symbol,this.add()},getPriceCript(){try{this.tickers.forEach((e=>{this.clearId=setInterval((async()=>{const t=await G(e.name,this.selectedCurrency);t[this.selectedCurrency]>1?(e.price=t[this.selectedCurrency].toFixed(2),e.error=!1):t[this.selectedCurrency]<1?(e.price=t[this.selectedCurrency].toPrecision(2),e.error=!1):(e.price="- - -",e.error=!0),this.sel?.name===e.name&&this.graphList.push(t[this.selectedCurrency]);while(this.graphList.length>this.maxGraphElements)this.graphList.shift()}),4e3)}))}catch(e){console.log(e.message)}},async getListCoins(){try{const e=await H();this.coinsList.push(...Object.values(e.Data))}catch(e){console.log(e.message)}},async getCurrency(){try{const e=await P();this.currencyList.push(...Object.keys(e.rates),"RUB")}catch(e){console.log(e.message)}},handleDelete(e){this.tickers=this.tickers.filter((t=>t!==e)),this.saveTickers(),this.sel===e&&(this.sel=null)},filtered(e,t,r){return e.filter((e=>e[t].toLocaleLowerCase().includes(r.toLocaleLowerCase())))},calculateMaxGraphElements(){this.$refs.graphRef&&(this.maxGraphElements=this.$refs.graphRef.clientWidth/this.widthGraphElement)}},watch:{sel(){this.graphList=[]},ticker(){this.presenceCoinList=!1,this.hints=this.filtered(this.coinsList,"Symbol",this.ticker)},filterFavorites(){this.page=1},paginatedTickers(){0===this.paginatedTickers.length&&this.page>1&&(this.page-=1)},selectedCurrency(e){localStorage.selectedCurrency=e,this.graphList=[]}},computed:{normalizedGraph(){const e=Math.max(...this.graphList),t=Math.min(...this.graphList);return e===t?this.graphList.map((()=>50)):this.graphList.map((r=>10+90*(r-t)/(e-t)))},startIndex(){return 6*(this.page-1)},endIndex(){return 6*this.page},filterFavoritFn(){return this.filtered(this.tickers,"name",this.filterFavorites)},paginatedTickers(){return this.filterFavoritFn.slice(this.startIndex,this.endIndex)},hasNextPage(){return this.filterFavoritFn.length>this.endIndex}}};const N=(0,V.Z)(Y,[["render",S],["__scopeId","data-v-2ed365d9"]]);var W=N;(0,s.ri)(W).mount("#app")}},t={};function r(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,s,i,n){if(!s){var a=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],n=e[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(o=!1,n<a&&(a=n));if(o){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,i,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,n,a=s[0],o=s[1],l=s[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(l)var d=l(r)}for(t&&t(s);c<a.length;c++)n=a[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},s=self["webpackChunkcripto"]=self["webpackChunkcripto"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(2186)}));s=r.O(s)})();
//# sourceMappingURL=app.28137d3f.js.map