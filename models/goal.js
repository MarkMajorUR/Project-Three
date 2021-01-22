const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  goal: { type: String, required: true },
  data: { type: Date, required: true, default: Date.now },
  synopsis: String,
});

const Goal = mongoose.model("Book", goalSchema);

module.exports = Goal;
