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
  const memorizedBtn = document.querySelector('.memorized-btn');
  const stoneColor = document.querySelectorAll('.circle');

  function changeColor() {
    stoneColor.forEach(function(value) {
      const colorId = value.style.backgroundColor;
      if (colorId == 'rgb(0, 0, 0)') {
        value.setAttribute('id', 'black')
      } else if (colorId == 'rgb(255, 255, 255)') {
        value.setAttribute('id', 'white')
      };
      value.style.backgroundColor = "#32cd32"
    });
    document.getElementById('guidance').textContent = '黒石があった場所をクリック'
    document.getElementById('btn-frame').style.display = 'none';
    document.getElementById('finish-btn-frame').style.display = 'block';
  };

  memorizedBtn.addEventListener('click', changeColor);
};


let count = 0
let missCount = 0
function answer(event) {
  const stone = event.target;
  if (stone.id == 'black') {
    stone.style.backgroundColor = "#000000"
    count ++;
  } else if (stone.id == 'white') {
    stone.style.backgroundColor = "#ffffff"
    missCount ++;
  };
};


const okBtn = () => {
  function relocation() {
    const stoneColor = document.querySelectorAll('.circle');
    whiteStone = Array.from(document.querySelectorAll('#white')).length;
    stoneColor.forEach(function(value) {
      if (value.id == 'black') {
        value.style.backgroundColor = "#000000"
      } else if (value.id == 'white)') {
        value.style.backgroundColor = "#ffffff"
      };
    });
    const result = count - missCount + whiteStone

    document.getElementById('result').textContent = result
    document.getElementById('finish-btn-frame').style.display = 'none';
    document.getElementById('result-field').style.display = 'block';
  };

  const finishBtn = document.getElementById('finish')
  finishBtn.addEventListener('click', relocation)
};


window.addEventListener('DOMContentLoaded', setStoneColor)
window.addEventListener('DOMContentLoaded', hideStones)
window.addEventListener('click', answer)
window.addEventListener('DOMContentLoaded', okBtn)