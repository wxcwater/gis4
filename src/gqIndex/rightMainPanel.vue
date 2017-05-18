<template>
  <div class="rightPanelContainer">
        <div style="display:flex;align-items:center;">
            <p id = 'title' >工情情况</p>
            
        </div>

        <div class="tabPanel">
            <div class="tabButton tabButton-active">
              测站监视
            </div>
            <div class="tabButton">
              工程情况
            </div>
            <div class="tabButton">
              调令情况
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
          title: { text: '工程引供水情况' },
          tooltip: {
            trigger:'axis'
          },
          xAxis: {
              data: ["4月18日","4月19日","4月20日","4月21日","4月22日","4月23日"]
          },
          legend:{
            show:true,
            data:['工程引水','工程供水','太湖水位'],
            right:'5%',
            top:'5%',
          },
          backgroundColor:'',
          yAxis: {},
          series: [{
              name: '工程引水',
              type: 'bar',
              itemStyle:{
                normal:{
                  color:'#27AE60',
                }
              },
              data: [5, 20, 36, 10, 10, 20]
          },
          {
              name: '工程供水',
              type: 'bar',
              itemStyle:{
                normal:{
                  color:'#34495E',
                }
              },
              data: [5, 20, 36, 10, 10, 20]
          },
          {
              name: '太湖水位',
              type: 'line',
              itemStyle:{
                normal:{
                  color:'#2980B9',
                }
              },
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    }
  },
  mounted:function(){
    // this.initChart();
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
      color: white;
      font-size: 1.7rem;
      font-weight: bolder;
      font-family: serif;
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
    .tabButton{
      flex-basis: 50%;
      display: flex;
      border-radius: 0px 20px 0px 0px ;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: #34495E;
      height: 100%;
    }
    .tabButton-active{
      background-color: #1abc9c;
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
      border-color: #1abc9c;
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
