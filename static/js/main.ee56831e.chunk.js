(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(13),i=a.n(c),l=(a(20),a(2)),s=function(){return n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"FireGram"),n.a.createElement("h2",null,"Your Pictures"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))},u=a(8),o=a.n(u),m=a(14),d=a(5);a(28),a(22);d.initializeApp({apiKey:"AIzaSyAzWG2AX8LyoKWqWLcU6bNVfF3PAmLqXmU",authDomain:"raster-firegram.firebaseapp.com",databaseURL:"https://raster-firegram.firebaseio.com",projectId:"raster-firegram",storageBucket:"raster-firegram.appspot.com",messagingSenderId:"1063430184040",appId:"1:1063430184040:web:87a0602a921c1f10026fdd"});var f=d.storage(),p=d.firestore(),g=d.firestore.FieldValue.serverTimestamp;var v=function(e){var t=Object(r.useState)(0),a=Object(l.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(null),s=Object(l.a)(i,2),u=s[0],d=s[1],v=Object(r.useState)(null),b=Object(l.a)(v,2),E=b[0],j=b[1];return Object(r.useEffect)((function(){var t=f.ref(e.name),a=p.collection("images");return t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){d(e)}),Object(m.a)(o.a.mark((function e(){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:r=e.sent,n=g(),a.add({url:r,createdAt:n}),j(r);case 6:case"end":return e.stop()}}),e)})))),function(){}}),[e]),{progress:n,url:E,error:u}},b=a(3);var E=function(e){var t=e.file,a=e.setFile,c=v(t),i=c.url,l=c.progress;return Object(r.useEffect)((function(){void 0!==i&&null!==i&&a(null)}),[i,a]),n.a.createElement(b.a.div,{className:"progress-bar",initial:{width:0},animate:{width:l+"%"}})};var j=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)(null),s=Object(l.a)(i,2),u=s[0],o=s[1],m=["image/png","image/jpeg"];return n.a.createElement("form",{style:{textAlign:"center"}},n.a.createElement("label",{htmlFor:"upload"},n.a.createElement("span",{className:"upload-plus"},"+"),n.a.createElement("input",{type:"file",id:"upload",style:{display:"none"},onChange:function(e){return function(e){e.persist();var t=e.target.files[0];t&&m.includes(t.type)?(c(e.target.files[0]),o("")):(c(null),o("File format not supported. Try using png or jpeg"))}(e)}})),n.a.createElement("div",{className:"output"},u&&n.a.createElement("div",{className:"error"},u),a&&n.a.createElement("div",null," ",a.name," "),a&&n.a.createElement(E,{file:a,setFile:c})))},y=a(9),O=function(e){var t=Object(r.useState)([]),a=Object(l.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(y.a)(Object(y.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{fileList:n}};var h=function(e){var t=e.setSelectedImage,a=O("images").fileList;return n.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return n.a.createElement(b.a.div,{layout:!0,className:"img-wrap",onClick:function(){return t(e.url)},key:e.id,whileHover:{opacity:1}},n.a.createElement(b.a.img,{src:e.url,alt:e.id,initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))};var S=function(e){var t=e.selectedImage,a=e.setSelectedImage;return n.a.createElement(b.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},n.a.createElement(b.a.img,{src:t,alt:"modalImage",initial:{y:"-100vh"},animate:{y:0}}))};var I=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1];return n.a.createElement("div",{className:"App"},n.a.createElement(s,null),n.a.createElement(j,null),n.a.createElement(h,{setSelectedImage:c}),a&&n.a.createElement(S,{selectedImage:a,setSelectedImage:c}))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ee56831e.chunk.js.map