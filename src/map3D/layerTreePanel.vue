<template>

  <div id="layerTreeMainContainer">
    <div class="layerTreetitlePanel">
      <p>图      层</p>
    </div>
    <div class="layerTreeContentPanel">

        <div class="LayerLevel1">
          <i class="fa fa-minus-square"></i><p class="layerTitle">水功能区</p><p class="subText">共614个</p>
        </div>
          <div class="LayerLevel2">
            <i class="fa fa-minus-square"></i><p class="layerTitle">一级水功能区</p><p class="subText">共380个</p>
          </div>
            <!-- <div class="LayerLevel3">
              <i class="fa fa-minus-square"></i><p class="layerTitle">太湖流域</p><p class="subText">共380个</p>
            </div> -->
          <div class="LayerLevel2">
            <i class="fa fa-minus-square"></i><p class="layerTitle">二级水功能区</p><p class="subText">共167个</p>
          </div>
          <div class="LayerLevel2">
            <i class="fa fa-minus-square"></i><p class="layerTitle">三级水功能区</p><p class="subText">共167个</p>
          </div>
          <div class="LayerLevel2">
            <i class="fa fa-minus-square"></i><p class="layerTitle">四级水功能区</p><p class="subText">共167个</p>
          </div>

        <div class="LayerLevel1">
          <i class="fa fa-minus-square"></i><p class="layerTitle">省界断面</p><p class="subText">共44个</p>
        </div>
          <div class="LayerLevel2">
            <i class="fa fa-minus-square"></i><p class="layerTitle">省界河流</p><p class="subText">共34个</p>
          </div>
          <div class="LayerLevel2">
            <i class="fa fa-minus-square"></i><p class="layerTitle">省界缓冲区</p><p class="subText">共44个</p>
          </div>
        <div class="LayerLevel1">
          <i class="fa fa-plus-square"></i><p class="layerTitle">环湖河流</p><p class="subText">共22条</p>
        </div>
        <div class="LayerLevel1">
          <i class="fa fa-plus-square"></i><p class="layerTitle">大型水库</p><p class="subText">共52个</p>
        </div>
        <div class="LayerLevel1">
          <i class="fa fa-plus-square"></i><p class="layerTitle">排污口</p><p class="subText">共70个</p>
        </div>
        <div class="LayerLevel1">
          <i class="fa fa-plus-square"></i><p class="layerTitle">水源地</p><p class="subText"></p>
        </div>
        <div class="LayerLevel1">
          <i class="fa fa-plus-square"></i><p class="layerTitle">取水用户</p><p class="subText"></p>
        </div>
        <div class="LayerLevel1">
          <i class="fa fa-plus-square"></i><p class="layerTitle">水质水量站</p><p class="subText"></p>
        </div>
        <div class="LayerLevel1">
          <i class="fa fa-plus-square"></i><p class="layerTitle">蓝藻监测站</p><p class="subText"></p>
        </div>
        <div class="LayerLevel1">
          <i class="fa fa-plus-square"></i><p class="layerTitle">工情监测站</p><p class="subText"></p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    // <my-component> 将只在父模板可用

  },
  name: 'leftLayerTreePanel',
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
  #layerTreeMainContainer{
    border-radius: 10px;
    /*background-color: #ECF0F1;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  .layerTreetitlePanel{
    margin: 0px;
    background-color: #3498DB;
    border-radius: 10px 10px 0px 0px;
  }
  .layerTreetitlePanel>p{
    font-size: 1.5rem;
    padding-left: 10px;
    color: #ECF0F1;
  }

  /*level1*/
  .LayerLevel1{
    padding-left: 1rem;
    padding-top: 0.5rem;
    color: #2980B9;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .LayerLevel1:hover{
    cursor: pointer;
    background-color: #BDC3C7;
    color: white;
  }
  .LayerLevel1 .subText{
    font-size: 0.7rem;
    color: #7F8C8D;
  }
  /*.LayerLevel1.subText::before{
    content: '(';

  }*/

  /*level2*/
  .LayerLevel2{
    padding-left: 1.5rem;
    padding-top: 0.5rem;
    color: #2980B9;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .LayerLevel2 .subText{
    font-size: 0.7rem;
    color: #7F8C8D;
  }



  .LayerLevel1:nth-child(even){

  }
</style>
