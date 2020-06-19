function fetchBooks() {
<<<<<<< HEAD
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
  return response.json();
  })
  .then(function(json){
    renderBooks(json)
  })
=======
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  
  renderBooks(resp);
>>>>>>> 59bf932f0d2873830db70c924df293c94a514515
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
