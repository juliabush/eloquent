function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}
const player = new Player("steve", "X");
console.log(player.name);

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