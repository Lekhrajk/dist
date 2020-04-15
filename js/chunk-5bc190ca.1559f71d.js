(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bc190ca"],{"21bb":function(t,e,i){"use strict";var s=i("7a98"),o=i.n(s);o.a},"7a98":function(t,e,i){},bb51:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"dashboard-analytics"}},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full"},[i("vx-card",{attrs:{title:"List of Deployed VMs","refresh-content-action":""},on:{refresh:t.acceptAlert}},[i("div",{staticClass:"mt-4",attrs:{slot:"no-body",id:"div-with-loading"},slot:"no-body"},[t.vms?i("vs-table",{ref:"vmstable",staticClass:"table-dark-inverted"},[i("template",{slot:"thead"},[i("vs-th",[t._v("ID")]),i("vs-th",[t._v("STATUS")]),i("vs-th",[t._v("HOSTNAME")]),i("vs-th",[t._v("OS")]),i("vs-th",[t._v("Disk")]),i("vs-th",[t._v("VCPU")]),i("vs-th",[t._v("RAM")]),i("vs-th",[t._v("IP's")]),i("vs-th",[t._v("Action")])],1),t._l(t.vms.vms,(function(e){return i("vs-tr",{key:e.id},[i("vs-td",[i("span")]),i("vs-td",[i("span",[t._v(t._s(e.state))])]),i("vs-td",[i("span",[t._v(t._s(e.name))])]),i("vs-td",[i("img",{attrs:{src:e.logo,alt:"vm",width:"60",height:"40"}})]),i("vs-td",[i("span",[t._v(t._s(e.disk/1024)+"GB")])]),i("vs-td",[i("span",[t._v(t._s(e.vcpu)+"vcpu")])]),i("vs-td",[i("span",[t._v(t._s(e.memory/1024)+"GB")])]),i("vs-td",[i("span",[t._v(t._s(e.ipv4))])]),i("vs-td",[i("div",{staticClass:"dropdown-button-container"},[i("vs-dropdown",{staticClass:"lg:w-1/3 xl:w-1/3 my-0 p-0"},[i("vs-button",{staticClass:"btn-drop",attrs:{color:"danger",type:"flat",icon:"more_horiz"}}),i("vs-dropdown-menu",{staticClass:"lg:w-1/4"},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col sm:w-full md:w-3/6 lg:w-1/2 xl:w-1/2 mx-auto"},[i("vs-dropdown-item",[i("a",{attrs:{href:"https://xongl.com/client/index.php/knowledgebase/5",target:"_blank"}},[i("p",{staticClass:"py-2 px-2 cursor-pointer hover:bg-primary hover:text-white"},[i("i",{staticClass:"feather icon-help-circle mr-4"}),t._v("How to connect? ")])])]),i("vs-dropdown-item",{attrs:{name:"reboot-hard",value:"reboot-hard"},on:{click:function(i){return t.actionvm(e.id,t.name="reboot-hard")}}},[i("p",{staticClass:"text-left py-2 px-2 cursor-pointer hover:bg-primary hover:text-white"},[i("i",{staticClass:"feather icon-loader mr-4 "}),t._v("Reboot")])]),i("vs-dropdown-item",{attrs:{name:"poweroff-hard",value:"poweroff-hard"},on:{click:function(i){return t.actionvm(e.id,t.name="poweroff-hard")}}},[i("p",{staticClass:"text-left py-2 px-2 cursor-pointer hover:bg-primary hover:text-white"},[i("i",{staticClass:"feather icon-power mr-4 "}),t._v("PowerOff")])]),i("vs-dropdown-item",{attrs:{name:"resume",value:"resume"},on:{click:function(i){return t.actionvm(e.id,t.name="resume")}}},[i("p",{staticClass:"py-2 px-2 cursor-pointer hover:bg-primary hover:text-white"},[i("i",{staticClass:"feather icon-play-circle mr-4"}),t._v("Resume")])]),i("vs-dropdown-item",{on:{click:function(e){t.RebuildVm=!0}}},[i("p",{staticClass:"py-2 px-2 cursor-pointer hover:bg-primary hover:text-white",on:{click:function(i){return t.getVmName(e.name,e.id)}}},[i("i",{staticClass:"feather icon-file-text mr-4"}),t._v("Rebuild")])])],1),i("div",{staticClass:"vx-col sm:w-full md:w-3/6 lg:w-1/2 xl:w-1/2 mx-auto"},[i("vs-dropdown-item",[i("p",{staticClass:"text-left py-2 px-2 cursor-pointer hover:bg-danger hover:text-white",attrs:{color:"danger",type:"flat"},on:{click:function(e){t.confirmDelete=!0}}},[i("span",{on:{click:function(i){return t.getVmId(e.id)}}},[i("i",{staticClass:"feather icon-trash mr-4"}),t._v(" Delete")])])]),i("vs-dropdown-item",{attrs:{type:"filled"},on:{click:function(e){t.ResizeDisk=!0}}},[i("p",{staticClass:" text-left py-2 px-2 cursor-pointer hover:bg-danger hover:text-white",on:{click:function(i){return t.getdiskSize(e.disk,e.id)}}},[i("i",{staticClass:"feather icon-maximize-2 mr-4"}),t._v(" Resize disk")])]),i("vs-dropdown-item",{attrs:{type:"filled"},on:{click:function(e){t.ResizeMemory=!0}}},[i("p",{staticClass:"py-2 px-2 cursor-pointer hover:bg-danger hover:text-white",on:{click:function(i){return t.getdiskSize(e.disk,e.id)}}},[i("i",{staticClass:"feather icon-repeat mr-4"}),t._v("Resize RAM/vCPU")])]),i("vs-dropdown-item",[i("vs-button",{attrs:{color:"dark",type:"filled"},on:{click:function(i){return t.$router.replace({path:"/select-template/category/vmstatus/"+e.id})}}},[i("i",{staticClass:"feather icon-square mr-4"}),t._v("More")])],1)],1)])])],1)],1)])],1)}))],2):t._e()],1)])],1)]),i("vs-popup",{attrs:{"background-color":"rgba(152,152,152,.7)",title:"Resize disk",active:t.ResizeDisk},on:{"update:active":function(e){t.ResizeDisk=e}}},[i("mark",[t._v("** Please make sure vm is powered off before applying this action **")]),i("form",[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col md:w-1/2 w-full mt-5 p-3"},[i("p",[t._v("Current disk size")])]),i("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[i("vs-input",{staticClass:"w-full",attrs:{name:"previousSize",autocomplete:"off",value:t.diskSize,readonly:""},model:{value:t.diskSize,callback:function(e){t.diskSize=e},expression:"diskSize"}})],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col md:w-1/2 w-full mt-5 p-3"},[i("p",[t._v("Enter resize value")])]),i("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[i("vs-input",{staticClass:"w-full",attrs:{name:"newSize",autocomplete:"off","label-placeholder":"must be greater then current size"},model:{value:t.newDiskSize,callback:function(e){t.newDiskSize=e},expression:"newDiskSize"}})],1)]),i("vs-button",{attrs:{name:"submit",color:"danger",type:"filled"},on:{click:function(e){return t.resizeVM("primary",t.name="disk-resize")}}},[t._v("Resize Disk")])],1)]),i("vs-popup",{attrs:{"background-color":"rgba(152,152,152,.7)",title:"Resize RAM and VCPU",active:t.ResizeMemory},on:{"update:active":function(e){t.ResizeMemory=e}}},[i("mark",[t._v("** Please make sure vm is powered off before performing this action **")]),i("form",[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col md:w-1/2 w-full mt-5 p-3"},[i("p",[t._v("Enter resize value for RAM")])]),i("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[i("vs-input",{staticClass:"w-full",attrs:{name:"newSize",autocomplete:"off","label-placeholder":"must be greater then current size"},model:{value:t.newRAMSize,callback:function(e){t.newRAMSize=e},expression:"newRAMSize"}})],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col md:w-1/2 w-full mt-5 p-3"},[i("p",[t._v("Enter resize value for VCPU")])]),i("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[i("vs-input",{staticClass:"w-full",attrs:{name:"newSize",autocomplete:"off","label-placeholder":"must be greater then current size"},model:{value:t.newVCPUSize,callback:function(e){t.newVCPUSize=e},expression:"newVCPUSize"}})],1)]),i("vs-button",{attrs:{name:"submit",color:"danger",type:"filled"},on:{click:function(e){return t.resizeMemory("primary",t.name="resize")}}},[t._v("Resize")])],1)]),i("div",{staticClass:"md:w-1/2"},[i("vs-popup",{staticClass:"holamundo",attrs:{title:"Rebuild VM",active:t.RebuildVm},on:{"update:active":function(e){t.RebuildVm=e}}},[i("p",{staticClass:"text-center"},[i("strong",[t._v("Are you sure you want to rebuild the selected VM ? ")])]),i("form",[i("div",{staticClass:"text-center d-flex mt-5 p-3"},[i("vs-button",{attrs:{name:"submit",color:"primary",type:"border"},on:{click:function(e){return t.actionvm(t.vm.id,t.name="rebuild")}}},[t._v("Confirm")]),i("vs-button",{staticClass:"mx-5",attrs:{color:"dark",type:"border"},on:{click:function(e){t.RebuildVm=!1}}},[t._v("Cancel")])],1)])])],1),i("vs-popup",{staticClass:"holamundo",attrs:{title:"Confirmation",active:t.confirmDelete},on:{"update:active":function(e){t.confirmDelete=e}}},[i("strong",[t._v("Are you sure you want to delete selected VM?")]),i("form",[i("div",{staticClass:"text-center d-flex mt-5 p-3"},[i("vs-button",{attrs:{name:"submit",color:"primary",type:"border"},on:{click:function(e){return t.DeleteVm()}}},[t._v("Confirm")]),i("vs-button",{staticClass:"mx-5",attrs:{color:"dark",type:"border"},on:{click:function(e){t.confirmDelete=!1}}},[t._v("Cancel")])],1)])])],1)},o=[],a=(i("a481"),i("bc3a")),r=i.n(a),n={data:function(){return{vms:{},statusobj:null,diskSize:null,vmid:null,vmName:null,Rename:"",newDiskSize:40,newRAMSize:2,newVCPUSize:1,backgroundLoading:"primary",colorLoading:"#fff",ResizeDisk:!1,ResizeMemory:!1,RebuildVm:!1,confirmDelete:!1}},created:function(){var t=this;null==localStorage.getItem("token")&&this.$router.replace("/").catch((function(){}));var e="api.xongl.com/api/vms";r()({method:"get",url:e}).then((function(e){t.vms=e.data,console.log(e.data)})).catch((function(e){t.$vs.notify({color:"danger",title:"Status",text:e.response.data.error}),"Missing cookie or authorization header!"==e.response.data.error&&t.$router.replace("/").catch((function(){}))}))},mounted:function(){localStorage.getItem("reloaded")?localStorage.removeItem("reloaded"):(localStorage.setItem("reloaded","1"),location.reload())},methods:{acceptAlert:function(t){var e=this,i="api.xongl.com/api/vms";r()({method:"get",url:i}).then((function(i){e.vms=i.data,t.removeRefreshAnimation(3e3)})),this.$vs.notify({color:"primary",title:"Success",text:"VMs data is refreshed successfully"})},getVmName:function(t,e){this.vmName=t,this.vmid=e},getdiskSize:function(t,e){this.diskSize=t/1024+"GB",this.vmid=e},resizeVM:function(t,e){var i=this;this.colorAlert=t;var s=this.vmid,o=new FormData,a=this.newDiskSize,n=1024*a;o.set("type",e),o.set("disk",n);var l="api.xongl.com/api/vms/"+s+"/actions";r()({method:"post",url:l,data:o}).then((function(t){i.$vs.notify({color:"success",title:"Server reponse",text:t.data.message})})).catch((function(t){i.$vs.notify({color:"danger",title:"Status",text:t.response.data.error})})),this.ResizeDisk=!1,this.$vs.loading({container:"#div-with-loading",scale:.6}),setTimeout((function(){i.$vs.loading.close("#div-with-loading > .con-vs-loading")}),3e3)},resizeMemory:function(t,e){var i=this;this.colorAlert=t;var s=this.vmid,o=new FormData,a=this.newRAMSize,n=this.newVCPUSize,l=1024*a,c=n;o.set("type",e),o.set("memory",l),o.set("cpu",c);var d="api.xongl.com/api/vms/"+s+"/actions";r()({method:"post",url:d,data:o}).then((function(t){i.$vs.notify({color:"success",title:"Server reponse",text:t.data.message})})).catch((function(t){i.$vs.notify({color:"danger",title:"Status",text:t.response.data.error})})),this.ResizeMemory=!1,this.$vs.loading({container:"#div-with-loading",scale:.6}),setTimeout((function(){i.$vs.loading.close("#div-with-loading > .con-vs-loading")}),3e3)},actionvm:function(t,e){var i=this,s=t,o=new FormData;o.set("type",e),o.set("name",e);var a="api.xongl.com/api/vms/"+s+"/actions";r()({method:"post",url:a,data:o}).then((function(t){i.$vs.notify({color:"primary",title:"Server reponse",text:t.data.message})})).catch((function(t){i.$vs.notify({color:"danger",title:"Status",text:t.response.data.error})})),this.$vs.loading({container:"#div-with-loading",scale:.6}),setTimeout((function(){i.$vs.loading.close("#div-with-loading > .con-vs-loading")}),3e3)},renameVM:function(){var t=this,e=this.vmid,i=new FormData;i.set("type","rename"),i.set("name",this.Rename);var s="api.xongl.com/api/vms/"+e+"/actions";r()({method:"post",url:s,data:i}).then((function(e){t.$vs.notify({color:"success",title:"Server reponse",text:e.data.message})})).catch((function(e){t.$vs.notify({color:"danger",title:"Status",text:e.response.data.error})})),this.changeName=!1,this.$vs.loading({container:"#div-with-loading",scale:.6}),setTimeout((function(){t.$vs.loading.close("#div-with-loading > .con-vs-loading")}),3e3)},getVmId:function(t){this.vmid=t},DeleteVm:function(){var t=this,e=this.vmid,i="api.xongl.com/api/vms/"+e;r()({method:"delete",url:i}).then((function(e){t.$vs.notify({color:"danger",title:"Status",text:e.data.message})})).catch((function(e){t.$vs.notify({color:"danger",title:"Status",text:e.response.data.error})})),this.confirmDelete=!1}}},l=n,c=(i("21bb"),i("2877")),d=Object(c["a"])(l,s,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-5bc190ca.1559f71d.js.map