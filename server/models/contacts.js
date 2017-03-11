let mongoose = require('mongoose');

// create a model class
let contactsSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
{
  collection: "contacts"
});

module.exports = mongoose.model('contacts', contactsSchema);
