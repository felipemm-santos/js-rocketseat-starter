/* Objetivo:
    Criar uma função que retorne a partir do objeto 
    baixo:
*/

const address = {
  street: 'Rua dos pinheiros',
  number: 1293,
  neighborhood: 'Centro',
  city: 'São Paulo',
  uf: 'SP',
};

// Retorne:

/* O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293. */
const result = document.querySelector('div#result')

result.innerHTML = writeUserAddress(address)

function writeUserAddress (address){

  return `O usuário mora em ${address.city} / ${address.uf}, no bairro ${address.neighborhood}, na rua \"${address.street}\" com número ${address.number}`
}






