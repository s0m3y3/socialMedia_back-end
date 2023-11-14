const router = require('express').Router();
const {
  getThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  getSingleThoughts
} = require('../../controllers/thoughtController.js');

// /api/Thought
router.route('/').get(getThoughts).post(createThoughts);

// /api/Thought/:ThoughtID
router
  .route('/thought/:thoughtID')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

module.exports = router;
