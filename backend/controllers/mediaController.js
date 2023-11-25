const MediaUpload = require('../models/mediauploads.model');

const createMediaUpload = async (req, res) => {
  try {
    const { name, description } = req.body;
    const userId = req.user._id;

    const mediaExist = await MediaUpload.findOne({ name });
    if (mediaExist) {
      return res.status(409).json({
        message: 'Media with the same name already exists for the user.',
      });
    }
    const newMediaUpload = new MediaUpload({
      name,
      description,
      userId,
    });

    const savedMediaUpload = await newMediaUpload.save();

    res.status(201).json({
      message: 'Media upload created successfully',
      mediaUpload: savedMediaUpload,
    });
  } catch (error) {
    console.error('Validation error:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const getAllMediaUploads = async (req, res) => {
  try {
    const userId = req.user._id;
    const mediaUploads = await MediaUpload.find({ userId });

    res
      .status(200)
      .json({ message: 'Media uploads retrieved successfully', mediaUploads });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const deleteMediaUpload = async (req, res) => {
  const mediaId = req.params._id;

  try {
    // Check if the media upload exists
    const mediaUpload = await MediaUpload.findById(mediaId);

    if (!mediaUpload) {
      return res.status(404).json({ message: 'Media upload not found' });
    }

    await MediaUpload.findByIdAndDelete(mediaId);

    res.status(200).json({ message: 'Media deleted successfully' });
  } catch (error) {
    console.error('Error deleting media:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createMediaUpload,
  getAllMediaUploads,
  deleteMediaUpload,
};
