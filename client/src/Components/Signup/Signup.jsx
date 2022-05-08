import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const history = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [address3, setAddress3] = useState('')
    const [address4, setAddress4] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [zip, setZip] = useState('')
    const [mobile, setMobile] = useState('')


    const handleSignup = (e) => {
        e.preventDefault()
        console.log(e.target.name.value);
        axios.post("http://localhost:5000/api/register",{
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value,
            address1:e.target.address1.value,
            address2:e.target.address2.value,
            address3:e.target.address3.value,
            address4:e.target.address4.value,
            state:e.target.state.value,
            country:e.target.country.value,
            zip:e.target.zip.value,
            mobile:e.target.mobile.value,
          }).then((res)=>history('/login'))
    
    }
    return (
        <form className='form' method='post'onSubmit={handleSignup}>
            <div className="form-content">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputfirstname4">First Name</label>
                    <input name='firstName' type="text" className="form-control" id="inputfirstname4" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputlastname4">Last Name</label>
                    <input name='lastName' type="text" className="form-control" id="inputlastname4" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input name='email' type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input name='password' type="password" className="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input name='address1' type="text" className="form-control" id="inputAddress" placeholder="House number" value={address1} onChange={(e)=>setAddress1(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input name='address2' type="text" className="form-control" id="inputAddress2" placeholder=" House name" value={address2} onChange={(e)=>setAddress2(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 3</label>
                <input name='address3' type="text" className="form-control" id="inputAddress3" placeholder="Studio" value={address3} onChange={(e)=>setAddress3(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 4</label>
                <input name='address4' type="text" className="form-control" id="inputAddress4" placeholder="Street" value={address4} onChange={(e)=>setAddress4(e.target.value)} />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputState">State</label>
                    <input name='state' type="text" className="form-control" id="inputState" placeholder="State" value={state} onChange={(e)=>setState(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                <label htmlFor="inputCountry">Country</label>
                    <input name='country' type="text" className="form-control" id="inputCountry" placeholder="Country" value={country} onChange={(e)=>setCountry(e.target.value)} />
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input name='zip' type="text" className="form-control" id="inputZip" placeholder="Zip" value={zip} onChange={(e)=>setZip(e.target.value)} />
                </div>

            </div>
            <div className="form-group">
                <label htmlFor="inputMobile">Mobile</label>
                <input name='mobile' type="Number" className="form-control" id="inputMobile" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            </div>
        </form>
    )
}

export default Signup