const express = require('express');
const { saveProgress, getProgress } = require('../controllers/formController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/save-progress', authMiddleware, saveProgress);
router.get('/get-progress/:userId', authMiddleware, getProgress);

module.exports = router;
