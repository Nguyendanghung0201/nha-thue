(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16af87b4"],{"14fa":function(t,e,s){},"581e":function(t,e,s){"use strict";s("69c6")},"5f0d":function(t,e,s){},6053:function(t,e,s){"use strict";s("f60b")},6806:function(t,e,s){"use strict";s("e8f6")},"69c6":function(t,e,s){},"7b7f":function(t,e,s){t.exports=s.p+"assets/1.0/img/english.90fe46c7.png"},a906:function(t,e,s){t.exports=s.p+"assets/1.0/img/226-united-states.95cf2213.svg"},aa20:function(t,e,s){},b165:function(t,e,s){t.exports=s.p+"assets/1.0/img/vietnam.63173f24.png"},be93:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("dashboard-side-bar"),e("div",{staticClass:"nk-wrap isHide",attrs:{id:"content-wrapper"}},[e("div",{staticClass:"nk-header nk-header-fixed is-light"},[e("div",{staticClass:"d-xl-none",attrs:{id:"overlay-sidebar"},on:{"!click":function(e){return t.hideMobileSidebar.apply(null,arguments)}}}),e("div",{staticClass:"container-fluid h-100"},[e("div",{staticClass:"nk-header-wrap h-100"},[e("div",{staticClass:"pe-2 cursor-pointer mr-5 h-100 d-none d-xl-block isShow",attrs:{id:"toggle-sideBar"},on:{click:t.handleShowSidebar}},[e("em",{staticClass:"icon ni ni-view-row-wd fs-22px"})]),e("div",{staticClass:"nk-menu-trigger d-xl-none ml-n1"},[e("a",{staticClass:"nk-nav-toggle nk-quick-nav-icon cursor-pointer",on:{click:t.handleShowMobileSideBar}},[e("em",{staticClass:"icon ni ni-menu"})])]),e("div",{staticClass:"nk-header-brand d-xl-none"},[e("router-link",{staticClass:"logo-link",attrs:{to:{name:"dashboard.index"}}},[e("div",{staticClass:"d-flex align-items-center"},[e("em",{staticClass:"icon ni ni-package-fill fs-26px me-1"}),e("span",{staticClass:"fs-24px fw-bold text-red"},[t._v("ePayGate Agent")])])])],1),e("div",{staticClass:"nk-header-tools py-0 h-100"},[e("ul",{staticClass:"nk-quick-nav h-100"},[t.user?e("li",{staticClass:"dropdown user-dropdown position-relative h-100"},[e("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[e("div",{staticClass:"user-toggle"},[t.user.avatar?e("div",{staticClass:"user-avatar sm bg-transparent"},[e("b-img",{staticClass:"rounded-circle h-100 w-100",staticStyle:{"object-fit":"cover"},attrs:{src:t.getPublicAssetUrl(t.user.avatar),width:"35"},on:{error:t.getNoAvatar}})],1):t.user.email?e("div",{staticClass:"user-avatar sm"},[t._v(" "+t._s(t.user.email.charAt(0))+" ")]):e("div",{staticClass:"user-avatar sm"},[e("em",{staticClass:"icon ni ni-user-alt"})]),e("div",{staticClass:"user-info d-none d-md-block ms-1"},[t.user.display_name?e("div",{staticClass:"user-name dropdown-indicator line-1"},[t._v(" "+t._s(t.user.display_name)+" ")]):e("div",{staticClass:"user-name dropdown-indicator line-1"},[t._v(" "+t._s(t.user.email)+" ")])])])]),e("div",{staticClass:"custom-dropdown dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1"},[e("div",{staticClass:"dropdown-inner user-card-wrap bg-lighter d-none d-md-block"},[e("div",{staticClass:"user-car d-flex align-items-center"},[t.user.avatar?e("div",{staticClass:"user-avatar sm bg-transparent"},[e("b-img",{staticClass:"rounded-circle h-100 w-100",staticStyle:{"object-fit":"cover"},attrs:{src:t.getPublicAssetUrl(t.user.avatar),width:"35"},on:{error:t.getNoAvatar}})],1):t.user.email?e("div",{staticClass:"user-avatar"},[e("span",[t._v(" "+t._s(t.user.email.charAt(0))+" ")])]):e("div",{staticClass:"user-avatar"},[e("em",{staticClass:"icon ni ni-user-alt fs-20px"})]),e("div",{staticClass:"user-info"},[e("p",{staticClass:"lead-text line-1 mb-0"},[t._v(" "+t._s(t.user.display_name)+" ")]),e("span",{staticClass:"sub-text"},[t._v(t._s(t.user.email))])])])]),e("div",{staticClass:"dropdown-inner"},[e("ul",{staticClass:"link-list"},[e("li",[e("router-link",{attrs:{to:{name:"profile.info"}}},[e("em",{staticClass:"icon ni ni-user-alt"}),e("span",[t._v(t._s(t.$t("menu.view_profile")))])])],1),e("li",[e("router-link",{attrs:{to:{name:"profile.password"}}},[e("em",{staticClass:"icon ni ni-edit"}),e("span",[t._v(t._s(t.$t("menu.change_password")))])])],1)])]),e("div",{staticClass:"dropdown-inner"},[e("ul",{staticClass:"link-list"},[e("li",[e("a",{staticClass:"cursor-pointer",on:{click:function(e){return t.handleLogout()}}},[e("em",{staticClass:"icon ni ni-signout"}),e("span",[t._v(t._s(t.$t("menu.logout")))])])])])])])]):t._e(),e("li",{staticClass:"dropdown language-dropdown d-none d-sm-flex align-items-center mr-n1 position-relative h-100 ps-4"},[e("a",{staticClass:"dropdown-toggle nk-quick-nav-icon py-0 h-100",attrs:{"data-toggle":"dropdown"}},[e("div",{staticClass:"quick-icon"},[e("img",{staticClass:"icon",attrs:{src:"en"===t.locale?s("a906"):s("dd05"),alt:""}})])]),e("div",{staticClass:"custom-dropdown dropdown-menu dropdown-menu-right dropdown-menu-s1"},[e("ul",{staticClass:"language-list"},[e("li",["en"!=t.locale?e("a",{staticClass:"language-item cursor-pointer",on:{click:function(e){return t.setLanguage("en")}}},[e("img",{staticClass:"language-flag",attrs:{src:s("7b7f"),alt:""}}),e("span",{staticClass:"language-name"},[t._v(t._s(t.$t("utilities.english")))])]):e("a",{staticClass:"language-item cursor-pointer"},[e("img",{staticClass:"language-flag",attrs:{src:s("7b7f"),alt:""}}),e("span",{staticClass:"language-name"},[t._v(t._s(t.$t("utilities.english")))])])]),e("li",["vi"!=t.locale?e("a",{staticClass:"language-item cursor-pointer",on:{click:function(e){return t.setLanguage("vi")}}},[e("img",{staticClass:"language-flag",attrs:{src:s("b165"),alt:""}}),e("span",{staticClass:"language-name"},[t._v(t._s(t.$t("utilities.vietnamese")))])]):e("a",{staticClass:"language-item cursor-pointer"},[e("img",{staticClass:"language-flag",attrs:{src:s("b165"),alt:""}}),e("span",{staticClass:"language-name"},[t._v(t._s(t.$t("utilities.vietnamese")))])])])])])])])])])])]),t.breadcrumbs.length?e("nav",{staticClass:"mb-3"},[e("ul",{staticClass:"breadcrumb breadcrumb-arrow"},[t._l(t.breadcrumbs,(function(s,a){return e("li",{key:a,staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:{name:s.name}}},[t._v(" "+t._s(t.$t(s.meta.title||s.name))+" ")])],1)})),t.$route.meta.title?e("li",{staticClass:"breadcrumb-item active"},[e("span",[t._v(t._s(t.$t(t.$route.meta.title)))])]):t._e()],2)]):t._e(),e("router-view",{key:t.$route.fullPath})],1),e("dashboard-footer")],1)},i=[],n=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"nk-header nk-header-fixed is-light nk-header-fixed"},[e("div",{staticClass:"container-lg wide-xl"},[e("div",{staticClass:"nk-header-wrap"},[e("div",{staticClass:"nk-header-brand"},[e("a",{staticClass:"logo-link",attrs:{href:"/"}},[e("img",{staticClass:"logo-light logo-img",attrs:{src:s("c508"),srcset:s("c508").default,alt:"logo"}}),e("img",{staticClass:"logo-dark logo-img",attrs:{src:s("c508"),srcset:s("c508").default,alt:"logo-dark"}})])]),e("div",{staticClass:"nk-header-tools"},[e("ul",{staticClass:"nk-quick-nav"},[e("li",{staticClass:"dropdown user-dropdown"},[t._m(0),e("div",{staticClass:"dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1"},[e("div",{staticClass:"dropdown-inner user-card-wrap bg-lighter d-none d-md-block"},[e("div",{staticClass:"user-card"},[e("div",{staticClass:"user-card"},[t._m(1),e("div",{staticClass:"user-info"},[e("span",{staticClass:"lead-text"},[t._v("Abu Bin Ishtiyak")]),e("span",{staticClass:"sub-text"},[t._v(t._s(t.user.email))])])])])]),e("div",{staticClass:"dropdown-inner"},[e("ul",{staticClass:"link-list"},[e("li",[e("router-link",{attrs:{to:{name:"admin.profile"}}},[e("em",{staticClass:"icon ni ni-user-alt"}),e("span",[t._v("Thông tin cá nhân")])])],1)])]),e("div",{staticClass:"dropdown-inner"},[e("ul",{staticClass:"link-list"},[e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout()}}},[e("em",{staticClass:"icon ni ni-signout"}),e("span",[t._v("Đăng xuất")])])])])])])]),e("li",{staticClass:"d-lg-none"},[e("a",{staticClass:"toggle nk-quick-nav-icon mr-n1 cursor-pointer",attrs:{"data-target":"sideNav"},on:{click:function(e){return t.toggleSidebar()}}},[e("em",{staticClass:"icon ni ni-menu"})])])])])])])])}),o=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"dropdown-toggle mr-lg-n1",attrs:{href:"#","data-toggle":"dropdown"}},[e("div",{staticClass:"user-toggle"},[e("div",{staticClass:"user-avatar sm"},[e("em",{staticClass:"icon ni ni-user-alt"})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-avatar"},[e("span",[t._v("AB")])])}],l={name:"DashboardHeader",props:{sidebarToggle:{type:Boolean,default:!1}},data(){return{showSidebar:!1}},methods:{logout(){this.$store.dispatch("Auth/logout").then(()=>{this.$router.go(this.$route.fullPath)})},toggleSidebar(){if(this.showSidebar)return this.$emit("sidebarToggle",!1);this.$emit("sidebarToggle",!this.showSidebar)}},watch:{sidebarToggle:{immediate:!0,handler(t,e){this.showSidebar=t}},showSidebar(t,e){this.$emit("sidebarToggle",t)}},computed:{user(){return this.$store.getters["Auth/user"]}}},r=l,d=(s("c6a6"),s("2877")),c=Object(d["a"])(r,n,o,!1,null,"60c24678",null),u=c.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nk-footer isHide"},[e("div",{staticClass:"container wide-xl"},[e("div",{staticClass:"nk-footer-wrap g-2"},[e("div",{staticClass:"nk-footer-copyright"}),e("div",{staticClass:"nk-footer-links"},[e("ul",{staticClass:"nav nav-sm"},[e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link"},[t._v(t._s(t.$t("service.version"))+": 1.0")])])])])])])])},m=[],g={name:"DashboardFooter"},b=g,p=Object(d["a"])(b,h,m,!1,null,"d753929c",null),v=p.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"nk-sidebar nk-sidebar-fixed is-compact",attrs:{id:"sidebar"}},[e("div",{staticClass:"nk-sidebar-element nk-sidebar-head"},[e("div",{staticClass:"nk-sidebar-brand"},[e("router-link",{staticClass:"logo-link nk-sidebar-logo",attrs:{to:{name:"dashboard.index"}}},[e("div",{staticClass:"d-flex align-items-center"},[e("em",{staticClass:"icon ni ni-package-fill fs-26px me-1"}),e("span",{staticClass:"fs-24px fw-bold text-red"},[t._v("House For Rent")])])])],1),e("div",{staticClass:"nk-menu-trigger mr-n2"},[e("a",{staticClass:"nk-nav-toggle nk-quick-nav-icon d-none d-xl-block",attrs:{type:"button"},on:{"!click":function(e){return t.hideSidebar.apply(null,arguments)}}},[e("em",{staticClass:"icon ni ni-arrow-left"})])]),e("div",{staticClass:"nk-menu-trigger mr-n2 d-lg-block d-xl-none"},[e("a",{staticClass:"nk-nav-toggle nk-quick-nav-icon",attrs:{type:"button"},on:{"!click":function(e){return t.hideMobileSidebar.apply(null,arguments)}}},[e("em",{staticClass:"icon ni ni-arrow-left"})])])]),e("div",{staticClass:"nk-sidebar-element nk-sidebar-body"},[e("vue-simplebar",[e("div",{staticClass:"nk-sidebar-content"},[e("div",{staticClass:"nk-sidebar-menu"},[e("Sidebar",{attrs:{menuLists:t.menuLists}}),e("div",{style:t.menuStyles()})],1)])])],1)])},C=[],k=function(){var t=this,e=t._self._c;return t.menuLists.length?e("ul",{staticClass:"nk-menu"},[t._l(t.menuLists,(function(s,a){return[[s.heading?[e("li",{staticClass:"nk-menu-heading"},[e("h6",{staticClass:"overline-title text-primary-alt",domProps:{textContent:t._s(s.label)}})])]:e("li",{staticClass:"nk-menu-item",class:{active:t.activeMenu(s.activeAt),"has-sub":!(!s.children||0==s.children.length)}},[s.children&&0!=s.children.length?e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"sidebar-for-"+a,expression:"'sidebar-for-' + index"}],staticClass:"nk-menu-link nk-menu-toggle cursor-pointer",on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"nk-menu-icon"},[e("em",{class:s.icon})]),e("span",{staticClass:"nk-menu-text",domProps:{textContent:t._s(s.label)}})]):e("router-link",{staticClass:"nk-menu-link px-4 px-xl-2",class:{"router-link-active":t.activeMenu(s.activeAt)},attrs:{to:s.route}},[e("span",{staticClass:"nk-menu-icon"},[e("em",{class:s.icon})]),e("span",{staticClass:"nk-menu-text",domProps:{textContent:t._s(s.label)}}),e("span",{staticClass:"nk-menu-badge",class:{"bg-danger text-light":s.badge>0},domProps:{textContent:t._s(s.badge&&s.badge>99?"99+":s.badge)}})]),s.children&&s.children.length?[e("b-collapse",{staticClass:"nk-menu-sub",class:{show:t.activeMenu(s.activeAt)},attrs:{id:"sidebar-for-"+a}},[t._l(s.children,(function(s){return[e("div",{staticClass:"nk-menu-item",class:{active:t.activeMenu(s.activeAt)}},[e("router-link",{staticClass:"nk-menu-link",attrs:{to:s.route}},[e("span",{staticClass:"nk-menu-icon"},[e("em",{class:s.icon})]),e("span",{staticClass:"nk-menu-text",domProps:{textContent:t._s(s.label)}}),e("span",{staticClass:"nk-menu-badge",domProps:{textContent:t._s(s.badge)}})])],1)]}))],2)]:t._e()],2)]]})),e("li",{staticClass:"nk-menu-heading d-sm-none mb-2"},[e("h6",{staticClass:"overline-title text-primary-alt"},[t._v(t._s(t.$t("menu.languages")))])]),e("li",{staticClass:"language-list px-4 d-sm-none"},[e("div",{staticClass:"rounded-3 border mb-2",class:{"bg-gray-100":"vi"==t.locale}},["vi"!=t.locale?e("a",{staticClass:"language-item cursor-pointer",on:{click:function(e){return t.setLanguage("vi")}}},[e("img",{staticClass:"language-flag",attrs:{src:s("b165"),alt:""}}),e("span",{staticClass:"language-name"},[t._v(t._s(t.$t("utilities.vietnamese")))])]):e("a",{staticClass:"language-item cursor-pointer"},[e("img",{staticClass:"language-flag",attrs:{src:s("b165"),alt:""}}),e("span",{staticClass:"language-name"},[t._v(t._s(t.$t("utilities.vietnamese")))])])]),e("div",{staticClass:"rounded-3 border",class:{"bg-gray-100":"en"==t.locale}},["en"!=t.locale?e("a",{staticClass:"language-item cursor-pointer",on:{click:function(e){return t.setLanguage("en")}}},[e("img",{staticClass:"language-flag",attrs:{src:s("7b7f"),alt:""}}),e("span",{staticClass:"language-name"},[t._v(t._s(t.$t("utilities.english")))])]):e("a",{staticClass:"language-item cursor-pointer"},[e("img",{staticClass:"language-flag",attrs:{src:s("7b7f"),alt:""}}),e("span",{staticClass:"language-name"},[t._v(t._s(t.$t("utilities.english")))])])])])],2):t._e()},w=[],_=s("2f62"),x={methods:{activeMenu(t){if("undefined"==typeof t||!t)return"";setTimeout(()=>{let e=this.$refs[t];e&&e.scrollIntoView({behavior:"smooth",block:"start"})},1e3);let e=this.lodash.find(t,t=>t==this.$route.name);return"undefined"!==typeof e}},mounted(){this.$root.$on("bv::collapse::state",(t,e)=>{const s=$("#"+t);if(t.indexOf("sidebar-for")>=0&&s.length&&e){const t=s.innerHeight();setTimeout(()=>{s.height(t)},50)}})},watch:{},computed:{...Object(_["c"])(["user"])}},S=s("87ea"),y=s("61da"),M={name:"Sidebar",mixins:[x],data(){return{locale:null}},props:{menuLists:{type:Object|Array,default(){return[]}}},methods:{setLanguage:S["h"],checkRoute(t){if(["admin.order.index","client.order.index"].includes(t))return!0}},mounted(){this.locale=Object(S["d"])(),y["default"].$on("closeMobileSidebar",this.handleCloseMobileMenu)}},T=M,A=(s("581e"),Object(d["a"])(T,k,w,!1,null,"93cbffce",null)),L=A.exports,N={computed:{status(){return this.$store.getters["sidebarStatus"]},classes(){return{"is-compact":this.status.desktop,"nk-sidebar-active":this.status.mobile}}},methods:{closeSidebar(){this.$store.dispatch("sidebarToggle",{desktop:!0,mobile:!1})},openSidebar(){this.$store.dispatch("sidebarToggle",{desktop:!1,mobile:!0})},handleShowSidebar(){let t=document.getElementById("toggle-sideBar");t.classList.remove("isShow");let e=document.getElementById("sidebar");e.classList.remove("is-compact");let s=document.querySelector(".nk-sidebar + .nk-wrap");s.classList.remove("isHide");let a=document.querySelector(".nk-footer");a.classList.remove("isHide")},handleShowMobileSideBar(){let t=document.getElementById("sidebar");t.classList.add("isShow");let e=document.getElementById("overlay-sidebar");e.classList.add("isShow")},hideSidebar(){let t=document.getElementById("toggle-sideBar");t.classList.add("isShow");let e=document.getElementById("sidebar");e.classList.add("is-compact");let s=document.querySelector(".nk-sidebar + .nk-wrap");s.classList.add("isHide");let a=document.querySelector(".nk-footer");a.classList.add("isHide")},hideMobileSidebar(){let t=document.getElementById("sidebar");t.classList.remove("isShow");let e=document.getElementById("overlay-sidebar");e.classList.remove("isShow")}}},D={name:"DashboardSidebar",components:{Sidebar:L},data(){return{isSupperAdmin:!1,menuLists:[{icon:"icon ni ni-dashboard-fill",label:this.$t("menu.dashboard"),route:{name:"dashboard.index"},activeAt:["dashboard.index","service.detail"],permissions:[]},{icon:"icon ni ni-search",label:"Quản lý Thành Phố",route:{name:"search_home.index"},activeAt:["search_home.index","search_home.detail"],permissions:[]},{icon:"icon ni ni-home",label:"Quản lý Nhà Ga",route:{name:"interested_home.index"},activeAt:["interested_home.index","interested_home.detail"],permissions:[]},{icon:"icon ni ni-note-add-fill",label:"Quản lý Nhà Thuê",route:{name:"faq.index"},activeAt:["faq.index"],permissions:[]},{icon:"icon ni ni-cc-alt",label:"quản lý Khuyến Mại",route:{name:"support.index"},activeAt:["support.index","bank.index","bank.detail","bank.create","bank.add","bank.activities","bank.saving","bank.integrated"],permissions:[]},{icon:"icon ni ni-help-alt",label:"Thêm Tòa nhà",route:{name:"history-support.index"},activeAt:["history-support.index"],permissions:[]}],showSidebarMenu:!1,showSidebarMenuMobile:!1,pushedNotification:{},toggleSidebar:!1}},mixins:[N],mounted(){y["default"].$on("showMobileSidebar",this.handleShowMobileSidebar),this.scrollToActiveMenu()},methods:{handleShowSideBar(){this.showSidebarMenu=!this.showSidebarMenu},handleShowMobileSidebar(t){this.showSidebarMenuMobile=t,t?$("body").addClass("nav-shown"):setTimeout(()=>{$("body").removeClass("nav-shown")},200)},handleCloseMobileSidebar(){this.showSidebarMenuMobile=!1,y["default"].$emit("closeMobileSidebar",!0),$("body").addClass("nav-shown")&&setTimeout(()=>{$("body").removeClass("nav-shown")},200)},handleSidebarHover(){const t=$(".nk-sidebar");t.length&&t.hasClass("is-compact")&&t.addClass("has-hover")},handleSidebarLeave(){const t=$(".nk-sidebar");t.length&&t.hasClass("is-compact")&&t.removeClass("has-hover")},scrollToActiveMenu(){}},watch:{showSidebarMenuMobile(t){const e=$(".nk-sidebar-overlay"),s=$(".nk-sidebar"),a=this;t?e.length||$(s).after($("<div />",{class:"nk-sidebar-overlay","data-target":"sidebarMenu"}).click(()=>{a.handleCloseMobileSidebar()})):e.remove()}}},B=D,q=(s("ed3e"),Object(d["a"])(B,f,C,!1,null,null,null)),P=q.exports,H=function(){var t=this;t._self._c;return t._m(0)},E=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"nk-news-item",attrs:{href:"#"}},[e("div",{staticClass:"nk-news-icon"},[e("em",{staticClass:"icon ni ni-card-view"})]),e("div",{staticClass:"nk-news-text"},[e("p",[t._v("Do you know the latest update of 2022? "),e("span",[t._v(" A overview of our is now available on YouTube")])]),e("em",{staticClass:"icon ni ni-external"})])])}],I=function(){var t=this,e=t._self._c;return e("b-modal",{ref:"modal",attrs:{"no-close-on-backdrop":"","no-close-on-esc":"","title-class":"w-100 text-center","header-class":"",size:"lg","body-class":"pt-0","hide-footer":"","no-enforce-focus":""},on:{hidden:function(e){return t.onModalHidden()},shown:function(e){return t.onModalShown()}},scopedSlots:t._u([{key:"header-close-content",fn:function(){return[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"}},[t._v("×")])]},proxy:!0},{key:"modal-title",fn:function(){return[e("h5",[t._v(" Hướng dẫn nhận thông báo ")])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("div",{staticClass:"mt-3"},[e("div",{staticClass:"modal-body"},[t._v(" Cách bật thông báo đẩy của Hệ thống trên Google Chrome hoặc Firefox: "),e("ul",{staticClass:"list"},[e("li",[t._v(" Cài đặt phiên bản Chrome hoặc Firefox mới nhất.")]),e("li",[t._v(" Vào hệ thống CRM.")]),e("li",[t._v("Chấp nhận thông báo từ trình duyệt")]),e("li",[e("img",{attrs:{src:"http://cdn0x68.tadata.info/storage/TUNG_DAP_CHAI/huong-dan-3.jpg",alt:"huong dan 1"}})]),e("li",[e("strong",[t._v("Nếu không thấy, hãy làm theo các bước dưới đây")])]),e("li",[t._v(" Nhấp vào "),e("span",{staticClass:"text-success"},[e("em",{staticClass:"ni ni-lock"})]),t._v(" ở trên thanh địa chỉ Website.")]),e("li",[e("img",{attrs:{src:"http://cdn0x68.tadata.info/storage/TUNG_DAP_CHAI/Screenshot_1.png",alt:"huong dan 1"}})]),e("li",[t._v(' Nếu trạng thái "Notifications" đang tắt, hãy bật nó lên ')]),e("li",[e("img",{attrs:{src:"http://cdn0x68.tadata.info/storage/TUNG_DAP_CHAI/Screenshot_2.png",alt:"huong dan 2"}})]),e("li",[t._v(" Lưu ý: Nếu bạn gặp sự cố, hãy xóa dữ liệu duyệt web và cookie rồi đóng và mở lại trình duyệt.")])])])]),e("hr",{staticClass:"dashed"}),e("b-row",[e("b-col",{staticClass:"mx-auto",attrs:{lg:"2"}},[e("b-button",{attrs:{variant:"light",block:""},on:{click:function(e){return t.hideModal()}}},[t._v(" Đóng ")])],1)],1)],1)},j=[],O={name:"ModalEnableDesktopNotificationGuide",props:{value:{type:Boolean,default:!1},size:{type:String,default:"md"}},data(){return{show:!0}},methods:{hideModal(){this.$refs["modal"].hide()},onModalHidden(){this.$emit("close",this.value)},onModalShown(){}},watch:{value(t,e){this.show=t}}},R=O,G=(s("6806"),Object(d["a"])(R,I,j,!1,null,"c6b162f2",null)),U=G.exports,F={name:"EnableDesktopNotification",components:{ModalEnableDesktopNotificationGuide:U},data(){return{showRequestDesktopNotification:!1,showModalDesktopNotification:!1}},mounted(){this.requestDesktopNotification()},methods:{requestDesktopNotification(){try{this.$notification.requestPermission().then(t=>{"denied"!=t&&"default"!=t||(this.showRequestDesktopNotification=!0)})}catch(t){console.log("ErrorForRequestPermission")}},onModalDesktopNotificationClosed(){this.showModalDesktopNotification=!1}}},Q=F,z=Object(d["a"])(Q,H,E,!1,null,"22a2af02",null),J=z.exports,V={components:{EnableDesktopNotification:J,DashboardFooter:v,DashboardHeader:u,DashboardSideBar:P},mixins:[N],data(){return{sidebarToggle:!1,locale:null,showSidebar:!1,showMobileSidebar:!1,metaTitle:null,time:null,unread:0,currentTitle:this.$route.meta.title,notifications:[],firstLoadingNotification:!0,paginationData:{currentPage:1,perPage:10,lastPage:null,total:0,sort:"DESC"},showRequestDesktopNotification:!1,soundTimer:null}},computed:{user(){return this.$store.getters["Auth/user"]},breadcrumbs(){const t=this.buildBreadcrumb(this.$route);return t.length>1&&t.unshift(this.$router.getRoutes().find(t=>"client.dashboard.index"===t.name)),t.pop(),t}},mounted(){this.locale=Object(S["d"])(),y["default"].$on("closeMobileSidebar",this.handleCloseMobileMenu)},methods:{getPublicAssetUrl:S["e"],changeTitle(t){if(t){let e=t;const s="1 thông báo mới";let a="old";this.time=setInterval(()=>{"old"===a?(a="new",this.metaTitle=s):(a="old",this.metaTitle=e)},1e3)}},playSound(){this.soundTimer&&clearTimeout(this.soundTimer),this.soundTimer=setTimeout(()=>{let t=new Audio(this.SOUND);t.play().then()},300)},buildBreadcrumb(t){if(t.meta&&t.meta.parent){const e=this.$router.getRoutes().find(e=>e.name===t.meta.parent);return[...this.buildBreadcrumb(e),t]}return[t]},handleSidebarToggle(t){this.sidebarToggle=t},setLanguage:S["h"],handleLogout(){this.$store.dispatch("Auth/resetToken").then(this.$router.push({name:"auth.login"}))},handleShowSideBar(t){this.showSidebarMenu=t},handleShowMobileMenu(){this.showMobileSidebar=!this.showMobileSidebar,y["default"].$emit("showMobileSidebar",this.showMobileSidebar)},handleCloseMobileMenu(t){this.showMobileSidebar=!t}},watch:{sidebarToggle(t,e){this.handleSidebarToggle(t)},$route(t,e){t&&clearInterval(this.time)}},metaInfo(){return{title:"REAL HOUSE"}}},K=V,W=(s("6053"),s("fee9"),Object(d["a"])(K,a,i,!1,null,"2b963c60",null));e["default"]=W.exports},c508:function(t,e,s){t.exports=s.p+"assets/1.0/img/timebit-otc-512.77a00cef.png"},c6a6:function(t,e,s){"use strict";s("5f0d")},dd05:function(t,e,s){t.exports=s.p+"assets/1.0/img/220-vietnam.b7fa9922.svg"},e8f6:function(t,e,s){},ed3e:function(t,e,s){"use strict";s("14fa")},f60b:function(t,e,s){},fee9:function(t,e,s){"use strict";s("aa20")}}]);