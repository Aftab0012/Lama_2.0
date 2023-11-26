const Project = require('../models/project.model');

async function getProjects(req, res) {
  try {
    const userId = req.user._id;
    const projects = await Project.find({ userId: userId })
      .populate('userId')
      .populate('generalFormIds');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Retrieving projects failed.' });
  }
}

async function addProject(req, res) {
  const { name, generalFormId } = req.body;
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

async function updateProjectGeneralForm(req, res) {
  const { projectId, generalFormId } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { $push: { generalFormIds: generalFormId } },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(201).json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getProjects,
  addProject,
  updateProjectGeneralForm,
};
