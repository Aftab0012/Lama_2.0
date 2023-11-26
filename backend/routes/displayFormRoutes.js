const express = require('express');
const router = express.Router();
const displayFormController = require('../controllers/displayFormController');

// Route to get all formData
router.get('/', displayFormController.getFormData);

// Route to add formData
router.post('/add', displayFormController.addFormData);

module.exports = router;
