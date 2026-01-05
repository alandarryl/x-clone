const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const helmet = require('helmet'); // optional

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(helmet());

// all the routes 
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const followRoutes = require('./routes/follow.routes');
const repostRoutes = require('./routes/repost.routes');
const emailVerificationRoutes = require('./routes/emailVerification.routes');
const messageRoutes = require('./routes/message.routes');
const userRoutes = require('./routes/user.routes');
const likeRoutes = require('./routes/like.routes');

// call all the routes WITHOUT /api prefix
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use('/follow', followRoutes);
app.use('/repost', repostRoutes);
app.use('/verifiedMail', emailVerificationRoutes);
app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/like', likeRoutes);

module.exports = app;
