const buttonElement = document.querySelector('#main button');

buttonElement.addEventListener('click', addBox);

function addBox() {
  const boxContainer = document.querySelector('#container');

  const box = document.createElement('div');

  box.classList.add('box')

  boxContainer.appendChild(box);
 
}
