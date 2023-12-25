const { submitQuery, getInsertId } = require("~root/lib/database");

const insertBook = ({ bookTitle, bookAuthor, bookGenre, ISBN }) => submitQuery`
    INSERT INTO books (book_title, book_author, book_genre, ISBN)
    VALUES (${bookTitle}, ${bookAuthor}, ${bookGenre}, ${ISBN});
`;

module.exports = getInsertId(insertBook);
