<template>
  <div class="mainStateContainer">
    <div class="">
      <p>筛选条件:</p>
    </div>
    <div class="">
      <p style="font-size:1px;">经查询,总共x个取水用户,其中超计划用水y个</p>
    </div>
    <div class="itemList">
      <div class="item" v-bind:class="{ warnitem: item.totalWater>40}" v-for='(item,index) in filteredData'>
        <div style="display:flex;flex-direction:row;">
          <div class="indexNumber">
            <label>{{index}}</label>
          </div>
          <p class="indexName" style="">{{item.name}}</p>
        </div>
        <div style="display:flex;flex-direction:row;flex-wrap:wrap;">
          <div style="display:flex;flex-direction:row;flex-basis:70%;font-size:8px;"><p>最新监测时间:</p><p>{{item.mtime}}</p></div>
          <div style="display:flex;flex-direction:row;flex-basis:30%;font-size:8px;"><p>日取水量:</p> <p>{{item.dayWater}}</p></div>
          <div style="display:flex;flex-direction:row;flex-basis:50%;font-size:8px;"><p>当月累计取水量:</p> <p>{{item.mounthWater}}</p></div>
          <div style="display:flex;flex-direction:row;flex-basis:50%;font-size:8px;"><p>累计总取水量:</p> <p>{{item.totalWater}}</p></div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'waterUserMonitorPanel',
  props: ['echarts','addComponents'],
  components: {
    // <my-component> 将只在父模板可用

  },
  data:function(){
    let listData = [{
      'name':'福建华电永安发电有限公司',
      'code':'158142500',
      'hytype':'',
      'jktype':'直管',
      'jjtype':'国有全资',
      'qstype':'',
      'phone':'3626647',
      'address':'福建省永宁市兴坪',
      'chairman':'林茂绩',
      'allowWater':'1175',
      'planWater':'856',
      'mtime':'2017-04-10',
      'dayWater':'935',
      'mounthWater':'1.4966',
      'totalWater':'40.33851',
    },{
      'name':'福建华电永安发电有限公司',
      'code':'158142500',
      'hytype':'',
      'jktype':'直管',
      'jjtype':'国有全资',
      'qstype':'',
      'phone':'3626647',
      'address':'福建省永宁市兴坪',
      'chairman':'林茂绩',
      'allowWater':'1175',
      'planWater':'856',
      'mtime':'2017-04-10',
      'dayWater':'935',
      'mounthWater':'1.4966',
      'totalWater':'33.33851',
    },{
      'name':'福建华电永安发电有限公司',
      'code':'158142500',
      'hytype':'',
      'jktype':'直管',
      'jjtype':'国有全资',
      'qstype':'',
      'phone':'3626647',
      'address':'福建省永宁市兴坪',
      'chairman':'林茂绩',
      'allowWater':'1175',
      'planWater':'856',
      'mtime':'2017-04-10',
      'dayWater':'935',
      'mounthWater':'1.4966',
      'totalWater':'33.33851',
    },{
      'name':'福建华电永安发电有限公司',
      'code':'158142500',
      'hytype':'',
      'jktype':'直管',
      'jjtype':'国有全资',
      'qstype':'',
      'phone':'3626647',
      'address':'福建省永宁市兴坪',
      'chairman':'林茂绩',
      'allowWater':'1175',
      'planWater':'856',
      'mtime':'2017-04-10',
      'dayWater':'935',
      'mounthWater':'1.4966',
      'totalWater':'33.33851',
    },{
      'name':'福建华电永安发电有限公司',
      'code':'158142500',
      'hytype':'',
      'jktype':'直管',
      'jjtype':'国有全资',
      'qstype':'',
      'phone':'3626647',
      'address':'福建省永宁市兴坪',
      'chairman':'林茂绩',
      'allowWater':'1175',
      'planWater':'856',
      'mtime':'2017-04-10',
      'dayWater':'935',
      'mounthWater':'1.4966',
      'totalWater':'33.33851',
    }];
    return {
       'filteredData' : listData,
    };
  },

  methods:{

  }
}

</script>

<style>
  p{
    margin: 0px;
  }
  .mainStateContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
