import{S as P,a as I,P as k}from"./pagination-A2D6PRMn.js";import{p as x,l as S,m as b,a as L,_ as f,g as a,o as r,j as h,i as c,c as g,r as T,b as t,t as d,F as w,h as p,w as V,f as A,k as E,d as $}from"./index-u-sYb1C0.js";import{c as R}from"./cartStore-il2GwRhd.js";import"./sweetalert2.all-6VTpOlvA.js";var D={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"iris831206",BASE_URL:"/vue-sample-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:U,VITE_API_PATH:q}=D,v=x("productStore",{state:()=>({products:[],isLoading:!1,status:{loadingItem:""}}),actions:{getData(){this.isLoading=!0;const o=`${U}/api/${q}/products/all`;S.get(o).then(s=>{this.products=s.data.products,this.isLoading=!1}).catch(s=>{this.isLoading=!1,alert(s.response.data.message)})}}}),C={methods:{...b(v,["getData"]),getProduct(o){this.$router.push({path:`/product/${o}`}).then(()=>{window.location.reload()})}},computed:{...L(v,["products"])},mounted(){this.getData()},components:{Swiper:P,SwiperSlide:I},setup(){return{modules:[k]}}},B=["onClick"],j=["src","alt"],H={class:"card-body p-0"},N={class:"text-dark mt-3 text-decoration-none"},O={class:"card-text mb-0"},M=t("p",{class:"text-muted mt-3"},null,-1);function F(o,s,y,_,e,m){const l=a("swiper-slide"),u=a("swiper");return r(),h(u,{slidesPerView:3,spaceBetween:30,loop:!0,pagination:{clickable:!0},modules:_.modules,class:"mySwiper"},{default:c(()=>[(r(!0),g(w,null,T(o.products,i=>(r(),h(l,{key:i.id},{default:c(()=>[t("div",{class:"card border-0 mb-4 position-relative position-relative",onClick:n=>m.getProduct(i.id)},[t("img",{src:i.imageUrl,class:"card-img-top rounded-0",alt:i.title},null,8,j),t("div",H,[t("h5",N,d(i.title),1),t("p",O," $ "+d(i.price)+" 元",1),M])],8,B)]),_:2},1024))),128))]),_:1},8,["modules"])}const z=f(C,[["render",F]]);var G={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"iris831206",BASE_URL:"/vue-sample-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:J,VITE_API_PATH:K}=G,Q={data(){return{isLoading:!1,product:{},id:"",qty:1}},methods:{getProduct(){const o=`${J}/api/${K}/product/${this.id}`;this.isLoading=!0,this.$http.get(o).then(s=>{this.product=s.data.product,this.isLoading=!1})},...b(R,["addToCart"])},components:{ProductSwiper:z},mounted(){this.id=this.$route.params.productId,this.getProduct()}},W=t("div",{class:"loadingio-spinner-ellipsis-tyhni0y6d0m"},[t("div",{class:"ldio-vxrwqxfvut"},[t("div"),t("div"),t("div"),t("div"),t("div")])],-1),X={class:"container"},Y={class:"row justify-content-between mt-4"},Z={class:"col-md-6"},tt={"aria-label":"breadcrumb"},st={class:"breadcrumb"},et={class:"breadcrumb-item"},ot={class:"breadcrumb-item active","aria-current":"page"},it=["src"],dt={class:"col-md-6 align-self-end"},nt={class:"text-end mt-2"},at={class:"fw-bold fs-4 text-end mb-5"},rt={class:"input-group border mt-3"},ct={class:"input-group-prepend"},lt=["disabled"],ut=t("i",{class:"fas fa-minus"},null,-1),pt=[ut],_t={class:"input-group-append"},mt=t("i",{class:"fas fa-plus"},null,-1),ht=[mt],vt=E('<div class="row justify-content-between mt-4"><div><div class="card text-dark bg-light mb-5 p-0"><div class="card-header">商品說明</div><div class="card-body"><div class="card-text"><p class="mb-0">每塊皂的重量約100g，誤差在 5% 以內，保障您的消費權益。</p><p class="mb-0">恰到好處的大小，給您良好的手握感。</p><p class="mb-0">經過 30~90 天的熟成乾燥後才包裝上架，以確保品質。</p><p class="mb-0">成品皂體細密緊緻，不含防腐劑、抗氧化劑，可保存二年。</p></div></div></div></div></div>',1),bt={class:"row justify-content-between mt-4"},ft={class:"bg-light"},gt={class:"container"},wt=t("h4",{class:"mt-5 fw-bold"},"推薦商品",-1),yt={class:"row justify-content-center py-5"};function Pt(o,s,y,_,e,m){const l=a("VueLoading"),u=a("RouterLink"),i=a("ProductSwiper");return r(),g(w,null,[p(l,{active:e.isLoading},{default:c(()=>[W]),_:1},8,["active"]),t("div",X,[t("div",Y,[t("div",Z,[t("nav",tt,[t("ol",st,[t("li",et,[p(u,{to:"/products"},{default:c(()=>[$("產品列表")]),_:1})]),t("li",ot,d(e.product.title),1)])]),t("div",null,[t("img",{src:e.product.imageUrl,alt:"",class:"img-fluid"},null,8,it)])]),t("div",dt,[t("h2",nt,d(e.product.title),1),t("p",at,"NT $"+d(e.product.price)+" 元",1),t("p",null,d(e.product.description),1),t("div",rt,[t("div",ct,[t("button",{onClick:s[0]||(s[0]=n=>e.qty>1&&e.qty--),disabled:e.qty<=1,class:"btn btn-outline-dark rounded-0 border-0 py-3",type:"button",id:"button-addon1"},pt,8,lt)]),V(t("input",{readonly:"",min:"1",type:"number","onUpdate:modelValue":s[1]||(s[1]=n=>e.qty=n),class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:"1"},null,512),[[A,e.qty]]),t("div",_t,[t("button",{onClick:s[2]||(s[2]=n=>e.qty++),class:"btn btn-outline-dark rounded-0 border-0 py-3",type:"button",id:"button-addon2"},ht)]),t("div",{class:"btn btn-dark btn-block rounded-0 py-3",onClick:s[3]||(s[3]=n=>o.addToCart(e.product.id,e.qty))},"加入購物車")])])]),vt]),t("div",bt,[t("div",ft,[t("div",gt,[wt,t("div",yt,[p(i)])])])])],64)}const Lt=f(Q,[["render",Pt]]);export{Lt as default};
