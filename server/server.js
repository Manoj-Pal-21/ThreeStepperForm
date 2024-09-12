const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dbConfig = require('./config/db')
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');

const app = express()
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect(dbConfig.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})