// app.js

require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const app = express();
const PORT = 3000;

const dataRoutes = require("./routes/dataRoutes");

app.use(express.json());
app.use("/", dataRoutes); // Register data routes under /api/data

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
