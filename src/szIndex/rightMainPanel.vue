<template>
  <div class="rightPanelContainer">
        <div style="display:flex;align-items:center;">
            <p id = 'title' >监测数据</p>

        </div>

        <div class="tabPanel">
            <div class="tabButton tabButton-active">
              <p>水质站</p>
              <span class="navbar-unread" style="">1</span>
            </div>
            <div class="tabButton">
              排污口
              <span class="navbar-unread" style="">1</span>
            </div>
            <div class="tabButton">
              水源地
              <span class="navbar-unread" style="">1</span>
            </div>
        </div>
        <div class="contentPanel">
            <div style="flex-basis:50%">
              <component :is="currentView">

              </component>
            </div>


            <div id="chartDiv" style="flex-basis:50%;background-color:">

            </div>
        </div>

  </div>
</template>

<script>
import monitorPanel from './rightMainStationMonitorExp.vue'
var echarts = require('echarts');
export default {
  components: {
    // <my-component> 将只在父模板可用
    'monitor':monitorPanel,
  },
  name: 'rightMainPanel',
  data () {

    return {
      'currentView':'monitor',
    }
  },
  methods:{
    initChart:function(){
      var myChart = echarts.init(document.getElementById('chartDiv'));
      // 绘制图表
      myChart.setOption({
          title: {
              text: '达标情况'
          },
          legend:{
            show:true,
            data:['达标','超标'],
            x:'right'
          },
          grid:{
            top:'25%',
            bottom:'17%',
            left:'10%',
            right:'10%'
          },
          tooltip: {
              trigger: 'axis',
              // formatter: function (params) {
              //     params = params[0];
              //     var date = new Date(params.name);
              //     return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
              // },
              axisPointer: {
                  animation: false
              }
          },
          xAxis: {
              name:'',
              data:['I级','II级','III级','IV级','V级'],
              boundaryGap: ['50%', '50%'],
              splitLine: {
                  show: false
              }
          },
          yAxis: [{
              name:'',
              type: 'value',
              boundaryGap: [0, 0],
              splitLine: {
                  show: true
              }
          }],
          series: [{
              name: '达标',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
          },
          {
              name: '超标',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
          }]
      });
    }
  },
  mounted:function(){
    this.initChart();
  }
}
</script>

<style>
    .rightPanelContainer{
      display: flex;
      width: 100%;
      height:100%;
      border-radius: 10px;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
    }
    #title{
      color: black;
      font-size: 1.7rem;
      font-weight: bolder;
      font-family: inherit;
      margin: 10px;
      margin-left: 1.5rem;
    }
    .tabPanel{
      flex-basis: 5%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: stretch;

    }
    .navbar-unread{
      background-color: #e74c3c;
      border-radius: 30px;
      color: white;

      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      min-width: 8px;
      padding: 0 5px;
      margin-left: 0.5rem;

      text-align: center;
      text-shadow: none;

      z-index: 10;
    }
    .tabButton{
      flex-basis: 50%;
      display: flex;
      border-radius: 0px 20px 0px 0px ;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: #BDC3C7;
      height: 100%;
    }
    .tabButton-active{
      background-color: #3498DB;
    }
    .tabButton:hover{
      background-color: #1abc9c;
      cursor: pointer;
    }
    .contentPanel{
      flex-basis: 90%;
      border-radius: 1px;
      background-color: #ECF0F1;
      /*margin:5px;*/
      border:1px solid #F00;
      border-width: 5px;
      border-color: #3498DB;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
    }
    .itemList{
      height: auto;
      max-height: 480px;
      padding: 3px;
      display: block;
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .itemList .item{
      margin-top: 5px;
      flex-basis: 30%;
      border-width: 1px;
      border-style: dashed;
      border-color: #6fa8dc;
      padding: 3px;
      border-width: 1px;
      border-style: dashed;
    }
    .itemList .warnitem{
      margin-top: 5px;
      flex-basis: 30%;
      border-width: 1px;
      border-style: dashed;
      border-color: red;
      padding: 3px;
      border-width: 1px;
      border-style: dashed;
    }

    .itemList .item:hover{
      margin-top: 5px;
      flex-basis: 30%;
      border-width: 1px;
      border-style: dashed;
      background-color: #6fa8dc;
      color: white;
      padding: 3px;
      border-width: 1px;
      border-style: dashed;
    }
    .itemList .warnitem:hover{
      margin-top: 5px;
      flex-basis: 30%;
      border-width: 1px;
      border-style: dashed;
      background-color: red;
      padding: 3px;
      border-width: 1px;
      border-style: dashed;
    }
</style>
