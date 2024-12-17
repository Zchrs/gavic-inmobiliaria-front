/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";


export const DonutChart = ({ width, height, type, option, serie }) => {
    const [state, setState] = useState({
        series: [44, 55, 41],
        options: {
            chart: {
              
                width: 100,
                height: 50,
                type: 'donut',
                dropShadow: {
                    enabled: true,
                    color: '#111',
                    top: -1,
                    left: 1,
                    blur: 3,
                    opacity: 0.5
                },
                
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
            tooltip: {
             height: 20,
            },
            legend: {
              show: false
            },
            fill: {
              type: 'color',
              opacity: 1,
              pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
              },
            },
            
            theme: {
                palette: 'palette5'
            },
            responsive: [{
                breakpoint: 100,
                options: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    });

    return (
        <Chart>
            <ReactApexChart 
                options={state.options} 
                series={serie} 
                type={type}
                width={width}
                height={height}
            />
        </Chart>
    );
};

export const GradientChart = () => {
    const [state, setState] = useState({
      
        series: [44, 55, 41],
        options: {
          chart: {
            width: 100,
            type: 'donut',
            dropShadow: {
              enabled: true,
              color: '#111',
              top: -1,
              left: 1,
              blur: 3,
              opacity: 0.5
          }
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
            breakpoint: 100,
            options: {
              chart: {
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    });

    

    return (
      <Chart>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" width="100%" height="100%" />
          </div>
        <div id="html-dist"></div>
      </Chart>
    );
  }

  export const SimpleChart = () => {
    const [state, setState] = useState({
      
        series: [44, 55, 13],
        options: {

          chart: {
            width: 100,
            type: 'pie',
            dropShadow: {
              enabled: true,
              color: '#111',
              top: -1,
              left: 1,
              blur: 3,
              opacity: 0.5
          }
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
            breakpoint: 100,
            options: {
              chart: {
                width: 100
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
            <ReactApexChart options={state.options} series={state.series} type="pie" height="158%%" />
          </div>
        <div id="html-dist"></div>
      </Chart>
    );
  }

 export const ApexChart = ({ options, series }) => {
    const [state, setState] = useState({
      
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270
            }
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function(val, opts) {
              return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
          },
          tooltip: {
            height: 20,
           },
          title: {
            text: 'Gradient Donut with custom Start-angle'
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
    });

    

    return (
      <Chart>
        <div id="chart">
            <ReactApexChart options={options} series={series} type="donut" width={380} />
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
    .apexcharts-tooltip {
        height: fit-content !important;
        width: fit-content !important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
    }
  `