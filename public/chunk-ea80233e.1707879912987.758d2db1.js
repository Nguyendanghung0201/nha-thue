(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea80233e"],{1457:function(t,s,e){"use strict";e("1ec6")},"1ec6":function(t,s,e){},"3d12":function(t,s,e){t.exports=e.p+"assets2/1.0/img/evaArrowBackFill0.3492afe2.svg"},5967:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home-detail"},[s("Container",[s("div",{staticClass:"home-detail__header"},[t.isMobile?s("img",{staticClass:"home-detail__header__back",attrs:{src:e("3d12"),alt:"back"}}):s("div",{staticClass:"home-detail__back",on:{click:t.goBack}},[s("img",{attrs:{src:e("3d12"),alt:"back"}})]),t.isMobile?t._e():s("div",{staticClass:"home-detail__header-right",on:{click:t.AddMyHouse}},[s("HeartIcon",{attrs:{width:"38",height:"36",fillColor:t.liked?"#e74c3c":"#EBEFFF",strokeColor:"url(#paint0_linear)"}})],1)]),t.isMobile?s("div",{staticClass:"home-detail__heart",on:{click:t.AddMyHouse}},[s("div",[s("HeartIcon",{attrs:{width:"38",height:"36",fillColor:t.liked?"#e74c3c":"#EBEFFF",strokeColor:"url(#paint0_linear)"}})],1)]):t._e(),s("div",{staticClass:"home-desc"},[s("div",{staticClass:"home-desc__slide"},[s("SwiperThumbs",{attrs:{list_img_url:t.list_image}})],1),s("div",{staticClass:"home-desc__name"},[t._v(t._s(t.data.name))]),s("div",{staticClass:"home-desc__info"},[s("ul",[s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("6d32"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.price")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.price)+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("f2a5"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_ten")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.name)+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("eab1"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_dc")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.address)+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("73a2"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_gt")))])]),s("div",{staticClass:"home-desc__text",domProps:{innerHTML:t._s(t.data.gia_thong)}})]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("9e23"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_phi")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.phi_dich_vu?t.data.phi_dich_vu:"なし")+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("c11a"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_tien_coc")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.tien_coc?t.data.tien_coc:"なし")+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("e3c1"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_tien_le")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.tien_le?t.data.tien_le:"なし")+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("f333"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_dien_tich")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.area)+" ")])]),s("li",{staticStyle:{cursor:"pointer"},on:{click:t.coppyma}},[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("f1c0"),alt:""}}),s("span",[t._v(t._s(t.$t("bank.detail_pass")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.detail_id)+" ")])])]),s("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100088292215069",target:"_blank"}},[s("button",{staticClass:"home-desc__btn"},[t._v(t._s(t.$t("bank.detail_tu_van")))])])]),s("img",{staticClass:"home-detail__icon1",attrs:{src:e("a148"),alt:"back"}})])])],1)},a=[],o=(e("14d9"),e("43b0")),l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"swiper-thumbs"},[s("swiper",{ref:"swiperTop",staticClass:"swiper gallery-left",attrs:{options:t.swiperOptionTop}},[t._l(t.list_img_url,(function(t){return s("swiper-slide",{key:t},[s("img",{attrs:{src:t,alt:""}})])})),s("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}),s("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"})],2),s("swiper",{ref:"swiperThumbs",staticClass:"swiper gallery-thumbs",attrs:{options:t.swiperOptionThumbs}},[t._l(t.list_img_url,(function(t){return s("swiper-slide",{key:t},[s("img",{attrs:{src:t,alt:""}})])})),s("div",{staticClass:"swiper-button-next swiper-thumbs-next",attrs:{slot:"button-next"},slot:"button-next"}),s("div",{staticClass:"swiper-button-prev swiper-thumbs-prev",attrs:{slot:"button-prev"},slot:"button-prev"})],2)],1)},n=[],r=e("7212"),c=(e("a7a3"),{name:"swiper-thumbs-gallery",components:{Swiper:r["Swiper"],SwiperSlide:r["SwiperSlide"]},props:{list_img_url:Array},data(){return{swiperOptionTop:{loop:!0,slidesPerView:1,loopedSlides:4,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{loop:!0,loopedSlides:4,spaceBetween:10,slidesPerView:4,touchRatio:.2,slideToClickedSlide:!0,direction:"vertical",navigation:{nextEl:".swiper-thumbs-next",prevEl:".swiper-thumbs-prev"}}}},mounted(){this.$nextTick(()=>{const t=this.$refs.swiperTop.$swiper,s=this.$refs.swiperThumbs.$swiper;t.controller.control=s,s.controller.control=t})}}),d=c,p=(e("1457"),e("2877")),h=Object(p["a"])(d,l,n,!1,null,"18379c79",null),u=h.exports,m=function(){var t=this,s=t._self._c;return s("svg",{attrs:{width:t.width,height:t.height,viewBox:"0 0 38 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{fill:t.fillColor,"fill-opacity":"0.5",stroke:t.strokeColor,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M19 8.02197C15 -1.68453 1 -0.650701 1 11.7553C1 24.1614 19 34.5 19 34.5C19 34.5 37 24.1614 37 11.7553C37 -0.650701 23 -1.68453 19 8.02197Z"}}),s("defs",[s("linearGradient",{attrs:{id:"paint0_linear",x1:"37",y1:"1.5",x2:"-2.34799",y2:"8.8517",gradientUnits:"userSpaceOnUse"}},[s("stop",{attrs:{"stop-color":"#0193FD"}}),s("stop",{attrs:{offset:"1","stop-color":"#133DD3"}})],1)],1)])},_=[],w={props:{width:{type:String,default:"38"},height:{type:String,default:"36"},fillColor:{type:String,default:"#EBEFFF"},strokeColor:{type:String,default:"url(#paint0_linear)"}}},v=w,g=Object(p["a"])(v,m,_,!1,null,null,null),b=g.exports,k={components:{Container:o["a"],SwiperThumbs:u,HeartIcon:b},data(){return{data:[],dataOnline:null,list_image:[],liked:!1}},computed:{descItem:()=>[{value:1,icon:"home",label:"Tên nhà"},{value:2,icon:"gis_poi-map",label:"Địa chỉ"},{value:3,icon:"Group",label:"Giao thông"},{value:4,icon:"flat-color-icons_manager",label:"Quản lý"},{value:5,icon:"icon-park-outline_deposit",label:"Tiền cọc"},{value:6,icon:"ph_hand-coins-fill",label:"Tiền lễ"},{value:7,icon:"acreage",label:"Diện tích"}]},methods:{goBack(){this.$router.go(-1)},async AddMyHouse(){if(this.$store.getters["Auth/user"]){const t={id:this.id,mod:this.liked?"delete":"add"};this.$store.dispatch("Home/saveCareHome",t).then(t=>{0===t.code&&t.success&&(this.$awnSuccess(this.$t("dialog.successfully")),this.liked=!this.liked)}).catch(t=>{this.setFormError(t)}).finally(()=>{this.requestLoading=!1})}else this.$store.dispatch("Auth/info").then(async t=>{0===t.code&&t.success?this.AddMyHouse():this.$router.push("/auth/login")}).catch(t=>{this.$router.push("/auth/login")}).finally(()=>{})},coppyma(t){var s;t.preventDefault();const e=t.clipboardData||window.clipboardData||(null===(s=t.originalEvent)||void 0===s?void 0:s.clipboardData)||navigator.clipboard;e.writeText(this.data.detail_id),this.$awnSuccess(this.$t("bank.copysucces"))},async checkimagethu(t){return new Promise((s,e)=>{var i=new Image;setTimeout(()=>{s(!1),i.src=""},250);i.onload=function(){s(!0)},i.onerror=function(){s(!1)},i.src=t})}},async mounted(){try{let t=this.$route.params.id,s=await this.$store.dispatch("Home/detailHome",{id:t,mod:"detail"}),e=!1;if(this.$store.getters["Auth/user"])e=await this.$store.dispatch("Home/detailHome",{id:t,mod:"check_detail"});else{let s=await this.$store.dispatch("Auth/info");0===s.code&&s.success&&(e=await this.$store.dispatch("Home/detailHome",{id:t,mod:"check_detail"}))}e&&e.data&&(this.liked=!0),this.data=s.data,this.id=this.data.id;let i=this.data.list_img_url.split(","),a=[];for(let o of i){let t=await this.checkimagethu(o);t&&a.push(o)}this.list_image=a}catch(t){console.error("Lỗi trong mounted hook:",t)}}},C=k,f=(e("dae2"),Object(p["a"])(C,i,a,!1,null,"fdf6e82a",null));s["default"]=f.exports},"6d32":function(t,s,e){t.exports=e.p+"assets2/1.0/img/price2.1a111729.svg"},"73a2":function(t,s,e){t.exports=e.p+"assets2/1.0/img/Group.ab7a47a6.svg"},"9e23":function(t,s,e){t.exports=e.p+"assets2/1.0/img/flat-color-icons_manager.cd6eadf5.svg"},a148:function(t,s,e){t.exports=e.p+"assets2/1.0/img/home-detail1.466131b8.png"},c11a:function(t,s,e){t.exports=e.p+"assets2/1.0/img/icon-park-outline_deposit.71a53ddb.svg"},dae2:function(t,s,e){"use strict";e("eb07")},e3c1:function(t,s,e){t.exports=e.p+"assets2/1.0/img/ph_hand-coins-fill.5e2498aa.svg"},eab1:function(t,s,e){t.exports=e.p+"assets2/1.0/img/gis_poi-map.77800396.svg"},eb07:function(t,s,e){},f1c0:function(t,s){t.exports="data:image/png;base64,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"},f2a5:function(t,s,e){t.exports=e.p+"assets2/1.0/img/home.3e391911.svg"},f333:function(t,s,e){t.exports=e.p+"assets2/1.0/img/acreage.e5dce6e9.svg"}}]);