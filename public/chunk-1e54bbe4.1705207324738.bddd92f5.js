(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e54bbe4"],{"08d4":function(t,s,a){"use strict";a("1d86")},"1d86":function(t,s,a){},"1f69":function(t,s,a){},"26f7":function(t,s,a){t.exports=a.p+"assets2/1.0/img/profile__avatar.cd73509c.png"},"3d12":function(t,s,a){t.exports=a.p+"assets2/1.0/img/evaArrowBackFill0.3492afe2.svg"},"42c8":function(t,s,a){"use strict";a("1f69")},"43b0":function(t,s,a){"use strict";var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"app-container"},[t._t("default")],2)},e=[],n={name:"Container"},o=n,r=(a("08d4"),a("2877")),c=Object(r["a"])(o,i,e,!1,null,"ac9904f4",null);s["a"]=c.exports},"4d25":function(t,s,a){t.exports=a.p+"assets2/1.0/img/home3.aa6c0638.svg"},"4f41":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"profile-home"},[s("img",{staticClass:"home-icon",attrs:{src:a("d990"),alt:""}}),s("img",{staticClass:"home-icon",attrs:{src:a("859d"),alt:""}}),s("img",{staticClass:"home-icon",attrs:{src:a("ee66"),alt:""}}),s("Container",[s("div",{staticClass:"profile-layout"},[s("div",{staticClass:"profile-main"},[s("div",{staticClass:"profile__nav",on:{click:t.backtohome}},[s("img",{staticClass:"profile__nav__back",attrs:{src:a("3d12"),alt:"back"}})]),s("div",{staticClass:"profile__info"},[s("img",{staticClass:"icon-bg",attrs:{src:a("9cb6"),alt:""}}),s("img",{staticClass:"icon-bg",attrs:{src:a("4d25"),alt:""}}),s("div",{staticClass:"profile__info__avatar"},[t.user.avatar?s("img",{attrs:{src:"http://samuraichintai.com/uploads/"+t.user.avatar,alt:""}}):s("img",{attrs:{src:a("26f7"),alt:""}}),s("div",[s("img",{attrs:{src:a("62d5"),alt:""}}),s("input",{staticClass:"camerafront",attrs:{type:"file",accept:"image/*"},on:{change:t.handleFileChangetruoc}})])]),s("div",{staticClass:"profile__info__desc"},[s("table",[s("tr",[s("td",[t._v(t._s(t.$t("bank.profile_ht")))]),s("td",[t._v(t._s(t.user.display_name))])]),s("tr",[s("td",[t._v(t._s(t.$t("bank.birthday")))]),s("td",[t._v(t._s(t.user.birthday))])]),s("tr",[s("td",[t._v(" "+t._s(t.$t("bank.profile_sdt")))]),s("td",[t._v(t._s(t.user.phone))])]),s("tr",[s("td",[t._v(t._s(t.$t("bank.profile_gmail")))]),s("td",[t._v(t._s(t.user.email))])]),s("tr",[s("td",[t._v(t._s(t.$t("bank.linkgioithieu")))]),s("td",[t._v(t._s((t.href+t.user.ref).toLocaleLowerCase()||"- - - -"))])])])]),s("button",{staticClass:"btn btn-dim btn-outline-primary sigout",on:{click:t.sigout}},[s("em",{staticClass:"icon ni ni-signout"})])])]),s("div",{staticClass:"friend-list"},[s("div",{staticClass:"friend-list__title"},[s("div",{staticClass:"title__border"}),s("span",[t._v(" "+t._s(t.$t("bank.profile_bb"))+" ")])]),s("div",{staticClass:"friend-table"},[s("table",[s("thead",[s("tr",[s("th",[t._v(" STT ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_ht"))+" ")]),s("th",[t._v(" "+t._s(t.$t("bank.birthday"))+" ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_gmail"))+" ")])])]),s("tbody",t._l(t.list,(function(a,i){return s("tr",{key:i,class:"joined"===a.status?"tr-join":""},[s("td",[t._v(" "+t._s(i)+" ")]),s("td",[t._v(" "+t._s(a.display_name)+" ")]),s("td",[t._v(" "+t._s(a.birthday)+" ")]),s("td",[t._v(" "+t._s(a.email)+" ")])])})),0)])])]),s("div",{staticClass:"friend-list"},[s("div",{staticClass:"friend-list__title"},[s("div",{staticClass:"title__border"}),s("span",[t._v(" "+t._s(t.$t("bank.profile_hh"))+" ")])]),s("div",{staticClass:"friend-table"},[s("table",[s("thead",[s("tr",[s("th",[t._v(" STT ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_ht"))+" ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_gmail"))+" ")]),s("th",[t._v(" "+t._s(t.$t("bank.profile_hohong"))+" ")]),s("th",[t._v(" "+t._s(t.$t("support.support_status"))+" ")])])]),s("tbody",t._l(t.list_hh,(function(a,i){return s("tr",{key:i,class:"joined"===a.status?"tr-join":""},[s("td",[t._v(" "+t._s(i)+" ")]),s("td",[t._v(" "+t._s(a.user_thue)+" ")]),s("td",[t._v(" "+t._s(a.user_id_thue)+" ")]),s("td",[t._v(" "+t._s(a.money)+" "+t._s(a.tien_type)+" ")]),s("td",[t._v(" "+t._s(a.status)+" ")])])})),0)])])])])])],1)},e=[],n=(a("14d9"),a("43b0")),o=a("cee4");const r=o["a"].create({baseURL:"https://samuraichintai.com",headers:{"Content-Type":"application/json"}});r.interceptors.request.use(t=>{const s=localStorage.getItem("token");if(s){let a=JSON.parse(s);t.headers.Authorization="Bearer "+a.value}return t},t=>Promise.reject(t));var c={async uploadFile(t){const s=await r.post("/api/upload",t,{headers:{"Content-Type":"multipart/form-data"}});return s.data}},l={name:"Profile",data(){return{data:"",list:[],list_hh:[],user:{},href:window.location.origin+"/auth/register?ref="}},methods:{backtohome(){this.$router.go(-1)},sigout(){this.$router.push("/auth/login")},changeavt(){},async handleFileChangetruoc(t){this.$confirm("Bạn muốn thay đổi ảnh đại diện?","Vui lòng xác nhận",{icon:"warning",confirmButtonColor:"#1ee0ac",cancelButtonColor:"#d33"}).then(async({value:s})=>{if(s){if(t.target.files[0].size>3e6)return Swal.fire({title:"Thông báo",text:"File ảnh quá lớn",icon:"info",timer:2e3,showCancelButton:!1,showConfirmButton:!1});const s=new FormData;s.append("file",t.target.files[0]);let a=await c.uploadFile(s);a.data&&a.status&&this.$store.dispatch("Auth/info").then(t=>{0===t.code&&t.success?(this.user=t.data[0],this.loading=!0):this.$router.push("/auth/login")}).catch(t=>{this.$router.push("/auth/login")}).finally(()=>{})}})}},components:{Container:n["a"]},computed:{listFriends:()=>[{name:"Nguyễn Văn A",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"joined",amount:"0.3%",cashFlow:"85.000.0"},{name:"Nguyễn Văn B",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"nojoin",amount:"0.3%",cashFlow:"85.000.0"},{name:"Nguyễn Văn C",dob:"22/02/1982",gmail:"tranvanc@gmail.com",service:"Dịch vụ",status:"joined",amount:"0.3%",cashFlow:"85.000.0"},{name:"Nguyễn Văn A",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"joined",amount:"0.3%",cashFlow:"85.000.0"},{name:"Trần Văn A",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"nojoin",amount:"0.3%",cashFlow:"85.000.0"},{name:"Hoàng Văn H",dob:"22/02/1999",gmail:"nguyenvana@gmail.com",service:"Dịch vụ",status:"joined",amount:"0.3%",cashFlow:"90.000.0"}]},async mounted(){let t=await this.$store.dispatch("Dashboard/getonline");if(this.data=t.data,this.$store.getters["Auth/user"]){this.user=this.$store.getters["Auth/user"];let t=await this.$store.dispatch("Home/getListRef");t.success&&(this.list=t.data,this.list_hh=t.hh)}else this.$store.dispatch("Auth/info").then(async t=>{if(0===t.code&&t.success){this.user=t.data[0],this.loading=!0;let s=await this.$store.dispatch("Home/getListRef");s.success&&(this.list=s.data,this.list_hh=s.hh)}else this.$router.push("/auth/login")}).catch(t=>{this.$router.push("/auth/login")}).finally(()=>{})}},u=l,h=(a("42c8"),a("2877")),d=Object(h["a"])(u,i,e,!1,null,"91f8f54a",null);s["default"]=d.exports},"62d5":function(t,s,a){t.exports=a.p+"assets2/1.0/img/clarity_camera-solid.ea423e34.svg"},"859d":function(t,s,a){t.exports=a.p+"assets2/1.0/img/Group 48096048.cd0d1066.svg"},"9cb6":function(t,s,a){t.exports=a.p+"assets2/1.0/img/home2.e63976ff.svg"},d990:function(t,s,a){t.exports=a.p+"assets2/1.0/img/home_icon.a0e18252.svg"},ee66:function(t,s,a){t.exports=a.p+"assets2/1.0/img/Group 48096046.5a7269d8.svg"}}]);