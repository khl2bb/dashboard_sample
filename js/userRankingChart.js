let canvasElement = document.getElementById("sampleUserRanking");

tempBorderWidth = 4;
tempColor = "#ffffff";
canvasElement.style.backgroundColor = tempColor;

let myChart = new Chart(canvasElement, {
  type: "line",
  data: {
    labels: [
      "7일 전",
      "6일 전",
      "5일 전",
      "4일 전",
      "3일 전",
      "2일 전",
      "1일 전",
    ],
    datasets: [
      {
        label: "유저A",
        data: [1, 1, 2, 1, 3, 1, 1],
        backgroundColor: ["rgba(231,76,60,0.3)"],
        borderColor: ["#e74c3c"],
        borderWidth: tempBorderWidth,
        lineTension: 0,
      },
      {
        label: "유저B",
        data: [4, 3, 1, 2, 5, 2, 1],
        backgroundColor: ["rgba(241,196,15,0.3)"],
        borderColor: ["#f1c40f"],
        borderWidth: (tempBorderWidth = 4),
        lineTension: 0,
      },
      {
        label: "유저C",
        data: [3, 4, 3, 4, 4, 8, 9],
        backgroundColor: ["rgba(155,89,182,0.3)"],
        borderColor: ["#9b59b6"],
        borderWidth: tempBorderWidth,
        lineTension: 0,
      },
      {
        label: "유저D",
        data: [4, 8, 4, 6, 7, 9, 7],
        backgroundColor: ["rgba(46,204,113,0.3)"],
        borderColor: ["#2ecc71"],
        borderWidth: tempBorderWidth,
        lineTension: 0,
      },
      {
        label: "유저E",
        data: [5, 6, 8, 9, 8, 7, 9],
        backgroundColor: ["rgba(52,152,219,0.3)"],
        borderColor: ["#3498db"],
        borderWidth: tempBorderWidth,
        lineTension: 0,
      },
    ],
  },
  options: {
    responsive: false,
    title: {
      display: true,
      text: "주요 악성 유저 탐지 수 순위 랭킹 변동",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "순위",
          },
          ticks: {
            reverse: true,
            stacked: false,
            beginatzero: true,
            display: true,
          },

          gridLines: {
            display: true,
            drawBorder: true,
            offsetGridLines: false,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
          },
          gridLines: {
            display: true,
            drawBorder: true,
            offsetGridLines: false,
          },
        },
      ],
    },
  },
});
