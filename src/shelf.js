function shelfBook(book, shelf){
  if (shelf.length < 3){
    return(shelf.unshift(book))};
}

function unshelfBook(bookTitle, shelf){
  for (i = 0; i < shelf.length; i++){
    if (shelf[i].title === bookTitle){
      shelf.splice(i, 1);
      break;
    }
  }
}

function listTitles(shelf){
  let titles = []
  for (i = 0; i < shelf.length; i++){
    titles.push(shelf[i].title);
  }
  return titles.join(", ");
}

function searchShelf(shelf, bookTitle){
  let containsTitle = false
  for (i = 0; i < shelf.length; i++){
    if (shelf[i].title === bookTitle){
      containsTitle = true;
    }
  }
  return containsTitle;
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};