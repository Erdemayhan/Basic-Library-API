const updateBookById = require("./queries/updateBookById");

const modifyBookById = async ({
  bookId,
  bookTitle,
  bookAuthor,
  bookGenre,
  ISBN
}) => {
  const book = await updateBookById({
    bookId,
    bookTitle,
    bookAuthor,
    bookGenre,
    ISBN
  });

  return { book };
};

module.exports = modifyBookById;
