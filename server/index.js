require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Mount routes
const projectsRouter = require('./routes/projects')
const contactRouter = require('./routes/contact')

app.use('/api/projects', projectsRouter)
app.use('/api/contact', contactRouter)

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern-portfolio';
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
});
