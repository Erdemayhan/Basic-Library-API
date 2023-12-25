const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const getAllBooks = require("./controllers/books/getAllBooks");
const getBookById = require("./controllers/books/getBookById");
const getBookByTitle = require("./controllers/books/getBookByTitle");
const getBookByAuthor = require("./controllers/books/getBookByAuthor");
const getBookByGenre = require("./controllers/books/getBookByGenre");
const getUsers = require("./controllers/users/getUsers");
const postBook = require("./controllers/books/postBook");
const patchBookById = require("./controllers/books/patchBookById");
const deleteBookById = require("./controllers/books/deleteBookById");
const getAllReaders = require("./controllers/readers/getAllReaders");
const getReaderById = require("./controllers/readers/getReaderById");
const postReader = require("./controllers/readers/postReader");
const patchReaderById = require("./controllers/readers/patchReaderById");
const deleteReader = require("./controllers/readers/deleteReader");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

//  View all Books

router.get("/books", getAllBooks);

// Search book by ID, Title, Author, Genre

router.get("/book/:bookId", getBookById);

router.get("/book/title/:bookTitle", getBookByTitle);

router.get("/book/author/:bookAuthor", getBookByAuthor);

router.get("/book/genre/:bookGenre", getBookByGenre);

router.post("/book/post", postBook);

router.patch("/book/patch/:bookId", patchBookById); // modify so it only modifies what you update and retains the rest

router.delete("/book/delete/:bookId", deleteBookById);

// Readers

router.get("/readers", getAllReaders);

router.get("/readers/:readerId", getReaderById);

router.post("/reader", postReader);

router.patch("/reader/patch/:readerId", patchReaderById);

router.delete("/reader/delete/:readerId", deleteReader);

router.get("/users", getUsers);

module.exports = router;
