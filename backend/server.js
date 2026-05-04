const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan')
require('./middleware/dbconnect');

mongoose.set('debug', true)
// const Dept = require('./schema/Dept')

// const connect = async () => {
//   await mongoose.connect(process.env.MONGODB_URI),
//   console.log('Connected to MongoDB');
//   await runbase();
//   await mongoose.disconnect();
// }

// const runbase = async () => {
//   const dept = await Dept.create({
//     name: "General",
//     description: "General department for all unassigned persons/software",
//   });
//   console.log(dept)
//   ;

// }

// connect();
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

const port = 3000;


//Imported routes
const createRoutes = require('./routes/CreateRoutes');


app.use('/create', createRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 