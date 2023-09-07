const mongoose = require('mongoose');

const watchSchema = mongoose.Schema({
  id: { type: Number, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
});

const Watch = mongoose.model('Watch', watchSchema);

module.exports = Watch;
