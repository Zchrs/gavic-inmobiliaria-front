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
            download: true, // Botón para descargar el gráfico
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
          },
          offsetX: -10, // Ajusta la posición horizontal del menú
          offsetY: 0,   // Ajusta la posición vertical del menú
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
          colors: ["#ffffff"],
        },
      },
      xaxis: {
        categories: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"],
        position: "top",
        labels: {
          style: {
            colors: Array(7).fill("#ffffff"), // Color blanco para los días de la semana
            fontSize: "12px",    // Tamaño de la fuente
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
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
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
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: "14px", // Tamaño de la fuente del tooltip
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
    <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height="260%"
          width={"100%"}
        />
      </div>
    </Chart>
  );
};

// export const CandlesChart = () => {
//   const [state, setState] = useState({
//     series: [
//       {
//         name: "Ventas semanales",
//         data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2],
//       },
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         toolbar: {
//           show: true,
//           tools: {
//             download: true,
//             selection: true,
//             zoom: true,
//             zoomin: true,
//             zoomout: true,
//           },
//         },
//       },
//       plotOptions: {
//         bar: {
//           borderRadius: 10,
//           dataLabels: {
//             position: "top",
//           },
//         },
//       },
//       dataLabels: {
//         enabled: true,
//         formatter: (val) => `${val}%`,
//         offsetY: -20,
//         style: {
//           fontSize: "12px",
//           colors: ["#ffffff"],
//         },
//       },
//       xaxis: {
//         categories: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"],
//         position: "top",
//         axisBorder: { show: false },
//         axisTicks: { show: false },
//         labels: {
//           show: true,
//           style: {
//             colors: ["#ffffff"], // Cambia el color de las etiquetas a blanco
//           },
//         },
//     },
//       yaxis: {
//         axisBorder: { show: false },
//         axisTicks: { show: false },
        
//         labels: {
//           show: true,
//           style: {
//             colors: ["#ffffff"], // Cambia el color de las etiquetas a blanco
//           },
//         },
//       },
//       tooltip: {
//         enabled: true,
//         style: { fontSize: "14px" },
//       },
//     },
//   });

//   return (
//     <Chart>
//       <div id="chart">
//         <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="bar"
//           height="250%"
//           width="100%"
//         />
//       </div>
//     </Chart>
//   );
// };

const Chart = styled.div`
#chart{
  display: grid;
  width: fit-content !important;
  height: 200px !important;
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
    border: 1px solid #ddd;
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
}
.apexcharts-legend{
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  overflow: hidden;
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
}
`;
