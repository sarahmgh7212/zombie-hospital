const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    illness: {
        type: String
    },
    painLevel: {
        type: String
    }
}, {
        collection: 'users'
    })

module.exports = mongoose.model('User', userSchema)