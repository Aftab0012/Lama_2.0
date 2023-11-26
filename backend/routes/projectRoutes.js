const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Route to get all projects
router.get('/', projectController.getProjects);

// Route to add a new project
router.post('/add', projectController.addProject);

// Route to update project with userGeneralForm
router.patch('/update', projectController.updateProjectGeneralForm);

module.exports = router;
