/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";


export const DonutChart = ({ width, height, type }) => {
    const [state, setState] = useState({
        series: [44, 55, 41],
        options: {
            chart: {
                width: "100%",
                type: 'donut',
                dropShadow: {
                    enabled: true,
                    color: '#111',
                    top: -1,
                    left: 3,
                    blur: 3,
                    opacity: 0.5
                }
            },
            stroke: {
                width: 0.5,
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true
                            }
                        }
                    }
                }
            },
            legend: {
                show: false
            },

            // dataLabels: {
            //     show: true,
            //     dropShadow: {
            //         blur: 3,
            //         opacity: 1
            //     }
            // },
            fill: {
                type: 'pattern',
                opacity: 1,
                pattern: {
                    enabled: true,
                    style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
                },
            },
            // states: {
            //     hover: {
            //         filter: 'none'
            //     }
            // },
            theme: {
                palette: 'palette5'
            },
            responsive: [{
                breakpoint: 280,
                options: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    });

    return (
        <div>
            <ReactApexChart 
                options={state.options} 
                series={state.series} 
                type={type}
                width={width}
                height={height}
            />
        </div>
    );
};

export const GradientChart = () => {
    const [state, setState] = useState({
      
        series: [44, 55, 41],
        options: {
          chart: {
            width: 280,
            type: 'donut',
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270
            }
          },
          dataLabels: {
            enabled: true
          },
          fill: {
            type: 'gradient',
          },
          stroke: {
            width: 0.8,
          },
          legend: {
            show: false
          },
        //   legend: {
        //     formatter: function(val, opts) {
        //       return val + " - " + opts.w.globals.series[opts.seriesIndex]
        //     }
        //   },
        //   title: {
        //     text: 'Gradient Donut with custom Start-angle'
        //   },
          responsive: [{
            breakpoint: 280,
            options: {
              chart: {
                width: 280
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    });

    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" width="100%" height="100%" />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }

  export const SimpleChart = () => {
    const [state, setState] = useState({
      
        series: [44, 55, 13],
        options: {

          chart: {
            width: 280,
            type: 'pie',
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            show: false
          },
          stroke: {
            width: 0.8,
          },
          labels: ['Team A', 'Team B', 'Team C'],
          responsive: [{
            breakpoint: 280,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false,
                position: 'bottom'
              }
            }
          }]
        },
      
      
    });

    return (
      <Chart>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" width="71%" />
          </div>
        <div id="html-dist"></div>
      </Chart>
    );
  }

  const Chart = styled.div`
  margin: auto;
    .chart{
      margin: auto;
    }
  `