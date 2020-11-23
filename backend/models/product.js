const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  category:{
    type: String
  },
  img:{
    type:String
  }
}, {
    collection: 'students'
  })

module.exports = mongoose.model('Student', ProductSchema)