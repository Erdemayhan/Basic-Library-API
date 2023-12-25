const handleAPIError = require("~root/utils/handleAPIError");
const removeBookById = require("~root/actions/books/removeBookById");

const deleteBookById = async (req, res) => {
  const { bookId } = req.params;

  try {
    const { deletedBook } = await removeBookById({
      bookId
    });

    res.status(204).send({
      deletedBook
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteBookById;
