(this["webpackJsonp3d-characters-react-three-fiber"]=this["webpackJsonp3d-characters-react-three-fiber"]||[]).push([[0],{50:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n=r(7),c=r(37),s=r(13),o=r(22),i=r(54),a=r(53),j=r(52),l=r(12);function h(e){var t=e.action,r=Object(n.useRef)(),c=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}(t),s=Object(a.a)("archer.glb"),o=s.nodes,i=s.materials,h=s.animations,b=Object(j.a)(h,r).actions;return Object(n.useEffect)((function(){c&&(b[c].fadeOut(.2),b[t].stop()),b[t].play(),b[t].fadeIn(.2)}),[b,t,c]),Object(l.jsx)("group",{ref:r,dispose:null,children:Object(l.jsxs)("group",{rotation:[Math.PI/2,0,0],scale:.01,children:[Object(l.jsx)("primitive",{object:o.Hips}),Object(l.jsx)("skinnedMesh",{geometry:o.Erika_Archer_Body_Mesh.geometry,material:i.Body_MAT,skeleton:o.Erika_Archer_Body_Mesh.skeleton}),Object(l.jsx)("skinnedMesh",{geometry:o.Erika_Archer_Clothes_Mesh.geometry,material:i.Akai_MAT,skeleton:o.Erika_Archer_Clothes_Mesh.skeleton}),Object(l.jsx)("skinnedMesh",{geometry:o.Erika_Archer_Eyelashes_Mesh.geometry,material:i.Lashes_MAT,skeleton:o.Erika_Archer_Eyelashes_Mesh.skeleton}),Object(l.jsx)("skinnedMesh",{geometry:o.Erika_Archer_Eyes_Mesh.geometry,material:i.EyeSpec_MAT,skeleton:o.Erika_Archer_Eyes_Mesh.skeleton})]})})}a.a.preload("/archer.glb");r(50);function b(){var e=Object(n.useState)("Idle"),t=Object(s.a)(e,2),r=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(o.a,{children:[Object(l.jsx)("ambientLight",{}),Object(l.jsx)("pointLight",{intensity:2,position:[-1,1,3],color:"red"}),Object(l.jsx)("pointLight",{intensity:2,position:[1,1,3],color:"blue"}),Object(l.jsx)("pointLight",{intensity:2,position:[0,3,-10],color:"white"}),Object(l.jsx)(n.Suspense,{fallback:null,children:Object(l.jsx)(h,{action:r})}),Object(l.jsx)(i.a,{})]}),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsx)("button",{onClick:function(){c("Runforward")},children:"Run Forward"}),Object(l.jsx)("button",{onClick:function(){c("Death")},children:"Death"}),Object(l.jsx)("button",{onClick:function(){c("Draw")},children:"Draw Arrow"}),Object(l.jsx)("button",{onClick:function(){c("Idle")},children:"Idle"}),Object(l.jsx)("button",{onClick:function(){c("Movedown")},children:"Move Down"})]})]})}var u=document.getElementById("root");Object(c.createRoot)(u).render(Object(l.jsx)(n.StrictMode,{children:Object(l.jsx)(b,{})}))}},[[51,1,2]]]);
//# sourceMappingURL=main.45043991.chunk.js.map
