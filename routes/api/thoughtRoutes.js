const router = require("express").Router();

const {
  getThought,
  createThought,
  getThoughtByID,
  updateThought,
  deleteThoughtByID,
  addReaction,
  deleteReactionByID,
} = require("../../controllers/thoughtcontroller");

// http://localhost:3001/api/thought
router.route("/").get(getThought).post(createThought);

// http://localhost:3001/api/thought/:thoughtID
router
  .route("/:thoughtID")
  .get(getThoughtByID)
  .put(updateThought)
  .delete(deleteThoughtByID);

// http://localhost:3001/api/thought/:thoughtID/reaction
router.route("/:thoughtID/reaction").post(addReaction);

router.route("/:thoughtID/reaction/:reactionId").delete(deleteReactionByID);

module.exports = router;
