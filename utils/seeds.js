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

// generate i random user names (for test seed purpose only)
  for (let i = 0; i < 10; i++) {
    let getUser = getRandomUser();
    let username = getUser[0]
    let email = username+getUser[1]
    let thoughts = getThought();
    let userReaction = getReaction();
    console.log("reactions: " + userReaction);
    // console.log("thoughts: " + thoughts)

    users.push({
      username,
      email,
      thoughts,
    });

    userThought.push({
      thoughts,
      username,
      //NOTE: The same user is reacting on their thoughts. Will need to update. 
      reactions: [{ReactionBody: userReaction[0],username, createdAt: userReaction[1]}],
    })

    //currently doesnt work. 
    // userReaction.push({
    //   username,
    //   reactions,
    // })
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(userThought);
  // console.log(users);
  process.exit(0);
});