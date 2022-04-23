import React from "react";
// import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
class Graph1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Title one",
          type: "column",
          color: "rgba(36, 161, 187, 0.85)",

          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Title Two",
          type: "line",
          color: "rgba(36, 161, 187, 0.85)",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
        },
        stroke: {
          width: [0, 4],
        },
        title: {
          text: "Responses Served",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: [
          "01 Jan 2001",
          "02 Jan 2001",
          "03 Jan 2001",
          "04 Jan 2001",
          "05 Jan 2001",
          "06 Jan 2001",
          "07 Jan 2001",
          "08 Jan 2001",
          "09 Jan 2001",
          "10 Jan 2001",
          "11 Jan 2001",
          "12 Jan 2001",
        ],
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              //   text: "W",
            },
          },
          {
            opposite: true,
            title: {
              //   text: "Social Media",
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}
export default Graph1;
