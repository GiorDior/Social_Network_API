const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: function (date) {
        return dayjs(date).format("MM/DD/YYYY");
      },
    },

    username: {
      type: String,
      required: true,
    },
    reactions: [
      //reactions schema
      reactionSchema,
    ],

    //Array of id values referencing the User model,
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
