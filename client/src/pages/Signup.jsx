import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Button from "../components/Button";

function Signup() {
  return (
    <React.Fragment>
      <Header />
      <br />
      <br />
      <br />
      <div className="col col-md-12 mt-5 mb-2 signupArea">
        <div className="signupCard text-center">
          <h3>
            Get ready for the world's
            <br />
            premier cybersecurity event.
          </h3>
          <br />
          <form className="">
            <FloatingLabel label="First Name" className="mb-3">
              <Form.Control
                type="name"
                placeholder="First Name"
                id="firstname"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Last Name" className="mb-3">
              <Form.Control
                type="name"
                placeholder="Last Name"
                id="lastname"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Work Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Work Email"
                id="email"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Company" className="mb-3">
              <Form.Control
                type="company"
                placeholder="Company"
                id="company"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Job Level" className="mb-3">
              <Form.Control
                type="job"
                placeholder="Job Level"
                id="job"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Phone" className="mb-3">
              <Form.Control
                type="phone"
                placeholder="Phone"
                id="phone"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Country / Region" className="mb-3" >
              <Form.Control 
                type="country"
                placeholder="Country / Region"
                id="country"
                required
              />
            </FloatingLabel>
            <div className="check">
              <input
                type="checkbox"
                id="specialist"
                name="specialist"
                value="specialist"
              />
              <label for="specialist">
                {" "}
                I'd like to speak to a sales specialistI'd like to speak to a
                sales specialist
              </label>
              <br />
              <input
                type="checkbox"
                id="invites"
                name="invites"
                value="invites"
              />
              <label for="invites">
                Email me exclusive invites, research, offers, and news
              </label>
              <br />

              

              <div class="linkNew">
                By submitting this form, you agree to our{" "}
                <a href="/signup">Terms</a>. View our{" "}
                <a href="signup">Privacy Statement</a>.
              </div>
            </div>

            <div className="buttonArea">
              <Button text="Submit" href="/callforpapers" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Signup;
