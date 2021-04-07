import React from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from './../../App';
import firebaseConfig from './../../firebase.config';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, errors } = useForm({ mode: 'onTouched' });

    const onSubmit = (userData) => {
        console.log(userData);
        setUser(userData);

        if (userData.email & userData.password) {
            firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    setLoggedInUser(user);

                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }

        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    console.log('sign in user info',user);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('Error Message',errorCode, errorMessage);
                });
        }

    }

    console.log(errors);
    console.log(loggedInUser.displayName);
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    //google SignIn starts from here
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                console.log(user);
                setLoggedInUser(user);

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

            });
    }
    // googleSignIn end here


    return (
        <div className="formStyle">
            <h4 className="text-center">Registration Form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                {newUser && <div className="form-group">
                    <input type="text" className="form-control fw-bold" name="fullName" id="" placeholder="Enter your Name" ref={register({ required: true })} />
                    {errors.fullName?.type === 'required' && <p className="text-danger">Name is required</p>}
                </div>}

                <div className="form-group">
                    <input type="text" className="form-control fw-bold" name="email" id="" placeholder="Enter your email"
                        ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} />
                    {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                    {errors.email?.type === 'pattern' && <p className="text-danger">Enter a valid email</p>}
                </div>

                <div className="form-group">
                    <input type="password" className="form-control fw-bold" name="password" id="" placeholder="Enter your Password"
                        ref={register({ required: true, minLength: 6, pattern: /\d{2}/ })} />
                    {errors.password?.type === 'minLength' && <p className="text-danger">Password length must be at least 6 </p>}
                    {errors.password?.type === 'pattern' && <p className="text-danger">Each password must contain at least two number </p>}
                    {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                </div>

                <div className="form-group">
                    <input type="submit" className="form-control bg-success"
                        value={newUser ? 'Sign Up' : 'Sign In'} />
                </div><br />

                <p className="text-center" style={{ color: '#ff005c' }}
                >
                    {newUser ? 'Already have an account?' : "Don't have an account?"}
                    <Link onClick={() => setNewUser(!newUser)}>{newUser ? 'Sign In' : 'Sign Up'}</Link></p>

            </form>
            <hr />
            <p className="text-center">or</p>
            <button
                className="btn btn-danger w-100 mb-1 rounded-pill"
                onClick={handleGoogleSignIn}>
                <FontAwesomeIcon className="text-warning" icon={faGoogle} />
                Continue with Google
            </button>
        </div>
    );
};

export default Login;