(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e027185"],{"819e":function(t,s,a){},8697:function(t,s,a){"use strict";a("c104")},b23c:function(t,s,a){"use strict";a("819e")},b4b6:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nk-content"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"nk-content nk-content-fluid pt-0"},[s("div",{staticClass:"container-xl wide-lg"},[s("div",{staticClass:"nk-content-body"},[s("div",{staticClass:"nk-block-head nk-block-head-sm"},[s("div",{staticClass:"nk-block-between flex-column flex-sm-row align-items-start align-items-sm-center justify-content-start justify-content-sm-between"},[s("div",{staticClass:"nk-block-head-content"},[s("h3",{staticClass:"nk-block-title page-title"},[t._v(t._s(t.$t("support.support_history")))]),s("div",{staticClass:"nk-block-des text-soft"},[s("p",[t._v(t._s(t.$tc("service.total_message",1))+" "+t._s(t.paginationData.total)+" "+t._s(t.$t("support.support")))])])])])]),s("div",{staticClass:"nk-block mb-5"},[s("div",{staticClass:"d-flex justify-between"},[s("nav",[s("ul",{staticClass:"nav nav-switch-s2 nav-tabs bg-white"},[s("li",{staticClass:"nav-item",class:{active:!t.filter.status}},[s("a",{staticClass:"nav-link btn btn-sm btn-outline-light cursor-pointer",class:{active:!t.filter.status},on:{click:function(s){t.filter.status="all"}}},[s("em",{staticClass:"icon ni ni-clock"}),t._v(" "+t._s(t.$t("support.all"))+" ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link btn btn-sm btn-outline-light cursor-pointer text-success",class:{active:"completed"===t.filter.status},on:{click:function(s){t.filter.status="completed"}}},[s("em",{staticClass:"icon ni ni-check-circle"}),t._v(" "+t._s(t.$t("support.success"))+" ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link btn btn-sm btn-outline-light cursor-pointer text-warning",class:{active:"pending"===t.filter.status},on:{click:function(s){t.filter.status="pending"}}},[s("em",{staticClass:"icon ni ni-alert-circle"}),t._v(" "+t._s(t.$t("support.processing"))+" ")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link btn btn-sm btn-outline-light cursor-pointer text-danger",class:{active:"cancel"===t.filter.status},on:{click:function(s){t.filter.status="cancel"}}},[s("em",{staticClass:"icon ni ni-na"}),t._v(" "+t._s(t.$t("support.rejected"))+" ")])])])])]),s("div",{staticClass:"card card-bordered"},[s("div",{staticClass:"card-inner-group"},[s("div",{staticClass:"card-inner"},[s("div",{staticClass:"card-title-group"},[s("div",{staticClass:"form-control-wrap"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.filter.search,expression:"filter.search",modifiers:{trim:!0}}],staticClass:"form-control h-75 border-primary",attrs:{type:"text",placeholder:t.$t("button.search")},domProps:{value:t.filter.search},on:{input:function(s){s.target.composing||t.$set(t.filter,"search",s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),s("div",{staticClass:"card-tools mr-n1 h-75 ml-2"},[s("ul",{staticClass:"btn-toolbar gx-1"},[s("li",[s("div",{staticClass:"dropdown"},[t._m(1),s("div",{staticClass:"dropdown-menu dropdown-menu-xs dropdown-menu-right"},[s("ul",{staticClass:"link-check"},[s("li",[s("span",[t._v(t._s(t.$t("button.show")))])]),t._l(t.optionShow,(function(a){return s("li",{class:[a.value===t.paginationData.perPage?"active":""],on:{click:function(s){t.paginationData.perPage=a.value}}},[s("a",{staticClass:"cursor-pointer"},[t._v(t._s(a.text))])])}))],2)])])])])])])]),t.data.length?s("div",{staticClass:"card-inner p-0"},[s("div",{staticClass:"nk-tb-list nk-tb-tnx"},[s("div",{staticClass:"nk-tb-item nk-tb-head"},[s("div",{staticClass:"nk-tb-col tb-col-sm"},[s("span",[t._v(t._s(t.$t("support.support_by")))])]),s("div",{staticClass:"nk-tb-col"},[s("span",[t._v(t._s(t.$t("support.support_detail")))])]),s("div",{staticClass:"nk-tb-col tb-col-sm"},[s("span",[t._v(t._s(t.$t("support.support_time")))])]),s("div",{staticClass:"nk-tb-col tb-col-sm pl-2"},[s("span",[t._v(t._s(t.$t("support.support_person")))])]),s("div",{staticClass:"nk-tb-col nk-tb-col-status text-start pl-0"},[s("span",{staticClass:"sub-text"},[t._v(t._s(t.$t("support.support_status")))])]),s("div",{staticClass:"nk-tb-col"},[t._v(t._s(t.$t("support.reason")))])]),t._l(t.data,(function(a){return s("div",{key:a.id,staticClass:"nk-tb-item"},[s("div",{staticClass:"nk-tb-col tb-col-sm"},[s("div",{staticClass:"nk-tnx-type"},[s("div",{staticClass:"nk-tnx-type-text"},[s("span",{staticClass:"tb-lead"},[t._v(t._s(a.name))]),s("span",{staticClass:"tb-date"},[t._v(t._s(a.email))])])])]),s("div",{staticClass:"nk-tb-col"},[s("div",{staticClass:"nk-tnx-type"},[s("div",{staticClass:"nk-tnx-type-text"},[s("a",{staticClass:"dropdown-toggle pt-1",attrs:{"data-toggle":"dropdown"}},[s("span",{staticClass:"text-break-word-all line-1 d-block w-100px"},[t._v(t._s(a.description))]),s("em",{staticClass:"icon ni ni-alert-circle cursor-pointer"})]),s("div",{staticClass:"dropdown-menu reject-note dropdown-menu-left",attrs:{"data-id":a.id}},[s("div",{staticClass:"link-list-opt no-bdr p-3 w-300px text-break-spaces"},[s("span",{staticClass:"text-break-word-all"},[t._v(t._s(a.description))])])])])])]),s("div",{staticClass:"nk-tb-col tb-col-sm"},["en"===t.lang?s("span",[t._v(t._s(t.formatEnDate(a.created_at)))]):s("span",[t._v(t._s(t.formatViDate(a.created_at)))])]),s("div",{staticClass:"nk-tb-col tb-col-sm pl-2"},[a.username_user_support||a.email_user_support?[a.username_user_support?s("span",{staticClass:"tb-lead"},[t._v(t._s(a.username_user_support))]):t._e(),a.email_user_support?s("span",{staticClass:"tb-date"},[t._v(t._s(a.email_user_support))]):t._e()]:s("span",{staticClass:"tb-date"},[t._v("- - - -")])],2),s("div",{staticClass:"nk-tb-col nk-tb-col-status pl-1"},[s("div",{staticClass:"d-flex align-items-center justify-content-start"},[s("span",{staticClass:"badge badge-sm badge-dim",class:t.getStatusOutlineBadge(a.status)},[t._v(t._s(t.getStatusSupport(a.status)))]),a.reason?s("a",{staticClass:"cursor-pointer d-sm-none",on:{click:function(s){return t.showModal(a)}}},[s("em",{staticClass:"icon ni ni-eye fs-18px ml-1"})]):t._e()])]),s("div",{staticClass:"nk-tb-col"},[a.reason?s("a",{staticClass:"cursor-pointer d-flex align-center pl-2",on:{click:function(s){return t.showModal(a)}}},[t._v(" "+t._s(t.$t("button.detail"))+" ")]):t._e()])])}))],2)]):s("div",{staticClass:"flex-grow-1 min-h-300px d-flex align-items-center justify-content-center"},[s("span",[t._v(t._s(t.$t("utilities.no_data")))])]),t.data.length?s("div",{staticClass:"card-inner"},[s("b-row",{staticClass:"row mt-4 mb-3"},[s("b-col",{staticClass:"ml-auto col-auto"},[s("nav",[s("b-pagination",{attrs:{"per-page":t.paginationData.perPage,"total-rows":t.paginationData.total,align:"right",size:"sm"},model:{value:t.paginationData.currentPage,callback:function(s){t.$set(t.paginationData,"currentPage","string"===typeof s?s.trim():s)},expression:"paginationData.currentPage"}})],1)])],1)],1):t._e()])])]),s("div",{staticClass:"content-page wide-sm m-auto"},[s("div",{staticClass:"nk-block"},[s("div",{staticClass:"card card-bordered"},[s("div",{staticClass:"card-inner"},[s("div",{staticClass:"align-center flex-column g-4"},[s("div",{staticClass:"nk-block-content"},[s("div",{staticClass:"nk-block-content-head px-lg-4"},[s("h5",{staticClass:"text-center"},[t._v(t._s(t.$tc("support.support_sub",1)))]),s("p",{staticClass:"text-soft text-center mt-2 mt-sm-0"},[t._v(t._s(t.$tc("support.support_sub",2)))])])]),s("div",{staticClass:"nk-block-content flex-shrink-0"},[s("router-link",{staticClass:"btn btn-lg border d-flex align-items-center",attrs:{to:{name:"support.index"}}},[s("div",{staticClass:"bg-primary p-1 rounded mr-2"},[s("em",{staticClass:"icon ni ni-headphone-fill text-white"})]),s("div",{staticClass:"d-flex align-items-start flex-column justify-content-start"},[s("p",{staticClass:"mb-0 fs-14px fw-medium"},[t._v(t._s(t.$t("button.support_now")))]),s("span",{staticClass:"fw-normal text-soft fs-13px"},[t._v(t._s(t.$t("support.support_note")))])])])],1)])])])])])])])]),s("b-modal",{ref:"my-modal",staticClass:"modal-sm",attrs:{"hide-footer":"","hide-header":"","no-enforce-focus":""}},[t.detail?s("div",{staticClass:"d-block text-left pb-3"},[s("div",{staticClass:"alert alert-danger"},[s("p",{staticClass:"fs-18px d-flex align-items-center lh-1 mb-2"},[t._v(" "+t._s(t.$t("support.reason"))+": ")]),s("p",{staticClass:"text-break-word-all"},[t._v(t._s(t.detail.reason))])])]):t._e(),s("div",{staticClass:"d-flex align-items-center justify-content-end mt-2"},[s("b-button",{staticClass:"w-fit-content",attrs:{variant:"primary",block:""},on:{click:t.hideModal}},[t._v(t._s(t.$t("button.close")))])],1)])],1)])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"form-icon form-icon-right"},[s("em",{staticClass:"icon ni ni-search"})])},function(){var t=this,s=t._self._c;return s("a",{staticClass:"btn btn-primary btn-icon dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[s("em",{staticClass:"icon ni ni-setting text-white"})])}],n=a("bbca"),l=a("87ea"),o={name:"HistorySupport",metaInfo(){return{title:this.$t("menu.support")}},data(){return{data:[],paginationData:{perPage:8,currentPage:1,total:0,sort:"desc"},filter:{search:null,status:null},searchTimer:null,optionShow:[{value:4,text:4},{value:8,text:8},{value:12,text:12}],optionSort:[{value:"desc",text:"DESC"},{value:"asc",text:"ASC"}],detail:null}},components:{NoData:n["a"]},mounted(){this.getHistorySupport()},methods:{formatViDate:l["b"],formatEnDate:l["a"],getHistorySupport(){this.setLoadingState(!0);let t={page:this.paginationData.currentPage,limit:this.paginationData.perPage,sort:this.paginationData.sort};"all"===this.filter.status&&(this.filter.status=null),this.filter&&this.lodash.forEach(this.filter,(s,a)=>{s&&(t[a]=s)}),this.$store.dispatch("Service/getHistorySupport",t).then(t=>{if(0===t.code&&t.success){this.data=t.data;const s=t.pagination;this.paginationData=this.lodash.extend({},this.paginationData,{currentPage:s.current_page,total:s.total})}}).catch(t=>{this.setFormError(t)}).finally(()=>{this.requestLoading=!1,this.setLoadingState(!1)})},showModal(t){this.detail=t,this.$refs["my-modal"].show()},hideModal(){this.$refs["my-modal"].hide()}},computed:{lang(){return Object(l["d"])()}},watch:{"paginationData.currentPage"(t){t&&this.getHistorySupport()},"paginationData.perPage"(t){t&&(this.paginationData.currentPage=1,this.getHistorySupport())},"paginationData.sort"(t,s){t&&this.getHistorySupport()},"filter.search"(t,s){this.searchTimer&&clearTimeout(this.searchTimer),this.searchTimer=setTimeout(()=>{this.paginationData.currentPage=1,this.getHistorySupport()},1e3)},"filter.status"(t,s){t&&this.getHistorySupport()}}},c=o,r=(a("b23c"),a("8697"),a("2877")),p=Object(r["a"])(c,i,e,!1,null,"b50eab62",null);s["default"]=p.exports},c104:function(t,s,a){}}]);