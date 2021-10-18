import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import '../Login/Login.css'



const Registation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, signInUsingGoogle, user } = useAuth();
    console.log('user ekhane', user)
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const auth = getAuth();
    const createUserUsingEmailAndPassword = (e) => {
        console.log('email and password', email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
        e.preventDefault()
    }
    return (
        <div className='d-flex justify-content-center pb-5 register'>
            <div className='w-50 login'>
                <h1>Register Now</h1>
                <form onSubmit={createUserUsingEmailAndPassword}>
                    <div class="row mb-3">
                        <label htmlFor="firstName3" class="col-sm-2 col-form-label">First Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="firstName3" />
                        </div>
                    </div><div class="row mb-3">
                        <label htmlFor="lastName3" class="col-sm-2 col-form-label">Last Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="lastName3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email"
                                onBlur={handleEmail}
                                class="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label htmlFor="phoneNumber3" class="col-sm-2 col-form-label">Phone Number</label>
                        <div class="col-sm-10">
                            <input type="text"
                                class="form-control" id="phoneNumber3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label htmlFor="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password"
                                onBlur={handlePassword}
                                class="form-control"
                                id="inputPassword3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label htmlFor="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div>
                        <div> <p>Already Registered? <Link to='/login'>Sign in</Link></p> </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
                <p>-----------or---------</p>
                <button onClick={signInUsingGoogle} className='btn btn-success'>sign in with google</button>
            </div>

        </div>
    );
};

export default Registation;