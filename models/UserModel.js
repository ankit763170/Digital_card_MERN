const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true,'email is required'] },
    email: { type: String, unique: true, required: [true,'email is required'] },
    password: { type: String, required: [true,'email is required'] }


})
module.exports = mongoose.model('user',UserSchema);