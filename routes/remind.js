const express = require('express');
const router = express.Router();
const Reminder = require('../model/remind');

router.post('/', async (req, res) => {
  try {
    const { date, time, message, reminderType } = req.body;

    if (!date || !time || !message || !reminderType) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const reminder = new Reminder({ date, time, message, reminderType });
    await reminder.save();

    res.status(201).json({ message: 'Reminder saved successfully', reminder });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
