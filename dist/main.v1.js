webpackJsonp([0],{1:function(e,t){},2:function(e,t,o){e.exports=o.p+"58e66f7926fdf0895d694b22ce3a9390.jpg"},9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(3),r=o.n(n);o(1);var s=o(2);document.getElementById("cover").src=s;var a=function(e,t){var o=Math.round((e.getTime()-t.getTime())/1e3),n=Math.floor(o/86400),r=Math.floor(n/7),s=e.getFullYear()-t.getFullYear();return{days:n,weeks:r,years:s,seconds:o,months:s?12*(s-1)+e.getMonth()+12-t.getMonth():e.getMonth()-t.getMonth()}};new r.a({el:"#app",data:{age:"",live_info:"",can_live_info:"",show_error:!1,show_result:!1,long_time:0,isActive:!1,level_days:0,img:s,currentRoute:window.location.pathname},methods:{submitAge:function(){var e=new Date,t=new Date(this.age);if(!this.age)return console.log("请选择日期"),this.error_msg="选择日期",void(this.show_error=!0);if(e<t)return this.error_msg="时间不能大于今天",console.log("时间不能大于今天"),void(this.show_error=!0);var o=this,n=new Date;n.setFullYear(t.getFullYear()+100,t.getMonth(),t.getDay()),o.isActive=!0,o.show_result=!1,setTimeout(function(){o.isActive=!1;var r=a(e,t);o.live_info=r.days+"天, "+r.weeks+"周, "+r.months+"月, "+r.years+"年";var s=a(n,e);o.can_live_info=s.days+"天, "+s.weeks+"周, "+s.months+"月, "+s.years+"年",o.long_time=r.days/(r.days+s.days)*100,console.log(o.long_time),o.show_result=!0},300)},showDatePicker:function(){var e=this,t=new Date;weui.datePicker({start:t.getFullYear()-70,end:(new Date).getFullYear(),onChange:function(e){console.log(e)},onConfirm:function(t){e.age=t.join("/")}})},closeMsg:function(){this.show_error=!1}}})}},[9]);