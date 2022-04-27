import React from 'react'
import './Form.css'

function Form() {
    return (
        <form className='form' method='post'>
            <div className="form-content">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputfirstname4">First Name</label>
                    <input type="text" className="form-control" id="inputfirstname4" placeholder="First Name" />
                </div>
                <div className="form-group col-md-6">
                    <label for="inputlastname4">Last Name</label>
                    <input type="text" className="form-control" id="inputlastname4" placeholder="Last Name" />
                </div>
            </div>


            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" for="gridRadios1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" for="gridRadios2">
                                Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                            <label className="form-check-label" for="gridRadios3">
                                Others
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment" />
            </div>
            <div className="form-group">
                <label for="inputAddress2">Address 3</label>
                <input type="text" className="form-control" id="inputAddress3" placeholder="Studio" />
            </div>
            <div className="form-group">
                <label for="inputAddress2">Address 4</label>
                <input type="text" className="form-control" id="inputAddress4" />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>Kerala</option>
                        <option>Tamilnadu</option>
                        <option>Kernataka</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    )
}

export default Form