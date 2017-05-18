<template>
  <div style="width:100%;height:100%">
    <div id="mapNode" >

    </div>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'
export default {
  name: 'gisMod',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
    this.initGisMap();
  },
  methods:{
    initEsriLoader:function(){
      esriLoader.bootstrap((err) => {
        if (err) {
          // handle any loading errors
          console.error(err);
        } else {
          // optionall execute any code once it's preloaded
        }
      }, {
        // use a specific version instead of latest 4.x
        url: '//localhost/arcgis_js_api/3.18/init.js'
      });
    },
    initGisMap:function(){
      this.initEsriLoader();
      esriLoader.dojoRequire(["gowa/gisObject"], (gisObject) => {
      // create map with the given options at a DOM node w/ id 'mapNode'
      alert('wxcwater');
      let newGisObject = new gisObject({
      baseInfoLayers:[
                {
                   name   : '底图',
                   id : 'backUpLayer',
                   url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_basemap/MapServer",
                   layerType:'',
                   useType:'basic',
                   visible:true,
                   contentType:'Polygon'
                },{
                   name   : '引江济太',
                   id : 'yjjtLayer',
                   url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_wytf/MapServer",
                   layerType:'',
                   useType:'basic',
                   visible:true,
                   contentType:'Polygon'
                },{
                   name   : '主要河流',
                   id : 'mainRiver',
                   url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_river/MapServer",
                   layerType:'',
                   visible:false,
                   useType:'basic',
                   contentType:'Line'
                },{
                   name   : '水利分区',
                   id : 'waterZone',
                   url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_shuilifenqu/MapServer",
                   layerType:'',
                   visible:false,
                   useType:'basic',
                   contentType:'Polygon'
                },{
                   name   : '行政分区界限',
                   id : 'xzqZone',
                   url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_xzfenqujiexian/MapServer",
                   layerType:'',
                   visible:false,
                   useType:'basic',
                   contentType:'Polygon'
                }
              ],
               centerPt:[120.50,31.2],
                xzqUrl : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_basemap/MapServer"
      },'mapNode',null);
      // newGisObject.initMap('mapNode');
      newGisObject.initGoogleMap();

    });
    }
  }
}
</script>

<style>
@import url('http://localhost/arcgis_js_api/3.18/esri/css/esri.css');
  #mapNode{

    width: 100%;
    height: 100%;
  }

</style>
