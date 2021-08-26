const Student = require('../models/student');

module.exports = {
  get: async (req, res, next) => {
    const students = await Student.find().catch(next);
    res.send(students);
  },

  post: (req, res, next) => {
    Student.create(req.body)
      .then(function (student) {
        res.send(student);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    Student.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(function () {
        Student.findOne({ _id: req.params.id }).then(function (student) {
          res.send(student);
        });
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    Student.findByIdAndDelete({ _id: req.params.id })
      .then(function (student) {
        res.send(student);
      })
      .catch(next);
  },
};
