// models/dataModel.js

const md5 = require("md5");
const db = require("./db"); // Import the database pool

module.exports = {
  findAll: async () => {
    const [rows] = await db.query("SELECT * FROM data");
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query("SELECT * FROM data WHERE id = ?", [id]);
    return rows[0];
  },

  create: async (data) => {
    const { soil_moisture, amount_of_water } = data; // Modify fields as per your table schema
    const date = new Date(); // Get the current date and time
    const [result] = await db.query(
      "INSERT INTO data (soil_moisture, amount_of_water, date) VALUES (?, ?, ?)",
      [soil_moisture, amount_of_water, date]
    );
    return { id: result.insertId, soil_moisture, amount_of_water, date };
  },

  update: async (id, data) => {
    const { name, description } = data;
    const [result] = await db.query(
      "UPDATE data SET name = ?, description = ? WHERE id = ?",
      [name, description, id]
    );
    if (result.affectedRows === 0) return null;
    return { id, name, description };
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM data WHERE id = ?", [id]);
    if (result.affectedRows === 0) return null;
    return { id };
  },
};
