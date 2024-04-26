// require dependent files
const { User } = require("../models");

// Create promise objects

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      //may have to populate friends field
      const users = await User.find();

      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //create user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get user by id

  async getUserByID(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends");

      if (!user) {
        return res.status(404).json({
          Message: "----------------No user with this id----------------",
        });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUserByID(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          Message: "----------------No user with this id----------------",
        });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUserByID(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({
          Message: "----------------No user with this id----------------",
        });
      }
      res.json({
        Message: "----------------User deleted successfully--------------",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

// Get a specific user

// Create a user

// Delete a user

// Update a user
