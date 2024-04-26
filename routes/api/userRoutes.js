const router = require("express").Router();
//object destructure user controller implement each oject to reference

//routes
// /api/users

const {
  getUsers,
  createUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../../controllers/usercontroller");

//GET
//http://localhost:3001/api/user
// /api/user
router.route("/").get(getUsers).post(createUser);

//GET by Id
//http://localhost:3001/api/user/:userId
router
  .route("/:userId")
  .get(getUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);

//post

//put id

//delete

// /api/user/:id

module.exports = router;
