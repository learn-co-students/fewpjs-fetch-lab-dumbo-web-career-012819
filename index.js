function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then( function(json) {renderBooks(json); totalNumofPages(json);});
}

function renderBooks(json) {
  // debugger
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
})

function totalNumofPages(json) {
  let totalPages = 0
  json.forEach( (book) => {
    totalPages += book["numberOfPages"];
  })
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  h2.innerHTML = `<h2>Total Number of Pages</h2>`
  h3.innerHTML = `<h3>${totalPages}</h3>`
  main.append(h2, h3);
}


// The 5th book in the series
// The 1031st character in the series
// The total number of pages of all the books
