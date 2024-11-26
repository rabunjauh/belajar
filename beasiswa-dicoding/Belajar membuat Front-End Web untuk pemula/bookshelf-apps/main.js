const books = [];
const RENDER_EVENT = "render-book";

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  function addBook() {
    const inputBookTitle = document.getElementById("inputBookTitle").value;
    const inputBookAuthor = document.getElementById("inputBookAuthor").value;
    const inputBookYear = document.getElementById("inputBookYear").value;
    const inputBookIsComplete = document.getElementById(
      "inputBookIsComplete"
    ).checked;

    const generatedID = generateId();
    const bookObject = generateBookObject(
      generatedID,
      inputBookTitle,
      inputBookAuthor,
      inputBookYear,
      inputBookIsComplete
    );

    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));

    // saveData();
  }

  function generateId() {
    return +new Date();
  }

  function generateBookObject(id, bookTitle, bookAuthor, year, isCompleted) {
    return {
      id,
      bookTitle,
      bookAuthor,
      year,
      isCompleted,
    };
  }

  document.addEventListener(RENDER_EVENT, function () {
    const incompleteBookshelfList = document.getElementById(
      "incompleteBookshelfList"
    );

    incompleteBookshelfList.innerHTML = "";

    for (const book of books) {
      const bookElement = makeBook(book);
      incompleteBookshelfList.append(bookElement);
    }

    function makeBook(bookObject) {
      const textBookTitle = document.createElement("h3");
      textBookTitle.innerText = bookObject.bookTitle;

      const bookItemArticle = document.getElementsByClassName("book_item");
      console.log(bookItemArticle);
      bookItemArticle.append(textBookTitle);
    }
  });
});
