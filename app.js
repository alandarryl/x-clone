const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());

module.exports = app;
