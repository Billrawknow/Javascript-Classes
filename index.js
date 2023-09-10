class Book {
constructor(title, author, ISBN, availability = true) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availability = availability;
  }
}
class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(ISBN) {
      this.books = this.books.filter((book) => book.ISBN !== ISBN);
    }
  
    displayAvailableBooks() {
      console.log("Available Books:");
      this.books.forEach((book, index) => {
        if (book.availability) {
          console.log(`${index+1}. ${book.title} by ${book.author}`);
        }
      });
    }
  }