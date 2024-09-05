const View = require("../models/View");

const incView = async (req, res) => {
  try {
    // Get the current timestamp in IST
    const now = new Date();
    const istOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000; // IST is UTC + 5:30
    const istTime = new Date(now.getTime() + istOffset);

    // Create a new document with the view count and timestamp
    const newView = new View({
      viewCount: 1, // or whatever initial value you want
      timestamp: istTime,
    });

    // Save the new document
    await newView.save();
    res.status(200).send("View count incremented and timestamp saved in IST");
  } catch (err) {
    console.error("Error saving view:", err);
    res.status(500).send("Error saving view count");
  }
};

module.exports = {
  incView,
};
