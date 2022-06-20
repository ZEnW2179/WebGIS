$(document).ready(function () {
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById('main'));
    var dom = document.getElementById('scatter');
    // var myChart = echarts.init(dom, null, {
    //     renderer: 'canvas',
    //     useDirtyRect: false
    // });
    var myChart = echarts.init(dom, 'dark')
    var app = {};

    var option;


    // 初始 option
    option = {

        title: {
            text: '2017-2019氨氮及总氮分布',
            subtext: 'Data from: 2017'
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '15%',
            containLabel: true
        },
        tooltip: {
            // trigger: 'axis',
            showDelay: 0,
            formatter: function (params) {
                if (params.value.length > 1) {
                    return (
                        params.seriesName +
                        ' :<br/>' + 'TN: ' +
                        params.value[0] +
                        'mg/L ' + '<br/>' +
                        'NH3: ' +
                        params.value[1] +
                        'mg/L '
                    );
                } else {
                    return (
                        params.seriesName +
                        ' :<br/>' +
                        params.name +
                        ' : ' +
                        params.value +
                        'mg/L '
                    );
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        }, visualMap: {
            min: 0,
            max: 3,
            show: true,
            calculable: true,
            realtime: true,
            hoverLink: true,
            right: '5%',
            top: '8%',
            text: ['HIGH', 'LOW'],
            inRange: {
                color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                ]
            }
        },
        dataZoom: [
            {
                type: 'slider',
                //type:'inside'鼠标滚轮实现缩放
                xAxisIndex: 0,//指明是作用在哪个轴
                bottom: '7px',
                // start: 0.3,
                // end: 25.78,
                height: '20px'
            },
            {
                type: 'inside',
                yAxisIndex: 0,
                left: '1px',

                //指明缩放范围 
                // start: 0.07,
                // end: 3.8
            }
        ],
        toolbox: {
            feature: {
                dataZoom: {},
                brush: {
                    type: ['rect', 'polygon', 'clear']
                }
            }
        },
        brush: {},
        legend: {
            data: ['定南水', '寻乌水', '廉江'],
            left: 'center',
            bottom: 25
        },
        xAxis: [
            {
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: '{value} mg/L'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: '{value} mg/L'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        // option = {
        //     title: {
        //         text: '异步数据加载示例'
        //     },
        //     tooltip: { trigger: 'axis' },
        //     legend: {
        //         data: ['NH3']
        //     },
        //     toolbox: {
        //         show: true,
        //         feature: {
        //             mark: { show: true },
        //             dataView: { show: true, readOnly: false },
        //             // magicType: { show: true, type: ['line', 'bar'] },
        //             restore: { show: true },
        //             saveAsImage: { show: true }
        //         }
        //     },
        //     calculable: true,


        // xAxis: {
        //     data: []
        // },
        // yAxis: {},
        // series: [{
        //     name: '浓度',
        //     type: 'bar',
        //     data: []
        // },
        // ]
    };

    // //获取数据 
    // myChart.showLoading();//暂时无法使用，因为Ajax?
    $.getJSON("data/2017.json", function (data) {
        // myChart.hideLoading();

        // fetchData(function (data) {
        //mCharts.hideLoading() // 当服务器数据获取成功之后, 隐藏加载动画
        var axisData1 = []//存储定南水
        var axisData2 = []//存储寻乌水
        var axisData3 = []//存储廉江

        for (var i = 0; i < data.length; i++) {
            // if (data[i].NH3 < 3 & data[i].TN < 5 & data[i].RiverID == 1) {
            if (data[i].RiverID == 1) {
                var NH3 = data[i].NH3
                var TN = data[i].TN
                var newArr1 = [TN, NH3]
                axisData1.push(newArr1)
            }
            // else if (data[i].NH3 < 3 & data[i].TN < 5 & data[i].RiverID == 2) {
            if (data[i].RiverID == 2) {
                var NH3 = data[i].NH3
                var TN = data[i].TN
                var newArr2 = [TN, NH3]
                axisData2.push(newArr2)
            }
            // else (data[i].NH3 < 3 & data[i].TN < 5 & data[i].RiverID == 3)
            if (data[i].RiverID == 3) {

                var NH3 = data[i].NH3
                var TN = data[i].TN
                var newArr3 = [TN, NH3]
                axisData3.push(newArr3)
            }
            myChart.setOption({
                xAxis: {
                    // data: axisData[1],
                    type: 'value',
                    scale: true
                },
                yAxis: {
                    // data: axisData[2],
                    type: 'value',
                    scale: true
                },
                //定南水
                series: [{
                    name: '定南水',
                    type: 'scatter',
                    emphasis: {
                        focus: 'series'
                    },
                    markArea: {
                        silent: true,
                        itemStyle: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        },
                        data: [
                            [
                                {
                                    name: '定南水氨氮、总氮分布',
                                    xAxis: 'min',
                                    yAxis: 'min'
                                },
                                {
                                    xAxis: 'max',
                                    yAxis: 'max'
                                }
                            ]
                        ]
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        lineStyle: {
                            type: 'solid'
                        },
                        data: [{ type: 'average', name: 'Average' }]
                    },


                    // 根据名字对应到相应的系列

                    data: axisData1
                },
                {
                    name: '寻乌水',
                    type: 'scatter',
                    emphasis: {
                        focus: 'series'
                    },
                    data: axisData2,
                    markArea: {
                        silent: true,
                        itemStyle: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        },
                        data: [
                            [
                                {
                                    name: '寻乌水氨氮、总氮分布',
                                    xAxis: 'min',
                                    yAxis: 'min'
                                },
                                {
                                    xAxis: 'max',
                                    yAxis: 'max'
                                }
                            ]
                        ]
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        lineStyle: {
                            type: 'solid'
                        },
                        data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
                    }

                },
                {
                    name: '廉江',
                    type: 'scatter',
                    emphasis: {
                        focus: 'series'
                    },
                    data: axisData3,
                    markArea: {
                        silent: true,
                        itemStyle: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        },
                        data: [
                            [
                                {
                                    name: '廉江氨氮、总氮分布',
                                    xAxis: 'min',
                                    yAxis: 'min'
                                },
                                {
                                    xAxis: 'max',
                                    yAxis: 'max'
                                }
                            ]
                        ]
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        lineStyle: {
                            type: 'solid'
                        },
                        data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
                    }

                }
                ]


            });
        }
    });

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});