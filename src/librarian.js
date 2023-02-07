const { searchShelf } = require("./shelf");

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }
  
  greetPatron(name, isMorning = false){
    if (isMorning){
      return(`Good morning, ${name}!`)}
    else{
      return(`Hello, ${name}!`);}
  }

  calculateLateFee(daysLate){
    return Math.ceil(daysLate * 0.25)
  }
}

module.exports = Librarian;