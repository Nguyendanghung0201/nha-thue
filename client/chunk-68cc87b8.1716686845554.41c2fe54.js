(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68cc87b8"],{"490d":function(t,e,s){},a135:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("Layout",{scopedSlots:t._u([{key:"form",fn:function(){return[e("div",{staticClass:"max-w-[480px] text-center mx-auto mt-[40px] rounded-[16px] md:!border-[1px] md:!px-[48px] px-[32px] md:!py-[60px] py-[40px] md:!bg-[#AFCAFF] flex flex-col"},[e("p",{staticClass:"md:!text-[48px] text-[36px] md:!mb-[20px] mb-[0] font-extrabold text-white md:!text-[#212121]"},[t._v(t._s(t.$t("login.login")))]),e("p",{staticClass:"text-white text-[14px] md:!mb-[32px] mb-[16px]"},[t._v(t._s(t.$t("login.login_subtitle")))]),e("Input",{staticClass:"w-full mb-[16px]",attrs:{label:t.$t("login.email"),placeholder:"email",required:!0,type:"email","input-value":t.inputField.email,error:t.errorMail},on:{input:t.setEmail},model:{value:t.inputField.email,callback:function(e){t.$set(t.inputField,"email",e)},expression:"inputField.email"}}),e("Input",{staticClass:"w-full",attrs:{label:t.$t("login.password"),placeholder:"password",required:!0,type:"password","input-value":t.inputField.password,error:t.errorPass},on:{input:t.setPassword},model:{value:t.inputField.password,callback:function(e){t.$set(t.inputField,"password",e)},expression:"inputField.password"}}),e("button",{staticClass:"w-full text-center text-white button-login mt-[40px] md:!mt-[32px] py-[16px] rounded-[100px]",attrs:{disabled:t.requestLoading||!t.enableSubmit},on:{click:t.handleSubmit}},[t._v(" "+t._s(t.$t("login.login"))+" ")]),e("p",{staticClass:"text-white mt-[20px] text-[16px]"},[t._v(t._s(t.$t("login.redirect_signup"))+" "),e("span",{staticClass:"text-white md:!text-[#0E30A7] cursor-pointer text-[16px] font-semibold",on:{click:t.register}},[t._v(t._s(t.$t("login.register")))])])],1)]},proxy:!0}])})},r=[],a=(s("14d9"),s("79fa")),o=s("a7c6"),l=s("665b"),n={name:"Login",components:{Layout:o["a"],Input:l["a"]},data(){return{inputField:{email:"",password:""},requestLoading:!1,errorMail:!1,errorPass:!1,minPass:8,router:this.$route.name||"auth.login"}},computed:{enableSubmit(){return""!==this.inputField.email&&""!==this.inputField.password},errorForm(){return!(!this.errorMail&&!this.errorPass)}},methods:{setEmail(t){this.inputField.email=t},setPassword(t){this.inputField.password=t},validateErrorDataField(){this.errorMail=!1,this.errorPass=!1,this.inputField.password.length<8&&(this.errorPass=!0,this.showAlert("Password: "+this.$t("message.password_format")))},handleSubmit(){if(console.log(1111),this.validateErrorDataField(),this.errorForm)return void(this.requestLoading=!1);this.requestLoading=!0;const{email:t,password:e}=this.inputField,s={password:e,username:t};this.$store.dispatch("Auth/login",s).then(t=>{this.$router.replace(this.$route.query.redirect?this.$route.query.redirect:{name:"dashboard.index"}),this.requestLoading=!1}).catch(t=>{console.log("error: "+t.message),this.showAlert(this.$t("message.login_failed")),this.resetField(),this.requestLoading=!1})},resetField(){this.inputField.password="",this.inputField.email=""},showAlert(t){let e={labels:{alert:a["a"].t("dialog.error")}};return this.$awn.alert(t,e)},register(){this.$router.push({name:"auth.register"})}},mounted(){this.$store.dispatch("Auth/resetToken").then()},metaInfo(){return{title:a["a"].t("login.login")}}},d=n,p=(s("d561"),s("2877")),u=Object(p["a"])(d,i,r,!1,null,"384c68ed",null);e["default"]=u.exports},d561:function(t,e,s){"use strict";s("490d")}}]);