(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07127bca"],{"09ec":function(t,s,e){"use strict";e("5256")},"3d12":function(t,s,e){t.exports=e.p+"assets2/1.0/img/evaArrowBackFill0.3492afe2.svg"},5256:function(t,s,e){},5967:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home-detail"},[s("Container",[s("div",{staticClass:"home-detail__header"},[t.isMobile?s("img",{staticClass:"home-detail__header__back",attrs:{src:e("3d12"),alt:"back"}}):t._e(),s("div",{staticClass:"home-detail__header-right",on:{click:t.AddMyHouse}},[s("img",{attrs:{src:e("6768"),alt:"heart__icon"}})])]),s("div",{staticClass:"home-detail__back",on:{click:t.goBack}},[s("img",{attrs:{src:e("3d12"),alt:"back"}})]),t.isMobile?s("div",{staticClass:"home-detail__heart"},[s("div",[s("img",{attrs:{src:e("6768"),alt:"heart__icon"}})])]):t._e(),s("div",{staticClass:"home-desc"},[s("div",{staticClass:"home-desc__slide"},[s("SwiperThumbs",{attrs:{list_img_url:t.list_image}})],1),s("div",{staticClass:"home-desc__name"},[t._v(t._s(t.data.name))]),s("div",{staticClass:"home-desc__info"},[s("ul",[s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("6d32"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.price")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.price)+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("f2a5"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_ten")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.name)+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("eab1"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_dc")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.address)+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("73a2"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_gt")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.gia_thong)+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("9e23"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_phi")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.phi_dich_vu?t.data.phi_dich_vu:"なし")+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("c11a"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_tien_coc")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.tien_coc?t.data.tien_coc:"なし")+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("e3c1"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_tien_le")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.tien_le?t.data.tien_le:"なし")+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("f333"),alt:"icon"}}),s("span",[t._v(t._s(t.$t("bank.detail_dien_tich")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.area)+" ")])]),s("li",[s("div",{staticClass:"home-desc__label"},[s("img",{attrs:{src:e("f1c0"),alt:""}}),s("span",[t._v(t._s(t.$t("bank.detail_pass")))])]),s("div",{staticClass:"home-desc__text"},[t._v(" "+t._s(t.data.detail_id)+" ")])])]),s("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100088292215069",target:"_blank"}},[s("button",{staticClass:"home-desc__btn"},[t._v(t._s(t.$t("bank.detail_tu_van")))])])]),s("img",{staticClass:"home-detail__icon1",attrs:{src:e("a148"),alt:"back"}})])])],1)},i=[],l=(e("14d9"),e("43b0")),o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"swiper-thumbs"},[s("swiper",{ref:"swiperTop",staticClass:"swiper gallery-left",attrs:{options:t.swiperOptionTop}},[t._l(t.list_img_url,(function(t){return s("swiper-slide",{key:t},[s("img",{attrs:{src:t,alt:""}})])})),s("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}),s("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"})],2),s("swiper",{ref:"swiperThumbs",staticClass:"swiper gallery-thumbs",attrs:{options:t.swiperOptionThumbs}},[t._l(t.list_img_url,(function(t){return s("swiper-slide",{key:t},[s("img",{attrs:{src:t,alt:""}})])})),s("div",{staticClass:"swiper-button-next swiper-thumbs-next",attrs:{slot:"button-next"},slot:"button-next"}),s("div",{staticClass:"swiper-button-prev swiper-thumbs-prev",attrs:{slot:"button-prev"},slot:"button-prev"})],2)],1)},c=[],n=e("7212"),r=(e("a7a3"),{name:"swiper-thumbs-gallery",components:{Swiper:n["Swiper"],SwiperSlide:n["SwiperSlide"]},props:{list_img_url:Array},data(){return{swiperOptionTop:{loop:!0,slidesPerView:1,loopedSlides:4,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{loop:!0,loopedSlides:4,spaceBetween:10,slidesPerView:4,touchRatio:.2,slideToClickedSlide:!0,direction:"vertical",navigation:{nextEl:".swiper-thumbs-next",prevEl:".swiper-thumbs-prev"}}}},mounted(){this.$nextTick(()=>{const t=this.$refs.swiperTop.$swiper,s=this.$refs.swiperThumbs.$swiper;t.controller.control=s,s.controller.control=t})}}),d=r,p=(e("09ec"),e("2877")),_=Object(p["a"])(d,o,c,!1,null,"ceacca9a",null),m=_.exports,h={components:{Container:l["a"],SwiperThumbs:m},data(){return{data:[],dataOnline:null,list_image:[]}},computed:{descItem:()=>[{value:1,icon:"home",label:"Tên nhà"},{value:2,icon:"gis_poi-map",label:"Địa chỉ"},{value:3,icon:"Group",label:"Giao thông"},{value:4,icon:"flat-color-icons_manager",label:"Quản lý"},{value:5,icon:"icon-park-outline_deposit",label:"Tiền cọc"},{value:6,icon:"ph_hand-coins-fill",label:"Tiền lễ"},{value:7,icon:"acreage",label:"Diện tích"}]},methods:{goBack(){this.$router.go(-1)},async AddMyHouse(){const t={id:this.id};this.$store.dispatch("Home/saveCareHome",t).then(t=>{0===t.code&&t.success&&console.log({response:t})}).catch(t=>{this.setFormError(t)}).finally(()=>{this.requestLoading=!1})},async checkimagethu(t){return new Promise((s,e)=>{var a=new Image;setTimeout(()=>{s(!1),a.src=""},250);a.onload=function(){s(!0)},a.onerror=function(){s(!1)},a.src=t})}},async mounted(){try{let t=this.$route.params.id,s=await this.$store.dispatch("Home/detailHome",{id:t});this.data=s.data,this.id=t;let e=this.data.list_img_url.split(","),a=[];for(let i of e){let t=await this.checkimagethu(i);t&&a.push(i)}this.list_image=a}catch(t){console.error("Lỗi trong mounted hook:",t)}}},u=h,v=(e("ad40"),Object(p["a"])(u,a,i,!1,null,"0ed2c507",null));s["default"]=v.exports},6768:function(t,s,e){t.exports=e.p+"assets2/1.0/img/heart.1071ff6e.svg"},"6d32":function(t,s,e){t.exports=e.p+"assets2/1.0/img/price2.1a111729.svg"},"73a2":function(t,s,e){t.exports=e.p+"assets2/1.0/img/Group.ab7a47a6.svg"},"9e23":function(t,s,e){t.exports=e.p+"assets2/1.0/img/flat-color-icons_manager.cd6eadf5.svg"},a148:function(t,s,e){t.exports=e.p+"assets2/1.0/img/home-detail1.466131b8.png"},ad40:function(t,s,e){"use strict";e("cf38")},c11a:function(t,s,e){t.exports=e.p+"assets2/1.0/img/icon-park-outline_deposit.71a53ddb.svg"},cf38:function(t,s,e){},e3c1:function(t,s,e){t.exports=e.p+"assets2/1.0/img/ph_hand-coins-fill.5e2498aa.svg"},eab1:function(t,s,e){t.exports=e.p+"assets2/1.0/img/gis_poi-map.77800396.svg"},f1c0:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAB2HAAAdhwGP5fFlAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAzJJREFUeJztm09PE0EYh58p/2IgHjVBb8oJYyDityAp9Khe0YR6LYZ46ZHWm0lpwLPcTG3kUygHEjQe8GaIEm9GYlDa18NSwg6d7Q5Md91ln9tO3p135rf77vy6O4WMjIyMjMuL6mvvazLEEQVy5BHuATeAUcdZDoA9YAtFkxwNnqi/YU/unwA1KaCoArf6lqM7X4ASi+ptmGD3ApQlxzVWgJLzvm1QVNlnmbJqB4UNOk/8P0weQFjiOgDPgsLc3gHebf9Gaz0E1mnzmt98pKQOnOZ8IaNc4Q6KRygWgBEtYj6oHNwJsCZDtPiMv+b3EGYpqm1neYKoyRSKTbyHbYddBpg0PRhzzpIfUcA/+cNIJw9QVNsIs3h3XYcJWsyZTnEnQI6871hYi3TyHTwRXmljyRuiHQogzGjHG876tmVAy624bwp1JwCMa0k/OezbjhY7Wst41zjcCuB3eEX1y2HfdpzNPWYKdSlAIrEzQjbeflXknGO6kLe3JbwPSIi3P0G/AIuq61x7l0BZcqxK9djhRT15gNtAg7pUKIvzku1dAgnz9rYEl0ACvf0JIUvALEBCvf0JF34GJNTb22IWIKHe3hazAAn19rYELSuJ9Pa2BAmQSG9vy6X/LZAJEPcA4iYTIO4BxE0mQNwDiJt0CvBSrmotP02h6RRgmEmt5bspNJ0CtHmotbw3haZPgLpMAwu+NqFpCk+XAHWZRngHDJ9q3WXQLID7/QFRU5Mx4C6KBwgL+CcvtCmxaH57lFwBwnx3ECo8VcarD0kWIBgBqvzgea/ANAqwS5tSryvfIQ0CHCB8RbGF0GSQZlDN6yRXAMNrblvStQyegyAB/O/hvOUmHiy8vS1BAnzzHckZfx0dFt7eliABPmiRur+ODgtvb4tZAHXGPj6mJlOuEofG0tvbEvRprIG3OaHDCIrN4wFFwzm8vS3BS8mqzAENrfUPwjoDbNBix/kHk9Penq7efj6syQlD77W0LhWEJVcJL4SwQlEtu+yytw/YZ/l4b1CcCFAJ4+1tCe+mvHKoAhOuB9EDK29vi52d9HaNzCHkUcwAN+nHX2B0b9/HbXIZGRkZGZeZf/h8FykUWvYrAAAAAElFTkSuQmCC"},f2a5:function(t,s,e){t.exports=e.p+"assets2/1.0/img/home.3e391911.svg"},f333:function(t,s,e){t.exports=e.p+"assets2/1.0/img/acreage.e5dce6e9.svg"}}]);