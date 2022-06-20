var dom = document.getElementById('bmap');

var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

const data = [
    { name: '定南水下历水定南保留区', value: 4.700 },
    { name: '濂水安远会昌保留区', value: 0.899 },
    { name: '桃江全南工业用水区', value: 0.505 },
    { name: '寻乌水马蹄河寻乌饮用水源区', value: 0.579 },
    { name: '寻乌水赣粤缓冲区', value: 0.271 },
    { name: '桃江全南饮用水源区', value: 0.305 },
    { name: '寻乌水寻乌保留区', value: 1.210 },
    { name: '寻乌水马蹄河寻乌工业用水区', value: 0.659 },
    { name: '定南水下历水定南饮用水源区', value: 0.134 },
    { name: '寻乌水寻乌保留区', value: 0.197 },
    { name: '寻乌水源头水保护区', value: 0.157 },
    { name: '定南水下历水定南工业用水区', value: 0.579 },
    { name: '寻乌水龙图河寻乌保留区', value: 0.266 },
    { name: '湘水寻乌会昌保留区', value: 0.391 },
    { name: '桃江全南保留区', value: 0.300 },
    { name: '定南水赣粤缓冲区', value: 0.500 },
    { name: '定南水老城水定南保留区', value: 0.237 },
    { name: '桃江龙南饮用水源区', value: 0.140 },
    { name: '濂水安远饮用水源区', value: 0.180 },
    { name: '定南水下历水定南工业用水区', value: 3.160 },
    { name: '寻乌水晨光河寻乌保留区', value: 0.168 },
    { name: '濂水安远会昌保留区', value: 0.465 },
    { name: '濂水安远保留区', value: 0.197 },
    { name: '寻乌水马蹄河寻乌保留区', value: 0.203 },
    { name: '濂水安远工业用水区', value: "" },
    { name: '寻乌水马蹄河寻乌九曲湾水库饮用水源区', value: 0.191 },
    { name: '定南水源头水保护区', value: 0.231 },
    { name: '桃江龙南工业用水区', value: 0.134 },
    { name: '定南水定南保留区', value: 0.203 },
    { name: '定南水新田河源头水保护区', value: 0.208 },
    { name: '定南水新田河定南保留区', value: 0.197 },
    { name: '桃江全南龙南保留区', value: 0.551 },
    { name: '桃江龙南全南信丰保留区', value: 0.968 },
    { name: '桃江龙南全南信丰保留区', value: 1.480 },
    { name: '濂水安远会昌保留区', value: 0.385 },
    { name: '寻乌水马蹄河寻乌饮用水源区', value: 0.272 },
    { name: '寻乌水马蹄河寻乌工业用水区', value: 0.492 },
    { name: '寻乌水寻乌保留区', value: 0.323 },
    { name: '寻乌水寻乌保留区', value: 0.638 },
    { name: '濂水安远工业用水区', value: 0.396 },
    { name: '湘水寻乌会昌保留区', value: 0.211 },
    { name: '濂水安远保留区', value: 0.216 },
    { name: '寻乌水龙图河寻乌保留区', value: 0.211 },
    { name: '寻乌水赣粤缓冲区', value: 0.211 },
    { name: '寻乌水源头水保护区', value: 0.182 },
    { name: '濂水安远饮用水源区', value: 0.160 },
    { name: '定南水源头水保护区', value: 0.267 },
    { name: '定南水新田河定南保留区', value: 0.154 },
    { name: '定南水新田河源头水保护区', value: 0.137 },
    { name: '寻乌水晨光河寻乌保留区', value: 0.227 },
    { name: '寻乌水马蹄河寻乌保留区', value: 0.205 },
    { name: '寻乌水马蹄河寻乌九曲湾水库饮用水源区', value: 0.160 },
    { name: '濂水安远会昌保留区', value: 0.261 },
    { name: '定南水下历水定南饮用水源区', value: 0.160 },
    { name: '定南水下历水定南工业用水区', value: 0.880 },
    { name: '定南水下历水定南工业用水区', value: 1.750 },
    { name: '定南水下历水定南保留区', value: 0.976 }

];
const geoCoordMap = {
    定南水下历水定南保留区: [115.1138889, 24.75555556],
    濂水安远会昌保留区: [115.3875, 25.30583333],
    桃江全南工业用水区: [114.5675, 24.7525],
    寻乌水马蹄河寻乌饮用水源区: [115.6386111, 24.97],
    寻乌水赣粤缓冲区: [115.6413889, 24.645],
    桃江全南饮用水源区: [114.5191667, 24.69611111],
    寻乌水寻乌保留区: [115.7002778, 24.55777778],
    寻乌水马蹄河寻乌工业用水区: [115.6494444, 24.95472222],
    定南水下历水定南饮用水源区: [115.0052778, 24.7975],
    寻乌水寻乌保留区: [115.7436111, 24.9525],
    寻乌水源头水保护区: [115.7013889, 25.07666667],
    定南水下历水定南工业用水区: [115.0280556, 24.7825],
    寻乌水龙图河寻乌保留区: [115.6338889, 24.765],
    湘水寻乌会昌保留区: [115.8152778, 25.15166667],
    桃江全南保留区: [114.3947222, 24.68638889],
    定南水赣粤缓冲区: [115.1833333, 24.7],
    定南水老城水定南保留区: [115.0686111, 24.70305556],
    桃江龙南饮用水源区: [114.7780556, 24.89722222],
    濂水安远饮用水源区: [115.3697222, 25.16277778],
    定南水下历水定南工业用水区: [115.0816667, 24.76555556],
    寻乌水晨光河寻乌保留区: [115.5247222, 24.74333333],
    濂水安远会昌保留区: [115.5366667, 25.50833333],
    濂水安远保留区: [115.415, 25.12194444],
    寻乌水马蹄河寻乌保留区: [115.5922222, 25.02194444],
    濂水安远工业用水区: [115.3877778, 25.155],
    寻乌水马蹄河寻乌九曲湾水库饮用水源区: [115.5925, 25.00388889],
    定南水源头水保护区: [115.3511111, 25.01805556],
    桃江龙南工业用水区: [114.7683333, 24.91722222],
    定南水定南保留区: [115.2108333, 24.87666667],
    定南水新田河源头水保护区: [115.3686111, 24.94888889],
    定南水新田河定南保留区: [115.3930556, 25.13],
    桃江全南龙南保留区: [114.6041667, 24.77583333],
    桃江龙南全南信丰保留区: [114.7525, 25.09166667],
    桃江龙南全南信丰保留区: [114.8025, 24.99027778],
    濂水安远会昌保留区: [115.3875, 25.30583333],
    寻乌水马蹄河寻乌饮用水源区: [115.6386111, 24.97],
    寻乌水马蹄河寻乌工业用水区: [115.6494444, 24.95472222],
    寻乌水寻乌保留区: [115.7436111, 24.9525],
    寻乌水寻乌保留区: [115.7002778, 24.55777778],
    濂水安远工业用水区: [115.3877778, 25.155],
    湘水寻乌会昌保留区: [115.8152778, 25.15166667],
    濂水安远保留区: [115.415, 25.12194444],
    寻乌水龙图河寻乌保留区: [115.6338889, 24.765],
    寻乌水赣粤缓冲区: [115.6413889, 24.645],
    寻乌水源头水保护区: [115.7013889, 25.07666667],
    濂水安远饮用水源区: [115.3697222, 25.16277778],
    定南水源头水保护区: [115.3511111, 25.01805556],
    定南水新田河定南保留区: [115.3930556, 25.13],
    定南水新田河源头水保护区: [115.3686111, 24.94888889],
    寻乌水晨光河寻乌保留区: [115.5247222, 24.74333333],
    寻乌水马蹄河寻乌保留区: [115.5922222, 25.02194444],
    寻乌水马蹄河寻乌九曲湾水库饮用水源区: [115.5925, 25.00388889],
    濂水安远会昌保留区: [115.5366667, 25.50833333],
    定南水下历水定南饮用水源区: [115.0052778, 24.7975],
    定南水下历水定南工业用水区: [115.0280556, 24.7825],
    定南水下历水定南工业用水区: [115.0816667, 24.76555556],
    定南水下历水定南保留区: [115.1138889, 24.75555556]


};
const convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    legend: {
        textStyle: {
            fontSize: 18,//字体大小
            color: '#ffffff'//字体颜色
        },
        data: ['NH3', 'TN', 'TP'],
        left: '80%',
        bottom: '90%'
    },
    title: {
        text: '东江源水质监测点',
        subtext: 'Made By LSQ',
        textStyle: {
            fontSize: 18,//字体大小
            color: '#ffffff'//字体颜色
        },
        sublink: 'https://echarts.apache.org/examples/zh/index.html',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },

    bmap: {
        center: [115.0138889, 24.700555556],
        zoom: 9,
        roam: true,
        mapStyle: {
            // style: "black"
            styleJson:
                [{
                    "featureType": "land",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#000000ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#000000ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "building",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#000000ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "building",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#000000ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "village",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "town",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "district",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "country",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "city",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "continent",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
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
                    "featureType": "scenicspotslabel",
                    "elementType": "labels.icon",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "scenicspotslabel",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "transportationlabel",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "transportationlabel",
                    "elementType": "labels.icon",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "airportlabel",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "airportlabel",
                    "elementType": "labels.icon",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#3a4c54ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 3
                    }
                }, {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#2f4550ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "scenicspots",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#000000ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "scenicspots",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "scenicspots",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "weight": 1,
                        "color": "#b8dbd9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "continent",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "country",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "city",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "city",
                    "elementType": "labels.icon",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "scenicspotslabel",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "airportlabel",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "transportationlabel",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "railway",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "subway",
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
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on",
                        "weight": 90
                    }
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "shopping",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "scenicspots",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "on"
                    }
                }, {
                    "featureType": "scenicspotslabel",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off"
                    }
                }, {
                    "featureType": "manmade",
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
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#2f455000",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "road",
                    "stylers": {
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "6"
                    }
                }, {
                    "featureType": "road",
                    "stylers": {
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "7"
                    }
                }, {
                    "featureType": "road",
                    "stylers": {
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "8"
                    }
                }, {
                    "featureType": "road",
                    "stylers": {
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "9"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "6"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "7"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "8"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "9"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "6"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "7"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "8"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "6,9",
                        "level": "9"
                    }
                }, {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": {
                        "fontsize": 24
                    }
                }, {
                    "featureType": "highway",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#1c4f7eff"
                    }
                }, {
                    "featureType": "highway",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "highway",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 3
                    }
                }, {
                    "featureType": "nationalway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "nationalway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#1c4f7eff"
                    }
                }, {
                    "featureType": "nationalway",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "nationalway",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "nationalway",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 3
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "cityhighway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "tertiaryway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "fourlevelway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "local",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#586f7cff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#3a4c54ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "cityhighway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#3a4c54ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#3a4c54ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "tertiaryway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#3a4c54ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "fourlevelway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#3a4c54ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "local",
                    "elementType": "geometry.stroke",
                    "stylers": {
                        "color": "#3a4c54ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "local",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "local",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "fourlevelway",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "tertiaryway",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "arterial",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "cityhighway",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#f4f4f9ff",
                        "visibility": "on"
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "cityhighway",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "arterial",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "tertiaryway",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "fourlevelway",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#b8dbd9ff",
                        "visibility": "on",
                        "weight": 1
                    }
                }, {
                    "featureType": "fourlevelway",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 1
                    }
                }, {
                    "featureType": "tertiaryway",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 1
                    }
                }, {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 1
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 3
                    }
                }, {
                    "featureType": "cityhighway",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 3
                    }
                }, {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                        "weight": 3
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
                        "curZoomRegion": "8,10",
                        "level": "8"
                    }
                }, {
                    "featureType": "provincialway",
                    "stylers": {
                        "curZoomRegionId": "0",
                        "curZoomRegion": "8,10",
                        "level": "9"
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "8,10",
                        "level": "8"
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "8,10",
                        "level": "9"
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "8,10",
                        "level": "8"
                    }
                }, {
                    "featureType": "provincialway",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "8,10",
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
                    "featureType": "arterial",
                    "stylers": {
                        "curZoomRegionId": "0",
                        "curZoomRegion": "9,9",
                        "level": "9"
                    }
                }, {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "9,9",
                        "level": "9"
                    }
                }, {
                    "featureType": "arterial",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off",
                        "curZoomRegionId": "0",
                        "curZoomRegion": "9,9",
                        "level": "9"
                    }
                }]
            // styleJson: [{
            //     "featureType": "land",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "color": "#fffff9ff"
            //     }
            // }, {
            //     "featureType": "water",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "color": "#69b0acff"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "geometry.fill",
            //     "stylers": {
            //         "color": "#b5caa0ff"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "geometry.stroke",
            //     "stylers": {
            //         "color": "#94ad79ff"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "geometry.fill",
            //     "stylers": {
            //         "color": "#b5caa0ff"
            //     }
            // }, {
            //     "featureType": "arterial",
            //     "elementType": "geometry.fill",
            //     "stylers": {
            //         "color": "#d4e2c6ff"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "geometry.fill",
            //     "stylers": {
            //         "color": "#d4e2c6ff"
            //     }
            // }, {
            //     "featureType": "provincialway",
            //     "elementType": "geometry.fill",
            //     "stylers": {
            //         "color": "#d4e2c6ff"
            //     }
            // }, {
            //     "featureType": "provincialway",
            //     "elementType": "geometry.stroke",
            //     "stylers": {
            //         "color": "#b5caa0ff"
            //     }
            // }, {
            //     "featureType": "tertiaryway",
            //     "elementType": "geometry.fill",
            //     "stylers": {
            //         "color": "#ffffffff"
            //     }
            // }, {
            //     "featureType": "tertiaryway",
            //     "elementType": "geometry.stroke",
            //     "stylers": {
            //         "color": "#b5caa0ff"
            //     }
            // }, {
            //     "featureType": "fourlevelway",
            //     "elementType": "geometry.fill",
            //     "stylers": {
            //         "color": "#ffffffff"
            //     }
            // }, {
            //     "featureType": "fourlevelway",
            //     "elementType": "geometry.stroke",
            //     "stylers": {
            //         "color": "#b5caa0ff"
            //     }
            // }, {
            //     "featureType": "subway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "railway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "highwaysign",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "highwaysign",
            //     "elementType": "labels.icon",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "nationalwaysign",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "nationalwaysign",
            //     "elementType": "labels.icon",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "provincialwaysign",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "provincialwaysign",
            //     "elementType": "labels.icon",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "tertiarywaysign",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "tertiarywaysign",
            //     "elementType": "labels.icon",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "subwaylabel",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "subwaylabel",
            //     "elementType": "labels.icon",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "geometry.stroke",
            //     "stylers": {
            //         "color": "#94ad79ff"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "geometry.stroke",
            //     "stylers": {
            //         "color": "#b5caa0ff"
            //     }
            // }, {
            //     "featureType": "arterial",
            //     "elementType": "geometry.stroke",
            //     "stylers": {
            //         "color": "#b5caa0ff"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "highway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "nationalway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "provincialway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "8,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "provincialway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "8,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "provincialway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "8,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "provincialway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "8,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "provincialway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "8,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "provincialway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "8,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "stylers": {
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "6"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "7"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "8"
            //     }
            // }, {
            //     "featureType": "cityhighway",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off",
            //         "curZoomRegionId": "0",
            //         "curZoomRegion": "6,9",
            //         "level": "9"
            //     }
            // }, {
            //     "featureType": "entertainment",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "color": "#e4f0d7ff"
            //     }
            // }, {
            //     "featureType": "manmade",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "color": "#effcf0ff"
            //     }
            // }, {
            //     "featureType": "education",
            //     "elementType": "geometry",
            //     "stylers": {
            //         "color": "#e3f7e4ff"
            //     }
            // }, {
            //     "featureType": "building",
            //     "elementType": "geometry.stroke",
            //     "stylers": {
            //         "color": "#a1cfa4ff"
            //     }
            // }, {
            //     "featureType": "poilabel",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "poilabel",
            //     "elementType": "labels.icon",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "education",
            //     "elementType": "labels.text.fill",
            //     "stylers": {
            //         "color": "#7a7a7aff"
            //     }
            // }, {
            //     "featureType": "education",
            //     "elementType": "labels.text.stroke",
            //     "stylers": {
            //         "color": "#ffffffff"
            //     }
            // }, {
            //     "featureType": "education",
            //     "elementType": "labels.text",
            //     "stylers": {
            //         "fontsize": 26
            //     }
            // }, {
            //     "featureType": "manmade",
            //     "elementType": "labels.text.fill",
            //     "stylers": {
            //         "color": "#afafafff"
            //     }
            // }, {
            //     "featureType": "manmade",
            //     "elementType": "labels.text",
            //     "stylers": {
            //         "fontsize": 26
            //     }
            // }, {
            //     "featureType": "scenicspotslabel",
            //     "elementType": "labels.text.fill",
            //     "stylers": {
            //         "color": "#376b6dff"
            //     }
            // }, {
            //     "featureType": "scenicspots",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "off"
            //     }
            // }, {
            //     "featureType": "scenicspotslabel",
            //     "elementType": "labels",
            //     "stylers": {
            //         "visibility": "on"
            //     }
            // }, {
            //     "featureType": "scenicspotslabel",
            //     "elementType": "labels.text.stroke",
            //     "stylers": {
            //         "color": "#ffffffff",
            //         "weight": 4
            //     }
            // }, {
            //     "featureType": "country",
            //     "elementType": "labels.text.fill",
            //     "stylers": {
            //         "color": "#376b6dff"
            //     }
            // }, {
            //     "featureType": "country",
            //     "elementType": "labels.text.stroke",
            //     "stylers": {
            //         "color": "#ffffffff",
            //         "weight": 3
            //     }
            // }, {
            //     "featureType": "water",
            //     "elementType": "labels.text.fill",
            //     "stylers": {
            //         "color": "#ffffffff"
            //     }
            // }, {
            //     "featureType": "water",
            //     "elementType": "labels.text.stroke",
            //     "stylers": {
            //         "color": "#ffffff00"
            //     }
            // }, {
            //     "featureType": "water",
            //     "elementType": "labels.text",
            //     "stylers": {
            //         "fontsize": 24
            //     }
            // }]
        }
    },
    series: [
        {
            name: 'NH3',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                if (val[2] >= 0 && val[2] < 0.15) {
                    return 5;
                } else if (val[2] >= 50 && val[2] < 0.5) {
                    return 10;
                } else if (val[2] >= 0.5 && val[2] < 1.0) {
                    return 15;
                } else if (val[2] >= 1.0 && val[2] < 1.5) {
                    return 20;
                } else if (val[2] >= 1.5 && val[2] < 2.0) {
                    return 25;
                } else if (val[2] >= 2.0) {
                    return 30;
                }
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
            }, itemStyle: {
                normal: {
                    color: function (params) {  //根据不同数据显示不同颜色的标记
                        if (params.value[2] >= 0 && params.value[2] < 0.15) {
                            return '#00ff00';
                        } else if (params.value[2] >= 50 && params.value[2] < 0.5) {
                            return '#ffff00';
                        } else if (params.value[2] >= 0.5 && params.value[2] < 1.0) {
                            return '#ffc000';
                        } else if (params.value[2] >= 1.0 && params.value[2] < 1.5) {
                            return '#ff0000';
                        } else if (params.value[2] >= 1.5 && params.value[2] < 2.0) {
                            return '#a42c9b';
                        } else if (params.value[2] >= 2.0) {
                            return '#6e1f2b';
                        }
                    }
                }
            },

        },
        {
            name: '氨氮浓度最大的五个区域',
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
                return val[2] * 8;
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
                shadowColor: '#ff0000'
            },
            emphasis: {
                scale: true
            },
            zlevel: 1
        },

    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
