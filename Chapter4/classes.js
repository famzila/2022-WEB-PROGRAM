class Book {
    constructor(name, year, author, description) {
        this.name = name;
        this.year = year;
        this.author = author;
        this.description = description
    }
    showBookDetails() {
        console.log("Book: ", this.name, " by", this.author, " about", this.description, ".");
    }
}

let book1 = new Book("IKIGAI", 2016, "Héctor GARCIA & Francesc MIRALLES", "The Japanese secret to a long and happy life");
let book2 = new Book("Zero to One", 2014, "Peter THIEL", "Notes on startups");

book1.showBookDetails();
// Outputs: Book: IKIGAI by Héctor GARCIA & Francesc MIRALLES about The Japanese secret to a long and happy life.
book2.showBookDetails();
  // Outputs: Book: Zero to One by Peter THIEL about Notes on startups.

