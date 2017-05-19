<template>

  <div id="mainContainer" class="mainContainer">
  <!-- lloworld111 -->
    <gisMod class="">

    </gisMod>
    <!-- <div class="leftLayerTreePanelBack">

    </div>
    <div class="leftLayerTreePanel">
      <!水文水质站，蓝藻站、环湖河流、水利工程(引江济太)，水功能区（一级，二级、三级、四级），省界断面（断面，河流，湖泊）水源地、排污口、大型水库>
      <leftLayerTreePanel>

      </leftLayerTreePanel>
    </div> -->
  </div>
</template>

<script>
import gisMod from '../gisModel/gisModThreeD.vue'
import leftLayerTreePanel from './layerTreePanel.vue'
export default {
  components: {
    // <my-component> 将只在父模板可用
    'gisMod':gisMod,
    'leftLayerTreePanel':leftLayerTreePanel,
  },
  name: 'app',
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
  .mainContainer{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: stretch;
  }
  .leftLayerTreePanel{
    position: fixed;
    border-radius: 10px;

    top:1%;
    left:0.9%;
    height: 70%;
    width: 20%;

  }
  .leftLayerTreePanelBack{
    position: fixed;
    border-radius: 10px;
    background-color: #ECF0F1;
    top:1%;
    left:0.9%;
    height: 70%;
    width: 20%;
    opacity: 0.85;
  }
</style>
