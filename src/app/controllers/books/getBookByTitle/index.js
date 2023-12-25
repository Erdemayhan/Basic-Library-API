const fetchBookByTitle = require("~root/actions/books/fetchBookByTitle");
const handleAPIError = require("~root/utils/handleAPIError");

const getBookByTitle = async (req, res) => {
  const { bookTitle } = req.params;

  try {
    const { book } = await fetchBookByTitle({ bookTitle });
    res.status(201).send({
      book
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getBookByTitle;
