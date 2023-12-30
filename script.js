const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "was read already" : "not read yet"}.`
    }
    addBookToLibrary(this)
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const meBeforeYou = new Book("Me Before You", "Jojo Moyes", 385, true)
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 496, true)

/* ---------------------------------------------------------------------------------- */

const page = document.getElementsByTagName("p")
const newBookBtn = document.getElementById("newBookBtn")
newBookBtn.addEventListener("click", () => {document.getElementById("p").textContent = "hello!"})
const bookList = document.createElement("ul")
document.body.append(bookList)
for (let i of myLibrary) {
    book = document.createElement("li")
    book.textContent = i.title
    bookList.appendChild(book)
}