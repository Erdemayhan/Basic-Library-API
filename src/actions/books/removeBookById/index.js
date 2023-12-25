const deleteBookById = require("./queries/deleteBookById");

const removeBookById = async ({ bookId }) => {
  const deletedBook = await deleteBookById({
    bookId
  });
  return { deletedBook };
};

module.exports = removeBookById;
