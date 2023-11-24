const Project = require('../models/project.model');

async function getProjects(req, res) {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(400).json({ message: 'No projects listed yet' });
  }
}

async function addProject(req, res) {
  const { name } = req.body;
  try {
    const addedProjects = await Project.create({ name });
    res.status(201).json(addedProjects);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create project' });
  }
}

module.exports = {
  getProjects,
  addProject,
};
