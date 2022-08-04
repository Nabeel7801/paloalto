import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import Header from '../components/Header'
import loginImg from '../assets/img/login_img.webp'
import * as $ from 'jquery'
import axios from 'axios'

import { Form, FloatingLabel } from 'react-bootstrap'
import { AppContext } from '../context';

function Login() {

    const { appState } = useContext(AppContext);
    const url = appState.ATLAS_URI;
    const history = useHistory();

    const authenticateUser = e => {
        e.preventDefault();

        const email = $("#email").val();
        const password = $("#password").val();

        axios.get(`${url}/authenticateUser/${email}/${password}`)
        .then(res => {
            if (res.data && res.data.length > 0) {
                const user = res.data[0];
                localStorage.setItem('user', JSON.stringify(user));
                history.push("/cfp/session")
            }else {
                alert("Invalid Username or Password")
            }
        }).catch(error => console.log(error));

    }

    return (

        <React.Fragment>
            <Header />

            <div className="loginArea">

                <div className="row loginCard">
                    
                    <div className="d-none d-lg-block col-lg-6 col-xl-5">
                        <img src={loginImg} className="img-fluid" alt="Login Img" />
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <h2 style={{color: "#444", padding: "20px 0"}}>Sign in</h2>

                        <form onSubmit={authenticateUser}>

                            <FloatingLabel label="Email" className="mb-3">
                                <Form.Control 
                                    type="email" 
                                    placeholder="Email" 
                                    id="email"
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel label="Password" className="mb-3">
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    id="password"
                                    required
                                />
                            </FloatingLabel>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">

                                    <input className="form-check-input me-2" type="checkbox" value="" id="checkbox"/>
                                    <label className="form-check-label" htmlFor="checkbox">
                                        Remember me
                                    </label>

                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg"
                                    style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                                >Login</button>

                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?  &nbsp;
                                <a href="/register" className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>

                </div>
                
            </div>
            
        </React.Fragment>
    )
}

export default Login