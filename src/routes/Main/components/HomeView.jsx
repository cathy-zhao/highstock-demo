import React, { Component } from 'react'
import { connect } from 'react-redux'
import Highcharts from 'highcharts/highstock'
import $ from 'jquery'
import './HomeView.less'

class HomeView extends Component {

    componentDidMount(){
        this.draw()
    }

    draw(){
        Highcharts.setOptions({
            lang: {
                rangeSelectorZoom: '' // 不显示 'zoom' 文字
            }
        })

        var ohlc = []

        $.getJSON('https://data.jianshukeji.com/stock/history/000001', function (data) {
            if(data.code !== 1) {
                alert('读取股票数据失败！');
                return false;
            }
            data = data.data;
            console.log("data", data);
            var volume = [],
                dataLength = data.length;
            // set the allowed units for data grouping
            var groupingUnits = [[
                'week',                         // unit name
                [1]                             // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]];
            var i = 0;
            for (i; i < dataLength; i += 1) {
                ohlc.push([
                    data[i][0], // the date
                    data[i][1], // open
                    data[i][2], // high
                    data[i][3], // low
                    data[i][4] // close
                ]);
                // volume.push([
                //     data[i][0], // the date
                //     data[i][5] // the volume
                // ]);
            }
            var options =
            {
                rangeSelector: {
                    selected: 1,
                    inputDateFormat: '%Y-%m-%d',
                    inputEnabled: false
                },
                title: {
                    text: '平安银行历史股价'
                },
                xAxis: {
                    dateTimeLabelFormats: {
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%m-%d',
                        week: '%m-%d',
                        month: '%y-%m',
                        year: '%Y'
                    }
                },
                tooltip: {
                    split: false,
                    shared: true,
                },
                yAxis: {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: '股价'
                    },
                    height: '100%',
                    resize: {
                        enabled: true
                    },
                    lineWidth: 2
                }/*, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: '成交量'
                    },
                    top: '65%',
                    height: '15%',
                    offset: 0,
                    lineWidth: 2
                }*/,
                series: [
                {
                    type: 'candlestick',
                    name: '平安银行',
                    color: 'green',
                    lineColor: 'green',
                    upColor: 'red',
                    upLineColor: 'red',
                    tooltip: {
                    },
                    navigatorOptions: {
                        color: Highcharts.getOptions().colors[0]
                    },
                    data: ohlc,
                    dataGrouping: {
                        units: groupingUnits
                    },
                    id: 'sz'
                }/*,{
                    type: 'column',
                    data: volume,
                    yAxis: 1,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }*/],
                plotOptions: {
                    ohlc: {
                        tooltip: {
                            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' +
                                '开盘: {point.open}<br/>' +
                                '最高: {point.high}<br/>' +
                                '最低: {point.low}<br/>' +
                                '收盘: {point.close}<br/>'
                        }
                    }
                }
            }

            Highcharts.stockChart('chart', options)
        })
    }

    render(){
        return  <div id = "chart" />
    }
}

export default connect()(HomeView)
