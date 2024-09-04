const mongoose = require("mongoose");

const ViewSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("view", ViewSchema);
