const Project = require('../models/project.model');

async function getProjects(req, res) {
  try {
    // Assuming that you want to get projects for the currently logged-in user
    const userId = req.user._id;
    const projects = await Project.find({ userId: userId }).populate('userId');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
}

async function addProject(req, res) {
  const { name } = req.body;
  const userId = req.user._id;

  try {
    const projectExist = await Project.findOne({ name, userId });
    if (projectExist) {
      return res.status(409).json({
        message: 'Project with the same name already exists for the user.',
      });
    }

    const addedProject = await Project.create({ name, userId });
    res.status(201).json(addedProject);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create project' });
  }
}

module.exports = {
  getProjects,
  addProject,
};
