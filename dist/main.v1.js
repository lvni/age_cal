webpackJsonp([0],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./main.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/index.js!./main.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

__webpack_require__(1);
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
  '/': Home,
  '/about': About
}

/**
 * 计算两个日期的天数差
 * @param {*} date_to 
 * @param {*} date_from 
 */
var computDateDiff = function (date_to, date_from) {
    var seconds = Math.round((date_to.getTime() - date_from.getTime()) / 1000);
    var days = Math.floor(seconds / (24 * 3600));
    var weeks = Math.floor(days / 7);
    var years = date_to.getFullYear() - date_from.getFullYear();
    
    var months = years ?  ( (years - 1) * 12 +  date_to.getMonth() + 12 - date_from.getMonth())
             : date_to.getMonth() - date_from.getMonth();
    return {
        days: days,
        weeks: weeks,
        years: years,
        seconds: seconds,
        months: months
    };
}


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el : "#app",
    data: {
        age: "",
        live_info: "",
        can_live_info: "",
        show_error: false,
        show_result: false,
        long_time: 0,
        isActive: false,
        level_days: 0,
        currentRoute: window.location.pathname
    },
    
    methods: {
        submitAge: function(){
            var today = new Date();
            var birthDate = new Date(this.age);
            if (!this.age) {
                console.log("请选择日期");
                this.error_msg = "选择日期";
                this.show_error = true;
                return ;
            }
            if (today < birthDate) {
                this.error_msg = "时间不能大于今天";
                console.log("时间不能大于今天");
                this.show_error = true;
                return;
            } else {
                /*100岁的时间 */
                var me = this;
                var hundredYearsOldDate = new Date();
                hundredYearsOldDate.setFullYear(
                    birthDate.getFullYear() + 100,
                    birthDate.getMonth(),
                    birthDate.getDay()
                );
                me.isActive = true;
                me.show_result = false;
                setTimeout(function(){
                    me.isActive = false;
                    var live_now = computDateDiff(today , birthDate);
                    me.live_info = live_now.days + "天, " + live_now.weeks + "周, " 
                                 + live_now.months + "月, " + live_now.years + "岁";
                    var live_hundred = computDateDiff(hundredYearsOldDate , today);
                    me.can_live_info = live_hundred.days + "天, " + live_hundred.weeks + "周, " 
                                     + live_hundred.months + "月, " + live_hundred.years + "年";
                    me.long_time = live_now.days / (live_now.days + live_hundred.days) * 100;
                    console.log(me.long_time);
                    me.show_result = true;
                }, 300)
            }
        },
        showDatePicker: function() {

            var me = this;
            var today = new Date();
            weui.datePicker({
            start: today.getFullYear() - 70,
            end: new Date().getFullYear(),
            onChange: function (result) {
                console.log(result);
            },
            onConfirm: function (result) {
                me.age = result.join("/");
            }
        });
    },
    closeMsg: function(){
        this.show_error = false;
    }

    },
});
//hello();


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "#app {\n  text-align: center;\n  font-size: 20px;\n  margin-top: 20%;\n}\n.page__bd,\n.result {\n  width: 80%;\n  margin: 0 auto;\n}\n.page__bd > input,\n.result > input {\n  margin: 25px 0 ;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n}\n.result {\n  padding-top: 30px;\n  line-height: 48px;\n  text-align: left;\n}\n.result > .title {\n  font-size: 22px;\n  color: #1aad19;\n}\n", ""]);

// exports


/***/ })

},[11]);