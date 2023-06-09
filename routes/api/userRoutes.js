const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

//api/users
router.route('/').get(getUser).post(createUser);

//api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;