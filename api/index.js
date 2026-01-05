const serverless = require('serverless-http');
const app = require('../app');
const connectDB = require('../config/db_mongo');

let isConnected = false;

module.exports = serverless(async (req, res) => {
    if (!isConnected) {
        await connectDB(process.env.MONGO_URI, process.env.DB_NAME);
        isConnected = true;
    }
    return app(req, res);
});
