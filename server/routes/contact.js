import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact — save a new message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({ success: true, message: 'Message received!', id: contact._id });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ success: false, error: err.message });
    }
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// GET /api/contact — retrieve all messages (admin use)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

export default router;
