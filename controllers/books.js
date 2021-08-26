const Book = require('../models/books');

module.exports = {
  get: async (req, res, next) => {
    const books = await Book.find().catch(next);
    res.send(books);
  },

  post: (req, res, next) => {
    Book.create(req.body)
      .then(function (book) {
        res.send(book);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    Book.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(function () {
        Book.findOne({ _id: req.params.id }).then(function (book) {
          res.send(book);
        });
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    Book.findByIdAndDelete({ _id: req.params.id })
      .then(function (book) {
        res.send(book);
      })
      .catch(next);
  },
};
