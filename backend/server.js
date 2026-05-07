const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan')
require('./middleware/dbconnect');

mongoose.set('debug', true)


// connect();
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

const port = 3000;


//Imported routes
const createRoutes = require('./routes/CreateRoutes');
const authRoutes = require('./routes/authroutes');
const TicketRoutes = require('./routes/TicketRoutes');

//Use routes
app.use('/auth', authRoutes);
app.use('/create', createRoutes);
app.use('/tickets', TicketRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 