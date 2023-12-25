const selectBookByAuthor = require("./queries/selectBookByAuthor");

const fetchBookByAuthor = async ({ bookAuthor }) => {
  const bookTitle = await selectBookByAuthor({ bookAuthor });
  return { bookTitle };
};

module.exports = fetchBookByAuthor;
