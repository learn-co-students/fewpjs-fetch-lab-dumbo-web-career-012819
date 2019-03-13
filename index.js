function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then((response) => {
      return response.json()
    })
    .then((parsedResponse) => {
      const findCharacter = (number) => {
        let characterArray = []
        parsedResponse.forEach((book) => {
          characterArray = [...characterArray, ...book.characters]
        })
        return characterArray[number - 1]
      }

      const findTotalPages = () => {
        let totalPages = 0

        parsedResponse.forEach( book => totalPages += book.numberOfPages )

        return totalPages
      }

      const gameOfThronesData = {
        books: parsedResponse,
        book5: parsedResponse[4].name,
        character1031: findCharacter(1031),
        totalPages: findTotalPages()
      }

      debugger
      return renderBooks(gameOfThronesData)
    })
}

// function fetchCharacters() {
//   fetch('https://anapioficeandfire.com/api/characters')
//     .then((response) => {
//       return response.json()
//     })
//     .then((parsedResponse) => {
//       debugger
//       return parsedResponse
//     })
// }

function renderBooks(data) {
  const main = document.querySelector('main')
  const body = document.querySelector('body')
  const book5 = document.createElement('h3')
  const character1031 = document.createElement('h3')
  const totalPages = document.createElement('h3')

  book5.innerText = `${data.book5}`
  character1031.innerText = `${data.character1031}`
  totalPages.innerText = `${data.totalPages}`

  data.books.forEach(book => {
    const li = document.createElement('li')
    li.innerHTML = `${book.name}`

    main.appendChild(li)
  })

  body.appendChild(book5)
  body.appendChild(character1031)
  body.appendChild(totalPages)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  // fetchCharacters()
})
