
/* Import Third Party Dependencies */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/* Defined model schema */
const schema = new Schema({
  title: String,
  author: String,
  cover: String,
  createdAt: Date,
  updatedAt: Date,
});


/* Export the model */
export default mongoose.model('books', schema);
