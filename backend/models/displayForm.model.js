const mongoose = require('mongoose');

const displayFormSchema = new mongoose.Schema(
  {
    primarycolor: {
      type: String,
      required: true,
    },
    fontcolor: {
      type: String,
      required: true,
    },
    fontsize: {
      type: String,
      required: true,
    },
    chatheight: {
      type: String,
      required: true,
    },
    chaticonsize: {
      type: String,
      required: true,
    },
    screenposition: {
      type: String,
      required: true,
    },
    bottomdistance: {
      type: Number,
      required: true,
    },
    horizontaldistance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DisplayForm = mongoose.model('displayform', displayFormSchema);

module.exports = DisplayForm;
