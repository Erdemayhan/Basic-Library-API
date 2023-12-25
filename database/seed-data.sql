/* Initialize DB with some seed data */
USE `lib_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");
INSERT INTO user_types (user_type_id, user_type)
VALUES (3, "user");
INSERT INTO user_types (user_type_id, user_type)
VALUES (4, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Erdem", "Ayhan", "erdemayhan510@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Fikret", "Ayhan", "fikretayhan16@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Fazile", "Sururi","fazilesururi@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (4, "Muhammed", "Rajab" , "morajab@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 224), 2, "2020-11-20 12:00:00");


INSERT INTO books (book_title, book_author, book_genre, ISBN)
VALUES ("The Lord of the Rings", "J.R.R. Tolkien", "Fantasy", "opfjskğ1k0kağc8745");
INSERT INTO books (book_title, book_author, book_genre, ISBN)
VALUES ("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", "bxnapğq226");
INSERT INTO books (book_title, book_author, book_genre, ISBN)
VALUES ("The Alchemist", "Paulo Coelho", "Fantasy","awspupokl456");

INSERT INTO readers (name, genre)
VALUES ("Erdem", "Horror");
INSERT INTO readers (name, genre)
VALUES ("Fikret", "Novel");
INSERT INTO readers (name, genre)
VALUES ("Fazile", "Romantic");