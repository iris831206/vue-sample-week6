import{S as V}from"./sweetalert2.all-6VTpOlvA.js";import{m as y,c as R,g as T,S as W,a as X,P as H}from"./pagination-A2D6PRMn.js";import{_ as Y,g as A,o as K,j as $,i as _,h as O,b as t,c as ee,w as te,f as se,F as ae,k as P}from"./index-u-sYb1C0.js";function ie(h){let{swiper:e,extendParams:x,on:d,emit:l}=h;x({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function p(s){let a;return s&&typeof s=="string"&&e.isElement&&(a=e.el.querySelector(s),a)?a:(s&&(typeof s=="string"&&(a=[...document.querySelectorAll(s)]),e.params.uniqueNavElements&&typeof s=="string"&&a.length>1&&e.el.querySelectorAll(s).length===1&&(a=e.el.querySelector(s))),s&&!a?s:a)}function u(s,a){const o=e.params.navigation;s=y(s),s.forEach(i=>{i&&(i.classList[a?"add":"remove"](...o.disabledClass.split(" ")),i.tagName==="BUTTON"&&(i.disabled=a),e.params.watchOverflow&&e.enabled&&i.classList[e.isLocked?"add":"remove"](o.lockClass))})}function c(){const{nextEl:s,prevEl:a}=e.navigation;if(e.params.loop){u(a,!1),u(s,!1);return}u(a,e.isBeginning&&!e.params.rewind),u(s,e.isEnd&&!e.params.rewind)}function S(s){s.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),l("navigationPrev"))}function w(s){s.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),l("navigationNext"))}function m(){const s=e.params.navigation;if(e.params.navigation=R(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(s.nextEl||s.prevEl))return;let a=p(s.nextEl),o=p(s.prevEl);Object.assign(e.navigation,{nextEl:a,prevEl:o}),a=y(a),o=y(o);const i=(r,b)=>{r&&r.addEventListener("click",b==="next"?w:S),!e.enabled&&r&&r.classList.add(...s.lockClass.split(" "))};a.forEach(r=>i(r,"next")),o.forEach(r=>i(r,"prev"))}function f(){let{nextEl:s,prevEl:a}=e.navigation;s=y(s),a=y(a);const o=(i,r)=>{i.removeEventListener("click",r==="next"?w:S),i.classList.remove(...e.params.navigation.disabledClass.split(" "))};s.forEach(i=>o(i,"next")),a.forEach(i=>o(i,"prev"))}d("init",()=>{e.params.navigation.enabled===!1?E():(m(),c())}),d("toEdge fromEdge lock unlock",()=>{c()}),d("destroy",()=>{f()}),d("enable disable",()=>{let{nextEl:s,prevEl:a}=e.navigation;if(s=y(s),a=y(a),e.enabled){c();return}[...s,...a].filter(o=>!!o).forEach(o=>o.classList.add(e.params.navigation.lockClass))}),d("click",(s,a)=>{let{nextEl:o,prevEl:i}=e.navigation;o=y(o),i=y(i);const r=a.target;if(e.params.navigation.hideOnClick&&!i.includes(r)&&!o.includes(r)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===r||e.pagination.el.contains(r)))return;let b;o.length?b=o[0].classList.contains(e.params.navigation.hiddenClass):i.length&&(b=i[0].classList.contains(e.params.navigation.hiddenClass)),l(b===!0?"navigationShow":"navigationHide"),[...o,...i].filter(F=>!!F).forEach(F=>F.classList.toggle(e.params.navigation.hiddenClass))}});const L=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),c()},E=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:L,disable:E,update:c,init:m,destroy:f})}function ne(h){let{swiper:e,extendParams:x,on:d,emit:l,params:p}=h;e.autoplay={running:!1,paused:!1,timeLeft:0},x({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,c,S=p&&p.autoplay?p.autoplay.delay:3e3,w=p&&p.autoplay?p.autoplay.delay:3e3,m,f=new Date().getTime(),L,E,s,a,o,i,r;function b(n){!e||e.destroyed||!e.wrapperEl||n.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",b),!r&&B())}const F=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?L=!0:L&&(w=m,L=!1);const n=e.autoplay.paused?m:f+w-new Date().getTime();e.autoplay.timeLeft=n,l("autoplayTimeLeft",n,n/S),c=requestAnimationFrame(()=>{F()})},Q=()=>{let n;return e.virtual&&e.params.virtual.enabled?n=e.slides.filter(v=>v.classList.contains("swiper-slide-active"))[0]:n=e.slides[e.activeIndex],n?parseInt(n.getAttribute("data-swiper-autoplay"),10):void 0},D=n=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(c),F();let g=typeof n>"u"?e.params.autoplay.delay:n;S=e.params.autoplay.delay,w=e.params.autoplay.delay;const v=Q();!Number.isNaN(v)&&v>0&&typeof n>"u"&&(g=v,S=v,w=v),m=g;const C=e.params.speed,q=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(C,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,C,!0,!0),l("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(C,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,C,!0,!0),l("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{D()})))};return g>0?(clearTimeout(u),u=setTimeout(()=>{q()},g)):requestAnimationFrame(()=>{q()}),g},N=()=>{f=new Date().getTime(),e.autoplay.running=!0,D(),l("autoplayStart")},j=()=>{e.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(c),l("autoplayStop")},k=(n,g)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(u),n||(i=!0);const v=()=>{l("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",b):B()};if(e.autoplay.paused=!0,g){o&&(m=e.params.autoplay.delay),o=!1,v();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),v())},B=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),i?(i=!1,D(m)):D(),e.autoplay.paused=!1,l("autoplayResume"))},U=()=>{if(e.destroyed||!e.autoplay.running)return;const n=T();n.visibilityState==="hidden"&&(i=!0,k(!0)),n.visibilityState==="visible"&&B()},M=n=>{n.pointerType==="mouse"&&(i=!0,r=!0,!(e.animating||e.autoplay.paused)&&k(!0))},z=n=>{n.pointerType==="mouse"&&(r=!1,e.autoplay.paused&&B())},I=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",M),e.el.addEventListener("pointerleave",z))},Z=()=>{e.el.removeEventListener("pointerenter",M),e.el.removeEventListener("pointerleave",z)},G=()=>{T().addEventListener("visibilitychange",U)},J=()=>{T().removeEventListener("visibilitychange",U)};d("init",()=>{e.params.autoplay.enabled&&(I(),G(),N())}),d("destroy",()=>{Z(),J(),e.autoplay.running&&j()}),d("_freeModeStaticRelease",()=>{(s||i)&&B()}),d("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?j():k(!0,!0)}),d("beforeTransitionStart",(n,g,v)=>{e.destroyed||!e.autoplay.running||(v||!e.params.autoplay.disableOnInteraction?k(!0,!0):j())}),d("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){j();return}E=!0,s=!1,i=!1,a=setTimeout(()=>{i=!0,s=!0,k(!0)},200)}}),d("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!E)){if(clearTimeout(a),clearTimeout(u),e.params.autoplay.disableOnInteraction){s=!1,E=!1;return}s&&e.params.cssMode&&B(),s=!1,E=!1}}),d("slideChange",()=>{e.destroyed||!e.autoplay.running||(o=!0)}),Object.assign(e.autoplay,{start:N,stop:j,pause:k,resume:B})}const oe={components:{Swiper:W,SwiperSlide:X},setup(){return{modules:[ne,H,ie]}}},re=t("div",{class:"row justify-content-center py-5"},[t("div",{class:"col-md-8 d-flex"},[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/iris831206/1711166571685.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=d89qe7RNtRla7QP%2B5Cg4hk5jphQsZZRXmBnd6jAnov%2FIsHhxnP11QZzvqkDSYilFToHVjhh%2FRZkTbKbmgjOFRCIreUUUD2yVpY3T8ZfEAFzXzfzACLVdf3bnKyFFwM7CDkLJS5CkLsgjcnchFlkzSxlP%2FmBhjStWkRmNaZqF1lJkzdkX0DWmR4KlPwO13tIlaotrbztpUOhdaose01YOwKe%2FhXyPONqpSjDKO1tg%2FOYVZL7eWxRrJ9XihIcO3tZJjUs1LzfNHQO26RqvmExG9vsuvIri29vFJDleZKHBMN6OKktrpmKsUBfbbl34KwaUqrtK39GFYE9aTzXXPjBRgQ%3D%3D",alt:"",class:"rounded-circle me-5",style:{width:"160px",height:"160px","object-fit":"cover"}}),t("div",{class:"d-flex flex-column"},[t("p",{class:"h5 text-start"}," “每次我使用這款香皂時，我都感到非常驚艷和滿足，讓我不禁想要與他人分享。它的泡沫豐富而綿密，能輕易洗淨雜質和污垢，在使用後也不會感到乾燥或緊繃，而是讓我的肌膚感覺柔軟、滋潤和清新。”"),t("p",{class:"mt-auto text-end"},"──來自愛用者 Amily")])])],-1),le=t("div",{class:"row justify-content-center py-5"},[t("div",{class:"col-md-8 d-flex"},[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/iris831206/1711166565954.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WhUMdLiITv19ZQ5tXrLhv8pGyUNCxKyCZlufWCqdfc9nMxgN47AA8TKke6YZbDH54TJ0E10DrQWKQLFeBgd8PSv05xhYbCgyiHcN0iOGkdq9qo9zCSZ2SMdXpNvW0hUV5OqMzLEzuebPy0qDg12Hqb8EIyAXFUL524cwhcRTY2a0ZcuT8SVNuyclCLkXOtMbomYpFGxwJnaUw17%2Be3D9OiXHGAxqlz3YPyiRQ2Ap1SU40bGUmzszLwRmt3jNIps6%2Bm%2Br5Xp8ZWCUvDFgUGfMAwGVl5ClBzGJHX%2Bvm7ww%2F0atBqY4563oFFvdp7gYUSMKBBe6CWHkWCTNb6I2r1onhg%3D%3D",alt:"",class:"rounded-circle me-5",style:{width:"160px",height:"160px","object-fit":"cover"}}),t("div",{class:"d-flex flex-column"},[t("p",{class:"h5 text-start"}," “除了溫和護膚的效果，這款香皂的香氣也令人愉悅。它散發出天然而清新的氣息，讓我沐浴時彷彿置身於大自然中。每次使用後，我都感到身心俱體地放松和愉悅。”"),t("p",{class:"mt-auto text-end"},"──來自愛用者 Betty")])])],-1),ce=t("div",{class:"row justify-content-center py-5"},[t("div",{class:"col-md-8 d-flex"},[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/iris831206/1711166713268.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ar5drBOGUBr5sjg64wxYyY7rYq6MNo0AHotivo%2F9RxNqMNRgnIM9ETV%2F63stA2Q5%2BSYY3kWP5OVGCG2uUlJB5m7rQ4zgveXC%2BmXAp%2Bof7atf0tZYVLd3B4ian%2Bvb2nyHxLPIeb8DMZGvE%2BJU%2Br6AdEhBTZplCVGKqSmo6sr5g7418PxL0M4IDOMUaP%2FgdpiQY42KVtlCuYpVMw9C8lf%2F%2By1aKBuAy%2FV0YvPvsEzbJFoHocIVsHitOY6uH668nJxOLp%2BSP0w1Y%2Fm09dazG28rpoV%2BMwvZSF6r8W%2Fv2p4hBAitpyiQW4KYWWLtP84DBxNcUDlOWK%2BcHJ0muTxXY3Aylg%3D%3D",alt:"",class:"rounded-circle me-5",style:{width:"160px",height:"160px","object-fit":"cover"}}),t("div",{class:"d-flex flex-column"},[t("p",{class:"h5 text-start"}," “最令我驚訝的是，這款香皂對於敏感肌膚非常友善。以往，我經常遇到使用其他品牌香皂時引發的刺痛和紅腫問題，但這款香皂沒有出現任何不適反應。它的溫和配方非常適合敏感性肌膚的人使用。”"),t("p",{class:"mt-auto text-end"},"──來自愛用者 Alex")])])],-1);function de(h,e,x,d,l,p){const u=A("swiper-slide"),c=A("swiper");return K(),$(c,{loop:!0,spaceBetween:30,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:d.modules,class:"mySwiper"},{default:_(()=>[O(u,null,{default:_(()=>[re]),_:1}),O(u,null,{default:_(()=>[le]),_:1}),O(u,null,{default:_(()=>[ce]),_:1})]),_:1},8,["modules"])}const pe=Y(oe,[["render",de]]),ue={data(){return{isLoading:!1,userEmail:""}},components:{UserComment:pe},methods:{goUrl(h){window.open(h,"_blank")},getMail(){V.fire({title:"<strong>優惠碼<u>Matcha2024</u></strong>",icon:"info",html:`
    恭喜您獲得 <b>優惠碼</b> ,
    趕快前往選購<a href="/#/products">商品</a>吧
  `,showCloseButton:!0,showCancelButton:!1,focusConfirm:!1,confirmButtonText:`
    <i class="fa fa-thumbs-up"></i> Great!
  `}).then(()=>{}),this.$router.beforeEach((h,e,x)=>{V.close(),window.location.reload(),x()})}},mounted(){}},me=P('<div class="container"><div class="row mt-5"><div class="row mt-5"><div class="col-md-4 mt-md-4"><div class="card border-1 mb-4 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/iris831206/1710769337242.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=XjnWlsmeMCDzhJMjLjAuTdNgw3rpzow2leuotcKhRxuqw%2BP6B8S40OUvUDwAYnBNXz%2FrLeCZbX7x81FoE6viN1rO0td7J51v2bR3CRqXvNQF8QzAp5KpOSWxV%2FA5Yam2iVPEKa7OQHYjS7OKpVsDJd1dtyZiMdlsDgM5OIsXNCZXdwkE5LZe7w4udiafJVcF3Iu0ep2KwNkDRl1901x6TSS%2FYxB%2Be4I3IFruvVhIUiHCF5hBLgXLvK8tVSLyecE6l%2B23RSERLFOv24EoruJNjNbnUhXjV4SYtyC9ThGx6wylN3mMMl5w4HZjO3db9mOk59%2B%2BVGB0b0aUPa9kvOiTpA%3D%3D" style="object-fit:cover;" height="300px" class="card-img-top rounded-0" alt="保濕呵護"><div class="card-title p-3 text-center"><div class="d-flex justify-content-center mt-3"><p class="text-muted mb-0 w-75"> 保濕呵護 </p></div></div></div></div><div class="col-md-4 mt-md-4"><div class="card border-1 mb-4 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/iris831206/1710769817580.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=JfNz7t%2Fa00G%2FXrGTkynxphV7quJJH%2B6QLhLJS62XflfMvPU%2BscfaoK5QyRb2afBfMA04ng95Qtgc341QHOw3DYXqtSVzlE9SW%2BrtZooWuJf%2FUa34%2BO%2Bq2Ux8GdvGQf2sUU%2FKCFu39toDyfQus%2FqwToCofRI0aFnhyRijQLQTrj2UH5EMV15YDagg2i0wOJVybN3c%2BPiuFuamkVwU0nKeoMoaOULQrn9%2FcM7AUGa5kb94lLlPNPqc9Z0nEs%2FdrUbPtOk2cSWH3qtNBGnEfbjEypQzk1k6l0dRCsBr89uMiRJNC7I%2B%2FS4g5sLnAx1UNWrrjK%2BhiYEZ7%2F%2BGMj6oQJrsBg%3D%3D" style="object-fit:cover;" height="300px" class="card-img-top rounded-0" alt="芳香潤澤"><div class="card-title p-3 text-center"><div class="d-flex justify-content-center mt-3"><p class="text-muted mb-0 w-75"> 芳香潤澤 </p></div></div></div></div><div class="col-md-4 mt-md-4"><div class="card border-1 mb-4 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/iris831206/1710769967361.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=gwQH5Og1uj%2B2BUKWY1QZVRBOe0toX6ss0tbd3zYB%2F%2B42AlZ4oZ5OPEeqZ7aWsLZms0fQaqTF90G%2FdtFMPqUZbt2HVwpHu%2BaOq4Morav67kX0KpjISGjqr%2BtTJ2oJ20Pq0TA9XhA6a8fICcKppBLCnhFjfCK%2Bnw36Fg0V8EwJui%2F44j6Ch8KjgngbWeC49jko%2FOylieK9wPvJNCEAZJirRKdW9e%2F2PWyQAuMmEnMzp3L0N055Uh0NS9AYKn7pyprlMrj2A%2BILTUb5pOWgRU0TjqiiGoYMoRIOtQwa4tuByJemsjeWQGAZMjtm3%2FhDPiT97k%2FYVhcanbrdrYJhbicTwQ%3D%3D" style="object-fit:cover;" height="300px" class="card-img-top rounded-0" alt="天然純淨"><div class="card-title p-3 text-center"><div class="d-flex justify-content-center mt-3"><p class="text-muted mb-0 w-75"> 天然純淨 </p></div></div></div></div></div></div><div class="row mt-5"><div class="col-md-3 mt-md-4"><div class="card border-0 mb-4 position-relative text-center"><i style="font-size:50px;" class="bi bi-flower2"></i><div class="card-body p-0"><h4 class="mb-0 mt-4">芬芳氣息</h4><div class="d-flex justify-content-center mt-3"><p class="card-text text-muted mb-0 w-75"> 讓香皂的馥郁芬芳和細緻泡沫溫柔包裹、深入滋養每一寸肌膚。 </p></div></div></div></div><div class="col-md-3 mt-md-4"><div class="card border-0 mb-4 position-relative text-center"><i style="font-size:50px;" class="bi bi-brightness-high"></i><div class="card-body p-0"><h4 class="mb-0 mt-4">天然成分</h4><div class="d-flex justify-content-center mt-3"><p class="card-text text-muted mb-0 w-75"> 選用天然、純淨配方，為您的肌膚注入活力，呈現健康光澤。 </p></div></div></div></div><div class="col-md-3 mt-md-4"><div class="card border-0 mb-4 position-relative text-center"><i style="font-size:50px;" class="bi bi-chat-heart"></i><div class="card-body p-0"><h4 class="mb-0 mt-4">呵護肌膚</h4><div class="d-flex justify-content-center mt-3"><p class="card-text text-muted mb-0 w-75"> 溫和不刺激，讓肌膚在每一次沐浴中更加豐盈、柔軟。 </p></div></div></div></div><div class="col-md-3 mt-md-4"><div class="card border-0 mb-4 position-relative text-center"><i style="font-size:50px;" class="bi bi-droplet"></i><div class="card-body p-0"><h4 class="mb-0 mt-4">保濕滋潤</h4><div class="d-flex justify-content-center mt-3"><p class="card-text text-muted mb-0 w-75"> 極致滋潤護理，保持水分平衡讓肌膚綻放明亮光彩。 </p></div></div></div></div></div></div>',1),ve={class:"bg-light mt-5"},fe={class:"container"},ge={class:"row justify-content-center py-5"},ye=P('<div class="container my-5"><div class="row"><div class="col-md-6"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/iris831206/1710771948772.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=jAmsuCOGxNvS2gY5n67YJjDViwiiBKUygsWfynXiXwq3tGVEk8EyfpplNW54mWi%2FR9PgSKVsC5SrsQ7kXbyjSmhiJlL0EdAgSrwLQvrEhNTgaKZa24jQJO56GMSVLH4NJQwsSkA36e3wvEupT8WRSWTHNSk87Vsi6DRFKeLod1dNK95l%2B%2FmzwKSoLdJJ2NxG4kNfLb5ag6%2B8D7AMTQvAyw8Nc8WgukLBNlUZ1K1jBC2sWSTAhv28lh1D9a3CSVEgcmssSOf7cD8aN7GjgRz2KYEfyQztxQZ1S5htxhqZPJWgbRX3siVz3nN40EoiMMuupRa%2BuWPeANKFiCEnVr8z8Q%3D%3D" style="object-fit:cover;" alt="" class="img-fluid"></div><div class="col-md-4 m-auto text-center"><h4 class="mt-4">療癒身心</h4><p class="text-muted"> 每次沐浴都是一次環繞自己的美麗禮讚 </p></div></div><div class="row flex-row-reverse justify-content-between mt-4"><div class="col-md-6"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/iris831206/1710772108160.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=HwA3eT1w1fxwBT%2BbItOZodTuWN3YxXMYskA0xfZvCrFLggfRFjQG432FY8ks6kmmQHtuL48DBQ0YqWKg1zd4nWl6DSfCZq4yUbSc4q0Z6xYZR7WQBFSmEmLers2PbvqVKOUoO%2FHxYNHifUZilkDFUVXJlegWtUYHweHbYX%2BDy5NH9KDmira5qy6UhWixOwVtKxU9ktqpMiFaE9n1%2FT6gor8SG8JJnSuvH%2FSJColkX93gm7AI%2BJnQOvjuhpAEmjE2z8%2FF41W3f5m8dRh3PnZXizOZqSMwSvhD%2BI%2BwQq0oqt5YktVE2sacj5L5DacZBRSeMI4yJgm0q6oat3P92IAIUQ%3D%3D" style="object-fit:cover;" alt="" class="img-fluid"></div><div class="col-md-4 m-auto text-center"><h4 class="mt-4">享受生活</h4><p class="text-muted"> 為您帶來無與倫比的沐浴體驗 </p></div></div></div>',1),he={class:"bg-light py-5"},be={class:"container"},xe={class:"row justify-content-center"},we={class:"col-md-4 text-center"},Ee=t("h3",null,"訂閱我們",-1),Be=t("p",{class:"text-muted"},"立即訂閱，享有最新優惠情報！ ",-1),Se={class:"input-group w-md-50 mt-md-0 mt-3"},Fe={class:"input-group-append"},ke={class:"bg-dark"},Le={class:"container"},je={class:"d-flex align-items-center justify-content-between text-white py-4"},Ce=t("p",{class:"mb-0"},"© 2020 LOGO All Rights Reserved.",-1),De={class:"d-flex list-unstyled mb-0 h4"},_e=t("i",{class:"fab fa-facebook"},null,-1),Oe=[_e],Te=t("i",{class:"fab fa-instagram"},null,-1),Ae=[Te],Ne=t("i",{class:"fab fa-line"},null,-1),Ue=[Ne];function Me(h,e,x,d,l,p){const u=A("UserComment");return K(),ee(ae,null,[me,t("div",ve,[t("div",fe,[t("div",ge,[O(u)])])]),ye,t("div",he,[t("div",be,[t("div",xe,[t("div",we,[Ee,Be,t("div",Se,[te(t("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>l.userEmail=c),type:"text",class:"form-control rounded-0",placeholder:"請輸入您的Email"},null,512),[[se,l.userEmail]]),t("div",Fe,[t("button",{onClick:e[1]||(e[1]=(...c)=>p.getMail&&p.getMail(...c)),class:"btn btn-dark rounded-0",type:"button",id:"search"}," 訂閱 ")])])])])])]),t("div",ke,[t("div",Le,[t("div",je,[Ce,t("ul",De,[t("li",null,[t("p",{onClick:e[2]||(e[2]=c=>p.goUrl("https://www.facebook.com/")),class:"text-white mx-3"},Oe)]),t("li",null,[t("p",{onClick:e[3]||(e[3]=c=>p.goUrl("https://www.instagram.com/")),class:"text-white mx-3"},Ae)]),t("li",null,[t("p",{onClick:e[4]||(e[4]=c=>p.goUrl("https://line.me/tw/")),class:"text-white mx-3"},Ue)])])])])])],64)}const Ye=Y(ue,[["render",Me]]);export{Ye as default};
