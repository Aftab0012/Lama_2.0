const express = require('express');
const router = express.Router();
const mediaUploadController = require('../controllers/mediaController');

// Create a new media upload
router.post('/add', mediaUploadController.createMediaUpload);

// Get all media uploads
router.get('/', mediaUploadController.getAllMediaUploads);

// Delete a media upload
router.delete('/delete/:_id', mediaUploadController.deleteMediaUpload);

module.exports = router;
