require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const formRoutes = require('./routes/generalFormRoutes');
const passport = require('./config/passport');
const mediaRoutes = require('./routes/mediaRoutes');

const app = express();
const PORT = 3002;

const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Connected to db at, ' + DB_URI);
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//User register/login route
app.use('/auth', authRoutes);
app.use(passport.initialize());

app.use(
  '/projects',
  passport.authenticate('jwt', { session: false }),
  projectRoutes
);

app.use(
  '/generalform',
  passport.authenticate('jwt', { session: false }),
  formRoutes
);

app.use(
  '/media-uploads',
  passport.authenticate('jwt', { session: false }),
  mediaRoutes
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
