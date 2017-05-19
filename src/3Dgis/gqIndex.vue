<template>

  <div id="mainContainer" class="mainContainer">
  <!-- lloworld111 -->
    <gisMod class="" ref="gisMod">

    </gisMod>
    <div class="" style="position:fixed;top:3%;right:3%;width:25%;">
        <searchBox @gis_focusTo="gisFocusTo" ></searchBox>
    </div>
  </div>
</template>

<script>
import gisMod from '../gisModel/gisModThreeD.vue'
// import leftLayerTreePanel from './layerTreePanel.vue'
import searchBox from '../interfaceComponent/searchBox.vue'
export default {
  components: {
    // <my-component> 将只在父模板可用
    'gisMod':gisMod,
    'searchBox':searchBox,
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
