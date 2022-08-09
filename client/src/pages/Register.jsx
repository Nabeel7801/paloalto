import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import Header from '../components/Header'
import loginImg from '../assets/img/register_img.svg'
import * as $ from 'jquery'
import axios from 'axios'

import { Form, FloatingLabel } from 'react-bootstrap'
import { AppContext } from '../context';

function Register() {

    const { appState } = useContext(AppContext);
    const url = appState.ATLAS_URI;
    const history = useHistory();

    const registerUser = e => {
        e.preventDefault();

        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const password2 = $("#password2").val();

        if (password === password2) {
          axios.get(`${url}/getUserCountByEmail/${email}`)
          .then((userRes) => {

            if (userRes.data === 0) {
              const user = {
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Password: password
              }
              
              axios.post(`${url}/registerUser`, user)
              .then(res => {
                  if (res.data.status === "success") {
                    alert("Registered Successfully!");
                    localStorage.setItem('user', JSON.stringify(user));
                    history.push("/cfp/session")
                  }
              }).catch(error => console.log(error));

            }else {
              // Already Exist
              alert("Email is Already Registered")
            }
            
          }).catch(error => console.log(error));
          
        }else {
          // Password doesnot match
          alert("Passwords Entered are not same")
        }


    }

    return (

        <React.Fragment>
            <Header />

            <div className="loginArea">

              <div className="loginCard">

                <div className="row loginCard">
                  
                  <div className="col-md-8 col-lg-6 col-xl-5">
                    <form onSubmit={registerUser}>

                      <h2 style={{color: "#444", padding: "20px 0"}}>Register</h2>

                      <div className="row">
                        <div className="col-12 col-sm-6">
                          <FloatingLabel label="First Name" className="mb-3">
                              <Form.Control 
                                  type="text" 
                                  placeholder="First Name" 
                                  id="firstName"
                                  required
                              />
                          </FloatingLabel>
                        </div>

                        <div className="col-12 col-sm-6">
                          <FloatingLabel label="Last Name" className="mb-3">
                              <Form.Control 
                                  type="text" 
                                  placeholder="Last Name" 
                                  id="lastName"
                                  required
                              />
                          </FloatingLabel>
                        </div>
                      </div>

                        <FloatingLabel label="Email" className="mb-3">
                            <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                id="email"
                                required
                            />
                        </FloatingLabel>

                        <div className="row">
                          <div className="col-12 col-sm-6">
                            <FloatingLabel label="Password" className="mb-3">
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    id="password"
                                    required
                                />
                            </FloatingLabel>
                          </div>

                          <div className="col-12 col-sm-6">
                            <FloatingLabel label="Confirm Password" className="mb-3">
                                <Form.Control 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    id="password2"
                                    required
                                />
                            </FloatingLabel>
                          </div>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2" style={{display: "flex", justifyContent: "flex-end"}}>
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-lg"
                                style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                            >Sign Up</button>

                        </div>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? &nbsp;
                            <a href="/login" className="link-danger">Login</a></p>

                    </form>
                  </div>

                  <div className="d-none d-lg-block col-lg-6 col-xl-5">
                      <img src={loginImg} className="img-fluid" alt="Login Img" />
                  </div>

                </div>

              </div>
                
            </div>
            
        </React.Fragment>
    )
}

export default Register