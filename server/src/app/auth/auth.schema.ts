import * as mongoose from "mongoose";
import * as uniqueValidator from "mongoose-unique-validator";

export const AuthModuleSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    salt: String,
    email: {
        type: String,
        unique: true,
        error: {

        }
    },
    mobile: {
        type: Number,
        unique: true
    }
}, {timestamps: true});

AuthModuleSchema.plugin(uniqueValidator, {
    message: '{VALUE} already exist'
});