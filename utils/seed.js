//this is test only
await Thought.collection.insertMany([
    {
      _id: 1, 
      thoughtText: "where is my brain today?",
      createdAt: "2023-11-07 15:30:00",
      username: "abcdefg",
      reactions: [
        {
          reactionId:1,
          reactionBody:"explosion",
          username:"hijklmn",
        }
      ]
    }
}