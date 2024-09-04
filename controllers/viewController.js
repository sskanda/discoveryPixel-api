const View = require("../models/View");

const incView = async (req, res) => {
  try {
    // Capture additional details
    const view = new View({
      timestamp: new Date(), // Capture the current timestamp
      viewCount: 1, // Optional: store view count, though this may be less relevant if inserting new records

      // You can add other fields here as needed
    });

    // Save the new document to the collection
    await view.save();

    res.status(200).send("New view record inserted");
  } catch (err) {
    res.status(500).send("Error inserting view record");
  }
};

module.exports = {
  incView,
};
