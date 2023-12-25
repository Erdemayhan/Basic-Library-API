const { submitQuery } = require("~root/lib/database");

const deleteReaderById = ({ readerId }) => submitQuery`
    DELETE FROM
        Readers
    WHERE
        reader_id=${readerId}
`;

module.exports = deleteReaderById;
