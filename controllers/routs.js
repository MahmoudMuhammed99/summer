const express = require('express');
const router = express.Router();
const Student = require('./student');
const Book = require('./books');



router.get('/book', Book.get);
router.get('/student', Student.get);


router.post('/book', Book.post);
router.post('/student', Student.post);


router.put('/book/:id', Book.put);
router.put('/student/:id', Student.put);

router.delete('/book/:id', Book.delete);
router.delete('/student/:id', Student.delete);

module.exports = router;