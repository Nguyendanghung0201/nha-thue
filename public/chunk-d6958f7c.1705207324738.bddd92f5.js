(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6958f7c"],{"00d8":function(t,s){(function(){var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o={rotl:function(t,s){return t<<s|t>>>32-s},rotr:function(t,s){return t<<32-s|t>>>s},endian:function(t){if(t.constructor==Number)return 16711935&o.rotl(t,8)|4278255360&o.rotl(t,24);for(var s=0;s<t.length;s++)t[s]=o.endian(t[s]);return t},randomBytes:function(t){for(var s=[];t>0;t--)s.push(Math.floor(256*Math.random()));return s},bytesToWords:function(t){for(var s=[],o=0,e=0;o<t.length;o++,e+=8)s[e>>>5]|=t[o]<<24-e%32;return s},wordsToBytes:function(t){for(var s=[],o=0;o<32*t.length;o+=8)s.push(t[o>>>5]>>>24-o%32&255);return s},bytesToHex:function(t){for(var s=[],o=0;o<t.length;o++)s.push((t[o]>>>4).toString(16)),s.push((15&t[o]).toString(16));return s.join("")},hexToBytes:function(t){for(var s=[],o=0;o<t.length;o+=2)s.push(parseInt(t.substr(o,2),16));return s},bytesToBase64:function(t){for(var o=[],e=0;e<t.length;e+=3)for(var r=t[e]<<16|t[e+1]<<8|t[e+2],a=0;a<4;a++)8*e+6*a<=8*t.length?o.push(s.charAt(r>>>6*(3-a)&63)):o.push("=");return o.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var o=[],e=0,r=0;e<t.length;r=++e%4)0!=r&&o.push((s.indexOf(t.charAt(e-1))&Math.pow(2,-2*r+8)-1)<<2*r|s.indexOf(t.charAt(e))>>>6-2*r);return o}};t.exports=o})()},"044b":function(t,s){function o(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function e(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&o(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(o(t)||e(t)||!!t._isBuffer)}},"0c85":function(t,s,o){"use strict";o("624c")},1649:function(t,s,o){"use strict";o("58b4")},"17a2":function(t,s,o){"use strict";o("6dc9")},"272f":function(t,s,o){},"275f":function(t,s,o){"use strict";o("e812")},"2c47":function(t,s,o){},"58b4":function(t,s,o){},"5a575":function(t,s,o){},"5ba1":function(t,s,o){"use strict";o("97d3")},"624c":function(t,s,o){},6574:function(t,s,o){},6821:function(t,s,o){(function(){var s=o("00d8"),e=o("9a63").utf8,r=o("044b"),a=o("9a63").bin,i=function(t,o){t.constructor==String?t=o&&"binary"===o.encoding?a.stringToBytes(t):e.stringToBytes(t):r(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var n=s.bytesToWords(t),l=8*t.length,c=1732584193,m=-271733879,d=-1732584194,f=271733878,u=0;u<n.length;u++)n[u]=16711935&(n[u]<<8|n[u]>>>24)|4278255360&(n[u]<<24|n[u]>>>8);n[l>>>5]|=128<<l%32,n[14+(l+64>>>9<<4)]=l;var h=i._ff,p=i._gg,g=i._hh,b=i._ii;for(u=0;u<n.length;u+=16){var w=c,v=m,$=d,_=f;c=h(c,m,d,f,n[u+0],7,-680876936),f=h(f,c,m,d,n[u+1],12,-389564586),d=h(d,f,c,m,n[u+2],17,606105819),m=h(m,d,f,c,n[u+3],22,-1044525330),c=h(c,m,d,f,n[u+4],7,-176418897),f=h(f,c,m,d,n[u+5],12,1200080426),d=h(d,f,c,m,n[u+6],17,-1473231341),m=h(m,d,f,c,n[u+7],22,-45705983),c=h(c,m,d,f,n[u+8],7,1770035416),f=h(f,c,m,d,n[u+9],12,-1958414417),d=h(d,f,c,m,n[u+10],17,-42063),m=h(m,d,f,c,n[u+11],22,-1990404162),c=h(c,m,d,f,n[u+12],7,1804603682),f=h(f,c,m,d,n[u+13],12,-40341101),d=h(d,f,c,m,n[u+14],17,-1502002290),m=h(m,d,f,c,n[u+15],22,1236535329),c=p(c,m,d,f,n[u+1],5,-165796510),f=p(f,c,m,d,n[u+6],9,-1069501632),d=p(d,f,c,m,n[u+11],14,643717713),m=p(m,d,f,c,n[u+0],20,-373897302),c=p(c,m,d,f,n[u+5],5,-701558691),f=p(f,c,m,d,n[u+10],9,38016083),d=p(d,f,c,m,n[u+15],14,-660478335),m=p(m,d,f,c,n[u+4],20,-405537848),c=p(c,m,d,f,n[u+9],5,568446438),f=p(f,c,m,d,n[u+14],9,-1019803690),d=p(d,f,c,m,n[u+3],14,-187363961),m=p(m,d,f,c,n[u+8],20,1163531501),c=p(c,m,d,f,n[u+13],5,-1444681467),f=p(f,c,m,d,n[u+2],9,-51403784),d=p(d,f,c,m,n[u+7],14,1735328473),m=p(m,d,f,c,n[u+12],20,-1926607734),c=g(c,m,d,f,n[u+5],4,-378558),f=g(f,c,m,d,n[u+8],11,-2022574463),d=g(d,f,c,m,n[u+11],16,1839030562),m=g(m,d,f,c,n[u+14],23,-35309556),c=g(c,m,d,f,n[u+1],4,-1530992060),f=g(f,c,m,d,n[u+4],11,1272893353),d=g(d,f,c,m,n[u+7],16,-155497632),m=g(m,d,f,c,n[u+10],23,-1094730640),c=g(c,m,d,f,n[u+13],4,681279174),f=g(f,c,m,d,n[u+0],11,-358537222),d=g(d,f,c,m,n[u+3],16,-722521979),m=g(m,d,f,c,n[u+6],23,76029189),c=g(c,m,d,f,n[u+9],4,-640364487),f=g(f,c,m,d,n[u+12],11,-421815835),d=g(d,f,c,m,n[u+15],16,530742520),m=g(m,d,f,c,n[u+2],23,-995338651),c=b(c,m,d,f,n[u+0],6,-198630844),f=b(f,c,m,d,n[u+7],10,1126891415),d=b(d,f,c,m,n[u+14],15,-1416354905),m=b(m,d,f,c,n[u+5],21,-57434055),c=b(c,m,d,f,n[u+12],6,1700485571),f=b(f,c,m,d,n[u+3],10,-1894986606),d=b(d,f,c,m,n[u+10],15,-1051523),m=b(m,d,f,c,n[u+1],21,-2054922799),c=b(c,m,d,f,n[u+8],6,1873313359),f=b(f,c,m,d,n[u+15],10,-30611744),d=b(d,f,c,m,n[u+6],15,-1560198380),m=b(m,d,f,c,n[u+13],21,1309151649),c=b(c,m,d,f,n[u+4],6,-145523070),f=b(f,c,m,d,n[u+11],10,-1120210379),d=b(d,f,c,m,n[u+2],15,718787259),m=b(m,d,f,c,n[u+9],21,-343485551),c=c+w>>>0,m=m+v>>>0,d=d+$>>>0,f=f+_>>>0}return s.endian([c,m,d,f])};i._ff=function(t,s,o,e,r,a,i){var n=t+(s&o|~s&e)+(r>>>0)+i;return(n<<a|n>>>32-a)+s},i._gg=function(t,s,o,e,r,a,i){var n=t+(s&e|o&~e)+(r>>>0)+i;return(n<<a|n>>>32-a)+s},i._hh=function(t,s,o,e,r,a,i){var n=t+(s^o^e)+(r>>>0)+i;return(n<<a|n>>>32-a)+s},i._ii=function(t,s,o,e,r,a,i){var n=t+(o^(s|~e))+(r>>>0)+i;return(n<<a|n>>>32-a)+s},i._blocksize=16,i._digestsize=16,t.exports=function(t,o){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var e=s.wordsToBytes(i(t,o));return o&&o.asBytes?e:o&&o.asString?a.bytesToString(e):s.bytesToHex(e)}})()},"6dc9":function(t,s,o){},"77e4":function(t,s,o){"use strict";o("8878")},8878:function(t,s,o){},"97d3":function(t,s,o){},"9a63":function(t,s){var o={utf8:{stringToBytes:function(t){return o.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(o.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var s=[],o=0;o<t.length;o++)s.push(255&t.charCodeAt(o));return s},bytesToString:function(t){for(var s=[],o=0;o<t.length;o++)s.push(String.fromCharCode(t[o]));return s.join("")}}};t.exports=o},"9a75":function(t,s,o){"use strict";o("b1e9")},"9d4e":function(t,s,o){"use strict";o("2c47")},a135:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"nk-split nk-split-page nk-split-md flex-direction-reverse"},[t.showForgotPasswordForm||t.showResetPasswordForm||t.showRegister||t.showConfirm?t._e():s("login-form",{on:{forgotPassword:t.handleForgot,register:t.handleRegister}}),t.showRegister?s("register",{on:{backLogin:t.handleBackLogin,confirm:t.handleConfirm}}):t._e(),s("div",{staticClass:"nk-split-content nk-split-stretch bg-abstract"})],1)])},r=[],a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white"},[s("div",{staticClass:"nk-block nk-block-middle nk-auth-body"},[s("div",{staticClass:"nk-block-head"},[s("div",{staticClass:"nk-block-head-content"},[s("h5",{staticClass:"nk-block-title"},[t._v(t._s(t.$t("login.login")))]),s("div",{staticClass:"nk-block-des"},[s("p",[t._v(t._s(t.$t("login.login_subtitle")))])])])]),t.showError?s("div",{staticClass:"alert alert-danger d-flex align-center"},[s("em",{staticClass:"icon ni ni-cross-circle fs-18px mr-2"}),t._v(" "+t._s(t.$t("message.login_failed_2"))+" ")]):t._e(),s("form",{on:{submit:function(s){return s.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[s("b-form-group",{attrs:{"invalid-feedback":t.showHtmlError("email","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("email","form",!0))+" ")])]},proxy:!0}])},[s("b-form-input",{ref:"autofocus",class:{"is-invalid":t.showHtmlError("email","form")},attrs:{placeholder:t.getLabel("email","form"),autocomplete:"off",type:"email",counter:t.getInputMaxLength("email","form"),size:"lg"},on:{keyup:t.resetError},model:{value:t.$v.form.email.$model,callback:function(s){t.$set(t.$v.form.email,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.email.$model"}})],1),s("b-form-group",{staticClass:"mb-2",attrs:{"invalid-feedback":t.showHtmlError("password","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("password","form",!0))+" ")]),s("p",{staticClass:"link link-primary link-sm cursor-pointer",on:{click:t.forgot}},[t._v(" "+t._s(t.$t("login.forgot_password"))+"? ")])]},proxy:!0}])},[s("div",{staticClass:"form-control-wrap"},[s("span",{staticClass:"form-icon form-icon-right passcode-switch cursor",on:{click:function(s){t.showPassword=!t.showPassword}}},[t.showPassword?s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye-off"}):s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye"})]),s("b-form-input",{class:{"is-invalid":t.showHtmlError("password","form")},attrs:{type:t.showPassword?"text":"password",placeholder:t.getLabel("password","form"),counter:t.getInputMaxLength("password","form"),size:"lg"},on:{keyup:t.resetError},model:{value:t.$v.form.password.$model,callback:function(s){t.$set(t.$v.form.password,"$model",s)},expression:"$v.form.password.$model"}})],1)]),s("div",{staticClass:"form-group"},[s("b-button",{attrs:{size:"lg",variant:"primary",block:"",type:"submit",disabled:t.requestLoading||t.$v.form.$error||!t.form.email||!t.form.password}},[t.requestLoading?s("span",{staticClass:"spinner-border spinner-border-sm mr-2",attrs:{role:"status"}}):t._e(),s("span",{staticClass:"visually-hidden"},[t._v("Loading...")]),t._v(" "+t._s(t.$t("login.login"))+" ")])],1)],1),s("div",{staticClass:"form-note-s2 pt-4"},[s("p",[t._v(" "+t._s(t.$t("login.redirect_signup"))+" "),s("span",{staticClass:"link link-primary fs-14px cursor-pointer",on:{click:t.register}},[t._v(t._s(t.$t("login.register")))])])])])])},i=[],n=(o("14d9"),o("6821")),l=o.n(n);const{validators:c}=window,{email:m,required:d,phone:f,isTrue:u,$label:h,maxLength:p,minLength:g,minValue:b}=c;var w={name:"LoginForm",validations(){const t={password:{required:d,$label:h(this.$t("login.password")),minLength:g(6),maxLength:p(20)},email:{required:d,email:m,$label:h(this.$t("login.email")),maxLength:p(50)}};return{form:t}},data(){return{form:{email:null,password:null},showPassword:!1,requestLoading:!1,showError:!1}},mounted(){const t=this.$recaptchaInstance;t&&t.showBadge()},beforeRouteLeave(){const t=this.$recaptchaInstance;t&&t.hideBadge()},methods:{handleSubmit(){this.$v.form.$touch();const t=this.$v.form.$error;if(this.showError=!1,!t){const{password:t,email:s}=this.form;let o={password:t,username:s};this.requestLoading=!0,this.$store.dispatch("Auth/login",o).then(t=>{this.$router.replace(this.$route.query.redirect?this.$route.query.redirect:{name:"dashboard.index"})}).catch(t=>{this.showError=!0,this.resetForm(),this.$awnAlert(this.$t("message.login_failed")),this.requestLoading=!1})}},forgot(){this.$emit("forgotPassword",!0),this.$router.push({name:"auth.forgot"})},register(){this.$emit("register",!0),this.$router.push({name:"auth.register"})},resetForm(){this.form.password=null,this.$v.$reset()},resetError(){this.showError=!1}}},v=w,$=(o("9a75"),o("f612"),o("2877")),_=Object($["a"])(v,a,i,!1,null,"74bcc53f",null),k=_.exports,y=function(){var t=this,s=t._self._c;return s("div",{staticClass:"login-wrapper px-4 border-radius-10"},[s("div",{staticClass:"nk-block nk-block-middle nk-auth-body"},[s("div",{staticClass:"nk-block-head"},[s("div",{staticClass:"nk-block-head-content text-center"},[s("h5",{staticClass:"nk-block-title fs-22px"},[t._v(t._s(t.$t("login.forgot_password")))]),s("div",{staticClass:"nk-block-des"},[s("p",[t._v(t._s(t.$t("login.forgot_message")))])])])]),s("forgot-form",{on:{backLogin:t.handleBackLogin,resetPassword:t.handleReset}})],1),t._m(0)])},C=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"nk-block nk-auth-footer text-center"},[s("div",{staticClass:"mt-3"},[s("p",[t._v("© 2022 ePayGate Agent. ")])])])}],L=function(){var t=this,s=t._self._c;return s("b-form",{attrs:{autocomplete:"off"},on:{submit:function(t){t.preventDefault()}}},[s("b-form-group",{attrs:{"invalid-feedback":t.showHtmlError("email","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("email","form",!0))+" ")])]},proxy:!0}])},[s("b-form-input",{ref:"autofocus",class:{"is-invalid":t.showHtmlError("email","form")},attrs:{placeholder:t.getLabel("email","form"),autocomplete:"off",type:"email",counter:t.getInputMaxLength("email","form"),size:"lg"},model:{value:t.$v.form.email.$model,callback:function(s){t.$set(t.$v.form.email,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.email.$model"}})],1),s("div",{staticClass:"form-group"},[s("b-button",{attrs:{size:"lg",variant:"primary",block:"",type:"submit",disabled:t.requestLoading||t.$v.form.$error||!t.form.email},on:{click:t.handleSubmit}},[t.requestLoading?s("span",{staticClass:"spinner-border spinner-border-sm mr-2",attrs:{role:"status"}}):t._e(),s("span",{staticClass:"visually-hidden"},[t._v("Loading...")]),t._v(" "+t._s(t.$t("login.get_verification_code"))+" ")])],1),s("p",{staticClass:"link link-primary fs-14px cursor-pointer w-100 d-flex justify-content-end",on:{click:t.backLogin}},[t._v(" "+t._s(t.$t("login.return_login"))+" ")])],1)},x=[];const{validators:F}=window,{email:P,required:q,phone:E,$label:R,maxLength:S}=F;var B={name:"ForgotForm",validations(){const t={email:{required:q,email:P,$label:R(this.$t("login.email")),maxLength:S(50)}};return{form:t}},data(){return{form:{email:null},requestLoading:!1}},methods:{handleSubmit(){this.$v.form.$touch();const t=this.$v.form.$error;if(!t){this.requestLoading=!0;let t={email:this.form.email};this.$store.dispatch("Auth/checkEmail",t).then(s=>{this.$store.dispatch("Auth/confirm",t).then(t=>{this.$awnSuccess(this.$t("message.email_check")),this.$emit("resetPassword",!0)}).catch(t=>{this.setFormError(t),this.$emit("backLogin",!1),this.requestLoading=!1})}).catch(t=>{this.setFormError(t),this.$emit("backLogin",!1),this.requestLoading=!1})}},backLogin(){this.$emit("backLogin",!1),this.$router.push({name:"auth.login"})}}},A=B,H=(o("1649"),Object($["a"])(A,L,x,!1,null,"74e64e55",null)),I=H.exports,T={name:"Forgot",components:{ForgotForm:I},methods:{handleBackLogin(t){this.$emit("backLogin",t)},handleReset(t){this.$emit("resetPassword",t)}}},z=T,j=Object($["a"])(z,y,C,!1,null,null,null),O=j.exports,M=function(){var t=this,s=t._self._c;return s("div",{staticClass:"login-wrapper px-4 border-radius-10"},[s("div",{staticClass:"nk-block nk-block-middle nk-auth-body me-0"},[s("div",{staticClass:"nk-block-head"},[s("div",{staticClass:"nk-block-head-content text-center"},[s("h5",{staticClass:"nk-block-title fs-22px"},[t._v(t._s(t.$t("login.reset_password")))]),s("div",{staticClass:"nk-block-des"},[s("p",[t._v(t._s(t.$t("login.remind_message")))])])])]),s("reset-form",{on:{backLogin:t.handleBackLogin,backForgot:t.handleBackForgot}})],1),t._m(0)])},D=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"nk-block nk-auth-footer text-center"},[s("div",{staticClass:"mt-3"},[s("p",[t._v("© 2022 ePayGate Agent. ")])])])}],N=function(){var t=this,s=t._self._c;return s("b-form",{attrs:{"aria-autocomplete":"off"},on:{submit:function(s){return s.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[s("b-form-group",{attrs:{"label-class":"form-label-group","invalid-feedback":t.showHtmlError("code","form")},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("code","form",!0))+" ")])]},proxy:!0}])},[s("div",{staticClass:"form-control-wrap"},[s("b-form-input",{class:{"is-invalid":t.showHtmlError("code","form")},attrs:{id:"code-input",type:"number",autocomplete:"off",placeholder:t.getLabel("code","form"),size:"lg"},model:{value:t.$v.form.code.$model,callback:function(s){t.$set(t.$v.form.code,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.code.$model"}})],1)]),s("b-form-group",{attrs:{"label-class":"form-label-group","invalid-feedback":t.showHtmlError("password","form")},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("password","form",!0))+" ")])]},proxy:!0}])},[s("div",{staticClass:"form-control-wrap"},[s("span",{staticClass:"form-icon form-icon-right passcode-switch cursor",on:{click:function(s){t.showPassword=!t.showPassword}}},[t.showPassword?s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye-off"}):s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye"})]),s("b-form-input",{class:{"is-invalid":t.showHtmlError("password","form")},attrs:{type:t.showPassword?"text":"password",autocomplete:"off",placeholder:t.getLabel("password","form"),size:"lg"},model:{value:t.$v.form.password.$model,callback:function(s){t.$set(t.$v.form.password,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.password.$model"}})],1),s("span",{staticClass:"fs-12px mt-2",class:{"d-none":t.showHtmlError("password","form"),"d-none":null!==t.form.password}},[t._v("* "+t._s(t.$t("message.password_format")))])]),s("b-form-group",{staticClass:"mb-3",attrs:{"invalid-feedback":t.showHtmlError("new_password","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("new_password","form",!0))+" ")])]},proxy:!0}])},[s("div",{staticClass:"form-control-wrap"},[s("span",{staticClass:"form-icon form-icon-right passcode-switch cursor",on:{click:function(s){t.showConfirmPassword=!t.showConfirmPassword}}},[t.showPassword?s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye-off"}):s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye"})]),s("b-form-input",{class:{"is-invalid":t.showHtmlError("new_password","form")},attrs:{type:t.showPassword?"text":"password",autocomplete:"off",placeholder:t.getLabel("new_password","form"),size:"lg"},model:{value:t.$v.form.new_password.$model,callback:function(s){t.$set(t.$v.form.new_password,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.new_password.$model"}})],1)]),s("p",{staticClass:"link link-primary fs-14px cursor-pointer w-100 d-flex justify-content-end mb-4",on:{click:t.backLogin}},[t._v(" "+t._s(t.$t("login.return_login"))+" ")]),s("div",{staticClass:"form-group"},[s("b-button",{attrs:{size:"lg",variant:"primary",block:"",type:"submit",disabled:t.requestLoading||t.$v.form.$error||!t.form.code||!t.form.password||!t.form.new_password}},[t.requestLoading?s("span",{staticClass:"spinner-border spinner-border-sm mr-2",attrs:{role:"status"}}):t._e(),s("span",{staticClass:"visually-hidden"},[t._v("Loading...")]),t._v(" "+t._s(t.$t("login.reset_password"))+" ")])],1)],1)},V=[];const{validators:G}=window,{email:J,required:U,phone:W,$label:Z,sameAs:K,minLength:Q,maxLength:X,numeric:Y,password:tt}=G;var st={name:"LoginForm",validations(){const t={code:{required:U,numeric:Y,minLength:Q(6),$label:Z(this.$t("utilities.verification_code"))},password:{required:U,password:tt,$label:Z(this.$t("utilities.new_password")),minLength:Q(8),maxLength:X(32)},new_password:{required:U,sameAs:K("password"),$label:Z(this.$t("utilities.confirm_password")),sameLabel:Z(this.$t("utilities.new_password")),minLength:Q(8),maxLength:X(32)}};return{form:t}},data(){return{form:{code:null,new_password:null,password:null},showPassword:!1,showConfirmPassword:!1,requestLoading:!1}},mounted(){this.resetForm()},methods:{handleSubmit(){this.$v.form.$touch();const t=this.$v.form.$error;if(!t){this.requestLoading=!0;const{code:t,new_password:s,password:o}=this.form;let e={code:t,password:l()(l()(o)),confirm_password:l()(l()(s))};this.$store.dispatch("Auth/forgot",e).then(t=>{this.$awnSuccess(this.$t("message.change_password_successfully")),this.$emit("backLogin",!1)})}},backLogin(){this.$emit("backLogin",!1)},resetForm(){this.form.code=null,this.form.new_password=null,this.form.password=null}}},ot=st,et=(o("17a2"),o("5ba1"),Object($["a"])(ot,N,V,!1,null,"7774c0fa",null)),rt=et.exports,at={name:"Reset",components:{ResetForm:rt},methods:{handleBackLogin(t){this.$emit("backLogin",t)},handleBackForgot(t){this.$emit("backForgot",t)}}},it=at,nt=(o("77e4"),Object($["a"])(it,M,D,!1,null,"65ee057b",null)),lt=nt.exports,ct=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white"},[s("div",{staticClass:"nk-block nk-block-middle nk-auth-body"},[s("div",{staticClass:"nk-block-head"},[s("div",{staticClass:"nk-block-head-content text-center"},[s("h5",{staticClass:"nk-block-title fs-22px"},[t._v(t._s(t.$t("login.register")))]),s("div",{staticClass:"nk-block-des"},[s("p",[t._v(t._s(t.$t("login.register_subtitle")))])])])]),s("register-form",{on:{backLogin:t.handleBackLogin,confirm:t.handleConfirm}})],1)])},mt=[],dt=function(){var t=this,s=t._self._c;return s("form",{attrs:{autocomplete:"off"},on:{submit:function(t){t.preventDefault()}}},[s("b-form-group",{attrs:{"invalid-feedback":t.showHtmlError("email","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("email","form",!0))+" ")])]},proxy:!0}])},[s("b-form-input",{ref:"autofocus",class:{"is-invalid":t.showHtmlError("email","form")},attrs:{placeholder:t.getLabel("email","form"),autocomplete:"off",type:"email",counter:t.getInputMaxLength("email","form"),size:"lg"},model:{value:t.$v.form.email.$model,callback:function(s){t.$set(t.$v.form.email,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.email.$model"}})],1),s("b-form-group",{staticClass:"mb-2",attrs:{"invalid-feedback":t.showHtmlError("password","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("password","form",!0))+" ")])]},proxy:!0}])},[s("div",{staticClass:"form-control-wrap"},[s("span",{staticClass:"form-icon form-icon-right passcode-switch cursor",on:{click:function(s){t.showPassword=!t.showPassword}}},[t.showPassword?s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye-off"}):s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye"})]),s("b-form-input",{class:{"is-invalid":t.showHtmlError("password","form")},attrs:{type:t.showPassword?"text":"password",autocomplete:"off",placeholder:t.getLabel("password","form"),counter:t.getInputMaxLength("password","form"),size:"lg"},model:{value:t.$v.form.password.$model,callback:function(s){t.$set(t.$v.form.password,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.password.$model"}})],1),s("span",{staticClass:"fs-12px mt-2"},[t._v("* "+t._s(t.$t("message.password_format")))])]),s("b-form-group",{staticClass:"mb-2",attrs:{"invalid-feedback":t.showHtmlError("confirm_password","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("confirm_password","form",!0))+" ")])]},proxy:!0}])},[s("div",{staticClass:"form-control-wrap"},[s("span",{staticClass:"form-icon form-icon-right passcode-switch cursor",on:{click:function(s){t.showConfirmPassword=!t.showConfirmPassword}}},[t.showConfirmPassword?s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye-off"}):s("em",{staticClass:"passcode-icon icon-show icon ni ni-eye"})]),s("b-form-input",{class:{"is-invalid":t.showHtmlError("confirm_password","form")},attrs:{type:t.showConfirmPassword?"text":"password",autocomplete:"off",placeholder:t.getLabel("confirm_password","form"),counter:t.getInputMaxLength("confirm_password","form"),size:"lg"},model:{value:t.$v.form.confirm_password.$model,callback:function(s){t.$set(t.$v.form.confirm_password,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.confirm_password.$model"}})],1)]),s("b-form-group",{attrs:{"invalid-feedback":t.showHtmlError("display_name","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("display_name","form",!0))+" ")])]},proxy:!0}])},[s("b-form-input",{ref:"autofocus",class:{"is-invalid":t.showHtmlError("display_name","form")},attrs:{placeholder:t.getLabel("display_name","form"),autocomplete:"off",type:"email",counter:t.getInputMaxLength("display_name","form"),size:"lg"},model:{value:t.$v.form.display_name.$model,callback:function(s){t.$set(t.$v.form.display_name,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.display_name.$model"}})],1),s("b-form-group",{attrs:{"invalid-feedback":t.showHtmlError("display_name","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("birthday","form",!0))+" ")])]},proxy:!0}])},[s("b-form-input",{ref:"autofocus",class:{"is-invalid":t.showHtmlError("birthday","form")},attrs:{placeholder:"dd/mm/yyyy",autocomplete:"off",type:"text",counter:t.getInputMaxLength("birthday","form"),size:"lg"},model:{value:t.$v.form.birthday.$model,callback:function(s){t.$set(t.$v.form.birthday,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.birthday.$model"}})],1),s("b-form-group",{staticClass:"flex-grow-1 mb-2",attrs:{"invalid-feedback":t.showHtmlError("phone","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("phone","form",!0))+" ")])]},proxy:!0}])},[s("div",{staticClass:"form-control-wrap"},[s("b-form-input",{class:{"is-invalid":t.showHtmlError("phone","form")},attrs:{type:"tel",autocomplete:"off",placeholder:t.getLabel("phone","form"),size:"lg"},model:{value:t.$v.form.phone.$model,callback:function(s){t.$set(t.$v.form.phone,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.phone.$model"}})],1),t.isMaxPhone&&!t.showHtmlError("phone","form")?s("span",{staticClass:"text-danger mt-1 fs-12px"},[t._v(t._s(t.$t("message.phone_error")))]):t._e()]),s("b-form-group",{scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label m-0"},[t._v(" "+t._s(t.getLabel("gender","form",!0))+" ")])]},proxy:!0}])},[s("b-form-radio",{attrs:{name:"some-radios",value:"1"},model:{value:t.$v.form.gender.$model,callback:function(s){t.$set(t.$v.form.gender,"$model",s)},expression:"$v.form.gender.$model"}},[s("label",{staticClass:"form-label mr-2"},[t._v(" "+t._s(t.$t("login.man"))+" ")])]),s("b-form-radio",{attrs:{name:"some-radios",value:"0"},model:{value:t.$v.form.gender.$model,callback:function(s){t.$set(t.$v.form.gender,"$model",s)},expression:"$v.form.gender.$model"}},[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.$t("login.woman"))+" ")])])],1),s("p",{staticClass:"text-right"},[s("span",{staticClass:"link link-primary fs-14px cursor-pointer",on:{click:t.backLogin}},[t._v(t._s(t.$t("login.return_login")))])]),s("div",{staticClass:"form-group"},[s("b-button",{attrs:{size:"lg",variant:"primary",block:"",type:"submit",disabled:t.requestLoading||t.$v.form.$error||!t.form.email||!t.form.password||!t.form.confirm_password||!t.form.phone||t.isMaxPhone},on:{click:t.handleSubmit}},[t.requestLoading?s("span",{staticClass:"spinner-border spinner-border-sm mr-2",attrs:{role:"status"}}):t._e(),s("span",{staticClass:"visually-hidden"},[t._v("Loading...")]),t._v(" "+t._s(t.$t("login.register"))+" ")])],1)],1)},ft=[];const{validators:ut}=window,{email:ht,required:pt,phone:gt,isTrue:bt,$label:wt,maxLength:vt,minLength:$t,minValue:_t,sameAs:kt,password:yt,isPhone:Ct}=ut;var Lt={name:"RegisterForm",validations(){const t={password:{required:pt,$label:wt(this.$t("login.password")),minLength:$t(8),maxLength:vt(32)},confirm_password:{required:pt,sameAs:kt("password"),$label:wt(this.$t("login.confirm_password")),sameLabel:wt(this.$t("utilities.new_password")),maxLength:vt(32)},email:{required:pt,email:ht,$label:wt(this.$t("login.email")),maxLength:vt(50)},phone:{required:pt,isPhone:Ct,$label:wt(this.$t("login.phone")),minLength:$t(10)},birthday:{required:pt,$label:wt(this.$t("login.birthday"))},display_name:{required:pt,minLength:$t(6),$label:wt(this.$t("login.display_name"))},gender:{required:pt,$label:wt(this.$t("login.gender"))}};return{form:t}},data(){return{form:{email:null,password:null,confirm_password:null,phone:null,display_name:null,gender:"1",ref:"",birthday:""},showPassword:!1,showConfirmPassword:!1,requestLoading:!1,isMaxPhone:!1}},methods:{isValidDate_Day(t){var s=/^\d{1,2}\/\d{1,2}\/\d{4}$/;if(!s.test(t))return!1;var o=t.split("/"),e=parseInt(o[0],10),r=parseInt(o[1],10),a=parseInt(o[2],10);if(isNaN(e)||isNaN(r)||isNaN(a))return!1;if(e<1||e>31||r<1||r>12)return!1;if(a%4!==0&&a%100===0||a%400!==0){if(2===r&&e>28)return!1}else if(2===r&&e>29)return!1;return!0},handleSubmit(){this.$v.form.$touch();const t=this.$v.form.$error;if(!t){localStorage.setItem("REGISTER_INFO",JSON.stringify(this.form));const{email:t,password:s,phone:o,display_name:e,gender:r,confirm_password:a,ref:i,birthday:n}=this.form,l={username:t,password:s,display_name:e,re_password:a,phone:o,gender:r,ref:i,birthday:n};let c=this.isValidDate_Day(l.birthday);if(!c)return this.$awnAlert("format ngày sinh không đúng");this.requestLoading=!0,this.$store.dispatch("Auth/register",l).then(t=>{this.$awnSuccess(this.$t("message.signup_successfully")),this.$emit("backLogin",!1)}).catch(t=>{506===t.code?this.$awnAlert(this.$t("message.code_error")):this.$awnAlert(this.$t("message.code_incorrect")),this.count++,5===+this.count&&this.$emit("backRegister",!1)}).finally(()=>{this.requestLoading=!1})}},backLogin(){this.$emit("backLogin",!1),this.$router.push({name:"auth.login"})}},watch:{"form.phone"(t){if(t){let s=t.split("").length;this.isMaxPhone=s>12}}},mounted(){this.$route.query&&this.$route.query.ref&&(this.form.ref=this.$route.query.ref)}},xt=Lt,Ft=(o("c8cd"),o("af87"),Object($["a"])(xt,dt,ft,!1,null,"b20e858a",null)),Pt=Ft.exports,qt={name:"Forgot",components:{RegisterForm:Pt},data(){return{title:""}},created(){window.addEventListener("popstate",this.onBackButtonEvent),history.pushState(null,null,location.href)},beforeDestroy(){window.removeEventListener("popstate",this.onBackButtonEvent)},methods:{handleBackLogin(t){this.$emit("backLogin",t)},handleConfirm(t){this.$emit("confirm",t)},onBackButtonEvent(t,s){t.preventDefault(),this.$emit("backLogin",s),this.$router.go(-1)}},mounted(){}},Et=qt,Rt=(o("275f"),o("eb81"),Object($["a"])(Et,ct,mt,!1,null,"279a16ee",null)),St=Rt.exports,Bt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"login-wrapper px-4 border-radius-10"},[s("div",{staticClass:"nk-block nk-block-middle nk-auth-body me-0"},[s("div",{staticClass:"nk-block-head"},[s("div",{staticClass:"nk-block-head-content text-center"},[s("h5",{staticClass:"nk-block-title fs-22px"},[t._v(t._s(t.$t("login.code")))]),s("div",{staticClass:"nk-block-des"},[s("p",[t._v(t._s(t.$t("login.code_message")))])])])]),s("verification-from",{on:{backRegister:t.backRegister,backLogin:t.backLogin}})],1),t._m(0)])},At=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"nk-block nk-auth-footer text-center"},[s("div",{staticClass:"mt-3"},[s("p",[t._v("© 2022 ePayGate Agent. ")])])])}],Ht=function(){var t=this,s=t._self._c;return s("b-form",{attrs:{autocomplete:"off"},on:{submit:function(s){return s.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[s("b-form-group",{attrs:{"invalid-feedback":t.showHtmlError("code","form"),"label-class":"form-label-group"},scopedSlots:t._u([{key:"label",fn:function(){return[s("label",{staticClass:"form-label"},[t._v(" "+t._s(t.getLabel("code","form",!0))+" ")])]},proxy:!0}])},[s("b-form-input",{ref:"autofocus",class:{"is-invalid":t.showHtmlError("code","form")},attrs:{placeholder:t.getLabel("code","form"),autocomplete:"off",type:"number",size:"lg"},model:{value:t.$v.form.code.$model,callback:function(s){t.$set(t.$v.form.code,"$model","string"===typeof s?s.trim():s)},expression:"$v.form.code.$model"}})],1),s("div",{staticClass:"form-group"},[s("b-button",{attrs:{size:"lg",variant:"primary",block:"",type:"submit",disabled:t.requestLoading||t.$v.form.$error||!t.form.code}},[t.requestLoading?s("span",{staticClass:"spinner-border spinner-border-sm mr-2",attrs:{role:"status"}}):t._e(),s("span",{staticClass:"visually-hidden"},[t._v("Loading...")]),t._v(" "+t._s(t.$t("button.confirm"))+" ")])],1),s("p",{staticClass:"link link-primary fs-13px cursor-pointer w-100 d-flex justify-content-end",on:{click:t.backRegister}},[t._v(" "+t._s(t.$t("login.return_register"))+" ")])],1)},It=[];const{validators:Tt}=window,{required:zt,$label:jt,minLength:Ot}=Tt;var Mt={name:"VerificationForm",validations(){const t={code:{required:zt,$label:jt(this.$t("login.code")),minLength:Ot(6)}};return{form:t}},data(){return{form:{code:null},requestLoading:!1,count:0}},methods:{handleSubmit(){this.$v.form.$touch();const t=this.$v.form.$error;if(!t){this.$v.form.$touch();const t=this.$v.form.$error;if(!t){let t=localStorage.getItem("REGISTER_INFO"),s=JSON.parse(t),o={email:s.email,password:l()(l()(s.password)),code:this.form.code,phone:s.phone};this.requestLoading=!0,this.$store.dispatch("Auth/register",o).then(t=>{this.$awnSuccess(this.$t("message.signup_successfully")),this.$emit("backLogin",!1)}).catch(t=>{506===t.code?this.$awnAlert(this.$t("message.code_error")):this.$awnAlert(this.$t("message.code_incorrect")),this.count++,5===+this.count&&this.$emit("backRegister",!1)}).finally(()=>{this.requestLoading=!1})}}},backRegister(){this.$emit("backRegister",!1),this.$router.push({name:"auth.register"})}}},Dt=Mt,Nt=Object($["a"])(Dt,Ht,It,!1,null,null,null),Vt=Nt.exports,Gt={name:"Forgot",components:{VerificationFrom:Vt},methods:{backRegister(t){this.$emit("backRegister",t)},backLogin(t){this.$emit("backLogin",t)}}},Jt=Gt,Ut=(o("a5cb"),Object($["a"])(Jt,Bt,At,!1,null,"34c7e0e5",null)),Wt=Ut.exports,Zt=o("79fa"),Kt={name:"Login",components:{LoginForm:k,Forgot:O,Reset:lt,Register:St,Verification:Wt},data(){return{showForgotPasswordForm:!1,showResetPasswordForm:!1,showRegister:!1,showConfirm:!1,ok:!0,router:this.$route.name||"auth.login"}},methods:{checkInfo(){this.$store.dispatch("Auth/info").catch(t=>{this.$awn.alert(this.$t("auth.loginRequired"))}).then(t=>{})},handleForgot(t){this.showResetPasswordForm=!1,this.showForgotPasswordForm=t},handleReset(t){this.showForgotPasswordForm=!1,this.showResetPasswordForm=t},handleBackLogin(t){this.showConfirm=t,this.showRegister=t,this.showForgotPasswordForm=t,this.showResetPasswordForm=t},handleRegister(t){this.router="auth.register",this.showRegister=t},handleConfirm(t){this.showConfirm=t,this.showRegister=!1},handleBackRegister(t){this.showConfirm=t,this.showRegister=!0},handleBackForgot(t){this.showResetPasswordForm=t,this.showForgotPasswordForm=!0}},mounted(){this.$store.dispatch("Auth/resetToken").then()},watch:{router:{immediate:!0,handler(t,s){t&&"auth.register"===t&&(this.showRegister=!0),t&&"auth.login"===t&&(this.showConfirm=!1,this.showRegister=!1,this.showForgotPasswordForm=!1,this.showResetPasswordForm=!1),t&&"auth.forgot"===t&&(this.showResetPasswordForm=!1,this.showForgotPasswordForm=!0)}}},metaInfo(){return{title:Zt["a"].t("login.login")}}},Qt=Kt,Xt=(o("0c85"),o("9d4e"),Object($["a"])(Qt,e,r,!1,null,"7ea8649c",null));s["default"]=Xt.exports},a5cb:function(t,s,o){"use strict";o("6574")},af87:function(t,s,o){"use strict";o("5a575")},b1e9:function(t,s,o){},c8cd:function(t,s,o){"use strict";o("272f")},d816:function(t,s,o){},e524:function(t,s,o){},e812:function(t,s,o){},eb81:function(t,s,o){"use strict";o("e524")},f612:function(t,s,o){"use strict";o("d816")}}]);