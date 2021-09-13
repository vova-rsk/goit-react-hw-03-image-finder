(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var a,r,o,i,c,s,l,p=t(0),u=t.n(p),d=t(12),h=t.n(d),g=(t(20),t(5)),b=t(6),m=t(8),x=t(7),f=t(3),j=t(4),y=j.a.header(a||(a=Object(f.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  .SearchForm {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=t(1),O=function(n){Object(m.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={query:""},n.handleSubmit=function(e){e.preventDefault();var t=n.props.onSubmit,a=n.state.query;a&&t(a)},n.handleInputChange=function(e){n.setState({query:e.currentTarget.value.trim()})},n}return Object(b.a)(t,[{key:"render",value:function(){var n=this.state.query;return Object(v.jsx)(y,{className:"Searchbar",children:Object(v.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(v.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(v.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(v.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange,value:n})]})})}}]),t}(p.Component),w=t(10),S=t(9),k=j.a.li(r||(r=Object(f.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),I=function(n){var e=n.src,t=n.alt,a=n.dataSrc,r=n.index,o=n.onClick;return Object(v.jsx)(k,{className:"ImageGalleryItem",children:Object(v.jsx)("img",{src:e,"data-src":a,"data-index":r,alt:t,className:"ImageGalleryItem-image",loading:"lazy",onClick:o})})},C=j.a.button(o||(o=Object(f.a)(["\n  margin: 32px auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover {\n    background-color: #303f9f;\n  }\n"]))),M=function(n){var e=n.handleIncrementPage;return Object(v.jsx)(C,{type:"button",onClick:e,children:"Load more"})},E="22441039-e3c3a22ef42346706974d6393",z="https://pixabay.com/api/",F={fetchImages:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=new URLSearchParams({q:n,page:e,key:E,image_type:"photo",orientation:"horizontal",per_page:12});return fetch("".concat(z,"?").concat(t.toString())).then((function(n){return n.ok?n.json():Promise.rejected(new Error("Oops, something went wrong!"))}))}},q=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},N=j.a.div(i||(i=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),R=function(n){Object(m.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).closingByEsc=function(e){"Escape"===e.code&&n.props.closeModal()},n.closingByClick=function(e){e.currentTarget===e.target&&n.props.closeModal()},n}return Object(b.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closingByEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closingByEsc)}},{key:"render",value:function(){var n=this.props,e=n.src,t=n.alt;return Object(v.jsx)(N,{className:"Overlay",onClick:this.closingByClick,children:Object(v.jsx)("div",{className:"Modal",children:Object(v.jsx)("img",{src:e,alt:t,width:"1024",height:"768"})})})}}]),t}(p.Component),L=j.a.ul(c||(c=Object(f.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),P=t(14),U=t.n(P),B=(t(45),j.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"])))),G=function(){return Object(v.jsx)(B,{children:Object(v.jsx)(U.a,Object(S.a)({},{type:"ThreeDots",color:"#eb4034",height:100,width:100}))})},T=function(n){Object(m.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={isLastPage:!0,page:1,searchResult:[],modal:!1},n.showModal=function(e){var t=Number(e.currentTarget.dataset.index),a=n.state.searchResult.find((function(n,e){return e===t}));n.setState({modal:a})},n.closeModal=function(){n.setState({modal:!1})},n.handleIncrementPage=function(){n.setState((function(n){return Object(S.a)(Object(S.a)({},n),{},{page:n.page+1})}))},n}return Object(b.a)(t,[{key:"componentDidUpdate",value:function(n,e){var t=this,a=this.state.page,r=this.props,o=r.query,i=r.statusChanging,c=r.setErrorMessage,s=n.query!==o,l=e.page<a;(s||l)&&(i("pending"),s&&this.setState({searchResult:[]}),F.fetchImages(o,s?1:a).then((function(n){var e=n.hits,a=n.totalHits;return t.setState((function(n){var t=s?1:n.page,r=s?e:[].concat(Object(w.a)(n.searchResult),Object(w.a)(e)),o=s?e.length>=a:[].concat(Object(w.a)(n.searchResult),Object(w.a)(e)).length>=a;return Object(S.a)(Object(S.a)({},n),{},{page:t,searchResult:r,isLastPage:o})}))})).catch((function(n){c(n.message),i("error")})).finally((function(){i("resolved"),q()})))}},{key:"render",value:function(){var n=this,e=this.state,t=e.searchResult,a=e.isLastPage,r=e.modal,o="pending"===this.props.currentStatus,i=!a&&!o;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L,{className:"ImageGallery",children:t.map((function(e,t){var a=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(v.jsx)(I,{src:a,index:t,dataSrc:r,alt:o,onClick:n.showModal},t)}))}),i&&Object(v.jsx)(M,{handleIncrementPage:this.handleIncrementPage}),o&&Object(v.jsx)(G,{}),r&&Object(v.jsx)(R,{src:r.largeImageURL,alt:r.tags,closeModal:this.closeModal})]})}}]),t}(p.Component),A=j.a.div(l||(l=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),D="idle",H="error",J=function(n){Object(m.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={query:"",status:D,error:""},n.fetchQueryUpdate=function(e){n.setState({query:e})},n.statusChanging=function(e){n.setState({status:e})},n.setErrorMessage=function(e){n.setState({error:e})},n}return Object(b.a)(t,[{key:"render",value:function(){var n=this.state,e=n.query,t=n.status,a=n.error;return Object(v.jsxs)(A,{children:[Object(v.jsx)(O,{onSubmit:this.fetchQueryUpdate}),t!==H&&Object(v.jsx)(T,{query:e,statusChanging:this.statusChanging,setErrorMessage:this.setErrorMessage,currentStatus:t}),t===H&&Object(v.jsx)("div",{children:a})]})}}]),t}(p.Component);h.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.184f86b5.chunk.js.map