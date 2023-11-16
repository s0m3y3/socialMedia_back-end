const router = require('express').Router();
const {
  getThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  getSingleThoughts
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').
get(getThoughts).post(createThoughts);

// /api/Thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

module.exports = router;
