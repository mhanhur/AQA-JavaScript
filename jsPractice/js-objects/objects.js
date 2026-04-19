const library = [
    {
        title: "The Great Gatsby",
        author: "J.R.R. Tolkien",
        year: 1925,
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        available: false
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        available: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        available: true
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        available: false
    },
    {
        title: "Kill bill",
        author: "Jane Austen",
        year: 1812,
        available: true
    },
    {
        title: "Harry potter 2",
        author: "Jane Austen",
        year: 1555,
        available: false
    }
];

function availabilityBook(library) {
    let availableBooks = []
    for(let i of library){
        if(i.available === true){
            availableBooks.push(i);
        }
    }
    return availableBooks
}

console.log(`Available books are =>`, availabilityBook(library));

function oldestBook(library) {
    let books = []
    let oldestBook
    for(let i of library){
        books.push(i.year)
        books.sort((a,b) => a - b);
        if(books[0] === i.year){
            oldestBook = i
        }
    }
    return oldestBook
}
console.log(`Oldest book is =>`, oldestBook(library));


function countBooksAuthor(library, author) {
    let counter = 0
    for (let i of library) {
        if(i.author === author){
            counter++
        }
    }
    return counter
}

console.log(`Specific author written =>`, countBooksAuthor(library, 'Jane Austen'),`books`);

function newestBook(library) {
    let books = []
    let newestBook
    for(let i of library){
        books.push(i.year)
        books.sort((a,b) => a - b);
    }
    newestBook = books.pop()
    for(let i of library){
        if(newestBook === i.year){
            newestBook = i
        }
    }
    return newestBook
}

console.log(`Newest book is =>`, newestBook(library));

function updateBookAvailabillity(library, bookTitle) {
    let updatedBook
    for(let i of library){
        if(bookTitle === i.title && i.available === false){
            i.available = true
        }
        if(i.title === bookTitle){
            updatedBook = i
        }
    }
    return updatedBook
}

console.log(`Updated book is =>`, updateBookAvailabillity(library, 'Pride and Prejudice'));