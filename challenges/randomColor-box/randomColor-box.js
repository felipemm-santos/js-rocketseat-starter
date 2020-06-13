const buttonElement = document.querySelector('#main button');

buttonElement.addEventListener('click', addBox);

function addBox() {
  const boxContainer = document.querySelector('#container');

  const box = document.createElement('div');

  box.classList.add('box')

  box.addEventListener('mouseover', changeBoxColor)

  boxContainer.appendChild(box);
 
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }

 function changeBoxColor (event){
  const box = event.target

  const newColor = getRandomColor()

  box.style.backgroundColor = newColor  

 }


 
 