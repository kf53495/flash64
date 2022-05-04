const setStoneColor = () => {
  let stoneColor = document.querySelectorAll('.circle');
  stoneColor.forEach(function(value) {
    console.log(value);
    value.style.backgroundColor = "#ffffff"
  });
}

window.addEventListener("load", setStoneColor)