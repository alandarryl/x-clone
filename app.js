const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

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
const likeRoute = require('./routes/like.routes');


// call all the routes
app.use('/api/auth', authRoutes);
app.use('/api/post/', postRoutes);
app.use('/api/follow', followRoutes);
app.use('/api/repost', repostRoutes);
app.use('/api/verifiedMail', emailVerificationRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);
app.use('/api/like', likeRoute);

module.exports = app;
