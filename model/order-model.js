const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
     propertyId: String,
     transectionId: {
          type: String,
          // required: true,
          // minlength: 3,
          // maxlength: 50,
     },
     buyerEmail: {
          type: String,
          // required: true,
          // minlength: 5,
          // unique: true,
          // maxlength: 50,
     },
     buyerName: {
          type: String,
          // required: true,
          // minlength: 5,
          // maxlength: 255,
     },

     sellerEmail: {
          type: String,
          // required: true,
          // minlength: 5,
          // maxlength: 255,
     },

     sellInfo: {
          type: Object,
          // required: true,
          // minlength: 5,
          // maxlength: 255,
     },

})

const order = mongoose.model('order', orderSchema)

module.exports = order
