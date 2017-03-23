import Vue from 'vue';
require("../css/main.less");
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


var app = new Vue({
    el : "#app",
    data: {
        age: "",
        live_info: "",
        can_live_info: "",
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
                return ;
            }
            if (today < birthDate) {
                console.log("时间不能大于今天");
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
                setTimeout(function(){
                    me.isActive = false;
                    var live_now = computDateDiff(today , birthDate);
                    me.live_info = live_now.days + "天," + live_now.weeks + "周," 
                                 + live_now.months + "月," + live_now.years + "年";
                    var live_hundred = computDateDiff(hundredYearsOldDate , today);
                    me.can_live_info = live_hundred.days + "天," + live_hundred.weeks + "周," 
                                     + live_hundred.months + "月," + live_hundred.years + "年";
                    me.long_time = live_now.days / (live_now.days + live_hundred.days) * 100;

                }, 300)
            }
        },
        showDatePicker: function() {

            var me = this;
            var today = new Date();
            weui.datePicker({
            start: today.getFullYear() - 150,
            end: new Date().getFullYear(),
            onChange: function (result) {
                console.log(result);
            },
            onConfirm: function (result) {
                me.age = result.join("/");
            }
        });
        }

    },
});
//hello();
