<template>
  <div id="menu" class="menuBar">

      <div id='gqyxjs' class="menuButton" v-bind:class="{ 'menuButton-active': showDetail&&showDetailItem=='gqyxjs'}" @mouseover="focusOnMenuButton('gqyxjs',$event)">
          <span class="fa fa-tasks fa-3"  aria-hidden="true"  ></span>
             <p v-if="showDetail&&showDetailItem=='gqyxjs'">工程运行监测</p>
      </div>


        <div id="gqyxjs_sub" class="subMenu" @mouseover="focusOnMenuButton('gqyxjs',$event)" @mouseout="focusLose()">
          <transition name="slide-fade" v-on:after-enter="afterEnter" >
          <div v-if="showDetail&&showDetailItem=='gqyxjs'" class="subMenuButton" v-bind:class="{ 'menuButton-active': showDetail&&showDetailItem=='gqyxjs'}"   >
            <span class="fa fa-dashboard fa-3"  aria-hidden="true" @click="showDetail = !showDetail"  ></span>
               <p v-if="showDetail&&showDetailItem=='gqyxjs'">工程监视</p>
          </div>
          </transition>
          <transition name="slide-fade" v-on:after-enter="afterEnter" >
          <div v-if="showDetail&&showDetailItem=='gqyxjs'" class="subMenuButton" v-bind:class="{ 'menuButton-active': showDetail&&showDetailItem=='gqyxjs'}">
              <span class="fa fa-gear fa-3"  aria-hidden="true" @click="showDetail = !showDetail"></span>
                 <p v-if="showDetail&&showDetailItem=='gqyxjs'">工程分析</p>
          </div>
          </transition>
        </div>


      <div id='gqspjs' class="menuButton" v-bind:class="{ 'menuButton-active': showDetail&&showDetailItem=='gqspjs'}" @mouseover="focusOnMenuButton('gqspjs',$event)" @mouseout="focusLose()" >
          <span class="fa fa-video-camera fa-3" aria-hidden="true"></span>
          <p v-if="showDetail&&showDetailItem=='gqspjs'">工程视频监测</p>
      </div>
      <div id='gqdljs' class="menuButton" v-bind:class="{ 'menuButton-active': showDetail&&showDetailItem=='gqdljs'}" @mouseover="focusOnMenuButton('gqdljs',$event)" @mouseout="focusLose()" >
          <span class="fa fa-list-ul fa-3" aria-hidden="true"></span>
          <p v-if="showDetail&&showDetailItem=='gqdljs'">工程调令监测</p>
      </div>

  </div>
</template>

<script>
import gisMod from '../gisModel/gisMod.vue';
export default {
  components: {
    // <my-component> 将只在父模板可用
    'gisMod':gisMod,
  },
  name: 'leftMenuBar',
  data () {
    return {
      showDetail: false,
      bounceShowDetail :false,
      showDetailItem:null,
    }
  },
  methods:{
    focusOnMenuButton:function(showDetailItem,e){
        console.log("enter");
        this.showDetail = true;
        this.bounceShowDetail = true;
        this.showDetailItem = showDetailItem;
    },
    afterEnter:function(){
      alert(1);
    },
    focusLose:function(){
      console.log('out');
      this.bounceShowDetail = false;
      let _self = this;
      setTimeout(function(){
        console.log(_self.bounceShowDetail+'11');
        if(_self.bounceShowDetail==false){
          _self.showDetail = false;
        }
      },800);
    }
  }
}
</script>

<style>
  .menuBar{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    flex-basis: 100%;
    /*width: 100%;*/
  }
  .subMenu{
    width: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;;
    align-items: flex-start;
    margin-left:15px;
    flex-basis: 100%;
  }
  .menuButton{
    width: 3rem;
    height:3rem;
    margin-top:0.5rem;
    background-color: #1abc9c;
    border-radius: 10px;
    display: flex;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
  }
  .subMenuButton{
    width: 2rem;
    height:2rem;
    margin-top:5px;
    border-radius: 5px;
    background-color: #1abc9c;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menuButton-active{
    width: 150px;
    background-color: #34495e;
    color: white;
    cursor: pointer;
  }


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
