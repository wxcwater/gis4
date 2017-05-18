<template>
  <div class="searchBarHolePanel">


  <div id="searchBar" class="searchBar">
    <div class='inputBarButtonPanel'>
      <i class=" fa fa-star-o fa-3 " style="font-size:1.8rem;"></i>
    </div>
    <div class='inputBarPanel'>
      <input  class='searchInput' placeholder="工程、测站"  autoComplete="off">
      <i class=" fa fa-search nav-search-icon " style="margin-right:10px"></i>
    </div>

  </div>

  <div id="searchBarContent" class="searchBarContent">
      
  </div>
  </div>
</template>

<script>

export default {
  components: {
    // <my-component> 将只在父模板可用

  },
  name: 'searchBar',
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
  .searchBarHolePanel{
    width: 100%;
    height: 200rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    opacity: 0.7;
  }
  .searchBar{
    width: 100%;
    height: 1.5%;
    max-height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  }
  .inputBarPanel{
    background-color: gray;
    border-radius: 5px;
    margin:8px;
    padding:5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inputBarButtonPanel{
    margin:8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .searchInput{
    height: 90%;
    font-size: 1rem;
    background-color: gray;
    border: 0px;
  }
  .searchBarContent{
    background-color: gray;
    margin-top: 5px;
  }
</style>
