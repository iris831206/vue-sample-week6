import{P as L}from"./PaginationComponents-Sn6agHWX.js";import{M as g}from"./bootstrap.esm-0DVlw3sI.js";import{_ as w,g as O,o as l,c as d,h as f,b as t,F as h,r as u,t as o,e as p,w as y,K as k,d as v,s as C}from"./index-uXjOQBdv.js";var P={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"iris831206",BASE_URL:"/vue-sample-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:m,VITE_API_PATH:b}=P,D={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1,OrderModal:null,delOrderModal:null}},methods:{openModal(n){this.tempOrder={...n},this.isNew=!1,this.OrderModal.show()},openDelOrderModal(n){this.tempOrder={...n},this.delOrderModal.show()},updatePaid(n){this.isLoading=!0;const a=`${m}/api/${b}/admin/order/${n.id}`,r={is_paid:n.is_paid};this.$http.put(a,{data:r}).then(_=>{this.isLoading=!1,this.OrderModal.hide(),this.getOrders(this.currentPage)}).catch(_=>{this.isLoading=!1,alert(_.response.data.message)})},delOrder(){const n=`${m}/api/${b}/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(n).then(()=>{this.isLoading=!1,this.delOrderModal.hide(),this.getOrders(this.currentPage)}).catch(a=>{this.isLoading=!1,alert(a.response.data.message)})},getOrders(n=1){this.currentPage=n;const a=`${m}/api/${b}/admin/orders?page=${n}`;this.isLoading=!0,this.$http.get(a,this.tempProduct).then(r=>{this.orders=r.data.orders,this.pagination=r.data.pagination,this.isLoading=!1}).catch(r=>{this.isLoading=!1,alert(r.response.data.message)})}},components:{PaginationComponents:L},mounted(){this.OrderModal=new g(this.$refs.OrderModal),this.delOrderModal=new g(this.$refs.delOrderModal),this.getOrders()}},V={class:"container"},E={class:"table mt-4"},T=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),S=["textContent"],I={class:"list-unstyled"},A={class:"text-right"},N={class:"form-check form-switch"},U=["id","onUpdate:modelValue","onChange"],z=["for"],R={key:0},B={key:1},W={class:"btn-group"},q=["onClick"],F=["onClick"],H={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"OrderModal"},j={class:"modal-dialog modal-xl",role:"document"},K={class:"modal-content border-0"},G=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),J={class:"modal-body"},Q={class:"row"},X={class:"col-md-4"},Y=t("h3",null,"用戶資料",-1),Z={class:"table"},$={key:0},tt=t("th",{style:{width:"100px"}},"姓名",-1),et=t("th",null,"Email",-1),st=t("th",null,"電話",-1),ot=t("th",null,"地址",-1),lt={class:"col-md-8"},dt=t("h3",null,"訂單細節",-1),nt={class:"table"},at=t("th",{style:{width:"100px"}},"訂單編號",-1),it=t("th",null,"下單時間",-1),rt=t("th",null,"付款時間",-1),ct={key:0},ht={key:1},_t=t("th",null,"付款狀態",-1),ut={key:0,class:"text-success"},pt={key:1,class:"text-muted"},mt=t("th",null,"總金額",-1),bt=t("h3",null,"選購商品",-1),gt={class:"table"},Ot=t("thead",null,[t("tr")],-1),ft={class:"text-end"},yt={class:"d-flex justify-content-end"},kt={class:"form-check"},vt={class:"form-check-label",for:"flexCheckDefault"},xt={key:0},Mt={key:1},Lt={class:"modal-footer"},wt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Ct={class:"modal fade",id:"delOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"delOrderModal"},Pt={class:"modal-dialog",role:"document"},Dt={class:"modal-content border-0"},Vt={class:"modal-header bg-danger text-white"},Et={class:"modal-title"},Tt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),St={class:"modal-body"},It={class:"text-danger"},At={class:"modal-footer"},Nt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function Ut(n,a,r,_,s,c){const x=O("VueLoading"),M=O("PaginationComponents");return l(),d(h,null,[f(x,{active:s.isLoading,"z-index":1060},null,8,["active"]),t("div",V,[t("table",E,[T,t("tbody",null,[(l(!0),d(h,null,u(s.orders,e=>(l(),d(h,{key:e.id},[s.orders.length?(l(),d("tr",{key:0,class:C({"text-secondary":!e.is_paid})},[t("td",null,o(new Date(e.create_at*1e3).toLocaleDateString("zh-TW")),1),t("td",null,[e.user?(l(),d("span",{key:0,textContent:o(e.user.email)},null,8,S)):p("",!0)]),t("td",null,[t("ul",I,[(l(!0),d(h,null,u(e.products,i=>(l(),d("li",{key:i.id},o(i.product.title)+" 數量："+o(i.qty)+" "+o(i.product.unit),1))),128))])]),t("td",A,o(e.total),1),t("td",null,[t("div",N,[y(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${e.id}`,"onUpdate:modelValue":i=>e.is_paid=i,onChange:i=>c.updatePaid(e)},null,40,U),[[k,e.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${e.id}`},[e.is_paid?(l(),d("span",R,"已付款")):(l(),d("span",B,"未付款"))],8,z)])]),t("td",null,[t("div",W,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:i=>c.openModal(e)}," 檢視 ",8,q),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:i=>c.openDelOrderModal(e)}," 刪除 ",8,F)])])],2)):p("",!0)],64))),128))])])]),t("div",H,[t("div",j,[t("div",K,[G,t("div",J,[t("div",Q,[t("div",X,[Y,t("table",Z,[s.tempOrder.user?(l(),d("tbody",$,[t("tr",null,[tt,t("td",null,o(s.tempOrder.user.name),1)]),t("tr",null,[et,t("td",null,o(s.tempOrder.user.email),1)]),t("tr",null,[st,t("td",null,o(s.tempOrder.user.tel),1)]),t("tr",null,[ot,t("td",null,o(s.tempOrder.user.address),1)])])):p("",!0)])]),t("div",lt,[dt,t("table",nt,[t("tbody",null,[t("tr",null,[at,t("td",null,o(s.tempOrder.id),1)]),t("tr",null,[it,t("td",null,o(new Date(s.tempOrder.create_at*1e3).toLocaleDateString("zh-TW")),1)]),t("tr",null,[rt,t("td",null,[s.tempOrder.paid_date?(l(),d("span",ct,o(new Date(s.tempOrder.paid_date*1e3).toLocaleDateString("zh-TW")),1)):(l(),d("span",ht,"時間不正確"))])]),t("tr",null,[_t,t("td",null,[s.tempOrder.is_paid?(l(),d("strong",ut,"已付款")):(l(),d("span",pt,"尚未付款"))])]),t("tr",null,[mt,t("td",null,o(s.tempOrder.total),1)])])]),bt,t("table",gt,[Ot,t("tbody",null,[(l(!0),d(h,null,u(s.tempOrder.products,e=>(l(),d("tr",{key:e.id},[t("th",null,o(e.product.title),1),t("td",null,o(e.qty)+" / "+o(e.product.unit),1),t("td",ft,o(e.final_total),1)]))),128))])]),t("div",yt,[t("div",kt,[y(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":a[0]||(a[0]=e=>s.tempOrder.is_paid=e)},null,512),[[k,s.tempOrder.is_paid]]),t("label",vt,[s.tempOrder.is_paid?(l(),d("span",xt,"已付款")):(l(),d("span",Mt,"未付款"))])])])])])]),t("div",Lt,[wt,t("button",{type:"button",class:"btn btn-primary",onClick:a[1]||(a[1]=e=>c.updatePaid(s.tempOrder))}," 修改付款狀態 ")])])])],512),t("div",Ct,[t("div",Pt,[t("div",Dt,[t("div",Vt,[t("h5",Et,[t("span",null,"刪除 "+o(s.tempOrder.title),1)]),Tt]),t("div",St,[v(" 是否刪除 "),t("strong",It,o(s.tempOrder.title),1),v(" (刪除後將無法恢復)。 ")]),t("div",At,[Nt,t("button",{type:"button",class:"btn btn-danger",onClick:a[2]||(a[2]=(...e)=>c.delOrder&&c.delOrder(...e))},"確認刪除 ")])])])],512),f(M,{pages:s.pagination,onEmitPages:c.getOrders},null,8,["pages","onEmitPages"])],64)}const Wt=w(D,[["render",Ut]]);export{Wt as default};