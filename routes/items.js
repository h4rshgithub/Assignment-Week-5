const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create
router.post('/', async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read All
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Read One
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not Found" });
    res.json(item);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Not Found" });
    res.json(item);
  } catch {
    res.status(400).json({ error: "Invalid ID or Data" });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not Found" });
    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

module.exports = router;
