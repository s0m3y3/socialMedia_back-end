const { Schema, model } = require('mongoose');
const reactionSchema = new Schema({
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

const thoughtSchema = new Schema({
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

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
