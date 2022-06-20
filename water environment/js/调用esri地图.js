require(
    ["esri/config",
        "esri/Map",
        "esri/views/MapView",
        //"esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/GraphicsLayer",

        "esri/widgets/BasemapToggle",
        "esri/widgets/BasemapGallery",
        "esri/widgets/Fullscreen",
        "esri/widgets/Zoom",
        "dojo/domReady!"
    ],
    function (esriConfig, Map, MapView, GraphicsLayer, //ArcGISDynamicMapServiceLayer,
        BasemapToggle, BasemapGallery, Fullscreen, Zoom) {

        var map = new Map({
            basemap: "satellite"
        });
        var view = new MapView({
            container: "emap",
            map: map,
            center: [114.76, 25.80],//影像中心
            zoom: 10
        });

        var BasemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "osm"
        });
        //然后将小部件添加到视图的右侧
        view.ui.add(BasemapToggle, "bottom-right");
        // var BasemapGallery = new BasemapGallery({
        //     view: view,
        //     source: {
        //         portal: {
        //             url: "https://www.arcgis.com",
        //             useVectorBasemaps: true
        //         }
        //     }
        // });
        //通过小部件添加到视图
        view.ui.add(BasemapGallery, "top-right")

        //全屏显示
        var fullscreen = new Fullscreen({
            view: view
        });
        view.ui.add(fullscreen, "bottom-left")

    });