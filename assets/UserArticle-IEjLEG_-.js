import{_,r as o,o as d,c as u,d as c,b as e,w as h,t as i,e as r,F as m}from"./index-xzrc9yqT.js";var p={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"iris831206",BASE_URL:"/vue-sample-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:g,VITE_API_PATH:f}=p,L={data(){return{isLoading:!1,article:{},id:""}},methods:{getArticle(){const a=`${g}/api/${f}/article/${this.id}`;this.isLoading=!0,this.$http.get(a).then(s=>{this.article=s.data.article,this.isLoading=!1}).catch(s=>{this.isLoading=!1,alert(s.response.data.message)})}},mounted(){this.id=this.$route.params.articleId,this.getArticle()}},v={class:"container"},b={"aria-label":"breadcrumb"},A={class:"breadcrumb"},T={class:"breadcrumb-item"},V={class:"breadcrumb-item active","aria-current":"page"},x={class:"row justify-content-center"},I={class:"col-8"},E={class:"text-muted"},P={class:"text-muted"},R=["src","alt"],D=["innerHTML"];function k(a,s,w,S,t,U){const l=o("VueLoading"),n=o("RouterLink");return d(),u(m,null,[c(l,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",v,[e("nav",b,[e("ol",A,[e("li",T,[c(n,{to:"/blog"},{default:h(()=>[r("部落格列表")]),_:1})]),e("li",V,i(t.article.title),1)])]),e("div",x,[e("article",I,[e("h2",null,i(t.article.title),1),e("p",null,[e("small",E,i(new Date(t.article.create_at*1e3).toLocaleDateString("zh-TW")),1),r(" - "),e("small",P,"作者："+i(t.article.author),1)]),e("img",{src:t.article.imageUrl,alt:t.article.title,class:"img-fluid mb-3"},null,8,R),e("div",{innerHTML:t.article.content},null,8,D)])])])],64)}const H=_(L,[["render",k]]);export{H as default};
