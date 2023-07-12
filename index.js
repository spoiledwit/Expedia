import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv' 

import contactRoutes from './routes/contact.js'
import assessmentRoutes from './routes/assessment.js'
import userRoutes from './routes/user.js'

dotenv.config();

const app = express();

app.use(cors(
  ['localhost:5173']
));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (_, res) => {
  res.send('Server is up!');
});

app.use('/contacts', contactRoutes)
app.use('/assessments', assessmentRoutes)
app.use('/user', userRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
