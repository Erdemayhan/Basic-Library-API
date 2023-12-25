const handleAPIError = require("~root/utils/handleAPIError");
const createBook = require("~root/actions/books/createBook");

const postBook = async (req, res) => {
  const { bookTitle, bookAuthor, bookGenre, ISBN } = req.body;

  try {
    const { bookId } = await createBook({
      bookTitle,
      bookAuthor,
      bookGenre,
      ISBN
    });

    res.status(201).send({
      bookId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postBook;
