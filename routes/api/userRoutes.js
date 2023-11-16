const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  // addFriend,
  // deleteFriend,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

//NOTE: friend related api is a future implementation. 

// /api/user/:userID/friend/:friendId
//currently does not work. To be implemented in future. 
// router.route('/:userId/friends/:friendId')
//   .post(addFriend)
//   .delete(deleteFriend)

module.exports = router;
