const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');

// POST /api/reminders
router.post('/', async (req, res) => {
  const { date, time, message, reminderType } = req.body;

  if (!date || !time || !message || !reminderType) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newReminder = new Reminder({ date, time, message, reminderType });
    await newReminder.save();
    res.status(201).json({ message: 'Reminder saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
