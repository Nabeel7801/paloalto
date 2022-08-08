import React from 'react'
import { Form, FloatingLabel } from "react-bootstrap";
import Header from "../components/Header";

import Button from "../components/Button";

function StayUpdated() {
    return (
        
        <React.Fragment>
            <Header />

            <div className="pageContainer">

                <div className="stayUpdatedArea col-11 col-sm-10 col-md-9 col-lg-7">
                    <p className="heading">
                        Get ready for the world's<br />premier cybersecurity event.
                    </p>
                    
                    <form className="col-11 col-lg-10" style={{margin: 'auto'}}>

                        <FloatingLabel label="First Name" className="mb-3">
                            <Form.Control
                                type="name"
                                placeholder="First Name"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Last Name" className="mb-3">
                            <Form.Control
                                type="name"
                                placeholder="Last Name"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Work Email" className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Work Email"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Company" className="mb-3">
                            <Form.Control
                                type="company"
                                placeholder="Company"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Job Level" className="mb-3">
                            <Form.Control
                                type="job"
                                placeholder="Job Level"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Phone" className="mb-3">
                            <Form.Control
                                type="phone"
                                placeholder="Phone"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Country / Region" className="mb-3" >
                            <Form.Control 
                                type="country"
                                placeholder="Country / Region"
                                required
                            />
                        </FloatingLabel>

                        <Form.Check 
                            type="checkbox"
                            name="specialist"
                            value="specialist"
                            label="&nbsp;I'd like to speak to a sales specialistI'd like to speak to a sales specialist"
                        />

                        <Form.Check 
                            type="checkbox"
                            name="invites"
                            value="invites"
                            label="&nbsp;Email me exclusive invites, research, offers, and news"
                        />

                        <br />

                        <div class="linkNew">
                            By submitting this form, you agree to our&nbsp;
                            <a href="#">Terms</a>. View our&nbsp;
                            <a href="#">Privacy Statement</a>.
                        </div>

                        <div className="buttonArea">
                        <Button text="Submit" href="/callforpapers" />
                        </div>
                    </form>

                </div>

            </div>
        </React.Fragment>
    )
}

export default StayUpdated