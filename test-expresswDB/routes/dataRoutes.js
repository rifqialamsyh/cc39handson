// routes/dataRoutes.js

const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

// GET all data
router.get("/data", dataController.getAllData);

// GET data by ID
router.get("/data/:id", dataController.getDataById);

// POST new data
router.post("/data", dataController.createData);

// PUT update data
router.put("/data/:id", dataController.updateData);

// DELETE data by ID
router.delete("/data/:id", dataController.deleteData);

module.exports = router;
