/** Class representing a book. */
class Book {
  /**
   * Create a book.
   * @param {string} title - A book's title.
   * @param {string} author - A book's author.
   * @param {number} pages - The number of pages in a book.
   * @param {string} read - The reading status.
   */
  constructor(title, author, pages, read) {
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
  }

  /**
   * Get a book's details.
   * @return {string} A book's details.
   */
  info() {
    const read = this.read ? 'read' : 'not read';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`;
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
  for (let i = 0, j = 0; i < myLibrary.length; i++, j++) {
    // Create a new <div> element to represent a book.
    const book = document.createElement('div');
    book.classList.add('book');

    // Create a new <h4> element for a book's title.
    const title = document.createElement('h4');
    title.classList.add('title');
    title.innerHTML = myLibrary[i].title;

    // Create a new <p> element for the name of a book's author.
    const author = document.createElement('p');
    author.classList.add('author');
    author.innerHTML = myLibrary[i].author;

    // Create a new <p> element for the number of pages in a book.
    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.innerHTML = myLibrary[i].pages + ' pages';

    // Create a new <button> element to display a book's reading status.
    const read = document.createElement('button');
    read.classList.add('read');
    read.setAttribute('data-book', i);
    read.innerHTML = myLibrary[i].read ? 'Read' : 'Not Read';

    // Create a new <button> element that removes a book.
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.setAttribute('data-book', i);
    remove.innerHTML = 'Remove';

    // Create a container for read and remove buttons.
    const readRemoveButtons = document.createElement('div');
    readRemoveButtons.classList.add('read-remove-buttons');
    readRemoveButtons.appendChild(read);
    readRemoveButtons.appendChild(remove);

    // Append elements to the book element.
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(readRemoveButtons);

    // Append the book element to the booksContainer element.
    booksContainer.append(book);
  }
}

const myLibrary = [];
const menu = document.querySelector('.menu');
const headerNav = document.querySelector('.header-nav');
const booksContainer = document.querySelector('.main');

/**
 * Removes a book from myLibrary array and re-displays the existing books.
 * @param {number} bookIndex - The index of a book in myLibrary array.
 */
function removeBookAndUpdateDisplay(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  booksContainer.innerHTML = '';
  displayBooks();
  readButtons = document.querySelectorAll('.read');
  removeButtons = document.querySelectorAll('.remove');
  // Reattach event listeners after updating the display
  enableReadButton();
  enableRemoveButton();
}

/**
 * Changes a book's reading status when read/not read button is clicked.
 */
function enableReadButton() {
  readButtons.forEach((readButton) => {
    readButton.addEventListener('click', () => {
      const bookIndex = readButton.dataset.book;
      readButton.innerHTML =
        myLibrary[bookIndex].read === 0 ? 'Read' : 'Not Read';
      myLibrary[bookIndex].read = myLibrary[bookIndex].read === 0 ? 1 : 0;
    });
  });
}

/**
 * Removes the book whose remove button is clicked.
 */
function enableRemoveButton() {
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', () => {
      const bookIndex = removeButton.dataset.book;
      removeBookAndUpdateDisplay(bookIndex);
    });
  });
}

// Add books.
addBookToLibrary('Cracking the Coding Interview', 'Gayle McDowell', 708, 0);
addBookToLibrary('The Mythical Man-Month', 'Fred Brooks', 336, 0);
addBookToLibrary('Code Complete', 'Steve McConnell', 960, 0);
addBookToLibrary('Programming Pearls', 'Jon Bentley', 256, 0);
/* addBookToLibrary('The Algorithm Design Manual', 'Steven Skiena', 748, 0);
addBookToLibrary('Modern C++ Design', 'Andrei Alexandrescu', 360, 0);
addBookToLibrary('Clean Code', 'Robert C. Martin', 464, 0);
addBookToLibrary('Refactoring: Improving the Design of Existing Code', 'Martin Fowler', 431, 0);
addBookToLibrary('Test-Driven Development: By Example', 'Kent Beck', 216, 0);
addBookToLibrary('Distributed Systems For Fun and Profit', 'Mikito Takada', 60, 0);
addBookToLibrary('The Hundred-Page Machine Learning Book', 'Andriy Burkov', 159, 0);
addBookToLibrary('The Five Dysfunctions of a Team', 'Patrick Lencioni', 228, 0);
addBookToLibrary('The Clean Coder', 'Robert C. Martin', 210, 0); */
addBookToLibrary(
  'Code: The Hidden Language of Computer Hardware and Software',
  'Charles Petzold',
  400,
  0
);
addBookToLibrary(
  'Introduction to the Theory of Computation',
  'Michael Sipser',
  456,
  0
);
addBookToLibrary(
  'Gödel, Escher, Bach: An Eternal Golden Braid',
  'Douglas R. Hofstadter',
  756,
  0
);
addBookToLibrary('Clean Architecture', 'Robert C. Martin', 432, 0);
addBookToLibrary(
  'Working Effectively with Legacy Code',
  'Michael C. Feathers',
  464,
  0
);
addBookToLibrary('The C++ Programming Language', 'Bjarne Stroustrup', 1030, 0);

// Toggle nav menu viewing.
menu.addEventListener('click', () => {
  headerNav.classList.toggle('toggle');
});

// Display initial set of books.
displayBooks();

let readButtons = document.querySelectorAll('.read');
let removeButtons = document.querySelectorAll('.remove');

// Enable changing book reading status.
enableReadButton();

// Remove the book whose Remove button is clicked.
enableRemoveButton();

const modal = document.querySelector('dialog');
const form = document.querySelector('form');
const addBook = document.querySelector('form button');
const close = document.querySelector('form svg');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

// Enable modal
const addBookButtons = document.querySelectorAll('.add');
addBookButtons.forEach((addBook) => {
  addBook.addEventListener('click', () => {
    modal.showModal();
    // On smaller screens, exit menu when Add Book option is selected.
    if (addBook.parentElement.classList.contains('header-nav')) {
      headerNav.classList.toggle('toggle');
    }
  });
});

// Close modal
close.addEventListener('click', () => modal.close());

// Handle form submission
form.addEventListener('submit', (e) => {
  // Prevent the form from actually submitting
  e.preventDefault();

  // Collect the entered information
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = parseInt(pagesInput.value);
  const readingStatus = readInput.checked ? 1 : 0;

  // Add the new book
  addBookToLibrary(title, author, pages, readingStatus);

  // Re-display the books
  booksContainer.innerHTML = '';
  displayBooks();
  readButtons = document.querySelectorAll('.read');
  removeButtons = document.querySelectorAll('.remove');

  // Reattach event listeners after updating the display
  enableReadButton();
  enableRemoveButton();

  // Reset the form
  form.reset();
  modal.close();
});
