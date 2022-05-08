// Schema setup
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const RegistrationSchema = new Schema({
   
    firstName: {type: String},

    lastName: {type: String},

    email: {type: String, required: [true, "Please provide your email"], unique: true},

    password: {type: String, required: true, minlength:6, select: false},

    address1: {type: String, required: [true, "Please provide an address"]},

    address2: {type: String},

    address3: {type: String},

    address4: {type: String},

    state: {type: String, required: [true, "Please provide a state"]},

    country: {type: String, required: [true, "Please provide a country"]},

    zip: {type: Number},

    mobile: {type: Number, required: [true, "Please provide your mobile number"]}

})
