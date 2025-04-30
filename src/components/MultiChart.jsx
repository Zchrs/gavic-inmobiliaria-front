/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

export const DonutChart = ({ width, height, type, option, serie  }) => {
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

export const GradientChart = ({ series, labels }) => {
  const options = {
    labels: labels,
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
  };

  return (
    <CandleArea>
      <div id="chartgradient">
        <ReactApexChart
          options={options}
          series={series} // Asegúrate de pasar un arreglo de números
          type="donut"
          width="100%"
          height="100%"
        />
      </div>
      <div id="html-dist"></div>
    </CandleArea>
  );
};

export const SimpleChart = ({ series, labels }) => {
  const options = {
    chart: {
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
    labels: labels,
    responsive: [
      {
        breakpoint: 768, // Mejor para móviles y tablets
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            show: true,
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="simplechart">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height="150px"
      />
    </div>
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

export const CandlesChart = ({ series, width, height }) => {
  const options = {
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
          colors: ["#000000"],
        },
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#a8aba8",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
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
  };

  return (
    <CandleArea>
      <div id="candlechart">
        <ReactApexChart
          options={options}
          series={[
            {
              name: "Finanzas",
              data: series, // Pasamos los datos corregidos aquí
            },
          ]}
          type="bar"
          height={height}
          width={width}
        />
      </div>
    </CandleArea>
  );
};

export const AreaChart = ({ dayColor, daysColor, theme, series, labels }) => {
  const options = {
    chart: {
      type: 'area',
      zoom: {
        enabled: false,
      },
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
          colors: theme === 'dark' ? '#000000' : '#ffffff', // Cambiar el color del ícono del menú
        },
      },
    },
    grid: {
      show: true,
      borderColor: theme === 'dark' ? '#000000' : '#e0e0e0', // Color de las líneas de la cuadrícula
      strokeDashArray: 0,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    labels: labels,
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: Array.isArray(dayColor) ? dayColor : Array(7).fill(dayColor),
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          colors: Array.isArray(daysColor) ? daysColor : Array(7).fill(daysColor),
          fontSize: '12px',
        },
      },
    },
    legend: {
      horizontalAlign: 'left',
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '10px',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff', // Fondo dinámico del tooltip
        color: theme === 'dark' ? '#ffffff' : '#000000', // Texto dinámico del tooltip
      },
      theme: theme, // Cambia el estilo del tooltip según el tema ("light" o "dark")
      x: {
        show: true,
        formatter: (val) => `Día: ${val}`,
      },
      y: {
        show: false,
        formatter: (val) => `${val}%`,
      },
      marker: {
        show: true,
        background: theme === 'dark' ? '#000000' : '#ffffff'
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
    },
  };

  return (
    <Chart theme={theme}>
      <div id="areachart">
        <ReactApexChart options={options} series={series} type="area" height="240%" />
      </div>
    </Chart>
  );
};

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

.apexcharts-menu {
    position: absolute;
    top: 100%;
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
.apexcharts-theme-dark{
  display: grid;
  width: fit-content !important;
  height: fit-content !important;
}
.apexcharts-theme-light{
  display: grid;
  width: fit-content !important;
  height: fit-content !important;
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


  .apexcharts-toolbar {
    svg {
      filter: ${(props) => (props.theme === 'dark' ? 'brightness(0%)' : 'brightness(100%)')};
      fill: ${(props) => (props.theme === 'dark' ? '#000000' : '#ffffff')};
    }
  }

  .apexcharts-grid {
    line {
      stroke: ${(props) => (props.theme === 'dark' ? '#000000' : '#e0e0e0')}; // Color de las líneas de la cuadrícula
    }
  }

  .apexcharts-menu {
    text-align: center;
    background: ${(props) => (props.theme === 'dark' ? '#000000' : '#ffffff')};
    .apexcharts-menu-item {
      color: ${(props) => (props.theme === 'dark' ? '#ffffff' : '#000000')};
    }
  }

  .apexcharts-tooltip {
    background: ${(props) => (props.theme === 'dark' ? '#000000' : '#ffffff')} !important; // Fondo dinámico
    color: ${(props) => (props.theme === 'dark' ? '#ffffff' : '#000000')} !important; // Texto dinámico
    border: 1px solid ${(props) => (props.theme === 'dark' ? '#ffffff' : '#000000')} !important; // Borde dinámico
    border-radius: 5px;
    padding: 10px;
    font-size: 12px;
  }

  .apexcharts-tooltip-series-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .apexcharts-marker {
    background-color: ${(props) => (props.theme === 'dark' ? '#ffffff' : '#000000')} !important; // Color del marcador
  }
`;
