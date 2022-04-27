// Schema setup
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const RegistrationSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String
    },

    // gender: {
    //     type: radio
    // },

    email: {
        type: String
    },
    password: {
        type: String                                     
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    address3: {
        type: String
    },
    address4: {
        type: String
    },
    // state: {
    //     type: String
    // },
    zip: {
        type: number
    },


})
