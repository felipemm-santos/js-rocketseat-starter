const linkElement = document.createElement('a');

linkElement.setAttribute('href', 'https://www.google.com.br/');

const textElement = document.createTextNode('Entre no Google');

linkElement.appendChild(textElement);

const containerElement = document.querySelector('#main');
containerElement.appendChild(linkElement);
