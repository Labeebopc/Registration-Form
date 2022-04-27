import mongoose from "mongoose";
import { RegistrationSchema } from "../models/registrationModel.js";


const Registration = mongoose.model('Registration', RegistrationSchema)
// POST Routes
export const addNewRegistration = (req, res) => {
    let newRegistration = new Registration(req.body)

    newRegistration.save((err, Registration) => {
        if (err) {
            res.send(err)
        } else res.json(Registration);

    })
}
