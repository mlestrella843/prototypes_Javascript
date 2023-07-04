
//Creating Book contructor
function Book(author, title, pages ){
    this.author = author;
    this.title = title;
    this.pages = pages;
}

//Instantiating a book1
let book1 = new Book("Gabriel Marquez", "El coronel no tiene quien le escriba", 534);
//Instantiating book2 from book1
let book2 = Object.create(book1);
//Instantiating another book with property constructor.
let book3 = new book2.constructor("Frank Kafka", "La metamorfosis", 350);