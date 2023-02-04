function createLibrary(name){
  return {name, shelves: {fantasy: [], fiction: [], nonFiction: []}};
}
function addBook(library, book){
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, bookTitle, bookGenre){
  const genreShelf = library.shelves[bookGenre]
  const foundTitle = genreShelf.find(element => element.title === bookTitle)
  let indexOfBook = genreShelf.indexOf(foundTitle)
  if (indexOfBook > -1){
    genreShelf.splice(indexOfBook, 1)
    return `You have now checked out ${bookTitle} from the ${library.name}`;
  }
  else{
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};