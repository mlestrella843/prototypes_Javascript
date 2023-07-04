




function Book(author, title, pages ){
    this.author = author;
    this.title = title;
    this.pages = pages;
}

//Instantiating a book1
let book1 = new Book("Gabriel Marquez", "El coronel no tiene quien le escriba", 534);

//Modifying prototypes values. Se agreag la propiedad prototype. y el nombre del metodo que se le quire poner
// en este caso openBook.

Book.prototype.openBook = function(){
    alert(this.titulo + "The book has been opened");
}

//add another properties

Book.prototype.edition = this.editio;

let book2 = new Book("Joselito", "El Molino Rojo", 534);
