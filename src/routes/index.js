const express = require('express');
const { generateQuestions } = require('../controllers/index');
const router = express.Router();

router.get('/generate', generateQuestions);

module.exports = router;