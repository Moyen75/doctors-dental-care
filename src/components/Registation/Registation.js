import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import '../Login/Login.css'



const Registation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, signInUsingGoogle } = useAuth();
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const auth = getAuth();
    const createUserUsingEmailAndPassword = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
    }
    return (
        <div className='d-flex justify-content-center pb-5 register'>
            <div className='w-50 login'>
                <h1>Register Now</h1>
                <form onSubmit={createUserUsingEmailAndPassword}>
                    <div className="row mb-3">
                        <label htmlFor="firstName3" className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="firstName3" />
                        </div>
                    </div><div className="row mb-3">
                        <label htmlFor="lastName3" className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="lastName3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email"
                                onBlur={handleEmail}
                                className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="phoneNumber3" className="col-sm-2 col-form-label">Phone Number</label>
                        <div className="col-sm-10">
                            <input type="text"
                                className="form-control" id="phoneNumber3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password"
                                onBlur={handlePassword}
                                className="form-control"
                                id="inputPassword3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div>
                        <div> <p>Already Registered? <Link to='/login'>Sign in</Link></p> </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <p>-----------or---------</p>
                <button onClick={signInUsingGoogle} className='btn btn-success'><i className="fab fa-google"></i></button>
            </div>

        </div>
    );
};

export default Registation;