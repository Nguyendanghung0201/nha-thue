(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-497d45b2"],{"08d4":function(t,s,a){"use strict";a("1d86")},"1d86":function(t,s,a){},"26f7":function(t,s,a){t.exports=a.p+"assets2/1.0/img/profile__avatar.cd73509c.png"},"3d12":function(t,s,a){t.exports=a.p+"assets2/1.0/img/evaArrowBackFill0.3492afe2.svg"},"43b0":function(t,s,a){"use strict";var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"app-container"},[t._t("default")],2)},e=[],n={name:"Container"},o=n,r=(a("08d4"),a("2877")),c=Object(r["a"])(o,i,e,!1,null,"ac9904f4",null);s["a"]=c.exports},"4d25":function(t,s,a){t.exports=a.p+"assets2/1.0/img/home3.aa6c0638.svg"},"4f41":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"profile-home"},[s("img",{staticClass:"home-icon",attrs:{src:a("d990"),alt:""}}),s("img",{staticClass:"home-icon",attrs:{src:a("859d"),alt:""}}),s("img",{staticClass:"home-icon",attrs:{src:a("ee66"),alt:""}}),s("Container",[s("div",{staticClass:"profile-layout"},[s("div",{staticClass:"profile-main"},[s("div",{staticClass:"profile__nav"},[s("img",{staticClass:"profile__nav__back",attrs:{src:a("3d12"),alt:"back"}})]),s("div",{staticClass:"profile__info"},[s("img",{staticClass:"icon-bg",attrs:{src:a("9cb6"),alt:""}}),s("img",{staticClass:"icon-bg",attrs:{src:a("4d25"),alt:""}}),s("div",{staticClass:"profile__info__avatar"},[s("img",{attrs:{src:a("26f7"),alt:""}}),s("div",[s("img",{attrs:{src:a("62d5"),alt:""}})])]),s("div",{staticClass:"profile__info__desc"},[s("table",[s("tr",[s("td",[t._v(t._s(t.$t("bank.profile_ht")))]),s("td",[t._v(t._s(t.user.display_name))])]),s("tr",[s("td",[t._v(" "+t._s(t.$t("bank.profile_sdt")))]),s("td",[t._v(t._s(t.user.phone))])]),s("tr",[s("td",[t._v(t._s(t.$t("bank.profile_gmail")))]),s("td",[t._v(t._s(t.user.email))])]),s("tr",[s("td",[t._v(t._s(t.$t("bank.linkgioithieu")))]),s("td",[t._v(t._s(t.href+t.user.ref||"- - - -"))])])])])])]),s("div",{staticClass:"friend-list"},[s("div",{staticClass:"friend-list__title"},[s("div",{staticClass:"title__border"}),s("span",[t._v(" "+t._s(t.$t("bank.profile_bb"))+" ")])]),s("div",{staticClass:"friend-list__link"},[s("div",{staticClass:"link-left"},[s("span",[t._v(" "+t._s(t.$t("bank.profile_gt"))+" ")]),s("a",[t._v(" http://house.friend ")])]),s("div",{staticClass:"link-right"},[s("span",[t._v(" Copy link ")])])]),s("div",{staticClass:"friend-table"},[s("table",[s("thead",[s("tr",[s("th",[t._v(" STT ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_ht"))+" ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_gmail"))+" ")]),s("th",[t._v(" "+t._s(t.$t("support.support_status"))+" ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_hohong"))+" ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_thanhkhoan"))+" ")])])]),s("tbody",t._l(t.list,(function(a,i){return s("tr",{key:i,class:"joined"===a.status?"tr-join":""},[s("td",[t._v(" "+t._s(i)+" ")]),s("td",[t._v(" "+t._s(a.name)+" ")]),s("td",[t._v(" "+t._s(a.gmail)+" ")]),s("td",[s("div",{class:["friend-status","joined"===a.status?"join":""]},[s("span",[t._v(t._s("joined"===a.status?"Tham gia":"Chưa tham gia"))])])]),s("td",[t._v(" 3% ")]),s("td",[t._v(" 0 ")])])})),0)])])])])])],1)},e=[],n=(a("14d9"),a("43b0")),o={name:"Profile",data(){return{data:"",list:[],user:{},href:window.location.origin+"/auth/register?ref="}},components:{Container:n["a"]},computed:{listFriends:()=>[{name:"Nguyễn Văn A",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"joined",amount:"0.3%",cashFlow:"85.000.0"},{name:"Nguyễn Văn B",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"nojoin",amount:"0.3%",cashFlow:"85.000.0"},{name:"Nguyễn Văn C",dob:"22/02/1982",gmail:"tranvanc@gmail.com",service:"Dịch vụ",status:"joined",amount:"0.3%",cashFlow:"85.000.0"},{name:"Nguyễn Văn A",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"joined",amount:"0.3%",cashFlow:"85.000.0"},{name:"Trần Văn A",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"nojoin",amount:"0.3%",cashFlow:"85.000.0"},{name:"Hoàng Văn H",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"joined",amount:"0.3%",cashFlow:"90.000.0"}]},async mounted(){let t=await this.$store.dispatch("Dashboard/getonline");if(this.data=t.data,this.$store.getters["Auth/user"]){this.user=this.$store.getters["Auth/user"];let t=await this.$store.dispatch("Home/getListRef");t.success&&(this.list=t.data)}else this.$store.dispatch("Auth/info").then(t=>{0===t.code&&t.success?(this.user=t.data[0],this.loading=!0):this.$router.push("/auth/login")}).catch(t=>{}).finally(()=>{})}},r=o,c=(a("78b9"),a("2877")),l=Object(c["a"])(r,i,e,!1,null,"1a827beb",null);s["default"]=l.exports},"62d5":function(t,s,a){t.exports=a.p+"assets2/1.0/img/clarity_camera-solid.ea423e34.svg"},"78b9":function(t,s,a){"use strict";a("dc6f")},"859d":function(t,s,a){t.exports=a.p+"assets2/1.0/img/Group 48096048.cd0d1066.svg"},"9cb6":function(t,s,a){t.exports=a.p+"assets2/1.0/img/home2.e63976ff.svg"},d990:function(t,s,a){t.exports=a.p+"assets2/1.0/img/home_icon.a0e18252.svg"},dc6f:function(t,s,a){},ee66:function(t,s,a){t.exports=a.p+"assets2/1.0/img/Group 48096046.5a7269d8.svg"}}]);