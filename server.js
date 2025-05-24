const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reminderRoutes = require('./routes/remind');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/reminders', reminderRoutes);


app.get('/', (req, res) => {
  res.send('Remind-me-later API is running!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
