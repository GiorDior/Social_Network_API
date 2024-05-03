// require dependent files
const { User } = require("../models");

// Create promise objects

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      //may have to populate friends field
      const users = await User.find().populate("friends");

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

  async addFriend(req, res) {
    //find user and update - FindOneAndUpdate
    //id in req.params
    //use $addToset - adding to friends field

    //res.json and catch
    try {
      const { userId, friendsId } = req.params;
      // const { reactionBody, username } = req.body;
      // console.log(req.body);
      // const newReaction = { reactionBody, username };

      // console.log(newReaction);

      // await newReaction.save();

      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { friends: friendsId } },
        { new: true }
      );

      if (!user) {
        return res.status(400).json({
          message:
            "------------------------ Failed to update thought -----------------------",
        });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
      //   console.log(thought);
    }
  },
  async deleteFriendByID(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendsId } },
        { new: true }
      );

      if (!userData) {
        return res.status(400).json({ message: "Failed to delete friend" });
      }

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

// Get a specific user

// Create a user

// Delete a user

// Update a user
