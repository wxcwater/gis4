<template>
  <div style="width:100%;height:100%">
    <div id="mapNode" style="width:100%;height:100%;">

    </div>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'
export default {
  name: 'gisMod',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      'map':'11111'
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
        url: 'https://js.arcgis.com/4.3/'
      });
    },
    initGisMap:function(){
      var _self = this;
      this.initEsriLoader();
      esriLoader.dojoRequire(["esri/Map","esri/views/SceneView","esri/config"], (Map, SceneView,esriConfig) => {
      //  esriConfig.request.corsEnabledServers.push({host:'10.8.2.153'});
        let map = new Map({
          basemap: "hybrid",
          ground: "world-elevation"
        });
        this.map = map;
        let view = new SceneView({
          container: "mapNode",  // Reference to the DOM node that will contain the view
          map: map , // References the map object created in step 3
          scale: 66000000,          // Sets the initial scale to 1:50,000,000
          center: [-112, 38],
          qualityProfile: "high"
        });
        this.view = view;
        this.map.ground.layers.forEach(function(layer) {//地形数据是map提供的，可套用至所有layer @wxcwater
           layer.visible = true;
         });

         view.then(function() {
              // SceneView is now ready for display and can be used. Here we will
              // use goTo to view a particular location at a given zoom level, camera
              // heading and tilt.
              view.goTo({
                center: [120.30,31.2],
                scale: 600000,
                // heading: 30,
                // tilt: 60
              })
              // view.ui.empty("top-left");
              // view.ui.move([ "navigation-toggle" ], "bottom-left");
              // view.ui.add([ "compass"], "bottom-left");
              _self.addSomeLayer();
            }).otherwise(function(err) {
              // A rejected view indicates a fatal error making it unable to display,
              // this usually means that WebGL is not available, or too old.
              console.error("SceneView rejected:", err);
            });



            /*点击测试，@wxcwater*/
            view.on("click", function(evt) {
              var screenPoint = {
                x: evt.x,
                y: evt.y
              };
              // the hitTest() checks to see if any graphics in the view
              // intersect the given screen x, y coordinates
              view.hitTest(screenPoint)
                .then(function(response){
                  var graphic = response.results[0].graphic;
                  console.log(response.results[0]);
                  console.log(graphic);
                });
            });

      });


    },
    /*
      @author:lsj
    */
     queryFeatures:function(type){
        esriLoader.dojoRequire(["esri/tasks/QueryTask", "esri/tasks/support/Query","esri/layers/GraphicsLayer","esri/symbols/SimpleLineSymbol","esri/Graphic"],
          (QueryTask, Query,GraphicsLayer,SimpleLineSymbol,Graphic)=>{
          if(type == "river"){
            var queryTask = new QueryTask({url:"http://10.1.102.129:6080/arcgis/rest/services/china/river_china/MapServer/0"});
          }else if(type == "province"){
            var queryTask = new QueryTask({url:"http://10.1.102.129:6080/arcgis/rest/services/china/xzqh_china/MapServer/2"});
          }else if(type == "dist"){
            var queryTask = new QueryTask({url:"http://10.1.102.129:6080/arcgis/rest/services/china/xzqh_china/MapServer/1"});
          }else if(type == "country"){
            var queryTask = new QueryTask({url:"http://10.1.102.129:6080/arcgis/rest/services/china/xzqh_china/MapServer/0"});
          }
          var query = new Query();
          var rand  = Math.random();
          query.returnGeometry = true;
          query.outFields = ["*"];
          query.where = "FID = 5262 and "+rand+"="+rand;
          var _self = this;
          queryTask.execute(query).then(getResults).otherwise(getResultsErr);
          function getResults(results){
            var symbol = new SimpleLineSymbol({
              color: [0,255,255,1],
              width: "2px",
              style: "solid"
            });
            var gra = new Graphic();
            gra.attributes = results.features[0].attributes;
            gra.geometry = results.features[0].geometry;
            gra.symbol = symbol;
            var graphicLyr = _self.map.findLayerById("searchResultLayer");
            if(graphicLyr){
              graphicLyr.graphics.add(gra);
            }else{
              graphicLyr = new GraphicsLayer();
              graphicLyr.id = 'searchResultLayer';
              _self.map.add(graphicLyr);
              graphicLyr.graphics.add(gra);
            }
            _self.view.goTo({
              target: gra.geometry,
              scale: 4000000,
              speedFactor:0.01,
              // heading: 30,
              tilt: 50
            })
          }
          function getResultsErr(info){
            console.error("error:",info.message);
          }
        });
      },
      addSomeLayer:function(){
        esriLoader.dojoRequire(["esri/layers/MapImageLayer","esri/layers/FeatureLayer","esri/config","esri/core/urlUtils","esri/renderers/SimpleRenderer","esri/symbols/PictureMarkerSymbol","esri/layers/support/Field"],(MapImageLayer,FeatureLayer,esriConfig,urlUtils,SimpleRenderer,PictureMarkerSymbol,Field)=>{
          var rivermapLyr = new MapImageLayer({
            url:"http://10.1.102.129:6080/arcgis/rest/services/china/river_china_Tile/MapServer"
          });
          var xzqhLineLyr = new MapImageLayer({
            url:"http://10.1.102.129:6080/arcgis/rest/services/china/xzqh_china_Tile/MapServer"
          });
          this.map.add(rivermapLyr);
          this.map.add(xzqhLineLyr);
        });
      },
    toggleThBaseMapLayer:function(){
        esriLoader.dojoRequire(["esri/layers/MapImageLayer","esri/layers/FeatureLayer","esri/config","esri/core/urlUtils","esri/renderers/SimpleRenderer","esri/symbols/PictureMarkerSymbol","esri/layers/support/Field"],(MapImageLayer,FeatureLayer,esriConfig,urlUtils,SimpleRenderer,PictureMarkerSymbol,Field)=>{
          esriConfig.request.corsEnabledServers.push('10.8.2.153:8399');
          // urlUtils.addProxyRule({
          //     urlPrefix: "http://10.8.2.153:8399",
          //     proxyUrl: "http://localhost:8080/arcgis_proxy/proxy.jsp"
          // });
  				// esriConfig.request.corsEnabledServers.push({host:'10.8.2.153'});
          // console.log(esriConfig.request.corsEnabledServers);
          // esriConfig.request.forceProxy = true;
          // esriConfig.request.proxyUrl = "http://localhost:8080/arcgis_proxy/proxy.jsp";


          let testfields = [
              {
                name: "ObjectID",
                alias: "ObjectID",
                type: "oid"
              },
              {
                name: "NAME",
                alias: "NAME",
                type: "string"
              }
            ];

              let hhhlRenderer = new SimpleRenderer({
                symbol: new PictureMarkerSymbol('../gis/assets/sz4.png',20,20)
              });
              let pwkRenderer = new SimpleRenderer({
                symbol: new PictureMarkerSymbol('../gis/assets/pwk.png',10,10)
              });
              let qyshRenderer = new SimpleRenderer({
                symbol: new PictureMarkerSymbol('../gis/assets/qsyh.png',10,10)
              });
              let sjdmRenderer = new SimpleRenderer({
                symbol: new PictureMarkerSymbol('../gis/assets/sz1.png',10,15)
              });
              let sydRenderer = new SimpleRenderer({
                symbol: new PictureMarkerSymbol('../gis/assets/syd.gif',10,10)
              });
              //FeatureLayer
              // var qysh_zg = new FeatureLayer({
              //   url: "http://10.8.2.153:8399/arcgis/rest/services/lyp_szy/MapServer/2",
              //   renderer:qyshRenderer
              // });
              // var qysh_gk = new FeatureLayer({
              //   url: "http://10.8.2.153:8399/arcgis/rest/services/th_3/MapServer/16",
              //   renderer:qyshRenderer
              // });
              // var hhhl = new FeatureLayer({
              //   url: "http://10.8.2.153:8399/arcgis/rest/services/lyp_szy/MapServer/5",
              //   renderer:hhhlRenderer
              // });
              // var pwk = new FeatureLayer({
              //   url: "http://10.8.2.153:8399/arcgis/rest/services/pwk/MapServer/0",
              //   renderer:pwkRenderer,
              //   fields:testfields
              // });
              // var sjdm = new FeatureLayer({
              //   url: "http://10.8.2.153:8399/arcgis/rest/services/lyp_szy/MapServer/4",
              //   renderer:sjdmRenderer
              // });
              //
              // var syd = new FeatureLayer({
              //   url: "http://10.8.2.153:8399/arcgis/rest/services/szyxx_new/MapServer/14",
              //   renderer:sydRenderer
              // });
              //
              // var gnqx = new FeatureLayer({
              //   url: "http://10.8.2.153:8399/arcgis/rest/services/th_3/MapServer/55",
              //
              // });
              var gnqm = new FeatureLayer({
                url: "http://10.1.102.129:6080/arcgis/rest/services/china/river_china/MapServer/0",

              });
              var layer = new MapImageLayer({
               url: "http://10.1.102.129:6080/arcgis/rest/services/china/river_china/MapServer"
             });
            console.log('this.map:'+this.map);
            // this.map.add(layer);  // adds the layer to the map
              // this.map.add(qysh_gk);  // adds the layer to the map
              // this.map.add(qysh_zg);  // adds the layer to the map
              // this.map.add(hhhl);
              // this.map.add(pwk);
              // this.map.add(sjdm);
              // this.map.add(syd);
              // this.map.add(gnqx);
              // this.map.add(gnqm);
              this.map.add(gnqm);

        });

    }
  }
}
</script>

<style>
@import url('https://js.arcgis.com/4.3/esri/css/main.css');
  #mapNode{

    width: 100%;
    height: 100%;
  }

</style>
