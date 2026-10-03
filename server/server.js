const connectDB = require('./config/db')
const userRoutes = require('./route/userRoute');
const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})