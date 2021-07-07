function drawGrid4() {
  const gridData2 = [];

  const grid = new tui.Grid({
    el: document.getElementById("grid4"),
    data: gridData2,
    scrollX: false,
    scrollY: false,
    minBodyHeight: 30,
    rowHeaders: ["rowNum"],
    pageOptions: {
      useClient: true,
      perPage: 5,
    },
    header: {
      height: 120,
      complexColumns: [
        {
          header: "해킹 의심 그리드",
          name: "mergeColumn3",
          childNames: ["id", "artist", "type", "release", "genreCode"],
        },
      ],
    },
    columns: [
      {
        header: "유저 ID",
        name: "id",
        align: "center",
        sortable: true,
      },

      {
        header: "이름",
        name: "artist",
        align: "center",
      },
      {
        header: "로그 타입",
        name: "type",
        align: "center",
      },
      {
        header: "생성 날짜",
        name: "release",
        align: "center",
        sortable: true,
      },
      {
        header: "코드",
        name: "genreCode",
        align: "center",
        sortable: true,
      },
    ],
  });
}
