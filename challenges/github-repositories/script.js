const inputElement = document.querySelector('#main input');

const resultElement = document.querySelector('#result');

const listElement = document.querySelector('#result ul');

inputElement.focus();

function showUserRepositories() {
  const userNameText = inputElement.value;

  listElement.innerHTML = '<li> Carregando... </li>';

  axios
    .get(`http://api.github.com/users/${userNameText}/repos`)
    .then((reponse) => {
      const repositoryList = reponse.data;
      renderRepositories(repositoryList);
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 404) {
          listElement.innerHTML = '<li> O usuário não existe </li>';
          setTimeout(() => {
            listElement.innerHTML = '';
          }, 2000);
        }
      }
    });
}

function renderRepositories(repositoryList) {
  inputElement.value = '';
  listElement.innerHTML = '';
  inputElement.focus();

  for (const repository of repositoryList) {
    const repositoryElement = document.createElement('li');

    const repositoryText = document.createTextNode(repository.name);

    repositoryElement.appendChild(repositoryText);
    listElement.appendChild(repositoryElement);
  }
}
