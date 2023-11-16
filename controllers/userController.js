const User = require('../models/User');

module.exports = {
  //get all user information
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } 
    catch (err) {res.status(500).json(err);}
  },

    //get single user information
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        // .select('-__v')
        // .populate('posts');
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.json(user);
    } 
    catch (err) {res.status(500).json(err);}
  },

  // create a new user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } 
    catch (err) {res.status(500).json(err);}
  },

  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: req.params.userId }, 
        req.body, 
        { new: true }
        );
      res.json(updatedUser);
    } 
    catch (err) {res.status(500).json(err);}
  },

  async deleteUser(req, res) {
    try {
      await User.findByIdAndDelete({ _id: req.params.userId });
      res.json({ message: 'User deleted successfully' });
    } 
    catch (err) {res.status(500).json(err);}
  },


//future implementation code: 
//   async addFriend(req, res) {
//     try {
// //code me
//     } 
//     catch (err) {res.status(500).json(err);}
//   }, 

//   async deleteFriend(req, res) {
//     try {
//       await User.findByIdAndDelete({ _id: req.params.userId });
//       res.json({ message: 'User deleted successfully' });
//     } 
//     catch (err) {res.status(500).json(err);}
//   },


};
