import{u as h,o as l,c as n,a as t,t as r,F as u,l as v,m as w,e as I,f as k,g as o,d as x,i as N,p as S}from"./index-74a35a00.js";import{u as $}from"./dataStore-77d1fe41.js";import{g,C}from"./CSSPlugin-83f15978.js";const P=t("div",null,null,-1),j={class:"mt-20"},B={key:0,class:"text-xl mb-3 italic"},M={key:1,class:"text-xl mb-3 italic"},V={class:"text-4xl mb-8 font-Melodrama"},T={class:"w-56 m-auto"},D=["src"],F={__name:"NextPortfolioCard",props:{name:{typeof:String},img:{typeof:String},hasNextItem:{typeof:Boolean}},setup(f){const s=f,_=h();function m(e){setTimeout(()=>{_.push(`/portfolio/${e}`)})}return(e,a)=>(l(),n(u,null,[P,t("a",{href:"#",onClick:a[0]||(a[0]=d=>m(s.name))},[t("div",j,[s.hasNextItem===!0?(l(),n("p",B,"next portfolio")):(l(),n("p",M,"previous portfolio")),t("p",V,r(s.name),1),t("div",T,[t("img",{src:s.img,class:"w-full h-72 object-cover mb-10 hover:w-64",alt:""},null,8,D)])])])],64))}};var b=g.registerPlugin(C)||g;b.core.Tween;const O={class:"container w-full ml-auto py-36 px-10 lg:w-8/12 lg:mr-24 lg:px-0 lg:py-28"},R={key:0,class:"text-center w-100 flex flex-col items-center"},z={class:"mb-12"},E=t("h3",{class:"pb-2"},"skills:",-1),L={class:"font-light text-gray-400 w-full lg:px-56"},W={class:"mb-32"},q=t("h3",{class:"pb-2"},"tools:",-1),A={class:"font-light text-gray-400 w-full lg:px-56"},G={class:"mb-10 w-full flex justify-between lg:w-2/4"},H=["href"],J={class:"w-full"},K=["src"],Q={class:"py-32 w-full lg:px-32"},U=t("h2",{class:"text-5xl mb-10"},"專案簡介",-1),X={class:"font-light text-lg text-gray-400 leading-10"},Y={class:"w-full"},Z=["src"],tt={class:"py-32 w-full lg:px-32"},et=t("h2",{class:"text-5xl mb-10"},"設計理念",-1),st={class:"font-light text-lg text-gray-400 leading-10"},ot=["src"],rt={__name:"PortfolioView",setup(f){const s=$(),m=v().params.portfolioName,e=s.portfolios.find(i=>i.name===m),a=w(()=>{if(e){const i=s.portfolios.indexOf(e);return i!==-1?i<s.portfolios.length-1?{nextItem:s.portfolios[i+1],hasNextItem:!0}:i>0?{nextItem:s.portfolios[i-1],hasNextItem:!1}:{nextItem:e,hasNextItem:!1}:{nextItem:null,hasNextItem:!1}}else return{nextItem:null,hasNextItem:!1}}),d=h();function y(){return d.go(-1)}const p=I(null);return k(()=>{b.fromTo(p.value,{opacity:0,y:-10},{duration:1.5,opacity:1,y:0})}),(i,lt)=>(l(),n(u,null,[t("a",{href:"#",class:"p-4 ps-6 fixed bottom-0 left-0 z-50 text-xl underline underline-offset-8 bg-white bg-opacity-70 backdrop-blur-sm dark:bg-[#0b0b0b] dark:bg-opacity-70 flex items-center w-full lg:px-12 lg:py-24 lg:w-auto lg:flex-col lg:justify-normal lg:items-start",onClick:y},"back"),t("div",O,[o(e)?(l(),n("div",R,[t("h1",{class:"text-8xl pb-32 font-Melodrama",ref_key:"p",ref:p},r(o(e).name),513),t("div",z,[E,t("p",L,r(o(e).skills.join("、").toString()),1)]),t("div",W,[q,t("p",A,r(o(e).tools.join("、").toString()),1)]),t("div",G,[(l(!0),n(u,null,x(o(e).link,c=>(l(),n("a",{key:c,class:"after:content-['_→']",href:c.link},r(c.title),9,H))),128))]),t("div",J,[t("img",{class:"w-full",src:o(e).imgMain,alt:""},null,8,K)]),t("div",Q,[U,t("p",X,r(o(e).info),1)]),t("div",Y,[t("img",{class:"w-full mb-20",src:o(e).imgSub,alt:"專案圖片"},null,8,Z)]),t("div",tt,[et,t("p",st,r(o(e).idea),1)]),(l(!0),n(u,null,x(o(e).imgOther,c=>(l(),n("div",{class:"w-full",key:c},[t("img",{class:"w-full mb-20",src:c,alt:"專案圖片"},null,8,ot)]))),128)),N(F,{name:a.value.nextItem?a.value.nextItem.name:"",img:a.value.nextItem?a.value.nextItem.imgMain:"",hasNextItem:a.value.hasNextItem},null,8,["name","img","hasNextItem"])])):S("",!0)])],64))}};export{rt as default};
