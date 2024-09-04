const express = require("express");
const router = express.Router();
const viewControllers = require("../controllers/viewController");

router.get("/viewcount", viewControllers.incView);

module.exports = router;
