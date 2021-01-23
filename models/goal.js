const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'User'},
  title: { type: String, required: true },
  startdate: { type: Date, required: true },
  targetdate: { type: Date, required: true },
  date: { type: Date, default: Date.now }
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
