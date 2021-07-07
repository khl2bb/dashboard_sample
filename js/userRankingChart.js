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
