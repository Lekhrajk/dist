(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63bee64f"],{"05ab":function(t,e,o){"use strict";var s=o("c2b3"),i=o.n(s);i.a},"1c4c":function(t,e,o){"use strict";var s=o("9b43"),i=o("5ca1"),a=o("4bf8"),n=o("1fa8"),r=o("33a4"),l=o("9def"),c=o("f1ae"),u=o("27ee");i(i.S+i.F*!o("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,o,i,v,p=a(t),d="function"==typeof this?this:Array,m=arguments.length,f=m>1?arguments[1]:void 0,b=void 0!==f,h=0,g=u(p);if(b&&(f=s(f,m>2?arguments[2]:void 0,2)),void 0==g||d==Array&&r(g))for(e=l(p.length),o=new d(e);e>h;h++)c(o,h,b?f(p[h],h):p[h]);else for(v=g.call(p),o=new d;!(i=v.next()).done;h++)c(o,h,b?n(v,f,[i.value,h],!0):i.value);return o.length=h,o}})},"37c8":function(t,e,o){e.f=o("2b4c")},3846:function(t,e,o){o("9e1e")&&"g"!=/./g.flags&&o("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:o("0bfb")})},"3a72":function(t,e,o){var s=o("7726"),i=o("8378"),a=o("2d00"),n=o("37c8"),r=o("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:s.Symbol||{});"_"==t.charAt(0)||t in e||r(e,t,{value:n.f(t)})}},"5df3":function(t,e,o){"use strict";var s=o("02f4")(!0);o("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,o=this._i;return o>=e.length?{value:void 0,done:!0}:(t=s(e,o),this._i+=t.length,{value:t,done:!1})}))},"67ab":function(t,e,o){var s=o("ca5a")("meta"),i=o("d3f4"),a=o("69a8"),n=o("86cc").f,r=0,l=Object.isExtensible||function(){return!0},c=!o("79e5")((function(){return l(Object.preventExtensions({}))})),u=function(t){n(t,s,{value:{i:"O"+ ++r,w:{}}})},v=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,s)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[s].i},p=function(t,e){if(!a(t,s)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[s].w},d=function(t){return c&&m.NEED&&l(t)&&!a(t,s)&&u(t),t},m=t.exports={KEY:s,NEED:!1,fastKey:v,getWeak:p,onFreeze:d}},"6b54":function(t,e,o){"use strict";o("3846");var s=o("cb7c"),i=o("0bfb"),a=o("9e1e"),n="toString",r=/./[n],l=function(t){o("2aba")(RegExp.prototype,n,t,!0)};o("79e5")((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?l((function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?i.call(t):void 0)})):r.name!=n&&l((function(){return r.call(this)}))},"7bbc":function(t,e,o){var s=o("6821"),i=o("9093").f,a={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return i(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==a.call(t)?r(t):i(s(t))}},"8a81":function(t,e,o){"use strict";var s=o("7726"),i=o("69a8"),a=o("9e1e"),n=o("5ca1"),r=o("2aba"),l=o("67ab").KEY,c=o("79e5"),u=o("5537"),v=o("7f20"),p=o("ca5a"),d=o("2b4c"),m=o("37c8"),f=o("3a72"),b=o("d4c0"),h=o("1169"),g=o("cb7c"),w=o("d3f4"),y=o("6821"),C=o("6a99"),x=o("4630"),k=o("2aeb"),V=o("7bbc"),S=o("11e9"),_=o("86cc"),P=o("0d58"),G=S.f,B=_.f,E=V.f,D=s.Symbol,U=s.JSON,N=U&&U.stringify,M="prototype",O=d("_hidden"),A=d("toPrimitive"),L={}.propertyIsEnumerable,H=u("symbol-registry"),F=u("symbols"),j=u("op-symbols"),$=Object[M],T="function"==typeof D,K=s.QObject,I=!K||!K[M]||!K[M].findChild,q=a&&c((function(){return 7!=k(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a}))?function(t,e,o){var s=G($,e);s&&delete $[e],B(t,e,o),s&&t!==$&&B($,e,s)}:B,z=function(t){var e=F[t]=k(D[M]);return e._k=t,e},R=T&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},J=function(t,e,o){return t===$&&J(j,e,o),g(t),e=C(e,!0),g(o),i(F,e)?(o.enumerable?(i(t,O)&&t[O][e]&&(t[O][e]=!1),o=k(o,{enumerable:x(0,!1)})):(i(t,O)||B(t,O,x(1,{})),t[O][e]=!0),q(t,e,o)):B(t,e,o)},W=function(t,e){g(t);var o,s=b(e=y(e)),i=0,a=s.length;while(a>i)J(t,o=s[i++],e[o]);return t},Y=function(t,e){return void 0===e?k(t):W(k(t),e)},Q=function(t){var e=L.call(this,t=C(t,!0));return!(this===$&&i(F,t)&&!i(j,t))&&(!(e||!i(this,t)||!i(F,t)||i(this,O)&&this[O][t])||e)},Z=function(t,e){if(t=y(t),e=C(e,!0),t!==$||!i(F,e)||i(j,e)){var o=G(t,e);return!o||!i(F,e)||i(t,O)&&t[O][e]||(o.enumerable=!0),o}},X=function(t){var e,o=E(y(t)),s=[],a=0;while(o.length>a)i(F,e=o[a++])||e==O||e==l||s.push(e);return s},tt=function(t){var e,o=t===$,s=E(o?j:y(t)),a=[],n=0;while(s.length>n)!i(F,e=s[n++])||o&&!i($,e)||a.push(F[e]);return a};T||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(o){this===$&&e.call(j,o),i(this,O)&&i(this[O],t)&&(this[O][t]=!1),q(this,t,x(1,o))};return a&&I&&q($,t,{configurable:!0,set:e}),z(t)},r(D[M],"toString",(function(){return this._k})),S.f=Z,_.f=J,o("9093").f=V.f=X,o("52a7").f=Q,o("2621").f=tt,a&&!o("2d00")&&r($,"propertyIsEnumerable",Q,!0),m.f=function(t){return z(d(t))}),n(n.G+n.W+n.F*!T,{Symbol:D});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;et.length>ot;)d(et[ot++]);for(var st=P(d.store),it=0;st.length>it;)f(st[it++]);n(n.S+n.F*!T,"Symbol",{for:function(t){return i(H,t+="")?H[t]:H[t]=D(t)},keyFor:function(t){if(!R(t))throw TypeError(t+" is not a symbol!");for(var e in H)if(H[e]===t)return e},useSetter:function(){I=!0},useSimple:function(){I=!1}}),n(n.S+n.F*!T,"Object",{create:Y,defineProperty:J,defineProperties:W,getOwnPropertyDescriptor:Z,getOwnPropertyNames:X,getOwnPropertySymbols:tt}),U&&n(n.S+n.F*(!T||c((function(){var t=D();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))}))),"JSON",{stringify:function(t){var e,o,s=[t],i=1;while(arguments.length>i)s.push(arguments[i++]);if(o=e=s[1],(w(e)||void 0!==t)&&!R(t))return h(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!R(e))return e}),s[1]=e,N.apply(U,s)}}),D[M][A]||o("32e9")(D[M],A,D[M].valueOf),v(D,"Symbol"),v(Math,"Math",!0),v(s.JSON,"JSON",!0)},"99cd":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"deploy-vm-page"}},[o("vx-card",{attrs:{title:"CREATE VIRTUAL MACHINE"}},[t.vms?o("div",{staticClass:"text-center cursor-pointer float-right"},[o("img",{staticClass:"p-4",attrs:{src:t.vms.logo,alt:"graphic",width:"100",height:"70"}})]):t._e(),o("div",{staticClass:"mt-5",attrs:{id:"div-with-loading"}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.deploy(e)}}},[o("div",{staticClass:"vx-row py-4"},[o("div",{staticClass:"vx-col md:w-1/3 w-full mt-5 p-3"},[o("p",[t._v("Enter VM HostName")])]),o("div",{staticClass:"vx-col md:w-2/3 w-full mt-5"},[o("vs-input",{staticClass:"w-full",attrs:{placeholder:"enter vm hostname",name:"vm_name",autocomplete:"off"},on:{keyup:t.validateForm},model:{value:t.vmName,callback:function(e){t.vmName=e},expression:"vmName"}}),o("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.vmNameError))])],1)]),o("div",{staticClass:"vx-row pb-4 px-4"},[o("div",{staticClass:"vx-col md:w-1/3 w-full"},[o("div",{staticClass:"mt-5",attrs:{title:"Memory"}},[o("label",[t._v("Select Memory")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.selectionMemory,expression:"selectionMemory"}],staticClass:"block appearance-none w-full bg-white border border-gray-200 hover:border-gray-100 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mt-4",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectionMemory=e.target.multiple?o:o[0]},t.changeSelect2]}},[o("option",{attrs:{value:"2",selected:""}},[t._v("2 GB")]),o("option",{attrs:{value:"3"}},[t._v("3 GB")]),o("option",{attrs:{value:"4"}},[t._v("4 GB")]),o("option",{attrs:{value:"5"}},[t._v("5 GB")]),o("option",{attrs:{value:"6"}},[t._v("6 GB")]),o("option",{attrs:{value:"7"}},[t._v("7 GB")]),o("option",{attrs:{value:"8"}},[t._v("8 GB")])])]),o("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.selectedMemoryError))])]),o("div",{staticClass:"vx-col md:w-1/3 w-full"},[o("div",{staticClass:"mt-5",attrs:{title:"CPU"}},[o("label",[t._v("Select VCPU")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVcpu,expression:"selectedVcpu"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mt-4",domProps:{innerHTML:t._s(t.optionsList)},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedVcpu=e.target.multiple?o:o[0]}}})]),o("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.selectedVcpuError))])]),o("div",{staticClass:"vx-col  md:w-1/3 w-full"},[o("div",{staticClass:"mt-5",attrs:{title:"Storage memory"}},[o("label",[t._v("Select Storage(Disks)")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDisk,expression:"selectedDisk"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mt-4",domProps:{innerHTML:t._s(t.diskList)},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedDisk=e.target.multiple?o:o[0]}}})]),o("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.selectedDiskError))])])]),o("div",{staticClass:"vx-row "},[o("div",{staticClass:"vx-col w-full mt-5"},[o("vs-collapse",[o("vs-collapse-item",{attrs:{"icon-pack":"feather","icon-arrow":"icon-chevrons-down"}},[o("div",{attrs:{slot:"header",type:"filled"},slot:"header"},[o("vs-button",{attrs:{type:"border"}},[t._v("Advance")])],1),o("div",{staticClass:"vx-row "},[o("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[o("p",[t._v("Startup Script")])]),o("div",{staticClass:"vx-col md:w-2/3 w-full mt-5"},[o("vs-input",{staticClass:"w-full",attrs:{placeholder:"enter startup script here",name:"script",autocomplete:"off"},model:{value:t.StartupScript,callback:function(e){t.StartupScript=e},expression:"StartupScript"}})],1)])])],1)],1)]),o("div",{staticClass:"vx-row pb-5"},[o("div",{staticClass:"vx-col w-full"},[o("vs-tabs",{attrs:{alignment:"center"}},[o("vs-tab",{attrs:{label:"Normal Password"}},[o("div",{staticClass:"con-tab-ejemplo"},[o("div",{staticClass:"vx-row"},[o("div",{staticClass:"vx-col md:w-1/4 w-full mt-5 p-3"},[o("p",[t._v("Enter Password for VM")])]),o("div",{staticClass:"vx-col md:w-3/4 w-full mt-5"},[o("div",{staticClass:"password"},[o("vs-input",{staticClass:"w-full",class:{valid:t.passwordValidation.valid},attrs:{type:t.passwordVisible?"text":"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("button",{staticClass:"visibility",attrs:{tabindex:"-1","arial-label":t.passwordVisible?"Hide password":"Show password"},on:{click:t.togglePasswordVisibility}},[o("i",{staticClass:"material-icons",attrs:{"icon-pack":"feather"}},[t._v(t._s(t.passwordVisible?"visibility":"visibility_off"))])])],1)])]),o("div",{staticClass:"vx-row"},[o("div",{staticClass:"vx-col md:w-1/4 w-full mt-5 p-3"},[o("p",[t._v("Confirm Password for VM")])]),o("div",{staticClass:"vx-col md:w-3/4 w-full mt-5"},[o("vs-input",{staticClass:"w-full",attrs:{type:"password"},model:{value:t.checkPassword,callback:function(e){t.checkPassword=e},expression:"checkPassword"}}),o("transition",{attrs:{name:"hint",appear:""}},[t.passwordValidation.errors.length>0&&!t.submitted?o("div",{staticClass:"hints"},[o("h2",[t._v("Hints")]),t._l(t.passwordValidation.errors,(function(e){return o("p",{key:e},[t._v(t._s(e))])}))],2):t._e()])],1),t.notSamePasswords?o("div",{staticClass:"matches mx-auto text-danger "},[o("p",[t._v("Passwords don't match.")])]):t._e()])]),o("div",{staticClass:"text-center mx-auto"},[t.passwordsFilled&&!t.notSamePasswords&&t.passwordValidation.valid?o("vs-button",{attrs:{name:"submit",id:"submit",color:"primary",type:"filled"},on:{click:function(e){return e.preventDefault(),t.deploy("primary")}}},[t._v("Deploy VM")]):t._e()],1)]),o("vs-tab",{attrs:{label:"SSH Key"}},[o("div",{staticClass:"con-tab-ejemplo"},[o("vs-textarea",{attrs:{label:"Paste your SSH here"},model:{value:t.sshKey,callback:function(e){t.sshKey=e},expression:"sshKey"}})],1),o("div",{staticClass:"text-center mx-auto"},[o("vs-button",{attrs:{name:"submit",color:"primary",type:"filled"},on:{click:function(e){return e.preventDefault(),t.deploySSH("primary")}}},[t._v("Deploy VM")])],1),o("span",[t._v(t._s(t.error))])])],1)],1)])])])])],1)},i=[],a=(o("ac6a"),o("ac4d"),o("8a81"),o("5df3"),o("1c4c"),o("7f7f"),o("6b54"),o("a481"),o("bc3a")),n=o.n(a),r=o("41cb"),l=o("4a7a"),c=o.n(l),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{attrs:{title:"Alignments","code-toggler":""}},[o("p",[t._v("Change the alignment of the buttons with the property alignments. Allowed values are:")]),o("vx-list",{staticClass:"mt-3",attrs:{list:["center","right","fixed"]}}),o("div",{staticClass:"mt-5"},[o("h6",{staticClass:"mb-3"},[t._v(" Default ")]),o("vs-tabs",[o("vs-tab",{attrs:{label:"Home"}},[o("div")]),o("vs-tab",{attrs:{label:"Documents"}},[o("div")]),o("vs-tab",{attrs:{label:"Contributors"}},[o("div")]),o("vs-tab",{attrs:{label:"Ecosystem"}},[o("div")])],1)],1),o("div",{staticClass:"mt-5"},[o("h6",{staticClass:"mb-3"},[t._v(" Center ")]),o("vs-tabs",{attrs:{alignment:"center"}},[o("vs-tab",{attrs:{label:"Home"}},[o("div")]),o("vs-tab",{attrs:{label:"Documents"}},[o("div")]),o("vs-tab",{attrs:{label:"Contributors"}},[o("div")]),o("vs-tab",{attrs:{label:"Ecosystem"}},[o("div")])],1)],1),o("div",{staticClass:"mt-5"},[o("h6",{staticClass:"mb-3"},[t._v(" Right ")]),o("vs-tabs",{attrs:{alignment:"right"}},[o("vs-tab",{attrs:{label:"Home"}},[o("div")]),o("vs-tab",{attrs:{label:"Documents"}},[o("div")]),o("vs-tab",{attrs:{label:"Contributors"}},[o("div")]),o("vs-tab",{attrs:{label:"Ecosystem"}},[o("div")])],1)],1),o("div",{staticClass:"mt-5"},[o("h6",{staticClass:"mb-3"},[t._v(" Fixed ")]),o("vs-tabs",{attrs:{alignment:"fixed"}},[o("vs-tab",{attrs:{label:"Home"}},[o("div")]),o("vs-tab",{attrs:{label:"Documents"}},[o("div")]),o("vs-tab",{attrs:{label:"Contributors"}},[o("div")]),o("vs-tab",{attrs:{label:"Ecosystem"}},[o("div")])],1)],1),o("template",{slot:"codeContainer"},[t._v('\n<template>\n  <div class="mt-5">\n    <h3> Default </h3>\n    <vs-tabs>\n      <vs-tab label="Home">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Documents">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Contributors">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Ecosystem">\n        <div></div>\n      </vs-tab>\n    </vs-tabs>\n  </div>\n\n  <div class="mt-5">\n    <h3> Center </h3>\n    <vs-tabs alignment="center">\n      <vs-tab label="Home">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Documents">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Contributors">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Ecosystem">\n        <div></div>\n      </vs-tab>\n    </vs-tabs>\n  </div>\n\n  <div class="mt-5">\n    <h3> Right </h3>\n    <vs-tabs alignment="right">\n      <vs-tab label="Home">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Documents">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Contributors">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Ecosystem">\n        <div></div>\n      </vs-tab>\n    </vs-tabs>\n  </div>\n\n  <div class="mt-5">\n    <h3> Fixed </h3>\n    <vs-tabs alignment="fixed">\n      <vs-tab label="Home">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Documents">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Contributors">\n        <div></div>\n      </vs-tab>\n      <vs-tab label="Ecosystem">\n        <div></div>\n      </vs-tab>\n    </vs-tabs>\n  </div>\n</template>\n        ')])],2)},v=[],p=o("2877"),d={},m=Object(p["a"])(d,u,v,!1,null,null,null),f=m.exports;function b(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=h(t))){var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i,a=!0,n=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return a=t.done,t},e:function(t){n=!0,i=t},f:function(){try{a||null==s.return||s.return()}finally{if(n)throw i}}}}function h(t,e){if(t){if("string"===typeof t)return g(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,s=new Array(e);o<e;o++)s[o]=t[o];return s}var w={data:function(){return{vms:null,logo:"",vmName:"",error:null,vmNameError:null,selectedMemoryError:null,selectedDiskError:null,selectedVcpuError:null,active1:!0,selectedMemory:"",selectedDisk:"",selectedVcpu:"",rules:[{message:"One lowercase letter required.",regex:/[a-z]+/},{message:"One uppercase letter required.",regex:/[A-Z]+/},{message:"8 characters minimum.",regex:/.{8,}/},{message:"One number required.",regex:/[0-9]+/},{message:"One special character required.",regex:/[$&+,:;=?@#|'<>.^*()%!-]+/}],sshKey:"",password:"",checkPassword:"",passwordVisible:!1,submitted:!1,StartupScript:"",selectionMemory:null,optionsList:"",diskList:""}},computed:{notSamePasswords:function(){return!!this.passwordsFilled&&this.password!==this.checkPassword},validateSSH:function(){(this.sshKey="")&&(this.error="must be a valid ssh key ")},passwordsFilled:function(){return""!==this.password&&""!==this.checkPassword},passwordValidation:function(){var t,e=[],o=b(this.rules);try{for(o.s();!(t=o.n()).done;){var s=t.value;s.regex.test(this.password)||e.push(s.message)}}catch(i){o.e(i)}finally{o.f()}return 0===e.length?{valid:!0,errors:e}:{valid:!1,errors:e}}},methods:{changeSelect2:function(){switch(this.selectionMemory){case"2":this.optionsList='<option value="1">1 VCPU</option><option value="2">2 VCPU</option><option value="3">3 VCPU</option><option value="4">4 VCPU</option><option value="" disabled>select no. of Vcpu </option>',this.diskList='<option value="30">30 GB</option> <option value="40">40 GB</option><option value="50">50 GB</option><option value="60">60 GB</option><option value="80">80 GB</option><option value="100">100 GB</option><option value="120">120 GB</option><option value="" disabled>select disk size</option>';break;case"3":this.optionsList='<option value="1">1 VCPU</option><option value="2">2 VCPU</option><option value="3">3 VCPU</option><option value="4">4 VCPU</option><option value="" disabled>select no. of Vcpu </option>',this.diskList='<option value="30">30 GB</option> <option value="40">40 GB</option><option value="50">50 GB</option><option value="60">60 GB</option><option value="80">80 GB</option><option value="100">100 GB</option><option value="120">120 GB</option><option value="" disabled>select disk size</option>';break;case"4":this.optionsList='<option value="1">1 VCPU</option><option value="2">2 VCPU</option><option value="3">3 VCPU</option><option value="4">4 VCPU</option><option value="" disabled>select no. of Vcpu </option>',this.diskList='<option value="30">30 GB</option> <option value="40">40 GB</option><option value="50">50 GB</option><option value="60">60 GB</option><option value="80">80 GB</option><option value="100">100 GB</option><option value="120">120 GB</option><option value="" disabled>select disk size</option>';break;case"5":this.optionsList='<option value="1">1 VCPU</option><option value="2">2 VCPU</option><option value="3">3 VCPU</option><option value="4">4 VCPU</option><option value="" disabled>select no. of Vcpu </option>',this.diskList='<option value="30">30 GB</option> <option value="40">40 GB</option><option value="50">50 GB</option><option value="60">60 GB</option><option value="80">80 GB</option><option value="100">100 GB</option><option value="120">120 GB</option><option value="" disabled>select disk size</option>';break;case"6":this.optionsList='<option value="1">1 VCPU</option><option value="2">2 VCPU</option><option value="3">3 VCPU</option><option value="4">4 VCPU</option><option value="" disabled>select no. of Vcpu </option>',this.diskList='<option value="30">30 GB</option> <option value="40">40 GB</option><option value="50">50 GB</option><option value="60">60 GB</option><option value="80">80 GB</option><option value="100">100 GB</option><option value="120">120 GB</option><option value="" disabled>select disk size</option>';break;case"7":this.optionsList='<option value="1">1 VCPU</option><option value="2">2 VCPU</option><option value="3">3 VCPU</option><option value="4">4 VCPU</option><option value="" disabled>select no. of Vcpu </option>',this.diskList='<option value="30">30 GB</option> <option value="40">40 GB</option><option value="50">50 GB</option><option value="60">60 GB</option><option value="80">80 GB</option><option value="100">100 GB</option><option value="120">120 GB</option><option value="" disabled>select disk size</option>';break;case"8":this.optionsList='<option value="1">1 VCPU</option><option value="2">2 VCPU</option><option value="3">3 VCPU</option><option value="4">4 VCPU</option><option value="" disabled>select no. of Vcpu </option>',this.diskList='<option value="30">30 GB</option> <option value="40">40 GB</option><option value="50">50 GB</option><option value="60">60 GB</option><option value="80">80 GB</option><option value="100">100 GB</option><option value="120">120 GB</option><option value="" disabled>select disk size</option>';break}},resetPasswords:function(){var t=this;this.password="",this.checkPassword="",this.submitted=!0,setTimeout((function(){t.submitted=!1}),2e3)},togglePasswordVisibility:function(){this.passwordVisible=!this.passwordVisible},validateForm:function(){""==this.vmName?this.vmNameError="VM name is required":this.vmName.length>=0?this.vmNameError="ok":""==this.password&&(this.error="Password is required")},submitForm:function(t){""!=this.vmName&&""!=this.password?alert("form submitted!"):(this.error="Please check all field is required",this.$vs.notify({title:"Error",text:this.error,color:"danger",iconPack:"feather",icon:"icon-alert-circle",position:"top-right"}))},deploy:function(t){var e=this;if(this.colorAlert=t,""!=this.vmName&&""!=this.selectionMemory&&""!=this.selectedDisk&&""!=this.selectedVcpu&&""!=this.password&&this.checkPassword===this.password){var o="api/vms",s=new FormData;s.set("tid",this.$route.params.id),s.set("name",this.vmName),s.set("cpu",this.selectedVcpu),s.set("memory",1024*this.selectionMemory),s.set("disk",1024*this.selectedDisk),s.set("password",this.password),n()({method:"post",url:o,data:s}).then((function(t){e.message=t.data.message,201==t.status&&(e.$vs.notify({color:e.colorAlert,title:"Success",text:"VM is created successfully"}),e.$vs.loading({container:"#div-with-loading",scale:.6}),setTimeout((function(){e.$vs.loading.close("#div-with-loading > .con-vs-loading"),r["a"].push({path:"/home",name:"home"})}),3e3))}))}else this.error="all fields are required"},deploySSH:function(t){var e=this;if(this.colorAlert=t,""!=this.vmName&&""!=this.selectionMemory&&""!=this.selectedDisk&&""!=this.selectedVcpu&&""!=this.sshKey){var o="api/vms",s=new FormData;s.set("tid",this.$route.params.id),s.set("name",this.vmName),s.set("cpu",this.selectedVcpu),s.set("memory",1024*this.selectionMemory),s.set("disk",1024*this.selectedDisk),s.set("sshkey",this.sshKey),n()({method:"post",url:o,data:s}).then((function(t){e.message=t.data.message,201==t.status&&(e.$vs.notify({color:e.colorAlert,title:"Success",text:"VM is created successfully"}),e.$vs.loading({container:"#div-with-loading",scale:.6}),setTimeout((function(){e.$vs.loading.close("#div-with-loading > .con-vs-loading"),r["a"].push({path:"/home",name:"home"})}),3e3))}))}else this.error="all fields are required"}},components:{TabsAlignments:f,"v-select":c.a},created:function(){null==localStorage.getItem("token")&&this.$router.replace("/").catch((function(){}))},mounted:function(){var t=this;this.$emit("changeRouteTitle","Deploy VM");var e=this.$route.params.id;console.log("The id is: "+this.$route.params.id);var o="api/templates/"+e;n()({method:"get",url:o}).then((function(e){t.vms=e.data,console.log(e.data)}))}},y=w,C=(o("05ab"),Object(p["a"])(y,s,i,!1,null,"927d6418",null));e["default"]=C.exports},ac4d:function(t,e,o){o("3a72")("asyncIterator")},c2b3:function(t,e,o){},d4c0:function(t,e,o){var s=o("0d58"),i=o("2621"),a=o("52a7");t.exports=function(t){var e=s(t),o=i.f;if(o){var n,r=o(t),l=a.f,c=0;while(r.length>c)l.call(t,n=r[c++])&&e.push(n)}return e}},f1ae:function(t,e,o){"use strict";var s=o("86cc"),i=o("4630");t.exports=function(t,e,o){e in t?s.f(t,e,i(0,o)):t[e]=o}}}]);
//# sourceMappingURL=chunk-63bee64f.55e5c306.js.map