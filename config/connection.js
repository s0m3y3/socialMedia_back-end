const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://yaX102:qGyiTIORHrOTuADD@yax102.tkf597m.mongodb.net/';

connect(connectionString);

module.exports = connection;