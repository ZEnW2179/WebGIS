$(document).ready(function () {
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById('main'));
    var dom = document.getElementById('emap');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    $.getJSON("data/2017.json", function (data) {
        // myChart.hideLoading();

        // fetchData(function (data) {
        //mCharts.hideLoading() // 当服务器数据获取成功之后, 隐藏加载动画
        var coordName = []
        var coordData1 = []//存储定南水
        var coordData2 = []//存储寻乌水
        var coordData3 = []//存储廉江
        var geoCoordMap = []

        for (var i = 0; i < data.length; i++) {
            // if (data[i].NH3 < 3 & data[i].TN < 5 & data[i].RiverID == 1) {

            var PointName = data[i].PointName
            var lat = data[i].lat
            var lon = data[i].lon
            var NH3 = data[i].NH3
            // var TN = data[i].TN
            // var newArr1 = [TN, NH3]
            var name = [PointName, NH3]
            var coord1 = [lon, lat]
            var geoMap = [PointName, coord1]
            coordName.push(name)
            coordData1.push(coord1)
            geoCoordMap.push(geoMap)
        }
        console.log(geoCoordMap)
        const convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].PointName];
                if (geoCoord) {
                    res.push({
                        name: data[i].PointName,
                        value: geoCoord.concat(data[i].NH3)
                    });
                }
            }
            console.log(geoCoord)
            return res;
        };

        // // else if (data[i].NH3 < 3 & data[i].TN < 5 & data[i].RiverID == 2) {
        // if (data[i].RiverID == 2) {
        //     var NH3 = data[i].NH3
        //     var TN = data[i].TN
        //     var newArr2 = [TN, NH3]
        //     axisData2.push(newArr2)
        // }
        // // else (data[i].NH3 < 3 & data[i].TN < 5 & data[i].RiverID == 3)
        // if (data[i].RiverID == 3) {

        //     var NH3 = data[i].NH3
        //     var TN = data[i].TN
        //     var newArr3 = [TN, NH3]
        //     axisData3.push(newArr3)
        // }

        option = {
            title: {
                text: '东江源水质监测点',
                subtext: 'data from LSQ',
                sublink: 'http://www.pm25.in',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            bmap: {
                center: [115.3897222, 25.305833],
                zoom: 13,
                roam: true,
                mapStyle: {
                    styleJson: [{
                        "featureType": "land",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#fffff9ff"
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#69b0acff"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b5caa0ff"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#94ad79ff"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#b5caa0ff"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#d4e2c6ff"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#d4e2c6ff"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#d4e2c6ff"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#b5caa0ff"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "tertiaryway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#b5caa0ff"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "fourlevelway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#b5caa0ff"
                        }
                    }, {
                        "featureType": "subway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "railway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "highwaysign",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "highwaysign",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "nationalwaysign",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "nationalwaysign",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "provincialwaysign",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "provincialwaysign",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "tertiarywaysign",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "tertiarywaysign",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "subwaylabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "subwaylabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#94ad79ff"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#b5caa0ff"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#b5caa0ff"
                        }
                    }, {
                        "featureType": "highway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "highway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "highway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "highway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "nationalway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "nationalway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "nationalway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "nationalway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "nationalway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "provincialway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "provincialway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "provincialway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "8,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "stylers": {
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "6"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "7"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "8"
                        }
                    }, {
                        "featureType": "cityhighway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off",
                            "curZoomRegionId": "0",
                            "curZoomRegion": "6,9",
                            "level": "9"
                        }
                    }, {
                        "featureType": "entertainment",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#e4f0d7ff"
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#effcf0ff"
                        }
                    }, {
                        "featureType": "education",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#e3f7e4ff"
                        }
                    }, {
                        "featureType": "building",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#a1cfa4ff"
                        }
                    }, {
                        "featureType": "poilabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "poilabel",
                        "elementType": "labels.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "education",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#7a7a7aff"
                        }
                    }, {
                        "featureType": "education",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "education",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 26
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#afafafff"
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 26
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#376b6dff"
                        }
                    }, {
                        "featureType": "scenicspots",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "on"
                        }
                    }, {
                        "featureType": "scenicspotslabel",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffffff",
                            "weight": 4
                        }
                    }, {
                        "featureType": "country",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#376b6dff"
                        }
                    }, {
                        "featureType": "country",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffffff",
                            "weight": 3
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#ffffffff"
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#ffffff00"
                        }
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text",
                        "stylers": {
                            "fontsize": 24
                        }
                    }]
                }
            },
            series: [
                {
                    name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: convertData(data),
                    symbolSize: function (val) {

                        return val[2] * 400;
                    },
                    encode: {
                        value: 2
                    },
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: convertData(
                        data
                            .sort(function (a, b) {
                                return b.value - a.value;
                            })
                            .slice(0, 6)
                    ),
                    symbolSize: function (val) {
                        return val[2] * 40;
                    },
                    encode: {
                        value: 2
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                    emphasis: {
                        scale: true
                    },
                    zlevel: 1
                }
            ]
        }

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
    })
})
