import{u as r,e as a,f as l,k as c,o as u,c as i,a as s,t as d}from"./index-74a35a00.js";const _={class:"w-full h-screen px-5 flex justify-center items-center"},f={class:"flex flex-col justify-center items-center"},p=s("p",{class:"text-[10rem] font-Melodrama lg:text-[30rem] lg:leading-[36rem]"},"404",-1),m={class:"text-center"},w={__name:"NotFoundView",setup(h){const o=r(),e=a(8),t=a(null);function n(){t.value=setInterval(()=>{e.value>0?e.value-=1:(clearInterval(t.value),o.push("/"))},1e3)}return l(()=>{n()}),c(()=>{clearInterval(t.value)}),(v,x)=>(u(),i("div",_,[s("div",f,[p,s("p",m,"Sorry, this page has disappeared and will redirect to the home page in "+d(e.value)+" seconds.",1)])]))}};export{w as default};
