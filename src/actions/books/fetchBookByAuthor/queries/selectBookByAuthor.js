const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBookByAuthor = ({ bookAuthor }) => submitQuery`
    SELECT book_title, book_author, book_genre
    FROM books
    WHERE book_author LIKE CONCAT('%',${bookAuthor},'%')
    `;
module.exports = camelKeys(selectBookByAuthor);
