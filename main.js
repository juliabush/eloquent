
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




const getForm = document.getElementById("usersBook");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readStatusInput = document.getElementById("readstatus");
const userSubmitButton = document.getElementById("userSubmit");

const formInputs = [titleInput, authorInput, pagesInput, readStatusInput];

function addUserBookToLibrary (formInputs) {
   const title = titleInput.value;
    const author = authorInput.value;
   const pages = pagesInput.value;
   const readstatus = readStatusInput.value;


    let userBook = new Books(title, author, pages, readstatus);
    myLibrary.push(userBook);

    getForm.reset();
    console.log(userBook.info());

}

    userSubmitButton.addEventListener("click", (e) => {
        e.preventDefault();
        addUserBookToLibrary();
    })

const bodyDiv = document.querySelector(".bodyDiv");
const bookDisplayDOM = document.createElement("div");

bookDisplayDOM.style.backgroundColor = "pink";
bookDisplayDOM.style.borderRadius = "1rem";
bookDisplayDOM.style.width = "240px";
bookDisplayDOM.style.height = "300px";


// document.body.appendChild(bookDisplayDOM);
bodyDiv.appendChild(bookDisplayDOM)

console.log(userBook.textContent)

// bookDisplayDOM.appendChild(userBook)