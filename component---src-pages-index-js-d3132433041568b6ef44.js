(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{263:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(270),o=a.n(i),l=a(301),c=a.n(l),s=a(303),m=a.n(s),u=a(354),d=a.n(u),p=a(352),h=a.n(p),f=a(307),g=a.n(f),b=a(83),v=[{id:"v69ly910ql",title:"Basic with hooks"},{id:"q80jom5ql6",title:"Basic with class"},{id:"q8q1mnr01w",title:"With output of the cropped image"},{id:"y09komm059",title:"With image selected by the user"},{id:"53w20p2o3n",title:"With round crop area and no grid"}],E=Object(b.withStyles)(function(e){return{formControl:{marginBottom:e.spacing.unit,minWidth:280}}})(function(e){var t=e.classes,a=Object(n.useState)("v69ly910ql"),i=a[0],o=a[1];return r.a.createElement("div",null,r.a.createElement(c.a,{variant:"filled",className:t.formControl},r.a.createElement(m.a,{htmlFor:"sandbox-example"},"Example"),r.a.createElement(g.a,{value:i,onChange:function(e){return o(e.target.value)},input:r.a.createElement(h.a,{name:"example",id:"sandbox-example"})},v.map(function(e){return r.a.createElement(d.a,{key:e.id,value:e.id},e.title)}))),r.a.createElement("iframe",{key:"iframe-"+i,title:"Codesandbox example "+i,src:"https://codesandbox.io/embed/"+i+"?autoresize=1&fontsize=14&hidenavigation=1",style:{width:"100%",height:500,border:0,borderRadius:4,overflow:"hidden",marginBottom:24},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}),w=a(297),y=a.n(w),x=(a(280),a(298)),k=a.n(x),C=a(368),j=a.n(C),S=a(389),O=a.n(S),q=a(392),R=a.n(q),N=(a(57),a(373)),I=a.n(N),B=a(375),L=a.n(B),P=a(377),T=a.n(P),W=a(379),D=a.n(W),M=a(381),F=a.n(M),z=a(371),A=a.n(z),G=a(384);function J(e){return r.a.createElement(A.a,Object.assign({direction:"up"},e))}var Z=a.n(G)()({breakpoint:"xs"})(Object(b.withStyles)(function(e){return{appBar:{position:"relative"},flex:{flex:1},img:{display:"block",margin:"auto",maxWidth:"100%",maxHeight:"100%"}}})(function(e){var t=e.img,a=e.onClose,n=e.fullScreen,i=e.classes;return r.a.createElement(I.a,{fullScreen:n,open:!!t,onClose:a,TransitionComponent:J},r.a.createElement(L.a,{className:i.appBar},r.a.createElement(T.a,null,r.a.createElement(D.a,{color:"inherit",onClick:a,"aria-label":"Close"},r.a.createElement(F.a,null)),r.a.createElement(o.a,{variant:"title",color:"inherit",className:i.flex},"Cropped image"))),r.a.createElement("img",{src:t,alt:"Cropped",className:i.img}))}));a(59),a(60);var _=function(e){return new Promise(function(t,a){var n=new Image;n.addEventListener("load",function(){return t(n)}),n.addEventListener("error",function(e){return a(e)}),n.setAttribute("crossOrigin","anonymous"),n.src=e})};function H(e,t,a){return U.apply(this,arguments)}function U(){return(U=k()(y.a.mark(function e(t,a,n){var r,i,o,l;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n=0),e.next=3,_(t);case 3:return r=e.sent,i=document.createElement("canvas"),o=i.getContext("2d"),i.width=2*r.width,i.height=2*r.height,o.translate(r.width,r.height),o.rotate(n*Math.PI/180),o.translate(-r.width,-r.height),o.drawImage(r,r.width/2,r.height/2),l=o.getImageData(0,0,2*r.width,2*r.height),i.width=a.width,i.height=a.height,o.putImageData(l,0-r.width/2-a.x,0-r.height/2-a.y),e.abrupt("return",new Promise(function(e,t){i.toBlob(function(t){e(URL.createObjectURL(t))},"image/jpeg")}));case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Q=a(388),K=a.n(Q),V=Object(b.withStyles)(function(e){var t,a,n,r;return{cropContainer:(t={position:"relative",width:"100%",height:200,background:"#333"},t[e.breakpoints.up("sm")]={height:400},t),cropButton:{flexShrink:0,marginLeft:16},controls:(a={padding:16,display:"flex",flexDirection:"column",alignItems:"stretch"},a[e.breakpoints.up("sm")]={flexDirection:"row",alignItems:"center"},a),sliderContainer:{display:"flex",flex:"1",alignItems:"center"},sliderLabel:(n={},n[e.breakpoints.down("xs")]={minWidth:65},n),slider:(r={padding:"22px 0px",marginLeft:16},r[e.breakpoints.up("sm")]={flexDirection:"row",alignItems:"center",margin:"0 16px"},r)}})(function(e){var t=e.classes,a=Object(n.useState)({x:0,y:0}),i=a[0],l=a[1],c=Object(n.useState)(0),s=c[0],m=c[1],u=Object(n.useState)(1),d=u[0],p=u[1],h=Object(n.useState)(null),f=h[0],g=h[1],b=Object(n.useState)(null),v=b[0],E=b[1],w=Object(n.useCallback)(function(e,t){g(t)},[]),x=Object(n.useCallback)(k()(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(K.a,f,s);case 3:t=e.sent,E(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),[f,s]),C=Object(n.useCallback)(function(){E(null)},[]);return r.a.createElement("div",null,r.a.createElement("div",{className:t.cropContainer},r.a.createElement(j.a,{image:K.a,crop:i,rotation:s,zoom:d,aspect:4/3,onCropChange:l,onRotationChange:m,onCropComplete:w,onZoomChange:p})),r.a.createElement("div",{className:t.controls},r.a.createElement("div",{className:t.sliderContainer},r.a.createElement(o.a,{variant:"overline",classes:{root:t.sliderLabel}},"Zoom"),r.a.createElement(O.a,{value:d,min:1,max:3,step:.1,"aria-labelledby":"Zoom",classes:{container:t.slider},onChange:function(e,t){return p(t)}})),r.a.createElement("div",{className:t.sliderContainer},r.a.createElement(o.a,{variant:"overline",classes:{root:t.sliderLabel}},"Rotation"),r.a.createElement(O.a,{value:s,min:0,max:360,step:1,"aria-labelledby":"Rotation",classes:{container:t.slider},onChange:function(e,t){return m(t)}})),r.a.createElement(R.a,{onClick:x,variant:"contained",color:"primary",classes:{root:t.cropButton}},"Show Result")),r.a.createElement(Z,{img:v,onClose:C}))}),X=a(394),Y=a(1),$=a.n(Y),ee=a(55),te=a.n(ee),ae=(a(299),r.a.createContext({})),ne=function(e){return r.a.createElement(ae.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};ne.propTypes={data:$.a.object,query:$.a.string.isRequired,render:$.a.func,children:$.a.func};var re=a(133),ie=a.n(re),oe=(a(396),function(e){var t=e.siteTitle,a=e.classes;return r.a.createElement("header",{className:a.root},r.a.createElement("div",{className:a.wrapper},r.a.createElement(te.a,{to:"/",className:a.link},r.a.createElement(o.a,{variant:"display1",color:"inherit"},t)),r.a.createElement("a",{href:"https://github.com/ricardo-ch/react-easy-crop"},r.a.createElement("img",{className:a.forkImg,src:"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}))))});oe.defaultProps={siteTitle:""};var le=Object(b.withStyles)(function(e){return{root:{background:e.palette.primary.main,marginBottom:"1.45rem",position:"relative"},wrapper:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"},link:{color:"white",textDecoration:"none"},forkImg:{position:"absolute",top:0,right:0,border:0,width:96}}})(oe),ce=function(e){var t=e.children;return r.a.createElement(ne,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null),r.a.createElement(le,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,r.a.createElement(o.a,{component:"div"},t))))},data:X})},se=a(398),me=a(399),ue=a.n(me);function de(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,o=e.title,l=se.data.site,c=t||l.siteMetadata.description;return r.a.createElement(ue.a,{htmlAttributes:{lang:a},title:o,titleTemplate:o,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}de.defaultProps={lang:"en",meta:[],keywords:[]};var pe=de;t.default=function(){return r.a.createElement(ce,null,r.a.createElement(pe,{title:"react-easy-crop",keywords:["react-easy-crop","image cropper","crop image","react"]}),r.a.createElement(o.a,{variant:"subtitle1"},"A React component to crop images with easy interactions"),r.a.createElement(o.a,{variant:"h4"},"Demo"),r.a.createElement(V,null),r.a.createElement(o.a,{variant:"h4"},"Features"),r.a.createElement("ul",null,r.a.createElement("li",null,"Supports drag and zoom interactions"),r.a.createElement("li",null,"Provides crop dimensions as pixels and percentages"),r.a.createElement("li",null,"Supports any images format (JPEG, PNG, even GIF) as url or base 64 string"),r.a.createElement("li",null,"Mobile friendly")),r.a.createElement(o.a,{variant:"h4",gutterBottom:!0},"Codesandboxes"),r.a.createElement(E,null))}},299:function(e,t,a){var n;e.exports=(n=a(395))&&n.default||n},388:function(e,t,a){e.exports=a.p+"static/dog-26b9422dccf83dc4e809f679c0f2b78e.jpeg"},394:function(e){e.exports={data:{site:{siteMetadata:{title:"react-easy-crop"}}}}},395:function(e,t,a){"use strict";a.r(t);a(57);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),l=a(121),c=a(4),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},398:function(e){e.exports={data:{site:{siteMetadata:{title:"react-easy-crop",description:"A React component to crop images with easy interactions",author:"@ricardo-ch"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d3132433041568b6ef44.js.map