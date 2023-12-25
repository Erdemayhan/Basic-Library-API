const fetchBookById = require("~root/actions/books/fetchBookById");
const handleAPIError = require("~root/utils/handleAPIError");

const getBookById = async (req, res) => {
  const { bookId } = req.params;

  try {
    const { book } = await fetchBookById({ bookId });
    res.status(201).send({
      book
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getBookById;
