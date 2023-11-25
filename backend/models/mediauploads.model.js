const mongoose = require('mongoose');

const mediaUploadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (value) {
          return value.length <= 800;
        },
        message: 'Description should not exceed 800 characters',
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// Indexes
mediaUploadSchema.index({ name: 1 });
mediaUploadSchema.index({ description: 1 });

const MediaUpload = mongoose.model('MediaUpload', mediaUploadSchema);

module.exports = MediaUpload;
