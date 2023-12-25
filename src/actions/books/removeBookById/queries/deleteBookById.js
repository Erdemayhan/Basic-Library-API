const { submitQuery } = require("~root/lib/database");

const deleteBookById = ({ bookId }) => submitQuery`
    DELETE FROM
        books
    WHERE
        book_id=${bookId}
`;

module.exports = deleteBookById;
