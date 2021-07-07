{
  const gridData2 = [
    {
      id: 057306,
      artist: "iwoo",
      release: "2021.03.26",
      type: "서명 중복",
      typeCode: "1",
      genreCode: "4",
      grade: "2",
    },
    {
      id: 067301,
      artist: "kairon",
      release: "2021.06.24",
      type: "서명 중복",
      typeCode: "1",
      genreCode: "4",
      grade: "3",
    },
  ];

  const grid = new tui.Grid({
    el: document.getElementById("grid2"),
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
          header: "서명 중복 그리드",
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
