const $appSelectBox = document.getElementById("appSelect");
const $targetBox = document.getElementById("sideBoxCon2");

function appSelectChange(e) {
  $targetBox.innerText = e.target.value;
}

$appSelectBox.addEventListener("change", appSelectChange);
