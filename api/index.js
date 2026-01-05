const app = require('../app');
const connectDB = require('../config/db_mongo');

let isConnected = false;

module.exports = async (req, res) => {
    try {
        if (!isConnected) {
        await connectDB(process.env.MONGO_URI, process.env.DB_NAME);
        isConnected = true;
        }

        return app(req, res); // OK uniquement si app est un handler express pur
    } catch (error) {
        console.error('API error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
