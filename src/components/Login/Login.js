import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div className='d-flex justify-content-center register pt-4 pb-5'>

            <div className='w-50 login'>
                <h1>Please Sign in</h1>
                <form>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div>

                        <div>
                            <p>New to Doctor's Dental Care? <Link to='/register'>Register now</Link></p>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                <p>-----------or---------</p>
                <button onClick={handleGoogleSignIn} className='btn btn-success'><i className="fab fa-google"></i></button>
            </div>
        </div>
    );
};

export default Login;