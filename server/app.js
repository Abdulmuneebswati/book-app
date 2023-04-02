const express = require("express");
require("./db/conn");
const Book = require("./db/Models/Book");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.post("/book", async (req, res) => {
  try {
    const { bookName, authorName, description, imageUrl } = req.body;
    const newBook = new Book({
      book: req.body.book,
      authorName: req.body.authorName,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    });
    await newBook.save();
    res.send("book has been uploaded");
  } catch (error) {
    console.log(error);
  }
});

app.get("/book", async (req, res) => {
  let query = req.query.search;
  const books = await Book.find();
  const keys = ["book", "authorName", "description"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };
  res.json(search(books));
});

app.listen("8000", () => {
  console.log("listening at the port 8000");
});
