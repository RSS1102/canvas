import{m as d,r,u as l,j as o,F as u,a as s,O as x}from"./index.bd0f0e28.js";let i=[];Object.entries(d).map(([t,a],n)=>{let e=t.replace(/(^\.\.\/|canvas|\/index\.tsx$)/g,"");e==""&&(e="/"),i.push(e)});function p(){const[t,a]=r.exports.useState([]),n=l();return r.exports.useEffect(()=>{a(i)},[t]),o(u,{children:[s("div",{children:t.map((e,c)=>s("i",{children:s("button",{onClick:()=>{n(e)},children:e.slice(e.lastIndexOf("/"))})},c))}),s(x,{})]})}export{p as default};