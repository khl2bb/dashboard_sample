let $gridBtn3 = document.getElementById("gridBtn3");
let $gridBtn4 = document.getElementById("gridBtn4");
let $grid3 = document.getElementById("grid3");
let $grid4 = document.getElementById("grid4");

let btnRotateState3 = 0;
let btnRotateState4 = 0;

function gridBtn3Clicked(e) {
  if (btnRotateState3 == 0) {
    e.target.classList.add("rotation");
    drawGrid3();
    btnRotateState3 = 1;
  } else if (btnRotateState3 == 1) {
    e.target.classList.remove("rotation");
    $grid3.innerHTML = "";
    btnRotateState3 = 0;
  }
}

function gridBtn4Clicked(e) {
  if (btnRotateState4 == 0) {
    e.target.classList.add("rotation");
    drawGrid4();
    btnRotateState4 = 1;
  } else if (btnRotateState4 == 1) {
    e.target.classList.remove("rotation");
    $grid4.innerHTML = "";
    btnRotateState4 = 0;
  }
}

$gridBtn3.addEventListener("click", gridBtn3Clicked);
$gridBtn4.addEventListener("click", gridBtn4Clicked);
