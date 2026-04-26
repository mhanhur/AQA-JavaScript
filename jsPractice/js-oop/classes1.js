class Library {
    books = []
    constructor() {
    }
    addBook(book) {
        this.books.push(book)
    }
    findBookByISBN(isbn) {
        return this.books.find((book) => book.isbn === isbn) ;
    }
    listBooks() {
        return this.books;
    }
}
class Book {
    constructor(title, author, yearPublished, isbn) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished
        this.isbn = isbn
    }
    getSummary() {
        return `Title: ${this.title}, Author:${this.author} yearPublished: ${this.yearPublished} isbn: ${this.isbn}`;
    }
}

const library = new Library();
const book = new Book('Thrones6445', 'Geo Maks',200421, 123526);
const book1 = new Book('Thro1231313131s6445', 'Maks',747474, 642344)
const book2 = new Book('Game of Thrones', 'George Hero', 7456, 123456)
const book3 = new Book('of Thrones','George Make',2004321,642012)
library.addBook(book)
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
// console.log(library.listBooks());
// console.log(library.findBookByISBN(642012));