// const mongoose = require('mongoose');

// const connectDB = (mongoURI, dbName) => {
//     mongoose.connect(mongoURI, {dbName: dbName})
//         .then(() => console.log('connexion à mongo reussi !'))
//         .catch(error => console.log(`Erreur de connexion à mongo : ${error}`))
// }

// module.exports = connectDB;



const mongoose = require('mongoose');

const connectDB = async (mongoURI, dbName) => {
  try {
    await mongoose.connect(mongoURI, {
      dbName,
    });

    console.log('✅ Connexion à MongoDB réussie');
  } catch (error) {
    console.error('❌ Erreur de connexion MongoDB', error.message);
    process.exit(1); // stop l'app si DB KO
  }
};

module.exports = connectDB;



