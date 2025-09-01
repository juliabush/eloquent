const myLibrary = [];


function Books(title, author, pages, readstatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstatus = readstatus;
    this.info = function() {
         return`${title} by ${author}, ${pages} pages, ${readstatus}`
    }
}

const theHobbit = new Books("The Hobbit", "J.R.R Tolkien", "295", "Not Read Yet");

console.log(theHobbit.info())

function addBookToLibrary (title, author, pages, readstatus) {
    let createBook = new Books(title, author, pages, readstatus);
    myLibrary.push(createBook);
    return myLibrary;
}
console.log(addBookToLibrary("Oliver Twist", "Charles Dickens", "342", "Read"));

console.log(myLibrary)