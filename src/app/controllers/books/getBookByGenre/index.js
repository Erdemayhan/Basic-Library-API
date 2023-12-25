const fetchBookByGenre = require("~root/actions/books/fetchBookByGenre");
const handleAPIError = require("~root/utils/handleAPIError");

const getBookByGenre = async (req, res) => {
  const { bookGenre } = req.params;

  try {
    const { book } = await fetchBookByGenre({ bookGenre });
    res.status(201).send({
      book
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getBookByGenre;
