const inputNameElement = document.querySelector('input[name=nome]');

const nameListElement = document.querySelector('#result ul');

const names = ['Diego', 'Gabriel', 'Lucas'];

inputNameElement.focus()

for (const name of names) {
  renderName(name);
}

function adicionar() { 

  const nameString = inputNameElement.value;

  names.push(nameString);

  renderName(nameString);

  inputNameElement.value = '';

  inputNameElement.focus()
}

function renderName(name) {
  const listItemElement = document.createElement('li');

  const textElement = document.createTextNode(name);

  listItemElement.appendChild(textElement);

  nameListElement.appendChild(listItemElement);
}
