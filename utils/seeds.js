//This seed generate random data for testing only. 
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const getRandomName = require('./randomNameData');
const getrandomThought = require('./randomThoughtData');
const getrandomReaction = require('./randomReactionData');

// console.log(getRandomName());
connection.on('error', (err) => err);

connection.once('open', async () => {
  // Delete the collections if they exist
  let postCheck = await connection.db.listCollections({ name: 'Thought' }).toArray();
  if (postCheck.length) {
    await connection.dropCollection('Thought');
    console.log('Thought db dropped.')
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
    console.log('Users db dropped.')
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
    console.log('Users db dropped.')
  }

  const users = [];

// generate 20 random user names (for test seed purpose only)
  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const thought = getrandomThought();
    const reaction = getrandomReaction();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    username = first + '.' + last

    users.push({
      first,
      last,
      age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
      thought
    });

  }

  await User.collection.insertMany(users);
  console.log(users);
  process.exit(0);
});
