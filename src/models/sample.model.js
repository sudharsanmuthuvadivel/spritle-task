const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sampleSchema = mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
      trim: true,
    },
    employeeId: {
      type: String,
      required: true,
      trim: true,
    },
    currentLocation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sampleSchema.plugin(toJSON);
sampleSchema.plugin(paginate);

/**
 * @typedef User
 */
const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;
