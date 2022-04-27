import { addNewRegistration } from "../controllers/registrationController";

const routes = (app) => {
    app.route('/registration')
        // post end point
        .post(addNewRegistration);
}

export default routes