/*
 Template Name: Annex - Bootstrap 4 Admin Dashboard
 Author: Mannatthemes
 Website: www.mannatthemes.com
 File: Float Js
 */

!function(t){"use strict";var a=function(){this.$body=t("body"),this.$realData=[]};a.prototype.createPlotGraph=function(a,e,o,r,l,i,s){t.plot(t(a),[{data:e,label:r[0],color:l[0]},{data:o,label:r[1],color:l[1]}],{series:{lines:{show:!0,fill:!0,lineWidth:2,fillColor:{colors:[{opacity:.5},{opacity:.5}]}},points:{show:!1},shadowSize:0},legend:{position:"nw"},grid:{hoverable:!0,clickable:!0,borderColor:i,borderWidth:1,labelMargin:10,backgroundColor:s},yaxis:{min:0,max:15,color:"rgba(0,0,0,0.1)"},xaxis:{color:"rgba(0,0,0,0.1)"},tooltip:!0,tooltipOpts:{content:"%s: Value of %x is %y",shifts:{x:-60,y:25},defaultTheme:!1}})},a.prototype.createPieGraph=function(a,e,o,r){var l=[{label:e[0],data:o[0]},{label:e[1],data:o[1]},{label:e[2],data:o[2]}],i={series:{pie:{show:!0}},legend:{show:!0},grid:{hoverable:!0,clickable:!0},colors:r,tooltip:!0,tooltipOpts:{content:"%s, %p.0%"}};t.plot(t(a),l,i)},a.prototype.randomData=function(){for(this.$realData.length>0&&(this.$realData=this.$realData.slice(1));this.$realData.length<300;){var t=(this.$realData.length>0?this.$realData[this.$realData.length-1]:50)+10*Math.random()-5;t<0?t=0:t>100&&(t=100),this.$realData.push(t)}for(var a=[],e=0;e<this.$realData.length;++e)a.push([e,this.$realData[e]]);return a},a.prototype.createRealTimeGraph=function(a,e,o){return t.plot(a,[e],{colors:o,series:{lines:{show:!0,fill:!0,lineWidth:2,fillColor:{colors:[{opacity:.45},{opacity:.45}]}},points:{show:!1},shadowSize:0},grid:{show:!0,aboveData:!1,color:"#dcdcdc",labelMargin:15,axisMargin:0,borderWidth:0,borderColor:null,minBorderMargin:5,clickable:!0,hoverable:!0,autoHighlight:!1,mouseActiveRadius:20},tooltip:!0,tooltipOpts:{content:"Value is : %y.0%",shifts:{x:-30,y:-50}},yaxis:{min:0,max:100,color:"rgba(0,0,0,0.1)"},xaxis:{show:!1}})},a.prototype.createDonutGraph=function(a,e,o,r){var l=[{label:e[0],data:o[0]},{label:e[1],data:o[1]},{label:e[2],data:o[2]},{label:e[3],data:o[3]},{label:e[4],data:o[4]}],i={series:{pie:{show:!0,innerRadius:.7}},legend:{show:!0,labelFormatter:function(t,a){return'<div style="font-size:14px;">&nbsp;'+t+"</div>"},labelBoxBorderColor:null,margin:50,width:20,padding:1},grid:{hoverable:!0,clickable:!0},colors:r,tooltip:!0,tooltipOpts:{content:"%s, %p.0%"}};t.plot(t(a),l,i)},a.prototype.init=function(){this.createPlotGraph("#website-stats",[[0,9],[1,8],[2,5],[3,8],[4,5],[5,14],[6,10]],[[0,5],[1,12],[2,4],[3,3],[4,12],[5,8],[6,4]],["Marketplace","Other Market"],["#ebeff2","#424858"],"#f5f5f5","#fff");this.createPieGraph("#pie-chart #pie-chart-container",["Marketplace","Other Market","Direct Sales"],[20,30,15],["#ffbb44","#5b6be8","#f0f1f4"]);var a=this.createRealTimeGraph("#flotRealTime",this.randomData(),["#5b6be8"]);a.draw();var e=this;!function o(){a.setData([e.randomData()]),a.draw(),setTimeout(o,(t("html").hasClass("mobile-device"),1e3))}();this.createDonutGraph("#donut-chart #donut-chart-container",["Marketplace","Other Market","Direct Sales"],[29,20,18],["#f32f53","#0f9cf3","#f0f1f4"])},t.FlotChart=new a,t.FlotChart.Constructor=a}(window.jQuery),function(t){"use strict";t.FlotChart.init()}(window.jQuery);



