webpackJsonp([0],{1:function(e,t){},8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),s=o.n(n);o(1);var r=function(e,t){var o=Math.round((e.getTime()-t.getTime())/1e3),n=Math.floor(o/86400),s=Math.floor(n/7),r=e.getFullYear()-t.getFullYear();return{days:n,weeks:s,years:r,seconds:o,months:r?12*(r-1)+e.getMonth()+12-t.getMonth():e.getMonth()-t.getMonth()}};new s.a({el:"#app",data:{age:"",live_info:"",can_live_info:"",show_error:!1,show_result:!1,long_time:0,isActive:!1,level_days:0,currentRoute:window.location.pathname},methods:{submitAge:function(){var e=new Date,t=new Date(this.age);if(!this.age)return console.log("请选择日期"),this.error_msg="选择日期",void(this.show_error=!0);if(e<t)return this.error_msg="时间不能大于今天",console.log("时间不能大于今天"),void(this.show_error=!0);var o=this,n=new Date;n.setFullYear(t.getFullYear()+100,t.getMonth(),t.getDay()),o.isActive=!0,o.show_result=!1,setTimeout(function(){o.isActive=!1;var s=r(e,t);o.live_info=s.days+"天, "+s.weeks+"周, "+s.months+"月, "+s.years+"年";var a=r(n,e);o.can_live_info=a.days+"天, "+a.weeks+"周, "+a.months+"月, "+a.years+"年",o.long_time=s.days/(s.days+a.days)*100,console.log(o.long_time),o.show_result=!0},300)},showDatePicker:function(){var e=this,t=new Date;weui.datePicker({start:t.getFullYear()-70,end:(new Date).getFullYear(),onChange:function(e){console.log(e)},onConfirm:function(t){e.age=t.join("/")}})},closeMsg:function(){this.show_error=!1}}})}},[8]);