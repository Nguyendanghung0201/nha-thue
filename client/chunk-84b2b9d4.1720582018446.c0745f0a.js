(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84b2b9d4"],{"6fa78":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("Layout",{scopedSlots:t._u([{key:"form",fn:function(){return[e("div",{staticClass:"max-w-[480px] text-center mx-auto mt-[20px] md:!mt-[10px] rounded-[16px] md:!border-[1px] md:!px-[48px] px-[32px] md:!py-[16px] py-[16px] md:!bg-[#AFCAFF] flex flex-col"},[e("p",{staticClass:"md:!text-[48px] text-[36px] mb-[0] font-extrabold text-white md:!text-[#212121]"},[t._v(" "+t._s(t.$t("login.register")))]),e("p",{staticClass:"text-white text-[14px] md:!mb-[10px] mb-[16px]"},[t._v(t._s(t.$t("login.register_subtitle")))]),e("div",{staticClass:"flex flex-col gap-[10px]"},[e("Input",{staticClass:"w-full",attrs:{label:t.$t("login.email"),placeholder:"email",required:!0,type:"email","input-value":t.inputField.email,error:t.errorMail},on:{input:t.setEmail},model:{value:t.inputField.email,callback:function(e){t.$set(t.inputField,"email",e)},expression:"inputField.email"}}),e("div",[e("Input",{staticClass:"w-full",attrs:{label:t.$t("login.password"),placeholder:"password",required:!0,type:"password","input-value":t.inputField.password,error:t.errorPass},on:{input:t.setPassword},model:{value:t.inputField.password,callback:function(e){t.$set(t.inputField,"password",e)},expression:"inputField.password"}}),e("p",{staticClass:"text-left text-white text-[12px] mt-[2px]"},[t._v("*"+t._s(t.$t("message.password_format"))+".")])],1),e("Input",{staticClass:"w-full",attrs:{label:t.$t("login.confirm_password"),placeholder:"repassword",required:!0,type:"password","input-value":t.inputField.confirm_password,error:t.errorRePass},on:{input:t.setRePassword},model:{value:t.inputField.confirm_password,callback:function(e){t.$set(t.inputField,"confirm_password",e)},expression:"inputField.confirm_password"}}),e("Input",{staticClass:"w-full",attrs:{label:t.$t("login.display_name"),placeholder:"fullname",required:!0,type:"text","input-value":t.inputField.display_name,error:t.errorName},on:{input:t.setName},model:{value:t.inputField.display_name,callback:function(e){t.$set(t.inputField,"display_name",e)},expression:"inputField.display_name"}}),e("Input",{staticClass:"w-full",attrs:{label:t.$t("login.birthday"),placeholder:"birthday",required:!0,type:"date","input-value":t.inputField.birthday,error:t.errorBirthday},on:{input:t.setBirthday},model:{value:t.inputField.birthday,callback:function(e){t.$set(t.inputField,"birthday",e)},expression:"inputField.birthday"}}),e("Input",{staticClass:"w-full",attrs:{label:t.$t("login.phone"),placeholder:"phone",required:!0,type:"text","input-value":t.inputField.phone,error:t.errorPhone},on:{input:t.setPhone},model:{value:t.inputField.phone,callback:function(e){t.$set(t.inputField,"phone",e)},expression:"inputField.phone"}}),e("div",{staticClass:"w-full text-left"},[e("label",{staticClass:"text-white text-left text-[14px] font-[400px]"},[t._v(" "+t._s(t.$t("login.gender"))+" "),e("span",{staticClass:"text-[14px] font-[400px]",staticStyle:{color:"red"}},[t._v("*")])]),e("div",{staticClass:"flex item-center gap-[24px]"},[e("div",{staticClass:"flex items-center gap-[16px]",on:{click:function(e){t.inputField.gender=1}}},[1==t.inputField.gender?e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"1",y:"1",width:"22",height:"22",rx:"11",stroke:t.isMobile?"#FFF":"url(#paint0_linear_1028_2788)","stroke-width":"2"}}),e("rect",{attrs:{x:"4",y:"4",width:"16",height:"16",rx:"8",fill:t.isMobile?"#FFF":"url(#paint0_linear_1028_2788)"}}),e("defs",[e("linearGradient",{attrs:{id:"paint0_linear_1028_2788",x1:"24",y1:"-1.59905e-06",x2:"-2.37409",y2:"4.51704",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":t.isMobile?"#FFF":"#0193FD"}}),e("stop",{attrs:{offset:"1","stop-color":t.isMobile?"#FFF":"#133DD3"}})],1),e("linearGradient",{attrs:{id:"paint1_linear_1028_2788",x1:"20",y1:"4",x2:"2.41728",y2:"7.01136",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#0193FD"}}),e("stop",{attrs:{offset:"1","stop-color":"#133DD3"}})],1)],1)]):e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"0.5",y:"0.5",width:"23",height:"23",rx:"11.5",fill:"white",stroke:"#B4B5BF"}})]),e("p",{staticClass:"text-white font-[16px]]"},[t._v(" "+t._s(t.$t("login.man"))+" ")])]),e("div",{staticClass:"flex items-center gap-[16px]",on:{click:function(e){t.inputField.gender=2}}},[2==t.inputField.gender?e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"1",y:"1",width:"22",height:"22",rx:"11",stroke:t.isMobile?"#FFF":"url(#paint0_linear_1028_2788)","stroke-width":"2"}}),e("rect",{attrs:{x:"4",y:"4",width:"16",height:"16",rx:"8",fill:t.isMobile?"#FFF":"url(#paint0_linear_1028_2788)"}}),e("defs",[e("linearGradient",{attrs:{id:"paint0_linear_1028_2788",x1:"24",y1:"-1.59905e-06",x2:"-2.37409",y2:"4.51704",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":t.isMobile?"#FFF":"#0193FD"}}),e("stop",{attrs:{offset:"1","stop-color":t.isMobile?"#FFF":"#133DD3"}})],1),e("linearGradient",{attrs:{id:"paint1_linear_1028_2788",x1:"20",y1:"4",x2:"2.41728",y2:"7.01136",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#0193FD"}}),e("stop",{attrs:{offset:"1","stop-color":"#133DD3"}})],1)],1)]):e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"0.5",y:"0.5",width:"23",height:"23",rx:"11.5",fill:"white",stroke:"#B4B5BF"}})]),e("p",{staticClass:"text-white font-[16px]]"},[t._v(" "+t._s(t.$t("login.woman"))+" ")])])])])],1),e("button",{staticClass:"w-full text-center text-white button-login mt-[16px] py-[16px] rounded-[100px]",attrs:{disabled:t.requestLoading||!t.enableSubmit},on:{click:t.handleSubmit}},[t._v(" "+t._s(t.$t("login.register"))+" ")]),e("p",{staticClass:"text-white mt-[16px] text-[16px]"},[t._v(t._s(t.$t("login.redirect_signin"))+" "),e("span",{staticClass:"text-white md:!text-[#0E30A7] cursor-pointer text-[16px] font-semibold",on:{click:t.login}},[t._v(t._s(t.$t("login.login")))])])])]},proxy:!0}])})},r=[],a=(i("14d9"),i("79fa")),l=i("a7c6"),n=i("665b"),o={name:"Login",components:{Layout:l["a"],Input:n["a"]},data(){return{isMobile:!1,ref:"",inputField:{email:null,password:null,confirm_password:null,phone:null,display_name:null,gender:"1",ref:"",birthday:""},requestLoading:!1,showError:!1,errorMail:!1,errorName:!1,errorBirthday:!1,errorRePass:!1,errorPass:!1,errorPhone:!1,minPass:8,router:this.$route.name||"auth.login"}},computed:{enableSubmit(){return""!==this.inputField.email&&""!==this.inputField.password},formError(){return!!(this.errorName||this.errorBirthday||this.errorPass||this.errorRePass||this.errorPhone||this.errorMail)}},methods:{checkMobile(){this.isMobile=window.innerWidth<=768},setEmail(t){this.inputField.email=t},setPassword(t){this.inputField.password=t},setName(t){this.inputField.display_name=t},setBirthday(t){this.inputField.birthday=t},setPhone(t){this.inputField.phone=t},setRePassword(t){this.inputField.confirm_password=t},validatePass(){if(!this.inputField.password||this.inputField.password.length<8)return this.errorPass=!0,void this.showAlert("Password: "+this.$t("message.password_format"))},validateConfirmPass(){if(this.inputField.confirm_password!==this.inputField.password||!this.inputField.confirm_password)return this.errorRePass=!0,void this.showAlert("Password: "+this.$t("message.not_same_password"))},validateEmail(){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t.test(this.inputField.email)||(this.errorMail=!0,this.showAlert("Email: "+this.$t("message.email_check")))},validatePhone(){const t=/^\d+$/;t.test(this.inputField.phone)||(this.errorPhone=!0,this.showAlert("Phone: "+this.$t("message.phone_invalid")))},validateName(){null!==this.inputField.display_name&&""!==this.inputField.display_name.trim()||(this.errorName=!0)},validateBirth(){null!==this.inputField.birthday&&""!==this.inputField.birthday.trim()||(this.errorBirthday=!0)},isValidDate_Day(){if(null===this.inputField.birthday||""===this.inputField.birthday.trim())return void(this.errorBirthday=!0);let t=this.inputField.birthday;var e=/^\d{4}\-\d{1,2}\-\d{1,2}$/;if(e.test(t)){var i=t.split("-"),s=parseInt(i[2],10),r=parseInt(i[1],10),a=parseInt(i[0],10);if(isNaN(s)||isNaN(r)||isNaN(a))this.errorBirthday=!0;else if(s<1||s>31||r<1||r>12)this.errorBirthday=!0;else{if(4==a.toString().length){if(a%4!==0&&a%100===0||a%400!==0){if(2===r&&s>28)return void(this.errorBirthday=!0)}else if(2===r&&s>29)return void(this.errorBirthday=!0);return!0}this.errorBirthday=!0}}else this.errorBirthday=!0},validateAll(){this.errorMail=!1,this.errorPass=!1,this.errorName=!1,this.errorBirthday=!1,this.errorRePass=!1,this.errorPhone=!1,this.validateEmail(),this.validatePass(),this.validateConfirmPass(),this.validateName(),this.isValidDate_Day(),this.validatePhone()},$awnAlert(t=""){let e={labels:{alert:a["a"].t("dialog.error")}};return this.$awn.alert(t,e)},$awnSuccess(t=""){let e={labels:{success:a["a"].t("dialog.successfully")}};return this.$awn.success(t,e)},handleSubmit(){if(this.validateAll(),this.formError)return;const{email:t,password:e,phone:i,display_name:s,gender:r,confirm_password:a,birthday:l}=this.inputField,n={username:t,password:e,display_name:s,re_password:a,phone:i,gender:r,ref:this.ref,birthday:l};this.requestLoading=!0,this.$store.dispatch("Auth/register",n).then(t=>{this.$awnSuccess(this.$t("message.signup_successfully")),this.login()}).catch(t=>{506===t.code?this.$awnAlert(this.$t("message.code_error")):660==t.code?this.$awnAlert(this.$t("message.email_exist")):661==t.code?this.$awnAlert(this.$t("message.phone_exist")):this.$awnAlert(this.$t("message.code_incorrect"))}).finally(t=>{this.requestLoading=!1})},showAlert(t){let e={labels:{alert:a["a"].t("dialog.error")}};return this.$awn.alert(t,e)},login(){this.ref?this.$router.push({name:"auth.login",query:{ref:this.ref}}):this.$router.push({name:"auth.login"})}},mounted(){this.checkMobile(),window.addEventListener("resize",this.checkMobile),this.$store.dispatch("Auth/resetToken").then(),this.$route.query&&this.$route.query.ref&&(this.ref=this.$route.query.ref)},metaInfo(){return{title:a["a"].t("login.login")}}},d=o,p=(i("c52b"),i("2877")),h=Object(p["a"])(d,s,r,!1,null,"2ada6aac",null);e["default"]=h.exports},c52b:function(t,e,i){"use strict";i("c932")},c932:function(t,e,i){}}]);