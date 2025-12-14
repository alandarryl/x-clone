// require('dotenv').config();
// const app = require('./app');
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




const app = require('./app');
const connectDB = require('./config//db_mongo');
const ENV = require('./config/env');

(async () => {
  await connectDB(ENV.MONGO_URI, ENV.DB_NAME);

  app.listen(ENV.PORT, () => {
    console.log(`🚀 Server running on port ${ENV.PORT}`);
  });
})();
