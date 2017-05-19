<template>

  <div class="searchBarHolePanel">


  <div id="searchBar" class="searchBar">
    <div class='inputBarButtonPanel'>
      <i class=" fa fa-star-o fa-3 " style="font-size:1.8rem;"></i>
    </div>
    <div class='inputBarPanel'>
      <input  class='searchInput' placeholder="工程、测站" autoComplete="off" v-model="searchText"  @focus="inputFocus()" @blur="inputblur()" @keyup="inputChange()" >
      <i class=" fa fa-search nav-search-icon " style="margin-right:10px"></i>
    </div>

  </div>

  <div id="usualBarContent" class="searchBarContent" v-show="searchInputFocus && searchText == ''">
      <div id="usualTopic" class="usualTopic">
        <div class="usualTopicItem">
          <img src="../assets/water.png" style="height:20px;">
          <p>水文</p>
        </div>
        <div class="splitLine" style="background-color:#95A5A6;height: 50%;width: 1px;">

        </div>
        <div class="usualTopicItem">
          <img src="../assets/water-pump.png" style="height:20px;">
          <p>水资源</p>
        </div>
        <div class="splitLine" style="background-color:#95A5A6;height: 50%;width: 1px;">

        </div>
        <div class="usualTopicItem">
          <img src="../assets/dry.png" style="height:20px;">
          <p>旱情</p>
        </div>
      </div>
      <div class="splitLine" style="height: 1px;width: 98%;">

      </div>
      <div class="historyItemContainer">
        <div class="historyItem" @click="searchTo('黑河','river')">
          <div style="flex-basis:10%">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </div>
          <div style="flex-basis:80%">
            黑河
          </div>
          <div style="right:5px;">
            <p style="font-size:0.5rem;color:#ECF0F1">河流</p>
          </div>
        </div>
      </div>
  </div>




  <div id="searchBarContent" class="searchBarContent" v-show="searchInputFocus && searchText != ''">
      <div class="searchItemContainer">
        <div class="historyItem" @click="searchTo('黑河','river')">

          <div style="flex-basis:80%">
            <a >黑河</a>
          </div>
          <div style="right:5px;">
            <p style="font-size:0.5rem;color:#ECF0F1">河流</p>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>

export default {
  components: {
    // <my-component> 将只在父模板可用

  },
  name: 'searchBox',
  data () {
    return {
      'searchInputFocus':false,
      'searchText':'',
    }
  },
  methods:{
    inputFocus:function(){
      console.log("focus");
      this.searchInputFocus = true;
    },
    inputblur:function(){
      var _self = this;
      setTimeout(function () {
       _self.searchInputFocus = false;
      //  alert(_self);
    }, 100);
    },
    inputChange:function(){
      console.log(this.searchText);
    },
    searchTo:function(keyword,type){
      // alert(keyword+":"+type);
      this.$emit("gis_focusTo",{'keyword':keyword,'type':type});
    }
  }
}
</script>

<style>
.searchBarHolePanel{
  width: 100%;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

}
.searchBar{
  width: 100%;
  min-height: 3rem;
  /*max-height: 100%;*/
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
  background-color:#2C3E50;
  border-radius: 10px;
  box-shadow: 5px 10px 5px rgba(0,0,0,.15);
}
.inputBarPanel{
  background-color: #ECF0F1;
  border-radius: 5px;
  /*margin:8px;*/
  padding:5px;
  display: flex;
  flex-basis: 70%;
  justify-content: center;
  align-items: center;
}
.inputBarButtonPanel{
  /*margin:8px;*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.inputBarButtonPanel:hover{
  color:#2ECC71;
}
.searchInput{
  height: 90%;
  width: 90%;
  font-size: 1rem;
  background-color: #ECF0F1;
  border: 0px;
}
.searchBarContent{
  border-width: 2px;
  border: 1px;
  border-color:#2C3E50;
  background-color: #BDC3C7;
  border-radius: 10px;
  margin-top: 2px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 5px 10px 5px rgba(0,0,0,.15);
}
.usualTopic{
  height: 2.3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
  background-color: #BDC3C7;
  border-radius: 5px 5px 0px 0px;
}
.usualTopicItem{
  flex-basis: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.historyItemContainer{
  height: 2.3rem;
  width: 100%;
  display: flex;
  padding-top: 5px;

  flex-direction: column;;
  justify-content: flex-start;;
  align-items:stretch;
  background-color: #BDC3C7;
  border-radius: 0px 0px 5px 5px;
}
.splitLine{
  background-color: #7F8C8D;
}
.historyItem{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:center;
  padding-left: 20px;
}
.historyItem:hover{
  background-color: #95A5A6;
}
.searchItemContainer{
  height: 1.3rem;
  width: 100%;
  display: flex;
  padding-top: 5px;

  flex-direction: column;;
  justify-content: flex-start;;
  align-items:stretch;
  background-color: #BDC3C7;
  border-radius: 0px 0px 5px 5px;
}
</style>
