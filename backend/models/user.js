import mongoose from 'mongoose';
import crypto from 'crypto';
import { v1 as uuidv1 } from 'uuid';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlenght: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        trim: true,
    },
    salt: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    },
}, { timestamps: true })

userSchema.virtual('password')
    .set(function (password) { //0000
        this.salt = uuidv1(); // sinh ra 1 chuỗi để mã hoá 0000
        this.hashed_password = this.encrytPassword(password); // pass + salt
    })

userSchema.methods = {
    authenticate: function (plainText) {
        return this.encrytPassword(plainText) === this.hashed_password;
    },
    encrytPassword: function (password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)//mã hoá dạng sha1
                .update(password)
                .digest('hex')
        } catch (error) {
            return "";
        }
    }
}
module.exports = mongoose.model("User", userSchema)