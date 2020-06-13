const xhr = new XMLHttpRequest();

// felipemm-santos
xhr.open('GET', 'https://api.github.com/users/felipemm-santos');
xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
