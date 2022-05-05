const setStoneColor = () => {
  const stoneColor = document.querySelectorAll('.circle');
  stoneColor.forEach(function(value) {
    const random = Math.floor(Math.random() * 2);
    if (random == 0) {
      value.style.backgroundColor = "#ffffff"
    };
  });
};

const hideStones = () => {
  const memorizedBtn = document.getElementById('btn')
  const stoneColor = document.querySelectorAll('.circle');
  function changeColor() {
    stoneColor.forEach(function(value) {
    value.style.backgroundColor = "#32cd32"
    });
  };
  btn.addEventListener('click', changeColor);
};
// window.onload = function() {
//   const memorizedBtn = document.querySelector('.memorized-btn')
//   console.log(memorizedBtn)
// }


window.addEventListener('DOMContentLoaded', setStoneColor)
window.addEventListener('DOMContentLoaded', hideStones)