(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Worldwide"],{"0039":function(t,a,s){t.exports=s.p+"img/world3.08a37199.svg"},"129f":function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t===1/a:t!=t&&a!=a}},"20a0":function(t,a,s){},2532:function(t,a,s){"use strict";var e=s("23e7"),o=s("5a34"),r=s("1d80"),l=s("ab13");e({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~String(r(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,a,s){var e=s("44e7");t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},"841c":function(t,a,s){"use strict";var e=s("d784"),o=s("825a"),r=s("1d80"),l=s("129f"),i=s("14c3");e("search",1,(function(t,a,s){return[function(a){var s=r(this),e=void 0==a?void 0:a[t];return void 0!==e?e.call(a,s):new RegExp(a)[t](String(s))},function(t){var e=s(a,t,this);if(e.done)return e.value;var r=o(t),c=String(this),d=r.lastIndex;l(d,0)||(r.lastIndex=0);var n=i(r,c);return l(r.lastIndex,d)||(r.lastIndex=d),null===n?-1:n.index}]}))},ab13:function(t,a,s){var e=s("b622"),o=e("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(s){try{return a[o]=!1,"/./"[t](a)}catch(e){}}return!1}},caad:function(t,a,s){"use strict";var e=s("23e7"),o=s("4d64").includes,r=s("44d2"),l=s("ae40"),i=l("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:!i},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},e7ef:function(t,a,s){"use strict";var e=s("20a0"),o=s.n(e);o.a},f596:function(t,a,s){"use strict";s.r(a);var e,o,r,l,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"worldwide my-4"},[t.isLoaded?e("div",{staticClass:"container"},[e("div",{staticClass:"row top-title"},[e("div",{staticClass:"col-md-12 col-12"},[e("span",{staticClass:"title"},[t._v("Worldwide Statistics")]),e("span",{staticClass:"badge badge-warning float-right mt-3"},[t._v("Total affected country : "+t._s(t.worldstats.affectedCountries))])])]),e("div",{staticClass:"row flex-column-reverse flex-md-row"},[e("div",{staticClass:"col-md-6 col-12 mx-auto"},[e("div",{staticClass:"cardbo"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-gray"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Total cases")]),e("div",{staticClass:"delta-text d-inline-block"},[t._v(t._s(t.worldstats.todayCases)),e("i",{staticClass:"fas fa-arrow-up"})]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.cases))])]),t._m(0)])])]),e("div",{staticClass:"col-md-6 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-black"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Total Deaths")]),e("div",{staticClass:"delta-text d-inline-block"},[t._v(t._s(t.worldstats.todayDeaths)),e("i",{staticClass:"fas fa-arrow-up"})]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.deaths))])]),t._m(1)])])]),e("div",{staticClass:"col-md-6 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-blue"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Recovered Cases")]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.recovered))])]),t._m(2)])])]),e("div",{staticClass:"col-md-6 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-blue"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Active Cases")]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.active))])]),t._m(3)])])]),e("div",{staticClass:"col-md-6 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-red"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Critical Cases")]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.critical))])]),t._m(4)])])]),e("div",{staticClass:"col-md-6 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-red"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Total tests")]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.tests))])]),t._m(5)])])]),e("div",{staticClass:"col-md-6 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-orange"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Tests/Million")]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.testsPerOneMillion))])]),t._m(6)])])]),e("div",{staticClass:"col-md-6 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-orange"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Deaths/Million")]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.casesPerOneMillion))])]),t._m(7)])])]),e("div",{staticClass:"col-md-12 col-12 mt-4"},[e("div",{staticClass:"shadow stats-card border-light-green"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-9"},[e("span",[t._v("Cases/Million worldwide")]),e("h6",{staticClass:"font-weight-bolder"},[t._v(t._s(t.worldstats.deathsPerOneMillion))])]),t._m(8)])])])])])]),e("div",{staticClass:"col-md-6 col-12 my-auto"},[e("img",{staticClass:"img-fluid",attrs:{src:s("0039"),alt:"stats",width:"500",height:"400"}}),e("h6",{staticClass:"text-right my-2"},[e("em",[t._v("Updated at "+t._s(t._f("formatDate")(t.worldstats.updated)))])])])])]):e("div",{staticClass:"text-center"},[e("img",{staticClass:"img-fluid",attrs:{src:s("ca1e"),alt:"wait..",width:"200"}}),e("h3",{staticClass:"text-center text-danger"},[t._v("Please wait...")])]),e("div",{staticClass:"container-md cardbox"},[e("div",{staticClass:"table-responsive-sm worldTable shadow mt-5 bg-white"},[t._m(9),e("div",{staticClass:"h4 mx-3 pt-3 clearfix"},[t._v("Worldwide Report "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control float-right input-search",attrs:{type:"text",placeholder:"Search country ...."},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})]),e("table",{staticClass:"table table-bordered p-0",attrs:{id:"worldTable"}},[t._m(10),t.receivedData?e("tbody",t._l(t.filteredList,(function(a,s){return e("tr",{key:s,staticClass:"font-small"},[e("td",{staticClass:"font-weight-bold country-small-device pointer",attrs:{"data-target":"#fulldetails","data-toggle":"modal"},on:{click:function(s){return t.getData(t.name=a.country)}}},[e("img",{staticClass:"img-fluid mr-2 d-none d-md-block",attrs:{src:a.countryInfo.flag,width:"45"}}),t._v(t._s(a.country))]),e("td",{staticClass:"text-center font-small"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-12"},[t._v(" "+t._s(a.cases)+" ")]),e("div",{staticClass:"col-md-4 col-12"},[e("span",{staticClass:"text-update"},[e("i",{staticClass:"fas fa-arrow-up"}),t._v(" "+t._s(a.todayCases))])])])]),e("td",{staticClass:"text-center font-small"},[t._v(t._s(a.active))]),e("td",{staticClass:"text-center font-small"},[t._v(t._s(a.recovered)+" ")]),e("td",{staticClass:"text-center font-small"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-12"},[t._v(" "+t._s(a.deaths)+" ")]),e("div",{staticClass:"col-md-4 col-12"},[e("span",{staticClass:"text-update"},[e("i",{staticClass:"fas fa-arrow-up"}),t._v(" "+t._s(a.todayDeaths))])])])]),e("td",{staticClass:"last-update"},[t._v(t._s(t._f("formatDate")(a.updated)))]),e("td",{staticClass:"action"},[e("button",{staticClass:"btn btn-primary btn-sm",attrs:{"data-target":"#fulldetails","data-toggle":"modal"},on:{click:function(s){return t.getData(t.name=a.country)}}},[t._v(" More")])])])})),0):e("tbody",{staticClass:"text-center"},[t._m(11)]),t._m(12)])])]),e("Statistics"),e("div",{staticClass:"modal fade",attrs:{id:"fulldetails"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content border-0"},[t.dataRec?e("div",{staticClass:"modal-body"},[e("h4",[t._v(t._s(t.selecteddata.country)+" Full Report"),t._m(13)]),e("div",{staticClass:"p-3"},[e("table",{staticClass:"table table-borderless table-sm",attrs:{id:"worldTable"}},[e("thead",[e("tr",[e("th",[t._v(t._s(t.selecteddata.country)+" Flag")]),e("td",[e("img",{staticClass:"img-fluid mr-2",attrs:{src:t.selecteddata.countryInfo.flag,width:"45"}})])]),e("tr",[e("th",[t._v("New cases")]),e("td",[t._v(t._s(t.selecteddata.todayCases))])]),e("tr",[e("th",[t._v("Today deaths")]),e("td",[t._v(t._s(t.selecteddata.todayDeaths))])]),e("tr",[e("th",[t._v("Total cases")]),e("td",[t._v(t._s(t.selecteddata.cases))])]),e("tr",[e("th",[t._v("Critical cases")]),e("td",[t._v(t._s(t.selecteddata.critical))])]),e("tr",[e("th",[t._v("Cases per 1 million")]),e("td",[t._v(t._s(t.selecteddata.casesPerOneMillion))])]),e("tr",[e("th",[t._v("Deaths per 1 million")]),e("td",[t._v(t._s(t.selecteddata.deathsPerOneMillion))])]),e("tr",[e("th",[t._v("Active cases")]),e("td",[t._v(t._s(t.selecteddata.active))])]),e("tr",[e("th",[t._v("Recovered cases")]),e("td",[t._v(t._s(t.selecteddata.recovered))])]),e("tr",[e("th",[t._v("Deceased cases")]),e("td",[t._v(t._s(t.selecteddata.deaths))])]),e("tr",[e("th",[t._v("Tests")]),e("td",[t._v(t._s(t.selecteddata.tests))])]),e("tr",[e("th",[t._v("Tests per 1 million")]),e("td",[t._v(t._s(t.selecteddata.testsPerOneMillion))])]),e("tr",[e("th",[t._v("Last update")]),e("td",[t._v(t._s(t._f("formatDate")(t.selecteddata.updated)))])])])])])]):e("div",{staticClass:"text-center"},[e("img",{staticClass:"img-fluid",attrs:{src:s("ca1e"),alt:"wait..",width:"100"}}),e("h4",{staticClass:"text-center text-danger"},[t._v("Please wait..")])])])])])],1)},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-plus-square fa-lg text-secondary"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-bed fa-lg text-dark"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-shield-virus fa-lg text-primary"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-hospital-user fa-lg text-primary"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-skull-crossbones fa-lg text-danger"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-vial fa-lg text-danger"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-vials fa-lg text-warning"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-book-dead fa-lg text-warning"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-3 col-3 my-auto"},[s("span",[s("i",{staticClass:"fas fa-temperature-low fa-lg text-light-green"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("small",{staticClass:"font-weight-bolder d-md-none d-sm-block pl-3"},[t._v("Please note ")]),s("ul",{staticClass:"list-unstyled d-md-none d-sm-block d-flex mt-3"},[s("li",{staticClass:"px-2 mx-2"},[s("small",[s("span",{staticClass:"bg-white font-weight-bolder p-2"},[t._v("TC")]),t._v(" Total Cases")])]),s("li",{staticClass:"px-2 mx-2"},[s("small",[s("span",{staticClass:"bg-white font-weight-bolder p-2"},[t._v("AC")]),t._v(" Active Cases")])]),s("li",{staticClass:"px-2 mx-2"},[s("small",[s("span",{staticClass:"bg-white font-weight-bolder p-2"},[t._v("RC")]),t._v(" Recovered Cases")])]),s("li",{staticClass:"px-2 mx-2"},[s("small",[s("span",{staticClass:"bg-white font-weight-bolder p-2"},[t._v("DC")]),t._v(" Deceased Cases")])])]),s("small",{staticClass:"font-weight-bolder d-md-none d-sm-block pl-3"},[t._v("Click on any country name to see full details")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"bg-light"},[s("tr",[s("th",[s("span",{staticClass:"d-none d-md-block lbtn"},[t._v("Country")]),s("span",{staticClass:"text-dark font-weight-bolder d-md-none d-sm-block"},[t._v("Country")])]),s("th",[s("span",{staticClass:"d-none d-md-block lbtn"},[t._v("Total")]),s("span",{staticClass:"text-dark font-weight-bolder d-md-none d-sm-block"},[t._v("TC")])]),s("th",[s("span",{staticClass:"d-none d-md-block lbtn"},[t._v("Active")]),s("span",{staticClass:"text-primary font-weight-bolder d-md-none d-sm-block"},[t._v("AC")])]),s("th",[s("span",{staticClass:"d-none d-md-block lbtn "},[t._v("Recovered")]),s("span",{staticClass:"text-success font-weight-bolder d-md-none d-sm-block"},[t._v("RC")])]),s("th",[s("span",{staticClass:"d-none d-md-block lbtn"},[t._v("Deceased")]),s("span",{staticClass:"text-danger font-weight-bolder d-md-none d-sm-block"},[t._v("DC")])]),s("th",{staticClass:"lbtn last-update"},[t._v("Last update ")]),s("th",{staticClass:"d-none d-md-block"},[t._v("Action")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"7"}},[e("img",{staticClass:"img-fluid",attrs:{src:s("ca1e"),alt:"wait..",width:"100"}}),e("div",{staticClass:"h5 text-center text-danger"},[t._v("Please wait fetching latest data")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tfoot",[s("tr",[s("th",[s("span",{staticClass:"d-none d-md-block lbtn"},[t._v("Country")]),s("span",{staticClass:"text-dark font-weight-bolder d-md-none d-sm-block"},[t._v("Country")])]),s("th",[s("span",{staticClass:"d-none d-md-block lbtn"},[t._v("Total")]),s("span",{staticClass:"text-dark font-weight-bolder d-md-none d-sm-block"},[t._v("TC")])]),s("th",[s("span",{staticClass:"d-none d-md-block lbtn"},[t._v("Active")]),s("span",{staticClass:"text-primary font-weight-bolder d-md-none d-sm-block"},[t._v("AC")])]),s("th",[s("span",{staticClass:"d-none d-md-block lbtn "},[t._v("Recovered")]),s("span",{staticClass:"text-success font-weight-bolder d-md-none d-sm-block"},[t._v("RC")])]),s("th",[s("span",{staticClass:"d-none d-md-block lbtn"},[t._v("Deceased")]),s("span",{staticClass:"text-danger font-weight-bolder d-md-none d-sm-block"},[t._v("DC")])]),s("th",{staticClass:"lbtn last-update"},[t._v("Last update")]),s("th",{staticClass:"d-none d-md-block"},[t._v("Action")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"float-right text-danger",attrs:{"data-dismiss":"modal"}},[s("i",{staticClass:"fas fa-times fa-lg"})])}],d=(s("4de4"),s("caad"),s("ac1f"),s("2532"),s("841c"),s("bc3a")),n=s.n(d),v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[t._m(0),t.arrDaily.length>0?s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"text-center"},[t._v("Daily Analysis")]),s("Mixedchart",{attrs:{chartData:t.arrDaily,options:t.chartOptions,chartColors:t.positiveChartColors,label:""}})],1)]):t._e(),t.arrPositive.length>0?s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-md-6 col-12 mx-auto"},[s("h2",{staticClass:"text-center"},[t._v("Total Confirmed")]),s("Linechart",{attrs:{chartData:t.arrPositive,options:t.chartOptions,chartColors:t.positiveChartColors,label:"Confirmed Cases"}})],1),s("div",{staticClass:"col-md-6 col-12 mx-auto"},[s("h2",{staticClass:"text-center"},[t._v("Total Active")]),s("Linechart",{attrs:{chartData:t.arrActive,options:t.chartOptions,chartColors:t.activeColors,label:"Active Cases"}})],1)]):t._e(),t.arrRecovered.length>0?s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-md-6 col-12 mx-auto"},[s("h2",{staticClass:"text-center"},[t._v("Total Recovered")]),s("Linechart",{attrs:{chartData:t.arrRecovered,options:t.chartOptions,chartColors:t.recoveredColors,label:"Recovered Cases"}})],1),s("div",{staticClass:"col-md-6 col-12 mx-auto"},[s("h2",{staticClass:"text-center"},[t._v("Total Deaths")]),t.arrDeaths.length>0?s("Linechart",{attrs:{chartData:t.arrDeaths,options:t.chartOptions,chartColors:t.deathColors,label:"Deaths Cases"}}):t._e()],1)]):t._e()])},C=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-12 col-md-12 d-flex"},[s("h1",{},[t._v("Deep Analysis")])])])}],h=(s("4160"),s("159b"),s("c1df")),u=s.n(h),m=(s("d81d"),s("fb6a"),s("1fca")),f={extends:m["a"],props:{label:{type:String},chartData:{type:Array},options:{type:Object},chartColors:{type:Object}},mounted:function(){var t=this.chartData.map((function(t){return t.date})).reverse().slice(-60),a=this.chartData.map((function(t){return t.total})).reverse().slice(-60),s=this.chartColors,e=s.borderColor,o=s.pointBorderColor,r=s.pointBackgroundColor,l=s.backgroundColor,i=s.pointHoverBackgroundColor;this.renderChart({labels:t,datasets:[{label:this.label,data:a,fill:!0,borderColor:e,pointBorderColor:o,pointBackgroundColor:r,backgroundColor:l,pointHoverBackgroundColor:i}]},this.options)}},p=f,_=s("2877"),b=Object(_["a"])(p,e,o,!1,null,null,null),g=b.exports,w={extends:m["a"],props:{label:{type:String},chartData:{type:Array},options:{showTooltips:!0,DrawOnChartArea:!1},chartColors:{type:Object}},mounted:function(){var t=this.chartData.map((function(t){return t.date})).reverse().slice(-40),a=this.chartData.map((function(t){return t.active})).reverse().slice(-40),s=this.chartData.map((function(t){return t.recover})).reverse().slice(-40),e=this.chartData.map((function(t){return t.deaths})).reverse().slice(-40),o=this.chartColors,r=o.borderColor,l=o.pointBorderColor,i=o.pointBackgroundColor,c=o.pointHoverBackgroundColor;this.renderChart({labels:t,datasets:[{label:"Daily Analysis : Active",DrawOnChartArea:!1,data:a,fill:!1,borderColor:r,pointBorderColor:l,pointBackgroundColor:i,pointHoverBackgroundColor:c,order:1},{label:"Daily Analysis : Recover",data:s,DrawOnChartArea:!1,fill:!1,borderColor:"#196F3D",pointBorderColor:"#196F3D",pointBackgroundColor:"#28B463",pointHoverBackgroundColor:"#fff",order:2},{label:"Daily Analysis : Deaths",data:e,DrawOnChartArea:!1,fill:!1,borderColor:"#000",pointBorderColor:"#000",pointBackgroundColor:"#2C3E50",pointHoverBackgroundColor:"#fff",order:3}]},this.options)}},x=w,y=Object(_["a"])(x,r,l,!1,null,null,null),D=y.exports,k={data:function(){return{countrydata:{},arrPositive:[],arrDaily:[],positiveChartColors:{borderColor:"#0000ff",pointBorderColor:"#0000ff",pointBackgroundColor:"#007bff",backgroundColor:"#007bff"},arrRecovered:[],recoveredColors:{borderColor:"#196F3D",pointBorderColor:"#196F3D",pointBackgroundColor:"#28B463",backgroundColor:"#28B463"},arrDeaths:[],deathColors:{borderColor:"#000",pointBorderColor:"#000",pointBackgroundColor:"#fff",backgroundColor:"#212F3D"},arrActive:[],activeColors:{borderColor:"#D35400",pointBorderColor:"#D35400",pointBackgroundColor:"#E59866",backgroundColor:"#E59866 "},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},components:{Linechart:g,Mixedchart:D},mounted:function(){this.onChange(this.countryname)},methods:{onChange:function(t){var a=this;this.countryname=t;var s="https://corona-api.com/timeline";n()({method:"get",url:s}).then((function(t){a.countrydata=t.data.data,a.countrydata.forEach((function(t){var s=u()(t.date,"YYYYMMDD").format("MM/DD"),e=t.confirmed,o=t.recovered,r=t.deaths,l=t.new_confirmed,i=t.new_recovered,c=t.new_deaths;a.arrPositive.push({date:s,total:e}),a.arrRecovered.push({date:s,total:o}),a.arrDeaths.push({date:s,total:r});var d=0;a.arrActive.push({date:s,total:d+=t.confirmed-t.recovered-t.deaths}),a.arrDaily.push({date:s,active:l,recover:i,deaths:c})}))})).catch((function(t){a.errors=t}))}}},B=k,A=Object(_["a"])(B,v,C,!1,null,null,null),O=A.exports,T={name:"Worldwide",data:function(){return{worldstats:"",isLoaded:!1,countrydata:{},selecteddata:{},receivedData:!1,dataRec:!1,errors:"",search:""}},components:{Statistics:O},created:function(){var t=this,a="https://corona.lmao.ninja/v2/all";n()({method:"get",url:a}).then((function(a){t.worldstats=a.data,t.isLoaded=!0})).catch((function(a){t.errors=a}));var s="https://corona.lmao.ninja/v2/countries?sort=country";n()({method:"get",url:s}).then((function(a){t.countrydata=a.data,t.receivedData=!0})).catch((function(a){t.errors=a}))},computed:{filteredList:function(){var t=this;return this.countrydata.filter((function(a){return a.country.toLowerCase().includes(t.search.toLowerCase())}))}},methods:{getData:function(t){var a=this,s="https://corona.lmao.ninja/v2/countries/"+t;n()({method:"get",url:s}).then((function(t){a.selecteddata=t.data,a.dataRec=!0})).catch((function(t){a.errors=t}))},alertDisplay:function(){this.$swal.fire({position:"center",title:"Data fetched Please click again to see details.",showConfirmButton:!1,timer:2e3,timerProgressBar:!0}),this.$swal.showLoading()}}},E=T,R=(s("e7ef"),Object(_["a"])(E,i,c,!1,null,"8afd07d4",null));a["default"]=R.exports}}]);
//# sourceMappingURL=Worldwide.a01728cf.js.map