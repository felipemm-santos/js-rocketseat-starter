const mypromise = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/felipemm-santos');
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    };
  });
};

mypromise()
  .then((reponse) => {
    console.log(reponse);
  })
  .catch((error) => {
    console.warn(error);
  });
