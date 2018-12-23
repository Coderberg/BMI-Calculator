webpackJsonp([0],[,,,function(t,e,s){"use strict";var a=s(4),i=s(6);e.a={name:"App",components:{Calculator:a.a,Categories:i.a}}},function(t,e,s){"use strict";function a(t){s(17)}var i=s(5),l=s(18),n=s(1),r=a,d=n(i.a,l.a,!1,r,null,null);e.a=d.exports},function(t,e,s){"use strict";e.a={name:"Calculator",data:function(){return{height:"",weight:"",bmi:"",message:"",className:"red"}},methods:{isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},isValid:function(t){return!!(""!==t&&this.isNumeric(t)&&t>3)},calculate:function(){this.isValid(this.height)&&this.isValid(this.weight)&&(this.bmi=(this.weight/(this.height/100*(this.height/100))).toFixed(2),this.createMessage(this.bmi))},createMessage:function(t){t>59.99?(this.message="Obese Class VI (Hyper Obese)",this.className="red"):t>49.99?(this.message="Obese Class V (Super Obese)",this.className="red"):t>44.99?(this.message="Obese Class IV (Morbidly Obese)",this.className="red"):t>39.99?(this.message="Obese Class III (Very severely obese)",this.className="red"):t>34.99?(this.message="Obese Class II (Severely obese)",this.className="red"):t>29.99?(this.message="Obese Class I (Moderately obese)",this.className="red"):t>24.99?(this.message="Overweight",this.className="red"):t>18.49?(this.message="Normal (healthy weight)",this.className="green"):t>15.99?(this.message="Underweight",this.className="red"):t>14.99?(this.message="Severely underweight",this.className="red"):(this.message="Very severely underweight",this.className="red")},reset:function(){this.height="",this.weight="",this.bmi="",this.message=""}}}},function(t,e,s){"use strict";function a(t){s(19)}var i=s(7),l=s(20),n=s(1),r=a,d=n(i.a,l.a,!1,r,null,null);e.a=d.exports},function(t,e,s){"use strict";e.a={name:"Categories"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(9),i=(s.n(a),s(11)),l=(s.n(i),s(12)),n=(s.n(l),s(2)),r=s(16),d=s(22);n.a.config.productionTip=!1,new n.a({el:"#app",router:d.a,template:"<App/>",components:{App:r.a}})},function(t,e){},,function(t,e){},,,,,function(t,e,s){"use strict";var a=s(3),i=s(21),l=s(1),n=l(a.a,i.a,!1,null,null,null);e.a=n.exports},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--5-col-desktop"},[s("form",{on:{submit:function(e){e.preventDefault(),t.calculate()}}},[s("div",{staticClass:"mdl-card__title mdl-card--expand"},[s("h4",[t._v("\n        BMI - "+t._s(t.bmi)+" kg/m"),s("sup",[t._v("2")]),t._v(" "),s("br"),t._v(" "),t.message?s("span",{class:t.className},[t._v("\n          "+t._s(t.message)+"\n        ")]):s("span",{staticClass:"gray"},[t._v("\n          Enter your height and weight\n        ")])])]),t._v(" "),s("div",{staticClass:"mdl-card__supporting-text"},[s("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],staticClass:"mdl-textfield__input",attrs:{autocomplete:"off",type:"text",pattern:"-?[0-9]*(\\.[0-9]+)?",id:"height"},domProps:{value:t.height},on:{input:[function(e){e.target.composing||(t.height=e.target.value)},function(e){t.calculate()}]}}),t._v(" "),s("label",{staticClass:"mdl-textfield__label",attrs:{for:"height"}},[t._v("Height (cm)")]),t._v(" "),s("span",{staticClass:"mdl-textfield__error"},[t._v("Input is not a number!")])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"mdl-textfield__input",attrs:{autocomplete:"off",type:"text",pattern:"-?[0-9]*(\\.[0-9]+)?",id:"weight"},domProps:{value:t.weight},on:{input:[function(e){e.target.composing||(t.weight=e.target.value)},function(e){t.calculate()}]}}),t._v(" "),s("label",{staticClass:"mdl-textfield__label",attrs:{for:"weight"}},[t._v("Weight (kg)")]),t._v(" "),s("span",{staticClass:"mdl-textfield__error"},[t._v("Input is not a number!")])]),t._v(" "),s("br"),t._v(" "),s("a",{staticClass:"mdl-button mdl-js-button mdl-button--raised",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.reset()}}},[t._v("\n        Reset\n      ")])])])])},i=[],l={render:a,staticRenderFns:i};e.a=l},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-box"},[s("table",{staticClass:"mdl-data-table mdl-js-data-table mdl-shadow--2dp"},[s("tbody",[s("tr",[s("th",[t._v("Category\n        ")]),t._v(" "),s("th",{attrs:{colspan:"2"}},[t._v("BMI (kg/m"),s("sup",[t._v("2")]),t._v(")\n        ")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("th",[t._v("from")]),t._v(" "),s("th",[t._v("to\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Very severely underweight\n        ")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("15\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Severely underweight\n        ")]),t._v(" "),s("td",[t._v("15")]),t._v(" "),s("td",[t._v("16\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Underweight\n        ")]),t._v(" "),s("td",[t._v("16")]),t._v(" "),s("td",[t._v("18.5\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Normal (healthy weight)\n        ")]),t._v(" "),s("td",[t._v("18.5")]),t._v(" "),s("td",[t._v("25\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Overweight\n        ")]),t._v(" "),s("td",[t._v("25")]),t._v(" "),s("td",[t._v("30\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Obese Class I (Moderately obese)\n        ")]),t._v(" "),s("td",[t._v("30")]),t._v(" "),s("td",[t._v("35\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Obese Class II (Severely obese)\n        ")]),t._v(" "),s("td",[t._v("35")]),t._v(" "),s("td",[t._v("40\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Obese Class III (Very severely obese)\n        ")]),t._v(" "),s("td",[t._v("40")]),t._v(" "),s("td",[t._v("45\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Obese Class IV (Morbidly Obese)\n        ")]),t._v(" "),s("td",[t._v("45")]),t._v(" "),s("td",[t._v("50\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Obese Class V (Super Obese)\n        ")]),t._v(" "),s("td",[t._v("50")]),t._v(" "),s("td",[t._v("60\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Obese Class VI (Hyper Obese)\n        ")]),t._v(" "),s("td",[t._v("60")]),t._v(" "),s("td")])])])])}],l={render:a,staticRenderFns:i};e.a=l},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("main",{staticClass:"mdl-layout__content mdl-color--grey-100"},[s("div",{staticClass:"mdl-grid demo-content"},[s("router-view")],1)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"mdl-layout__header"},[s("div",{staticClass:"mdl-layout__header-row"},[s("span",{staticClass:"mdl-layout-title"},[t._v("BMI Calculator")]),t._v(" "),s("div",{staticClass:"mdl-layout-spacer"}),t._v(" "),s("nav",{staticClass:"mdl-navigation mdl-layout--large-screen-only"},[s("a",{staticClass:"mdl-navigation__link",attrs:{href:"https://github.com/Coderberg/BMI-Calculator",target:"_blank"}},[s("i",{staticClass:"material-icons"},[t._v("code")]),t._v(" Source code")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mdl-layout__drawer"},[s("span",{staticClass:"mdl-layout-title"},[t._v("BMI Calculator")]),t._v(" "),s("nav",{staticClass:"mdl-navigation"},[s("a",{staticClass:"mdl-navigation__link",attrs:{href:"#/"}},[s("i",{staticClass:"material-icons"},[t._v(" dialpad ")]),t._v(" Calculator")]),t._v(" "),s("a",{staticClass:"mdl-navigation__link",attrs:{href:"#/categories"}},[s("i",{staticClass:"material-icons"},[t._v(" format_list_bulleted ")]),t._v(" Categories")]),t._v(" "),s("a",{staticClass:"mdl-navigation__link",attrs:{href:"https://github.com/Coderberg/BMI-Calculator",target:"_blank"}},[s("i",{staticClass:"material-icons"},[t._v("code")]),t._v(" Source code")])])])}],l={render:a,staticRenderFns:i};e.a=l},function(t,e,s){"use strict";var a=s(2),i=s(23),l=s(4),n=s(6);a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Calculator",component:l.a},{path:"/categories",name:"Categories",component:n.a}]})}],[8]);
//# sourceMappingURL=app.b98e1e4c77a3e7b361ef.js.map