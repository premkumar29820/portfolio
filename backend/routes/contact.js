const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact - save a message from the contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email and message are all required." });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "That email address doesn't look valid." });
    }

    const saved = await Message.create({ name, email, message });
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Could not save your message. Please try again." });
  }
});

// GET /api/contact - list saved messages (simple admin view, newest first)
// In production you'd protect this route with auth - see README.
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Could not load messages." });
  }
});

module.exports = router;
