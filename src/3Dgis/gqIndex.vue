<template>

  <div id="mainContainer" class="mainContainer">
  <!-- lloworld111 -->
    <gisMod class="" ref="gisMod">

    </gisMod>
    <div class="" style="position:fixed;top:3%;right:0%;margin-right:10px;width:25%;">
        <searchBox @gis_focusTo="gisFocusTo" ></searchBox>
    </div>
    <div class="" style="position:fixed;bottom:3%;right:0%;margin-right:10px;">
        <cornerBox ref="cornerBox"></cornerBox>
    </div>
  </div>
</template>

<script>
import gisMod from '../gisModel/gisModThreeD.vue'
// import leftLayerTreePanel from './layerTreePanel.vue'
import searchBox from '../interfaceComponent/searchBox.vue'
import cornerBox from '../interfaceComponent/cornerBox.vue'
export default {
  components: {
    // <my-component> 将只在父模板可用
    'gisMod':gisMod,
    'searchBox':searchBox,
    'cornerBox':cornerBox,
  },
  name: 'app',
  data () {
    return {

    }
  },
  methods:{
    gisFocusTo:function(data){
      // alert(data.keyword+"+"+data.type);
      this.$refs.gisMod.queryFeatures('river');
      this.$refs.cornerBox.showTestInformation();
    }
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

</style>
