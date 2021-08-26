const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookName: {
    type: String,
    required: [true, 'book Name  is required'],
    
  },
  bookAuthor: {
    type: String,
    required: [true, 'author name is required'],
  },
  bookAvailable: {
    type: Boolean,
  },
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;