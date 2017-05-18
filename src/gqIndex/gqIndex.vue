<template>

  <div id="mainContainer" class="mainContainer">
    <div class="containerHeader">
        <!--头部-->
    </div>
    <div id = 'leftSide' class="containerLeftSideBar">
      <!--左侧-->
      <menuBar class="">

      </menuBar>
    </div>
    <div id = 'rightSide' class="containerRightSideBar">
      <!--右侧-->
      <rightPanel>

      </rightPanel>
    </div>
    <div class="floatToolBar">
        <searchBar>

        </searchBar>
    </div>
    <div class="containerCenter">
      <!--中心-->

      <div class="containerContent">
        <!--中心内容-->
        <gisMod class="" id="mapMod" ref="gisMod">

        </gisMod>
      </div>

    </div>

    <!-- <div id = 'footer' class="containerFooter">
      底部
    </div> -->
  </div>
</template>

<script>
import gisMod from '../gisModel/gisMod.vue';
import menuBar from './leftMenuBar.vue';
import searchBar from './searchBar.vue';
import rightPanel from './rightContent.vue';
import rightMainPanel from './rightMainPanel.vue'
export default {
  components: {
    // <my-component> 将只在父模板可用
    'gisMod':gisMod,
    'menuBar':menuBar,
    'searchBar':searchBar,
    'rightPanel':rightPanel,
    'rightMainPanel':rightMainPanel,
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    addSomePointToMap:function(){
      //this.$refs['gisMod'].addSomePointToMap();
    }
  }
}
</script>

<style>
  .mainContainer{
    width: 100%;
    height:100%;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .containerCenter{
    flex-basis: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
  .containerContent{
    flex-basis: 100%;
  }
  .containerFooter{
    flex-basis: 5%;
    background-color: black;
  }


  .containerHeader{
    position:fixed;
    top:0px;
    z-index: 10;
    height:3%;
    width: 100%;
    background-color: #34495e;
    display: none;
  }
  .containerLeftSideBar{
    position:absolute;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    top:30%;
    z-index: 10;
    /*height:30%;*/
    width: 4%;
    /*left: 4%;*/
    margin-left: 10px;


  }

  .containerRightSideBar{
    position:absolute;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    bottom:1%;
    z-index: 10;
    height:90%;
    width: 30%;
    right: 1%;
    background-color: #2C3E50;
    opacity: 0.9;
  }
  .floatToolBar{
    position: absolute;
    top:10px;
    margin-left:50px;
    border-radius: 3px;
    z-index: 10;
    background-color: #95A5A6;
    width: 20rem;
    height:3rem;
  }
</style>
