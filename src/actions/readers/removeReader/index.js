const deleteReaderById = require("./queries/deleteReaderById");

const removeReader = async ({ readerId }) => {
  const deletedReader = await deleteReaderById({
    readerId
  });
  return { deletedReader };
};

module.exports = removeReader;
