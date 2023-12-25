const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBookByGenre = ({ bookGenre }) => submitQuery`
    SELECT book_title, book_author
    FROM books
    WHERE book_genre LIKE CONCAT('%',${bookGenre},'%')
    `;
module.exports = camelKeys(selectBookByGenre);
