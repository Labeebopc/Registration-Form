import React from 'react'
import axios from 'axios'
import { baseUrl } from '../constants/constants'
import './Form.css'

function Form() {
    const handleSignup=(e)=>{
        e.preventDefault();
        console.log();
        axios.post(baseUrl + '/signup', {
            firstName: e.target.fname.value,
            lastName: e.target.lname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address1: e.target.address1.value,
            address2: e.target.address2.value,
            address3: e.target.address3.value,
            address4: e.target.address4.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zip: e.target.zip.value
        })          
    }

    return (
        <form className='form' method='post'onSubmit={handleSignup}>
            <div className="form-content">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputfirstname4">First Name</label>
                    <input name='fname' type="text" className="form-control" id="inputfirstname4" placeholder="First Name" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputlastname4">Last Name</label>
                    <input name='lname' type="text" className="form-control" id="inputlastname4" placeholder="Last Name" />
                </div>
            </div>


            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                Others
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input name='email' type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input name='password' type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input name='address1' type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input name='address2' type="text" className="form-control" id="inputAddress2" placeholder="Apartment" />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 3</label>
                <input name='address3' type="text" className="form-control" id="inputAddress3" placeholder="Studio" />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 4</label>
                <input name='address4' type="text" className="form-control" id="inputAddress4" />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input name='city' type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select defaultValue={'DEFAULT'} name='state' id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>Kerala</option>
                        <option>Tamilnadu</option>
                        <option>Kernataka</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input name='zip' type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
        </form>
    )
}

export default Form