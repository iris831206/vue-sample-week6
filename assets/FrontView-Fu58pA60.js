import{m as g,a as h,_ as l,r as e,o as i,c as d,b as a,d as s,w as n,e as o,t as f,F as k}from"./index-Ntgc_m6i.js";import{c}from"./cartStore-64zcOpiM.js";const $={data(){return{}},methods:{...g(c,["getCart"])},computed:{...h(c,["carts"])},mounted(){this.getCart()}},N={class:"navbar navbar-expand-lg navbar-dark bg-dark"},x={class:"container-fluid"},F=a("a",{class:"navbar-brand",href:"#"},"HOME",-1),V=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),w={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},y={class:"navbar-nav"},A={class:"navbar-nav ms-auto"},C=a("i",{class:"fas fa-shopping-cart"},null,-1),M={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},R=a("span",{class:"visually-hidden"},null,-1);function B(r,_,p,u,v,b){const t=e("RouterLink");return i(),d("nav",N,[a("div",x,[F,V,a("div",w,[a("div",y,[s(t,{to:"/products",class:"nav-link"},{default:n(()=>[o("產品")]),_:1}),s(t,{to:"/cart",class:"nav-link"},{default:n(()=>[o("購物車")]),_:1}),s(t,{to:"/blog",class:"nav-link"},{default:n(()=>[o("貼文")]),_:1}),s(t,{to:"/admin/products",class:"nav-link"},{default:n(()=>[o("後台產品頁面")]),_:1})]),a("div",A,[s(t,{to:"/cart",class:"nav-link btn btn-primary position-relative me-7"},{default:n(()=>[C,a("span",M,f(r.carts.length),1),R]),_:1})])])])])}const S=l($,[["render",B]]),E={components:{FrontNavbar:S}},L=a("h1",null,"這是前台",-1);function T(r,_,p,u,v,b){const t=e("FrontNavbar"),m=e("RouterView");return i(),d(k,null,[L,s(t),s(m)],64)}const O=l(E,[["render",T]]);export{O as default};