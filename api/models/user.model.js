import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNo: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true}); // includes time at which the changes were made

const User = mongoose.model('User', userSchema);  // User is the name of the model, must start with capital

export default User;
