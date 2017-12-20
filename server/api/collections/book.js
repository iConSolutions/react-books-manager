
/* Import Third Party Dependencies */
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;


/* Defined model schema */
const schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, default: '' },
  cover: { type: String, default: '' },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

/* Attach plugins */
schema.plugin(mongoosePaginate);

/* Export the model */
module.exports = mongoose.model('books', schema);
