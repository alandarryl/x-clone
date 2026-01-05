const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());

// all the routes 
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const followRoutes = require('./routes/follow.routes');
const repostRoutes = require('./routes/repost.routes');


// call all the routes
app.use('/api/auth', authRoutes);
app.use('/api/post/', postRoutes);
app.use('/api/follow', followRoutes);
app.use('/api/repost', repostRoutes);

module.exports = app;
