(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,a,e){},15:function(t,a,e){},49:function(t,a,e){"use strict";var s=e(14);e.n(s).a},50:function(t,a,e){"use strict";var s=e(15);e.n(s).a},51:function(t,a,e){},91:function(t,a,e){"use strict";e.r(a);var s=e(9),i=e(8),n=function(){var t=this.$createElement,a=this._self._c||t;return a("main",[this.loading?a("div",{staticClass:"splash-screen"}):a("home")],1)};n._withStripped=!0;var r=e(43),c=e.n(r),o=e(44),u=e.n(o),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content",class:"theme--"+t.weatherData.weather[0].main.toLowerCase()},[e("header",{staticClass:"home-header"},[e("div",{staticClass:"city",attrs:{"uk-grid":""}},[e("span",{staticClass:"city-name uk-width-5-6"},[t._v("\n        "+t._s(t.getLocalizedName(t.weatherData.name))+"\n      ")]),t._v(" "),e("div",{staticClass:"temperature-unit-switch uk-flex uk-flex-right uk-width-1-6"},[e("div",{staticClass:"switch"},[e("span",{staticClass:"metric",class:"metric"===t.currentUnits?"selected":"",on:{click:function(a){t.currentUnits="metric"}}},[t._v("°C")]),t._v(" "),e("span",{staticClass:"imperial",class:"imperial"===t.currentUnits?"selected":"",on:{click:function(a){t.currentUnits="imperial"}}},[t._v("°F")])])])]),t._v(" "),e("div",{staticClass:"city-select uk-flex"},[e("button",{staticClass:"w-label",attrs:{type:"button"}},[t._v("Сменить город")]),t._v(" "),e("div",{attrs:{"uk-dropdown":""}},[e("ul",{staticClass:"uk-nav uk-dropdown-nav"},t._l(t.cityNames,function(a,s){return e("li",{key:s,on:{click:function(a){t.currentCity=s}}},[e("a",[t._v(t._s(a))])])}),0)]),t._v(" "),e("div",{staticClass:"my-location"},[e("span",{staticClass:"w-label",staticStyle:{cursor:"pointer"},on:{click:t.resetWeather}},[t._v("\n          Моё местоположение\n        ")])])])]),t._v(" "),e("section",{staticClass:"home-main"},[e("div",{staticClass:"temperature"},[e("div",{staticClass:"temperature-icon"},[e("i",{staticClass:"wi",class:t.conditionIcons[t.weatherData.weather[0].main]})]),t._v(" "),e("div",{staticClass:"temperature-text"},[t._v(t._s(Math.round(t.weatherData.main.temp||0))+"°")])]),t._v(" "),e("div",{staticClass:"weather-condition"},[t._v(t._s(t.weatherData.weather[0].description))])]),t._v(" "),e("footer",{staticClass:"home-footer"},[e("div",{staticClass:"weather-data uk-child-width-1-2 uk-child-width-1-4@s",attrs:{"uk-grid":""}},[e("div",{staticClass:"wind"},[e("span",{staticClass:"w-label"},[t._v("\n          Ветер\n        ")]),t._v(" "),e("div",{staticClass:"value"},[e("span",{staticClass:"wind-speed"},[t._v("\n            "+t._s(t.weatherData.wind.speed)+",\n          ")]),t._v(" "),e("span",{staticClass:"wind-direction"},[e("i",{staticClass:"wi wi-wind-direction",style:"transform: rotate("+t.weatherData.wind.deg+"deg);"})])])]),t._v(" "),e("div",{staticClass:"pressure"},[e("span",{staticClass:"w-label"},[t._v("\n          Давление\n        ")]),t._v(" "),e("div",{staticClass:"value"},[t._v("\n          "+t._s(t.weatherData.main.pressure)+"\n        ")])]),t._v(" "),e("div",{staticClass:"humidity"},[e("span",{staticClass:"w-label"},[t._v("\n          Влажность\n        ")]),t._v(" "),e("div",{staticClass:"value"},[t._v("\n          "+t._s(t.weatherData.main.humidity)+"%\n        ")])]),t._v(" "),e("div",{staticClass:"visibility"},[e("span",{staticClass:"w-label"},[t._v("\n          Видимость\n        ")]),t._v(" "),e("div",{staticClass:"value"},[t._v("\n          "+t._s(t.weatherData.visibility)+" км.\n        ")])])])])])};l._withStripped=!0;e(24);var d=e(2),h=e.n(d),v={name:"Home",data:function(){return{loading:!0,conditionIcons:{Clear:"wi-day-sunny",Rain:"wi-rain",Clouds:"wi-cloudy"},cityNames:{Moscow:"Москва",Krasnodar:"Краснодар",Omsk:"Омск","Petropavlovsk-Kamchatsky":"Петропавловск-Камчатский"}}},computed:{weatherData:function(){return this.$store.state.weatherData},currentCity:{get:function(){return this.$store.state.currentCity||h.a.get("currentCity")||"Moscow"},set:function(t){h.a.get("currentCity")!==t&&this.$store.dispatch("fetchWeatherData",{city:t})}},currentUnits:{get:function(){return this.$store.state.currentUnits||h.a.get("currentUnits")||"metric"},set:function(t){h.a.get("currentUnits")!==t&&this.$store.dispatch("fetchWeatherData",{units:t})}}},methods:{getLocalizedName:function(t){return this.cityNames[t]||t},resetWeather:function(){h.a.remove("currentCity"),this.$store.dispatch("fetchWeatherData")}},created:function(){var t=this;this.$store.dispatch("fetchWeatherData").then(function(){return t.loading=!1})}},p=(e(49),e(16)),w=Object(p.a)(v,l,[],!1,null,"4d836531",null);w.options.__file="src/app/pages/Home.vue";var m=w.exports;c.a.use(u.a);var C={name:"app",components:{Home:m},computed:{loading:function(){return this.$store.state.loading}}},f=(e(50),Object(p.a)(C,n,[],!1,null,"7e7f006c",null));f.options.__file="src/app/App.vue";var _=f.exports,y=(e(51),e(52),e(71),e(72),e(45)),g=e.n(y),k=new(e(22).a)("weather_db");k.version(1).stores({weather:"city,date",profile:"id"});s.a.use(i.a);var D=new i.a.Store({state:{loading:!0,currentCity:"",currentUnits:"",weatherData:{main:{},weather:[{}],wind:{}}},mutations:{updateWeather:function(t,a){t.weatherData=a},updateCurrentCity:function(t,a){t.currentCity=a},updateCurrentUnits:function(t,a){t.currentUnits=a}},actions:{fetchWeatherData:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=a.city,s=void 0===e?h.a.get("currentCity"):e,i=a.units,n=void 0===i?h.a.get("currentUnits"):i,r="/api/v1/get_weather?format=json";void 0!==s&&(r+="&city_name="+s),void 0!==n&&(r+="&units="+n),g.a.get(r).then(function(a){200===a.data.cod?(t.dispatch("setCurrentCity",a.data.name),void 0!==n&&t.dispatch("setCurrentUnits",n),t.commit("updateWeather",a.data)):console.error(a.data.cod,a.data.message)}).catch(function(t){return console.error(t)}).finally(function(){return t.state.loading=!1})},setCurrentCity:function(t,a){t.commit("updateCurrentCity",a),h.a.set("currentCity",a,{expires:365,path:"/"})},setCurrentUnits:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"metric";t.commit("updateCurrentUnits",a),h.a.set("currentUnits",a,{expires:365,path:"/"})}}});s.a.use(i.a);var b=new s.a({el:"#app",store:D,components:{App:_},beforeMount:function(){D.dispatch("fetchWeatherData")}});a.default=b}},[[91,1,2]]]);