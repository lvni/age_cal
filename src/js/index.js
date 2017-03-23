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
    return {
        days: days,
        weeks: weeks,
        years: years,
        seconds: seconds,
    };
}


var app = new Vue({
    el : "#app",
    data: {
        age: "",
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
                var hundredYearsOldDate = new Date();
                hundredYearsOldDate.setFullYear(
                    birthDate.getFullYear() + 100,
                    birthDate.getMonth(),
                    birthDate.getDay()
                );

                var ret = computDateDiff(today , birthDate);
                console.log(ret);

                var ret = computDateDiff(hundredYearsOldDate , today);
                console.log(ret);
            }
        }

    },
});
//hello();
