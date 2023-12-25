const insertBook = require("./queries/InsertBook");

const createBook = async ({ bookTitle, bookAuthor, bookGenre, ISBN }) => {
  const bookId = await insertBook({ bookTitle, bookAuthor, bookGenre, ISBN });
  return { bookId };
};

module.exports = createBook;
