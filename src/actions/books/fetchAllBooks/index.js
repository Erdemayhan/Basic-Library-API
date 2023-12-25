const selectAllBooks = require("~root/actions/books/fetchAllBooks/queries/selectAllBooks");

const fetchAllBooks = async () => {
  const books = await selectAllBooks();
  return { books };
};

module.exports = fetchAllBooks;
