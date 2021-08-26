const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentName: {
    type: String,
    required: [true, 'Name student is required'],
  },
  studentID: {
    type: Number,
    required: [true, 'student ID is required'],
  },
  studentPhone: {
    type: String,
  },
  studentEimal: {
    type: String,
  },
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;