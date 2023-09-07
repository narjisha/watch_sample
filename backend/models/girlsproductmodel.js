const mongoose = require('mongoose');

const womenwatchSchema = mongoose.Schema({
  id: { type: Number, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
});

const Womenwatch= mongoose.model('Womenwatch', womenwatchSchema);

module.exports = Womenwatch;