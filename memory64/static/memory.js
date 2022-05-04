const setStoneColor = () => {
  const stoneColor = document.querySelectorAll('.circle');
  stoneColor.forEach(function(value) {
    const random = Math.floor(Math.random() * 2);
    if (random == 0) {
      value.style.backgroundColor = "#ffffff"
    };
  });
}

window.addEventListener("load", setStoneColor)