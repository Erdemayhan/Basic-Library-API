const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateBookById = ({
  bookId,
  bookTitle = null,
  bookAuthor = null,
  bookGenre = null,
  ISBN = null
}) => {
  const updates = [];

  if (bookTitle !== null) {
    updates.push(sql`book_title = ${bookTitle}`);
  }

  if (bookAuthor !== null) {
    updates.push(sql`book_author = ${bookAuthor}`);
  }

  if (bookGenre !== null) {
    updates.push(sql`book_genre = ${bookGenre}`);
  }

  if (ISBN !== null) {
    updates.push(sql`ISBN = ${ISBN}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
UPDATE 
books
SET
${updates.reduce(sqlReduce)}
WHERE
book_id = ${bookId};
`;
  }
  return Promise.resolve();
};

module.exports = updateBookById;
