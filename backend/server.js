require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

const app = express();

// --- middleware ---
app.use(express.json());

const allowedOrigin = process.env.CLIENT_ORIGIN || "*";
app.use(cors({ origin: allowedOrigin }));

// --- routes ---
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "premkumar-portfolio-api" });
});
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// --- 404 + error handling ---
app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong on the server." });
});

// --- start server after DB connects ---
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("Missing MONGO_URI in .env — see .env.example");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`API running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
