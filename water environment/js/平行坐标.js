var dom = document.getElementById('parallel');
// var myChart = echarts.init(dom, null, {
//     renderer: 'canvas',
//     useDirtyRect: false
// });
var myChart = echarts.init(dom, 'dark')
var app = {};

var option;

// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
const data2019 = [
    [1, 0.696, 0.069, 5.6, 'Ⅲ类'],
    [2, 0.645, 0.059, 7.6, 'Ⅲ类'],
    [3, 0.624, 0.052, 7.6, 'Ⅲ类'],
    [4, 0.613, 0.051, 7.4, 'Ⅲ类'],
    [5, 0.501, 0.051, 8.0, 'Ⅲ类'],
    [6, 0.457, 0.036, 7.8, 'Ⅱ类'],
    [7, 0.400, 0.033, 6.2, 'Ⅱ类'],
    [8, 0.393, 0.031, 7.6, 'Ⅱ类'],
    [9, 0.367, 0.044, 7.3, 'Ⅱ类'],
    [10, 0.358, 0.045, 7.274, 'Ⅱ类'],
    [11, 0.576, 0.037, 5.7, 'Ⅲ类'],
    [12, 0.511, 0.058, 7.2, 'Ⅲ类']
];
const data2018 = [
    [1, 4.700, 0.181, 16.4, '劣Ⅴ类'],
    [2, 0.976, 0.063, 15.9, 'Ⅲ类'],
    [3, 1.670, 0.138, 8.2, 'Ⅴ类'],
    [4, 0.427, 0.072, 14.2, 'Ⅱ类'],
    [5, 0.428, 0.057, 6.6, 'Ⅱ类'],
    [6, 0.897, 0.033, 8.2, 'Ⅲ类'],
    [7, 0.907, 0.049, 9.3, 'Ⅲ类'],
    [8, 0.384, 0.052, 15.0, 'Ⅱ类'],
    [9, 0.388, 0.106, 12.7, 'Ⅱ类'],
    [10, 0.872, 0.093, 2.3, 'Ⅲ类'],
    [11, 0.796, 0.070, 7.0, 'Ⅲ类'],
    [12, 0.826, 0.054, 6.4, 'Ⅲ类']
];//数据仅作展示
// var dataSH = [
//     [1, 91, 45, 125, 0.82, 34, 23, '良'],
//     [2, 65, 27, 78, 0.86, 45, 29, '良'],
//     [3, 83, 60, 84, 1.09, 73, 27, '良'],
//     [4, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
//     [5, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
//     [6, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
//     [7, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
//     [8, 89, 65, 78, 0.86, 51, 26, '良'],
//     [9, 53, 33, 47, 0.64, 50, 17, '良'],
//     [10, 80, 55, 80, 1.01, 75, 24, '良'],
//     [11, 117, 81, 124, 1.03, 45, 24, '轻度污染'],
//     [12, 99, 71, 142, 1.1, 62, 42, '良'],
//     [13, 95, 69, 130, 1.28, 74, 50, '良'],
//     [14, 116, 87, 131, 1.47, 84, 40, '轻度污染'],
//     [15, 108, 80, 121, 1.3, 85, 37, '轻度污染'],
//     [16, 134, 83, 167, 1.16, 57, 43, '轻度污染'],
//     [17, 79, 43, 107, 1.05, 59, 37, '良'],
//     [18, 71, 46, 89, 0.86, 64, 25, '良'],
//     [19, 97, 71, 113, 1.17, 88, 31, '良'],
//     [20, 84, 57, 91, 0.85, 55, 31, '良'],
//     [21, 87, 63, 101, 0.9, 56, 41, '良'],
//     [22, 104, 77, 119, 1.09, 73, 48, '轻度污染'],
//     [23, 87, 62, 100, 1, 72, 28, '良'],
//     [24, 168, 128, 172, 1.49, 97, 56, '中度污染'],
//     [25, 65, 45, 51, 0.74, 39, 17, '良'],
//     [26, 39, 24, 38, 0.61, 47, 17, '优'],
//     [27, 39, 24, 39, 0.59, 50, 19, '优'],
//     [28, 93, 68, 96, 1.05, 79, 29, '良'],
//     [29, 188, 143, 197, 1.66, 99, 51, '中度污染'],
//     [30, 174, 131, 174, 1.55, 108, 50, '中度污染'],
//     [31, 187, 143, 201, 1.39, 89, 53, '中度污染']
// ];
var schema = [
    { name: 'date', index: 0, text: '月份' },
    { name: 'NH3N', index: 1, text: '氨氮' },
    { name: 'TP', index: 2, text: '总磷' },
    { name: 'CODCR', index: 3, text: '化学需氧量' },
    { name: '水质', index: 4, text: '水质' }
];
var lineStyle = {
    width: 1,
    opacity: 0.5
};
option = {
    // backgroundColor: '#333',
    title: {
        text: '重点污染区月际变化',
        // subtext: 'Data from: 2017'
    },
    backgroundColor: '#100c2a',
    legend: {
        bottom: 30,
        data: ['2019', '2018', 'Guangzhou'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1
    },
    parallelAxis: [
        {
            dim: 0,
            name: schema[0].text,
            inverse: true,
            max: 12,
            nameLocation: 'start'
        },
        { dim: 1, name: schema[1].text },
        { dim: 2, name: schema[2].text },
        { dim: 3, name: schema[3].text },
        // { dim: 4, name: schema[4].text },
        // { dim: 5, name: schema[5].text },
        // { dim: 6, name: schema[6].text },
        {
            dim: 4,
            name: schema[4].text,
            type: 'category',
            data: ['劣Ⅴ类', 'Ⅴ类', 'Ⅳ类', 'Ⅲ类', 'Ⅱ类', 'Ⅰ类']
        }
    ],
    visualMap: {
        min: 0,
        max: 7,
        show: true,
        calculable: true,
        realtime: true,
        hoverLink: true,
        left: '15%',
        bottom: '0%',
        text: ['HIGH', 'LOW'],
        orient: 'horizontal',
        itemWidth: '20px',
        itemHeight: '300px',

        inRange: {
            color: [
                '#d94e5d', '#eac736', '#50a3ba'
            ].reverse()
        }
    },
    // visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 0.5,
    //     dimension: 2,
    //     inRange: {
    //         color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
    //         // colorAlpha: [0, 1]
    //     }
    // },
    parallel: {
        left: '5%',
        right: '18%',
        bottom: 55,
        parallelAxisDefault: {
            type: 'value',
            name: '氨氮、总磷及化学需氧量月际变化',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#fff'
            }
        }
    },
    series: [
        {
            name: '2018',
            type: 'parallel',
            lineStyle: lineStyle,
            data: data2018
        },
        {
            name: '2019',
            type: 'parallel',
            lineStyle: lineStyle,
            data: data2019
        },
        // {
        //     name: 'Guangzhou',
        //     type: 'parallel',
        //     lineStyle: lineStyle,
        //     data: dataGZ
        // }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);