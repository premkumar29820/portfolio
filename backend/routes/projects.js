const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// GET /api/projects - list all projects, ordered
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: 1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Could not load projects." });
  }
});

// GET /api/projects/:id - a single project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found." });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: "Invalid project id." });
  }
});

// POST /api/projects - add a new project
// (Not linked to a UI form yet; use Postman/curl, or wire up an admin page later.)
router.post("/", async (req, res) => {
  try {
    const { title, description, tech, repoUrl, liveUrl, order } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "title and description are required." });
    }
    const project = await Project.create({ title, description, tech, repoUrl, liveUrl, order });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: "Could not create project." });
  }
});

// PUT /api/projects/:id - edit a project
router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ error: "Project not found." });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: "Could not update project." });
  }
});

// DELETE /api/projects/:id
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found." });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: "Could not delete project." });
  }
});

module.exports = router;
