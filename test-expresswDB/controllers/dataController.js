// controllers/dataController.js

const dataModel = require("../models/dataModel");

module.exports = {
  getAllData: async (req, res) => {
    try {
      const data = await dataModel.findAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to retrieve data." });
    }
  },

  getDataById: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await dataModel.findById(id);
      if (!data) return res.status(404).json({ error: "Data not found." });
      res.json(data);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to retrieve data by ID.Server Error" });
    }
  },

  createData: async (req, res) => {
    try {
      const newData = await dataModel.create(req.body);
      res.status(201).json(newData);
    } catch (err) {
      res.status(500).json({ error: "Failed to create data." });
    }
  },

  updateData: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = await dataModel.update(id, req.body);
      if (!updatedData)
        return res.status(404).json({ error: "Data not found." });
      res.json(updatedData);
    } catch (err) {
      res.status(500).json({ error: "Failed to update data." });
    }
  },

  deleteData: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedData = await dataModel.delete(id);
      if (!deletedData)
        return res.status(404).json({ error: "Data not found." });
      res.json({ message: "Data deleted successfully." });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete data." });
    }
  },
};
