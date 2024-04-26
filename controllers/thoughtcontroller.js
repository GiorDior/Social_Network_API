// require dependent files
const { Thought, User } = require("../models");

// Create promise objects
// Get all thought
module.exports = {
  // Get all thoughts
  async getThought(req, res) {
    try {
      const thoughts = await Thought.find();

      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //create thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Get single thought by id
  async getThoughtByID(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtID });

      if (!thought) {
        return res.status(404).json({
          message:
            "---------------No thought with this ID---------------------",
        });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //update  thought
  //----------------- Error ---------------------

  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        { _id: req.parmas.thoughtID },
        { $set: req.body },
        { new: true }
      );
      if (!thought) {
        return res
          .status(404)
          .json({ message: "----------Thought not found------------" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete thought

  async deleteThoughtByID(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtID,
      });

      if (!thought) {
        return res.status(404).json({
          message: "---------------- No thought with this ID -----------------",
        });
      }
      res.json({
        message:
          "------------------ Thought deleted successfully -----------------",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

// Get a specific thought

// Create a thought

// Delete a thought

// Update a thought

// if(!thoughts) {
//     return res.status(404).json({ message: "----------No thoughts found in database----------" })
// }

// res.json(thoughts);

// Notes
// CRUD thoughts then implement friend and reaction relations

//Needs from office hours
//Put thoughts not working properly 500 err recieved
//how to implement friend and reaction relations
