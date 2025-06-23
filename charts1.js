// charts -56 & 75 script
function getColor(score) {
    if (score >= 80) return "#00c853";      // green
    else if (score >= 60) return "#64dd50"; // light green
    else if (score >= 40) return "#d50000"; // red
    else return "#d50000";                  // red
  }

  function renderGauge(chartId, score) {
    const options = {
      chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -20
      },
      series: [score],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: '60%',
          },
          track: {
            background: '#eee',
            strokeWidth: '100%',
          },
          dataLabels: {
            name: { show: false },
            value: {
              color: getColor(score),
              fontSize: '40px',
              show: true,
              offsetY: 10
            }
          }
        }
      },
      fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: "#d50000", // Red
            opacity: 1
          },
          {
            offset: 25,
            color: "#ff6d00", // Orange
            opacity: 1
          },
          {
            offset: 50,
            color: "#ffeb3b", // Yellow
            opacity: 1
          },
          {
            offset: 75,
            color: "#64dd17", // Light Green
            opacity: 1
          },
          {
            offset: 100,
            color: "#00c853", // Green
            opacity: 1
          }
        ]
      }
    },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Score']
    };

    const chart = new ApexCharts(document.querySelector(`#${chartId}`), options);
    chart.render();
  }

  // Render 3 gauges with different scores
  renderGauge("chart2", 75); // green
  renderGauge("chart1", 56); // light green

  // chart 80 script
  const options = {
    chart: {
      type: 'line',
      height: 100,
      sparkline: {
        enabled: true // removes axis, grid, labels
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#00C853'] // Green
    },
    series: [{
      data: [12, 14, 13, 14, 12, 10, 9, 10, 11, 10, 9, 10, 11, 13, 15, 17, 18, 17]
    }],
    tooltip: {
      enabled: false
    }
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

//risk timeline chart script
const options1 = {
    chart: {
      type: 'area',
      height: 300,
      stacked: false,
      toolbar: { show: false }
    },
    title: {
      text: 'Landing Cost vs Tariff Impact by Country',
      align: 'center',
      style: {
        fontSize: '20px',
        color: '#333'
      }
    },
    colors: ['#FF6F00', '#D50000'], // orange and red
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100]
      }
    },
    series: [
      {
        name: 'Landing Cost',
        data: [70, 68, 66, 65, 67, 69]
      },
      {
        name: 'Tariff Impact',
        data: [5, 3, 2, 2, 3, 2]
      }
    ],
    xaxis: {
      categories: ['China', 'Vietnam', 'Thailand', 'Mexico', 'Poland', 'India'],
      labels: {
        style: {
          fontSize: '14px',
          colors: '#888'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          colors: '#888'
        }
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#FF6F00'
      },
      markers: {
        width: 12,
        height: 4,
        radius: 2
      }
    },
    tooltip: {
      shared: true,
      intersect: false
    }
  };

  const chart1 = new ApexCharts(document.querySelector("#chart3"), options1);
  chart1.render();

  //risk distribution chart script
  const options2 = {
    chart: {
      type: 'pie',
      height: 350
    },
    labels: ['Critical', 'High', 'Medium', 'Low'],
    series: [16, 26, 25, 33],
    colors: ['#D50000', '#FF6F00', '#FFD600', '#00C853'],
    legend: {
      position: 'bottom',
      labels: {
        useSeriesColors: true
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '16px',
        colors: ['#D50000', '#BA0404', '#FFD600', '#00C853'] // match label colors to slices
      },
      dropShadow: {
        enabled: false
      },
      offset: 0,
      textAnchor: 'start',
      formatter: function (val, opts) {
        return opts.w.globals.labels[opts.seriesIndex] + ': ' + val.toFixed(0) + '%';
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: 50,
          minAngleToShowLabel: 10
        },
        expandOnClick: false
      }
    }
  };

  const riskChart = new ApexCharts(document.querySelector("#riskdistribution"), options2);
  riskChart.render();

  //supply chain container chart script
  const supplyRiskChartOptions = {
    series: [
      { name: 'Tariff Impact', value: 60, color: 'orange' },
      { name: 'Supply Risk', value: 40, color: 'red' },
      { name: 'Lead Time', value: 32, color: 'orange' },
      { name: 'Redundancy', value: 24, color: 'yellow' },
      { name: 'Political Risk', value: 12, color: 'green' },
      { name: 'Currency Risk', value: 12, color: 'green' }
    ],
    renderTo: '#riskChartContainer'
  };

  function renderCustomChart(options) {
    const container = document.querySelector(options.renderTo);
    container.innerHTML = ''; // Clear if re-rendered

    const leftColumn = document.createElement('div');
    leftColumn.className = 'column';

    const rightColumn = document.createElement('div');
    rightColumn.className = 'column';

    const half = Math.ceil(options.series.length / 2);
    const leftItems = options.series.slice(0, half);
    const rightItems = options.series.slice(half);

    function createGroup(item) {
      const group = document.createElement('div');
      group.className = 'bar-group';
      group.innerHTML = `
        <div class="label">${item.name}</div>
        <div class="bar"><div class="fill ${item.color}" style="width: ${item.value}%;"></div></div>
        <div class="percent">${item.value}%</div>
      `;
      return group;
    }

    leftItems.forEach(item => leftColumn.appendChild(createGroup(item)));
    rightItems.forEach(item => rightColumn.appendChild(createGroup(item)));

    container.appendChild(leftColumn);
    container.appendChild(rightColumn);
  }

  // Render the chart
  renderCustomChart(supplyRiskChartOptions);

  //Strategic Scatter Chart script
  const options3 = {
    chart: {
      type: 'scatter',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      title: {
        text: 'Risk Score'
      },
      min: 20,
      max: 60,
      tickAmount: 4
    },
    yaxis: {
      title: {
        text: 'Qualitative Score'
      },
      min: 50,
      max: 80,
      tickAmount: 3
    },
    series: [
      {
        name: 'Low Risk',
        data: [
          [30, 78],
          [28, 74]
        ],
        color: '#00C853'
      },
      {
        name: 'Medium Risk',
        data: [
          [32, 72],
          [34, 70],
          [36, 68]
        ],
        color: '#FA8C16'
      },
      {
        name: 'High Risk',
        data: [
          [58, 58]
        ],
        color: '#F5222D'
      }
    ],
    markers: {
      size: 10
    },
    legend: {
      show: false
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    }
  };

  const chart3 = new ApexCharts(document.querySelector("#strategicScatterChart"), options3);
  chart3.render();

//risk and quality assert script
const options4 = {
    chart: {
      type: 'radar',
      height: 400
    },
    series: [
      {
        name: 'Risk Score',
        data: [50, 25, 25, 30, 30, 35],
        color: '#F44336'
      },
      {
        name: 'Quality Score',
        data: [50, 60, 60, 60, 60, 60],
        color: '#4CAF50'
      }
    ],
    labels: ['China', 'Vietnam', 'Thailand', 'Mexico', 'Poland', 'India'],
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.3
    },
    markers: {
      size: 0
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 4
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    }
  };

  const chart4 = new ApexCharts(document.querySelector("#radarChart"), options4);
  chart4.render();

  //landing cost chart
  const options5 = {
    chart: {
      height: 400,
      type: 'line',
      toolbar: {
        show: false // Hides the toolbar
      }
    },
    series: [
      {
        name: 'Total Landing Cost',
        type: 'column',
        data: [64, 57, 56, 55, 59, 56],
        color: '#FF7F0E'
      },
      {
        name: 'Tariff Impact',
        type: 'line',
        data: [7, 2, 1.5, 1, 4, 1],
        color: '#2CA02C'
      }
    ],
    stroke: {
      width: [0, 2],
      curve: 'smooth'
    },
    markers: {
      size: 5,
      shape: 'circle',
      strokeWidth: 2,
      strokeColors: '#fff'
    },
    labels: ['China', 'Vietnam', 'Thailand', 'Mexico', 'Poland', 'India'],
    xaxis: {
      type: 'category'
    },
    yaxis: [
      {
        title: {
          text: 'Total Landing Cost'
        },
        min: 50,
        max: 70
      },
      {
        opposite: true,
        title: {
          text: 'Tariff Impact'
        },
        min: -2,
        max: 8
      }
    ],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    }
  };

  const chart5 = new ApexCharts(document.querySelector("#landingChart"), options5);
  chart5.render();

  // benifit chart script
   const options6 = {
    chart: {
      type: 'bar',
      height: 400,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Benefit Score',
      data: [18, 19.1, 17.5, 17.2, 16.8]
    }],
    xaxis: {
      categories: ['Vietnam', 'Thailand', 'Mexico', 'Poland', 'India']
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: '55%'
      }
    },
    fill: {
      colors: ['#28a745', '#28a745', '#28a745', '#28a745', '#28a745']
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const countries = ['Vietnam', 'Thailand', 'Mexico', 'Poland', 'India'];
        const benefits = [18, 19.1, 17.5, 17.2, 16.8];
        const riskReduction = [22.5, 23.8, 21.7, 20.9, 19.5];
        const costSavings = [10, 12, 9.5, 9.1, 8.8];

        return `
          <div style="padding:10px">
            <strong>${countries[dataPointIndex]}</strong><br>
            Total Benefit: ${benefits[dataPointIndex]}<br>
            Risk Reduction: ${riskReduction[dataPointIndex]}<br>
            Cost Savings: ${costSavings[dataPointIndex]}%
          </div>
        `;
      }
    },
    annotations: {
      xaxis: [{
        x: 'Thailand',
        borderColor: '#999',
        label: {
          style: {
            color: '#fff',
            background: '#00E396'
          }
        }
      }],
      points: [{
        x: 'Thailand',
        y: 30,
        marker: {
          size: 0,
          fillColor: 'gray',
          strokeColor: 'gray'
        },
        label: {
          borderColor: '#ccc',
          style: {
            fontSize: '0px'
          }
        }
      }]
    },
    legend: {
      position: 'bottom',
      labels: {
        colors: '#000'
      }
    }
  };

  const chart6 = new ApexCharts(document.querySelector("#benefitChart"), options6);
  chart6.render();

  //risk factor radar chart
  var options7 = {
    chart: {
      type: 'radar',
      height: 400,
      toolbar: {
        show: false
      }
    },
    series: [
      {
        name: 'China',
        data: [24, 18, 20, 17, 15, 22]
      },
      {
        name: 'Vietnam',
        data: [18, 14, 12, 11, 10, 17]
      }
    ],
    labels: [
      'Tariff Volatility',
      'Concentration Risk',
      'Political Risk',
      'Non-Tariff',
      'Currency Risk',
      'Lead Time'
    ],
    colors: ['#F44336', '#4CAF50'], // Red for China, Green for Vietnam
    fill: {
      opacity: 0.4
    },
    stroke: {
      show: true,
      width: 2
    },
    markers: {
      size: 0
    },
    yaxis: {
      show: true,
      tickAmount: 2,
      labels: {
        show: true
      }
    },
    legend: {
      position: 'bottom'
    }
  };

  var chart7 = new ApexCharts(document.querySelector("#chartRadar"), options7);
  chart7.render();

  //Quality metrics comparsion script
  var options8 = {
    chart: {
      height: 400,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    series: [
      {
        name: 'Competitiveness',
        type: 'column',
        data: [73, 72, 70, 71, 74]
      },
      {
        name: 'Logistics Performance',
        type: 'column',
        data: [69, 69, 67, 68, 71]
      },
      {
        name: 'ESG',
        type: 'column',
        data: [70, 70, 68, 69, 70]
      },
      {
        name: 'Strategic Fit',
        type: 'line',
        data: [78, 75, 73, 74, 77]
      }
    ],
    stroke: {
      width: [0, 0, 0, 2],
      curve: 'smooth'
    },
    colors: ['#FF7F0E', '#2CA02C', '#A0A0A0', '#D62728'], // Orange, Green, Gray, Red
    plotOptions: {
      bar: {
        columnWidth: '60%'
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Vietnam', 'Thailand', 'Mexico', 'Poland', 'India']
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const countries = ['Vietnam', 'Thailand', 'Mexico', 'Poland', 'India'];
        const labels = ['Competitiveness', 'Logistics Performance', 'ESG', 'Strategic Fit'];
        const colors = ['#FF7F0E', '#2CA02C', '#A0A0A0', '#D62728'];
        let tooltip = `<div style="padding:10px;"><strong style="font-size:14px;">${countries[dataPointIndex]}</strong><br>`;
        for (let i = 0; i < labels.length; i++) {
          tooltip += `<span style="color:${colors[i]}">${labels[i]} : ${series[i][dataPointIndex]}</span><br>`;
        }
        tooltip += `</div>`;
        return tooltip;
      }
    },
    legend: {
      position: 'bottom'
    }
  };

  var chart8 = new ApexCharts(document.querySelector("#metricchart"), options8);
  chart8.render();