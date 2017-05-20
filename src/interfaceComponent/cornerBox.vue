<template>
  <transition name="fade">
  <div class="cornerBox" v-if="show">
    <div class="cornerTitle">
      <p>黑 河</p>
      <i class="fa fa-chevron-up" aria-hidden="true" style="margin-right:20px;"></i>
    </div>
    <div class="cornerContent">
      <div class="ContentItem">
        <p style="font-size:0.4rem;font-weight:bolder;">基本信息</p>
      </div>
      <div class="ContentItem">
          <p>长度:</p>
          <p>821公里</p>
          <p style="margin-left:40px;">流域面积:</p>
          <p>14.29万平方公里</p>
      </div>

      <div class="ContentItem">
          <p style="flex-basis:100%;font-size:0.4rem;font-weight:bolder;">简介:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;河川径流形成、利用、消失分区明显；河川径流以降水补给为主；河川径流年际变化不大；径流年内分配集中，下游受制于人类活动；中游地表水～地下水转换频繁</p>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>

export default {
  components: {
    // <my-component> 将只在父模板可用

  },
  name: 'cornerBox',
  data () {
    return {
      'show':false,
      'searchText':'',
    }
  },
  methods:{
    showTestInformation:function(){
      this.show = !this.show;
    }
  }
}
</script>

<style>
  .cornerBox{
    width: 20rem;
    height:10rem;
    /*background-color: white;*/
    background-color:#2C3E50;
    border-radius: 10px;
    box-shadow: 5px 10px 5px rgba(0,0,0,.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }
  .cornerTitle{
    background-color:#1ABC9C;
    flex-basis: 20%;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;;
    align-items: center;
    padding-left: 20px;
    color: white;
  }
  .cornerContent{
    font-size: 0.2rem;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color:white;
    flex-basis: 80%;
    border-radius:  0px 0px 10px 10px;
    display: flex;
    flex-direction: column;;
    justify-content: flex-start;
    align-items: stretch;
  }
  .ContentItem{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  /*界面过渡效果 @author：wxcwater*/
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
