/**
 * Represents a Book object.
 * @constructor
 * @param {string} title - A book's title.
 * @param {string} author - The name of a book's author.
 * @param {number} pages - The number of pages in a book.
 * @param {number} read - The reading status. 0 means not read and 1 means read.
 */
function Book(title, author, pages, read) {
  /**
   * A book's title.
   * @type {string}
   */
  this.title = title;

  /**
   * The name of a book's author.
   * @type {string}
   */
  this.author = author;

  /**
   * The number of pages in a book.
   * @type {number}
   */
  this.pages = pages;

  /**
   * The reading status. 0 means not read and 1 means read.
   * @type {number}
   */
  this.read = read;

  /**
   * @method
   * @returns {string} A book's details.
   */
  this.info = function() {
    let read = this.read ? 'read' : 'not read';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
  }
}

/**
 * Adds Book objects to myLibrary array.
 * @param {string} title - A book's title.
 * @param {string} author - The name of a book's author.
 * @param {number} pages - The number of pages in a book.
 * @param {number} read - The reading status. 0 means not read and 1 means read.
 */
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

/**
 * Loops through myLibrary array and adds book elements to the page.
 */
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    // Create a new <div> element to represent a book
    const book = document.createElement('div');
    book.classList.add('book');

    // Create a new <h2> element for a book's title.
    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerHTML = myLibrary[i].title;

    // Create a new <p> element for the name of a book's author.
    const author = document.createElement('p');
    author.classList.add('author');
    author.innerHTML = myLibrary[i].author;

    // Create a new <p> element for the number of pages in a book.
    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.innerHTML = myLibrary[i].pages;
  
    // Create a new <button> element to display a book's reading status.
    const read = document.createElement('button');
    read.classList.add('read');
    read.innerHTML = myLibrary[i].read ? 'Read' : 'Not Read';

    // Create a new <button> element that removes a book.
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = 'Remove';

    // Append elements to the book element
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(remove);

    // Append the book element to the main element.
    main.appendChild(book);
  }
}

const myLibrary = [];
const main = document.querySelector('.main');
const menu = document.querySelector('.menu');
const headerNav = document.querySelector('.header-nav')

menu.addEventListener('click', () => {
  headerNav.classList.toggle('toggle');
})

addBookToLibrary('Cracking the Coding Interview', 'Gayle McDowell', 708, 0);
addBookToLibrary('The Mythical Man-Month', 'Fred Brooks', 336, 0);
addBookToLibrary('Code Complete', 'Steve McConnell', 960, 0);
addBookToLibrary('Programming Pearls', 'Jon Bentley', 256, 0);
addBookToLibrary('The Algorithm Design Manual', 'Steven Skiena', 748, 0);
addBookToLibrary('Modern C++ Design', 'Andrei Alexandrescu', 360, 0);
addBookToLibrary('Clean Code', 'Robert C. Martin', 464, 0);
addBookToLibrary('Refactoring: Improving the Design of Existing Code', 'Martin Fowler', 431, 0);
addBookToLibrary('Test-Driven Development: By Example', 'Kent Beck', 216, 0);
addBookToLibrary('Distributed Systems For Fun and Profit', 'Mikito Takada', 60, 0);
addBookToLibrary('The Hundred-Page Machine Learning Book', 'Andriy Burkov', 159, 0);
addBookToLibrary('The Five Dysfunctions of a Team', 'Patrick Lencioni', 228, 0);
addBookToLibrary('The Clean Coder', 'Robert C. Martin', 210, 0);
addBookToLibrary('Code: The Hidden Language of Computer Hardware and Software', 'Charles Petzold', 400, 0);
addBookToLibrary('Introduction to the Theory of Computation', 'Michael Sipser', 456, 0);
addBookToLibrary('Gödel, Escher, Bach: An Eternal Golden Braid', 'Douglas R. Hofstadter', 756, 0);
addBookToLibrary('Domain-Driven Design', 'Eric Evans', 560, 0);
addBookToLibrary('Clean Architecture', 'Robert C. Martin', 432, 0);
addBookToLibrary('Working Effectively with Legacy Code', 'Michael C. Feathers', 464, 0);
addBookToLibrary('The C++ Programming Language', 'Bjarne Stroustrup', 1030, 0);

displayBooks();
