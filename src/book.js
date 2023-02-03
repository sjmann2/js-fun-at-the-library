function createTitle(title) {
  return (`The ${title}`);
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns};
}

function saveReview(description, reviews){
  if (!reviews.includes(description)) {
    return reviews.push(description)
  };
}

function calculatePageCount(title){
  return (title.length * 20);
}

function writeBook(title, mainCharacter, genre){
  return {title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre};
}

function editBook(book){
  return (book.pageCount = book.pageCount - book.pageCount * .25);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}