{
  const el = document.getElementById("chart1");

  const data = {
    categories: [
      "7일 전",
      "6일 전",
      "5일 전",
      "4일 전",
      "3일 전",
      "2일 전",
      "1일 전",
    ],
    series: [
      {
        name: "주요 로그 수",
        data: [5000, 3000, 3000, 2000, 5000, 8000, 9000],
      },
      {
        name: "전체 로그 수",
        data: [8000, 6000, 7000, 5000, 9000, 12000, 15000],
      },
    ],
  };
  const options = {
    chart: { width: 600, height: 400 },
  };
  const chart = toastui.Chart.columnChart({ el, data, options });
}
