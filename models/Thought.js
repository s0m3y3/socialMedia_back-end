const { Schema, Types } = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => formatDate(createdAt), 
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], 
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const User = model('Thought', thoughtSchema);

module.exports = Thought;
