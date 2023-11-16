//This seed generate random data for testing only. 
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const getRandomUser = require('./randomUserData');
const getThought = require('./randomThoughtsData');
const getReaction = require('./randomReactionData');

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
  const users = [];
  const userThought = [];

// generate i random usernames, thoughts and reaction 
  for (let i = 0; i < 10; i++) {
    let [username, email] = getRandomUser();
    const [thoughtContent, thoughtCreatedAt] = getThought();
    let userReaction = getReaction();
    console.log("reactions: " + userReaction);
    // console.log("thoughts: " + thoughts)

    users.push({
      username,
      email,
      thoughts:thoughtContent,
    });

    userThought.push({
      thoughts: thoughtContent,
      username,
      createdAt: thoughtCreatedAt,
      //NOTE: The same user is reacting on their thoughts. Will need to update. 
      reactions: [{ReactionBody: userReaction[0],username, createdAt: userReaction[1]}],
    })
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(userThought);
  // console.log(users);
  process.exit(0);
});