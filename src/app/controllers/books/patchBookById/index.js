const modifyBookById = require("~root/actions/books/modifyBookById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchBookById = async (req, res) => {
  const { bookId } = req.params;
  const { bookTitle, bookAuthor, bookGenre, ISBN } = req.body;

  try {
    const { book } = await modifyBookById({
      bookId,
      bookTitle,
      bookAuthor,
      bookGenre,
      ISBN
    });

    res.status(201).send({
      book
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchBookById;
