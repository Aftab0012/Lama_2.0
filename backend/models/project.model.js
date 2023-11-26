const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    generalFormIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'generalform',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
