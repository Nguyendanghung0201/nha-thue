(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595e7ccc"],{"355a":function(t,e,s){t.exports=s.p+"assets2/1.0/img/phone-icon.ead08732.png"},"3d12":function(t,e,s){t.exports=s.p+"assets2/1.0/img/evaArrowBackFill0.3492afe2.svg"},"44c5":function(t,e,s){},"475b":function(t,e,s){"use strict";s("886e")},5967:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-detail relative"},[e("Container",[e("div",{staticClass:"home-detail__header"},[t.isMobile?e("img",{staticClass:"home-detail__header__back",attrs:{src:s("3d12"),alt:"back"}}):e("div",{staticClass:"home-detail__back",on:{click:t.goBack}},[e("img",{attrs:{src:s("3d12"),alt:"back"}})]),t.isMobile?t._e():e("div",{staticClass:"home-detail__header-right"},[e("HeartIcon",{attrs:{width:"38",height:"36",fillColor:t.liked?"#e74c3c":"#EBEFFF",strokeColor:"url(#paint0_linear)"},on:{click:t.AddMyHouse}})],1)]),t.isMobile?e("div",{staticClass:"home-detail__heart"},[e("div",{on:{click:t.AddMyHouse}},[e("HeartIcon",{attrs:{width:"38",height:"36",fillColor:t.liked?"#e74c3c":"#EBEFFF",strokeColor:"url(#paint0_linear)"}})],1)]):t._e(),e("div",{staticClass:"home-desc"},[e("div",{staticClass:"home-desc__slide"},[e("SwiperThumbs",{attrs:{list_img_url:t.list_image}})],1),e("div",{staticClass:"home-desc__name"},[t._v(t._s(t.data.name))]),e("div",{staticClass:"home-desc__info"},[e("ul",[e("li",[e("div",{staticClass:"home-desc__label"},[e("img",{attrs:{src:s("6d32"),alt:"icon"}}),e("span",[t._v(t._s(t.$t("bank.price")))])]),e("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.price)+" ")])]),e("li",{staticStyle:{cursor:"pointer"},on:{click:t.coppyma}},[e("div",{staticClass:"home-desc__label"},[e("img",{attrs:{src:s("f975"),alt:""}}),e("span",[t._v(t._s(t.$t("bank.detail_pass")))])]),e("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.detail_id)+" ")])]),e("li",[e("div",{staticClass:"home-desc__label"},[e("img",{attrs:{src:s("eab1"),alt:"icon"}}),e("span",[t._v(t._s(t.$t("bank.detail_dc")))])]),e("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.address)+" ")])]),e("li",[e("div",{staticClass:"home-desc__label"},[e("img",{attrs:{src:s("73a2"),alt:"icon"}}),e("span",[t._v(t._s(t.$t("bank.detail_gt")))])]),e("div",{staticClass:"home-desc__text",domProps:{innerHTML:t._s(t.data.gia_thong)}})]),e("li",[e("div",{staticClass:"home-desc__label"},[e("img",{attrs:{src:s("9e23"),alt:"icon"}}),e("span",[t._v(t._s(t.$t("bank.detail_phi")))])]),e("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.phi_dich_vu?t.data.phi_dich_vu:"なし")+" ")])]),e("li",[e("div",{staticClass:"home-desc__label"},[e("img",{attrs:{src:s("c11a"),alt:"icon"}}),e("span",[t._v(t._s(t.$t("bank.detail_tien_coc")))])]),e("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.tien_coc?t.data.tien_coc:"なし")+" ")])]),e("li",[e("div",{staticClass:"home-desc__label"},[e("img",{attrs:{src:s("e3c1"),alt:"icon"}}),e("span",[t._v(t._s(t.$t("bank.detail_tien_le")))])]),e("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.tien_le?t.data.tien_le:"なし")+" ")])]),e("li",[e("div",{staticClass:"home-desc__label"},[e("img",{attrs:{src:s("f333"),alt:"icon"}}),e("span",[t._v(t._s(t.$t("bank.detail_dien_tich")))])]),e("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.area)+" ")])])]),e("a",{staticClass:"w-full",staticStyle:{display:"flex","justify-content":"center"},attrs:{href:"https://www.facebook.com/profile.php?id=100088292215069",target:"_blank"}},[e("button",{staticClass:"home-desc__btn"},[t._v(t._s(t.$t("bank.detail_tu_van"))+" ")])])]),e("img",{staticClass:"home-detail__icon1",attrs:{src:s("a148"),alt:"back"}})])]),e("a",{staticClass:"absolute bottom-[68px] right-[80px] md:!block",staticStyle:{display:"none"},attrs:{href:"https://www.facebook.com/profile.php?id=100088292215069",target:"_blank"}},[e("img",{attrs:{width:"80",height:"80",src:s("355a"),alt:""}})])],1)},a=[],l=(s("14d9"),s("43b0")),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper-thumbs"},[e("swiper",{ref:"swiperTop",staticClass:"swiper gallery-left",attrs:{options:t.swiperOptionTop}},[t._l(t.list_img_url,(function(t){return e("swiper-slide",{key:t},[e("img",{staticClass:"object-cover",attrs:{src:t,alt:""}})])})),e("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}),e("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"})],2),e("swiper",{ref:"swiperThumbs",staticClass:"swiper gallery-thumbs",attrs:{options:t.swiperOptionThumbs}},[t._l(t.list_img_url,(function(t){return e("swiper-slide",{key:t},[e("img",{staticClass:"object-cover",attrs:{src:t,alt:""}})])})),e("div",{staticClass:"swiper-button-next swiper-thumbs-next",attrs:{slot:"button-next"},slot:"button-next"}),e("div",{staticClass:"swiper-button-prev swiper-thumbs-prev",attrs:{slot:"button-prev"},slot:"button-prev"})],2)],1)},r=[],n=s("7212"),c=(s("a7a3"),{name:"swiper-thumbs-gallery",components:{Swiper:n["Swiper"],SwiperSlide:n["SwiperSlide"]},props:{list_img_url:Array},data(){return{swiperOptionTop:{loop:!0,slidesPerView:1,loopedSlides:4,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{loop:!0,loopedSlides:4,spaceBetween:10,slidesPerView:4,touchRatio:.2,slideToClickedSlide:!0,direction:"vertical",navigation:{nextEl:".swiper-thumbs-next",prevEl:".swiper-thumbs-prev"}}}},mounted(){this.$nextTick(()=>{const t=this.$refs.swiperTop.$swiper,e=this.$refs.swiperThumbs.$swiper;t.controller.control=e,e.controller.control=t})}}),d=c,p=(s("475b"),s("2877")),h=Object(p["a"])(d,o,r,!1,null,"3af8b847",null),u=h.exports,m=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:t.width,height:t.height,viewBox:"0 0 38 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{fill:t.fillColor,"fill-opacity":"0.5",stroke:t.strokeColor,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M19 8.02197C15 -1.68453 1 -0.650701 1 11.7553C1 24.1614 19 34.5 19 34.5C19 34.5 37 24.1614 37 11.7553C37 -0.650701 23 -1.68453 19 8.02197Z"}}),e("defs",[e("linearGradient",{attrs:{id:"paint0_linear",x1:"37",y1:"1.5",x2:"-2.34799",y2:"8.8517",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#0193FD"}}),e("stop",{attrs:{offset:"1","stop-color":"#133DD3"}})],1)],1)])},v=[],g={props:{width:{type:String,default:"38"},height:{type:String,default:"36"},fillColor:{type:String,default:"#EBEFFF"},strokeColor:{type:String,default:"url(#paint0_linear)"}}},f=g,_=Object(p["a"])(f,m,v,!1,null,null,null),b=_.exports,w={components:{Container:l["a"],SwiperThumbs:u,HeartIcon:b},data(){return{data:[],dataOnline:null,list_image:[],liked:!1}},computed:{descItem:()=>[{value:1,icon:"home",label:"Tên nhà"},{value:2,icon:"gis_poi-map",label:"Địa chỉ"},{value:3,icon:"Group",label:"Giao thông"},{value:4,icon:"flat-color-icons_manager",label:"Quản lý"},{value:5,icon:"icon-park-outline_deposit",label:"Tiền cọc"},{value:6,icon:"ph_hand-coins-fill",label:"Tiền lễ"},{value:7,icon:"acreage",label:"Diện tích"}]},methods:{goBack(){this.$router.go(-1)},async AddMyHouse(){if(this.$store.getters["Auth/user"]){const t={id:this.id,mod:this.liked?"delete":"add"};this.$store.dispatch("Home/saveCareHome",t).then(t=>{0===t.code&&t.success&&(this.$awnSuccess(this.$t("dialog.successfully")),this.liked=!this.liked)}).catch(t=>{this.setFormError(t)}).finally(()=>{this.requestLoading=!1})}else this.$store.dispatch("Auth/info").then(async t=>{0===t.code&&t.success?this.AddMyHouse():this.$router.push("/auth/login")}).catch(t=>{this.$router.push("/auth/login")}).finally(()=>{})},coppyma(t){var e;t.preventDefault();const s=t.clipboardData||window.clipboardData||(null===(e=t.originalEvent)||void 0===e?void 0:e.clipboardData)||navigator.clipboard;s.writeText(this.data.detail_id),this.$awnSuccess(this.$t("bank.copysucces"))},async checkimagethu(t){return new Promise((e,s)=>{var i=new Image;setTimeout(()=>{e(!1),i.src=""},250);i.onload=function(){e(!0)},i.onerror=function(){e(!1)},i.src=t})}},async mounted(){try{let t=this.$route.params.id,e=await this.$store.dispatch("Home/detailHome",{id:t,mod:"detail"}),s=!1;if(this.$store.getters["Auth/user"])s=await this.$store.dispatch("Home/detailHome",{id:t,mod:"check_detail"});else{let e=await this.$store.dispatch("Auth/info");0===e.code&&e.success&&(s=await this.$store.dispatch("Home/detailHome",{id:t,mod:"check_detail"}))}s&&s.data&&(this.liked=!0),this.data=e.data,this.id=this.data.id;let i=this.data.list_img_url.split(","),a=[];for(let l of i){let t=await this.checkimagethu(l);t&&a.push(l)}this.list_image=a}catch(t){console.error("Lỗi trong mounted hook:",t)}}},k=w,A=(s("7f73"),Object(p["a"])(k,i,a,!1,null,"7db6ff1e",null));e["default"]=A.exports},"6d32":function(t,e,s){t.exports=s.p+"assets2/1.0/img/price2.1a111729.svg"},"73a2":function(t,e,s){t.exports=s.p+"assets2/1.0/img/Group.ab7a47a6.svg"},"7f73":function(t,e,s){"use strict";s("44c5")},"886e":function(t,e,s){},"9e23":function(t,e,s){t.exports=s.p+"assets2/1.0/img/flat-color-icons_manager.cd6eadf5.svg"},a148:function(t,e,s){t.exports=s.p+"assets2/1.0/img/home-detail1.466131b8.png"},c11a:function(t,e,s){t.exports=s.p+"assets2/1.0/img/icon-park-outline_deposit.71a53ddb.svg"},e3c1:function(t,e,s){t.exports=s.p+"assets2/1.0/img/ph_hand-coins-fill.5e2498aa.svg"},eab1:function(t,e,s){t.exports=s.p+"assets2/1.0/img/gis_poi-map.77800396.svg"},f333:function(t,e,s){t.exports=s.p+"assets2/1.0/img/acreage.e5dce6e9.svg"},f975:function(t,e){t.exports="data:image/png;base64,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"}}]);