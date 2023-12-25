const selectBookByTitle = require("./queries/selectBookByTitle");

const fetchBookByTitle = async ({ bookTitle }) => {
  const book = await selectBookByTitle({ bookTitle });
  return { book };
};

module.exports = fetchBookByTitle;
