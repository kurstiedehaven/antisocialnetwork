// import mongoose libary
const mongoose = require('mongoose');

// create connection to mongo db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// export the connection as a module
module.exports = mongoose.connection;