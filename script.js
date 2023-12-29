function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "was read already" : "not read yet"}.`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
console.log(theHobbit)
console.log(Book.prototype)