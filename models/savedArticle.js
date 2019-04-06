let mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
let SavedArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    trim: true,
    required: true
  },
  // `summary` is required and of type String
  summary: {
    type: String,
    trim: true,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
let SavedArticle = mongoose.model("SavedArticle", SavedArticleSchema);

// Export the Article model
module.exports = SavedArticle;