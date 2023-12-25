const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBookById = ({ bookId }) => submitQuery`
    SELECT *
    FROM books
    WHERE book_id = ${bookId}
    `;
module.exports = camelKeys(selectBookById);
