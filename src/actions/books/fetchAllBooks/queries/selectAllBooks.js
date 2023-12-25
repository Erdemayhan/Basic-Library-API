const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllBooks = () => submitQuery`
  SELECT book_title, book_author, book_genre
  FROM books
`;

module.exports = camelKeys(selectAllBooks);
