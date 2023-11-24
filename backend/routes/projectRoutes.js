const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Route to log in a user
router.get('/', projectController.getProjects);

// Route to register a new user
router.post('/add', projectController.addProject);

module.exports = router;
