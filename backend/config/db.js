const mongoose = require('mongoose');

function connectDB() {
  mongoose.connect('mongodb://0.0.0.0:27017/watch', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
    console.log('http://localhost:7000');
  })
  .catch((err) => {
    console.log('Database error \n' + err);
  });
}

module.exports = connectDB;
