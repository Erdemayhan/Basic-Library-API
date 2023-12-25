const selectBookByGenre = require("~root/actions/books/fetchBookByGenre/queries/selectBookByGenre");

const fetchBookByGenre = async ({ bookGenre }) => {
  const book = await selectBookByGenre({ bookGenre });
  return { book };
};

module.exports = fetchBookByGenre;
