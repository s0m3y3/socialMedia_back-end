//this is test only, incase the seeds.js does not work properly
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const getRandomName = require('./randomUserData');
const getrandomThought = require('./randomThoughtsData');
const getrandomReaction = require('./randomReactionData');

//timestamp library for thoughts & reaction
const { format } = require('date-fns');
const currentTimestamp = new Date();
const formattedDate = format(currentTimestamp, 'yyyy-MM-dd HH:mm:ss');

connection.on('error', (err) => err);

connection.once('open', async () => {


});