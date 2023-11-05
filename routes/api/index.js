const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use('/thought', thoughtsRoutes);
router.use('/user', userRoutes);

module.exports = router;
