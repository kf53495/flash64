const setStoneColor = () => {
  const stoneColor = document.querySelectorAll('.circle');
  stoneColor.forEach(function(value) {
    const random = Math.floor(Math.random() * 2);
    if (random == 0) {
      value.style.backgroundColor = "#ffffff"
    } else {
      value.style.backgroundColor = '#000000'
    };
  });
};


const hideStones = () => {
  const memorizedBtn = document.getElementById('btn')
  const stoneColor = document.querySelectorAll('.circle');
  function changeColor() {
    stoneColor.forEach(function(value) {
      value.setAttribute('id', value.style.backgroundColor);
      value.style.backgroundColor = "#32cd32"
    });
    document.getElementById('guidance').textContent = '黒石があった場所をクリック'
  };
  btn.addEventListener('click', changeColor);
};


function answer(event) {
  const stone = event.target;
  if (stone.id == 'rgb(0, 0, 0)') {
    stone.style.backgroundColor = "#000000"
  } else if (stone.id == 'rgb(255, 255, 255)') {
    stone.style.backgroundColor = "#ffffff"
  };
}


window.addEventListener('DOMContentLoaded', setStoneColor)
window.addEventListener('DOMContentLoaded', hideStones)
window.addEventListener('click', answer)