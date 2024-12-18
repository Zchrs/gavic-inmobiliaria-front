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
        type: "donut",
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 1,
          blur: 3,
          opacity: 0.5,
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
                show: true,
              },
            },
          },
        },
      },
      tooltip: {
        height: 20,
      },
      legend: {
        show: false,
      },
      fill: {
        type: "color",
        opacity: 1,
        pattern: {
          enabled: true,
          style: [
            "verticalLines",
            "squares",
            "horizontalLines",
            "circles",
            "slantedLines",
          ],
        },
      },

      theme: {
        palette: "palette5",
      },
      responsive: [
        {
          breakpoint: 100,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
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
        type: "donut",
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 1,
          blur: 3,
          opacity: 0.5,
        },
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: "gradient",
      },
      stroke: {
        width: 0.8,
      },
      legend: {
        show: false,
      },
      //   legend: {
      //     formatter: function(val, opts) {
      //       return val + " - " + opts.w.globals.series[opts.seriesIndex]
      //     }
      //   },
      //   title: {
      //     text: 'Gradient Donut with custom Start-angle'
      //   },
      responsive: [
        {
          breakpoint: 100,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Chart>
      <div id="chartgradient">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width="100%"
          height="100%"
        />
      </div>
      <div id="html-dist"></div>
    </Chart>
  );
};

export const SimpleChart = () => {
  const [state, setState] = useState({
    series: [44, 55, 13],
    options: {
      chart: {
        width: 100,
        type: "pie",
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 1,
          blur: 3,
          opacity: 0.5,
        },
      },
      fill: {
        type: "gradient",
      },
      legend: {
        show: false,
      },
      stroke: {
        width: 0.8,
      },
      labels: ["Team A", "Team B", "Team C"],
      responsive: [
        {
          breakpoint: 100,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              show: false,
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Chart>
      <div id="simplechart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          height="150%%"
        />
      </div>
      <div id="html-dist"></div>
    </Chart>
  );
};

export const ApexChart = ({ options, series }) => {
  const [state, setState] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      tooltip: {
        height: 20,
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Chart>
      <div id="apexchart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </Chart>
  );
};

export const CandlesChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Ventas semanales",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
          },
          offsetX: -10,
          offsetY: -10,
          style: {
            colors: ["#000000"], // Cambia el color de los íconos del menú a negro
            color: "#000000", // Cambia los íconos del menú a negro
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 7,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#000000"],
        },
      },
      xaxis: {
        categories: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"],
        position: "top",
        labels: {
          style: {
            colors: Array(7).fill("#000000"),
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            colors: ["#000000"], // Color de las etiquetas del eje Y
          },
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      grid: {
        show: true, // Habilita las líneas de la cuadrícula
        borderColor: "#000000", // Color negro para las líneas horizontales
        strokeDashArray: 0, // Líneas sólidas
        xaxis: {
          lines: {
            show: false, // Deshabilita las líneas verticales
          },
        },
        yaxis: {
          lines: {
            show: true, // Habilita las líneas horizontales
          },
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: "14px",
        },
        theme: "dark",
        x: {
          show: true,
          formatter: (val) => `Día: ${val}`,
        },
        y: {
          formatter: (val) => `${val}%`,
        },
        marker: {
          show: true,
        },
        onDatasetHover: {
          highlightDataSeries: true,
        },
      },
    },
  });

  return (
    <CandleArea>
      <div id="candlechart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height="280%"
          width={"100%"}
        />
      </div>
    </CandleArea>
  );
};

export const AreaChart = () => {

  const series = {
    monthDataSeries1: {
      prices: [0, 1000, 3000, 3600, 4700, 5800, 9000, 9100, 9200, 9400],
      dates: [
        "2024-01-01",
        "2024-01-02",
        "2024-01-03",
        "2024-01-04",
        "2024-01-05",
        "2024-01-06",
        "2024-01-07",
        "2024-01-08",
        "2024-01-09",
        "2024-01-10",
      ],
    },
  };

  const [state, setState] = useState({
    
      series: [{
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
      }],
      options: {
        chart: {
          type: 'area',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: true,
            tools: {
              download: true, // Botón para descargar el gráfico
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
            },
            offsetX: -10, // Ajusta la posición horizontal del menú
            offsetY: -10,   // Ajusta la posición vertical del menú
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        
        // title: {
        //   text: 'Fundamental Analysis of Stocks',
        //   align: 'left'
        // },
        // subtitle: {
        //   text: 'Price Movements',
        //   align: 'left'
        // },

        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: Array(7).fill("#ffffff"), // Color blanco para los días de la semana
              fontSize: "12px",    // Tamaño de la fuente
            },
          },
          crosshairs: {
            show: false,
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            style: {
              colors: Array(7).fill("#ffffff"), // Color blanco para los días de la semana
              fontSize: "12px",    // Tamaño de la fuente
            },
          },
        },
        legend: {
          horizontalAlign: 'left'
        },
        tooltip: {
          enabled: true,
          style: {
            fontSize: "10px", // Tamaño de la fuente del tooltip
          },
          theme: "dark", // Estilo del tooltip (puedes usar "light", "dark", o "custom")
          x: {
            show: true,
            formatter: (val) => `Día: ${val}`, // Texto personalizado
            
          },
          y: {
            formatter: (val) => `${val}%`, // Formato del valor
          },
          marker: {
            show: true,
          },
          onDatasetHover: {
            highlightDataSeries: true,
          },
        },
      },
    
    
  });

  

  return (
    <Chart>
      <div id="areachart">
          <ReactApexChart options={state.options} series={state.series} type="area" height="240%" />
        </div>
    </Chart>
  );
}

const CandleArea = styled.div`
  .apexcharts-toolbar {
    position: absolute;
    height: fit-content;
    width: fit-content;
    border-radius: 3px;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
      filter: brightness(0%);
    }
}
#chart{
  display: grid;
  width: fit-content !important;
  height: 160px !important;
  padding-bottom: 24px;

}
#areachart{
  display: grid;
  width: fit-content !important;
  height: 150px !important;
  padding-bottom: 24px;

}
#candlechart{
  display: grid;
  width: fit-content !important;
  height: 146px !important;
  padding-bottom: 24px;
}

  .apexcharts-tooltip {
    height: fit-content !important;
    width: fit-content !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

.apexcharts-tooltip-active{
  width: fit-content !important;
  height: fit-content !important;
  background: transparent;
}
.apexcharts-theme-dark{
  display: grid;
  width: fit-content !important;
  height: fit-content !important;
}
.apexcharts-theme-light{
  display: grid;
  width: fit-content !important;
  height: fit-content !important;
  background: transparent;
}
.apexcharts-menu {
    background: #fff;
    position: absolute;
    top: 100%;
    /* border: 1px solid #ddd; */
    border-radius: 3px;
    right: 0px;
    opacity: 0;
    transition: .15s ease all;
    pointer-events: none;
    &-open{
      height: fit-content;
      width: fit-content;
      text-align: center;

    }
    &-item{
      color: black;
      &:hover{
        font-weight: 700;
      }
    }
}
.apexcharts-legend{
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
}
  .chart-container {
    margin: 0;
    padding: 0;
  width: fit-content !important;
  height: fit-content !important;
  
}

.apexcharts-canvas{
  display: grid;
    height: fit-content !important;
    background: transparent !important;
}

`

const Chart = styled.div`
#chart{
  display: grid;
  width: fit-content !important;
  height: 160px !important;
  padding-bottom: 24px;

}
#areachart{
  display: grid;
  width: fit-content !important;
  height: 150px !important;
  padding-bottom: 24px;

}
#candlechart{
  display: grid;
  width: fit-content !important;
  height: 146px !important;
  padding-bottom: 24px;
}

  .apexcharts-tooltip {
    height: fit-content !important;
    width: fit-content !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .apexcharts-toolbar {
    position: absolute;
    height: fit-content;
    width: fit-content;
    border-radius: 3px;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
      filter: brightness(500%);
    }
}
.apexcharts-tooltip-active{
  width: fit-content !important;
  height: fit-content !important;
  background: transparent;
}
.apexcharts-theme-dark{
  display: grid;
  width: fit-content !important;
  height: fit-content !important;
}
.apexcharts-theme-light{
  display: grid;
  width: fit-content !important;
  height: fit-content !important;
  background: transparent;
}
.apexcharts-menu {
    background: #fff;
    position: absolute;
    top: 100%;
    /* border: 1px solid #ddd; */
    border-radius: 3px;
    right: 0px;
    opacity: 0;
    transition: .15s ease all;
    pointer-events: none;
    &-open{
      height: fit-content;
      width: fit-content;
      text-align: center;

    }
    &-item{
      color: black;
      &:hover{
        font-weight: 700;
      }
    }
}
.apexcharts-legend{
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
}
  .chart-container {
    margin: 0;
    padding: 0;
  width: fit-content !important;
  height: fit-content !important;
  
}

.apexcharts-canvas{
  display: grid;
    height: fit-content !important;
    background: transparent !important;
}
`;
