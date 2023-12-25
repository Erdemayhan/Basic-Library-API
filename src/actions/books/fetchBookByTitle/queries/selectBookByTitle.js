const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBookByTitle = ({ bookTitle }) => submitQuery`
SELECT book_title, book_author, book_genre
FROM books
WHERE book_title LIKE CONCAT('%',${bookTitle},'%')
    `;
module.exports = camelKeys(selectBookByTitle);
