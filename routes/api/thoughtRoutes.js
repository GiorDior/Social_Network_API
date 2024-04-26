const router = require("express").Router();

const {
  getThought,
  createThought,
  getThoughtByID,
  updateThought,
  deleteThoughtByID,
} = require("../../controllers/thoughtcontroller");

// http://localhost:3001/api/thought
router.route("/").get(getThought).post(createThought);

// http://localhost:3001/api/thought/:thoughtID
router
  .route("/:thoughtID")
  .get(getThoughtByID)
  .put(updateThought)
  .delete(deleteThoughtByID);

module.exports = router;
