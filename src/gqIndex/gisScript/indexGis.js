GisModelConfig = {
baseInfoLayers:[
          {
             name   : '底图',
             id : 'baseInfo_xzq',
             url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_basemap/MapServer",
             layerType:'',
             useType:'basic',
             visible:true,
             contentType:'Polygon'
          },{
             name   : '太湖分区',
             id : 'baseInfo_xzq1',
             url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_partition_blue/MapServer",
             layerType:'',
             useType:'basic',
             visible:true,
             contentType:'Polygon'
          },{
             name   : '人工测站',
             id : 'baseInfo_xzq2',
             url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_rgcezhan/MapServer",
             layerType:'',
             visible:false,
             useType:'',
             contentType:'Point'
          },{
             name   : '主要河流',
             id : 'baseInfo_xzq3',
             url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_river/MapServer",
             layerType:'',
             visible:false,
             useType:'basic',
             contentType:'Line'
          },{
             name   : '水功能一级区划',
             id : 'baseInfo_xzq4',
             url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_sgnyijiquhua/MapServer",
             layerType:'',
             visible:false,
             useType:'basic',
             contentType:'Polygon'
          },{
             name   : '水利分区',
             id : 'baseInfo_xzq5',
             url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_shuilifenqu/MapServer",
             layerType:'',
             visible:false,
             useType:'basic',
             contentType:'Polygon'
          },{
             name   : '水质测站',
             id : 'baseInfo_xzq6',
             url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_szcezhan/MapServer",
             layerType:'',
             visible:false,
             useType:'',
             contentType:'Point'
          },{
             name   : '行政分区界限',
             id : 'baseInfo_xzq7',
             url : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_xzfenqujiexian/MapServer",
             layerType:'',
             visible:true,
             useType:'basic',
             contentType:'Polygon'
          }
        ],
         centerPt:[120.50,31.2],
          xzqUrl : "http://10.1.102.129:6080/arcgis/rest/services/taihu/th_basemap/MapServer"
};




function index_initmap(){
  require(["esri/symbols/SimpleFillSymbol","esri/graphic","gowa/gisObject","esri/layers/FeatureLayer","esri/toolbars/draw", "esri/geometry/geometryEngine","esri/graphicsUtils","esri/tasks/RelationParameters",
    "esri/tasks/GeometryService","esri/geometry/Polygon","esri/geometry/Point","dojo/domReady!"],
    function(SimpleFillSymbol,Graphic,gisObject,FeatureLayer,Draw,geometryEngine,graphicsUtils,RelationParameters,GeometryService,Polygon,Point) {

    newGisObject = new gisObject(GisModelConfig,'mapDiv',null);
    // newGisObject.initMap('mapDiv');
    newGisObject.initGoogleMap();
});
}
