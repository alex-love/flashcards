// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    word: String,
    definition: String
  },
  { timestamps: true }
);

const ScoreSchema = new Schema(
  {
    id: Number,

  }
)
let Score = mongoose.model("Score", ScoreSchema);

// export the new Schema so we could modify it using Node.js
//let Word = mongoose.model("Word", DataSchema);

module.exports = mongoose.model("Data", DataSchema);
