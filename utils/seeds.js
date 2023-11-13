//This seed generate random data for testing only. 
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const getRandomUser = require('./randomUserData');
const getThought = require('./randomThoughtsData');
const getrandomReaction = require('./randomReactionData');

//timestamp library for thoughts & reaction
const { format } = require('date-fns');
const currentTimestamp = new Date();
const formattedDate = format(currentTimestamp, 'yyyy-MM-dd HH:mm:ss');

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

// generate i random user names (for test seed purpose only)
  for (let i = 0; i < 10; i++) {
    const userdata = getRandomUser();
    username = userdata[0]+'.'+userdata[1]
    email = username+userdata[2]
    users.push({
      username,
      email,
    });
  }

//generate friends seed
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);  //random integer number between 0-3, used for generating friends
  for (let i = 0; i < users.length; i++) {
    const numberOfFriends = randomNumber(0, 3); 
    const friends = [];
    // Generate a random set of friends
    while (friends.length < numberOfFriends) {
      const randomIndex = randomNumber(0, users.length - 1);
      // Ensure the user is not added as friend
      if (randomIndex !== i && !friends.includes(randomIndex)) {
        friends.push(randomIndex);
      }
    }
    // Update the user with the generated friends
    await User.findByIdAndUpdate(users[i]._id, { $push: { friends: friends.map(index => users[index]._id) } });
  }

  await User.collection.insertMany(users);
  console.log(users);
  process.exit(0);
});