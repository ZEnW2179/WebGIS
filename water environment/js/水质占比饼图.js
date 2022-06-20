var dom = document.getElementById('shuizhifenlei');
// var myChart = echarts.init(dom, null, {
//     renderer: 'canvas',
//     useDirtyRect: false
// });
var myChart = echarts.init(dom, 'dark')
var app = {};

var option;

setTimeout(function () {
    option = {
        backgroundColor: '#100c2a',
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['年份', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                ['Ⅰ类', 4.11, 2.80, 2.32, 0.03, 0.28, 3.31, 1.73],
                ['Ⅱ类', 4.38, 4.33, 4.32, 8.21, 8.40, 15.32, 15.07],
                ['Ⅲ类', 4.32, 4.95, 5.53, 6.27, 5.81, 0.78, 2.69],
                ['Ⅳ类', 4.82, 6.41, 6.18, 5.13, 3.27, 0.01, 0.13],
                ['Ⅴ类', 2.69, 2.16, 1.69, 0.58, 1.51, 0.00, 0.03],
                ['劣Ⅴ类', 0.34, 0.03, 0.15, 0.08, 0.41, 0.00, 0.00],

            ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '30%' },
        // visualMap: {
        //     show: false,
        //     dimension: 1, // 指向第三列（列序号从 0 开始记，所以设置为 2）。
        //     min: 1, // 需要给出数值范围，最小数值。
        //     max: 7, // 需要给出数值范围，最大数值。
        //     inRange: {
        //         // 气泡尺寸：2 像素到 7 像素。
        //         symbolSize: [2, 7]
        //     }
        // },
        series: [
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '35%'],
                emphasis: {
                    focus: 'self'
                },
                label: {
                    formatter: '{b}: {@2013} ({d}%)'
                },
                encode: {
                    itemName: '年份',
                    value: '2013',
                    tooltip: '2013'
                }
            }
        ]
    };
    myChart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
    myChart.setOption(option);
});

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);