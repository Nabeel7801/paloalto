import React, { useEffect} from 'react'
import { Form, FloatingLabel } from "react-bootstrap";
import Header from "../components/Header";

function Session() {

    useEffect(() => {
        
        const user = localStorage.getItem('user');
        if (typeof user == 'undefined' || user == null) {
            window.location.replace("/login")
        }

    }, [])

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        
        <React.Fragment>
            <Header />

            <div className="pageContainer">

                <div className="stayUpdatedArea col-11 col-sm-10 col-md-9 col-lg-8">
                    <p className="heading">
                        Session Form
                    </p>
                    
                    <form className="col-11 col-lg-10" style={{margin: 'auto'}} onSubmit={handleSubmit}>

                        <p><b>Session Info</b></p>

                        <FloatingLabel label="Session Length" className="mb-3">
                            <Form.Select aria-label="Session Length" required>
                                <option value="20 min">20 Min (Lightning Session)</option>
                                <option value="40 min">40 Min</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Session Type" className="mb-3">
                            <Form.Select aria-label="Session Type" required>
                                <option value="presentation">Presentation</option>
                                <option value="panel presentation">Panel Presentation</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Title" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Session Description (Limit to 350 Words)" className="mb-3">
                            <Form.Control
                                as="textarea"
                                style={{ height: '120px' }}
                                placeholder="Session Description (Limit to 350 Words)"
                                required
                            />
                        </FloatingLabel>

                        <p><b>Top Takeaways</b></p>
                        <p>Provide 3 takeaways that attendees will gain from this session.</p>
                        <p>For example, this session will cover how to..., benefits of..., learn about..., learn the process on..., etc.</p>

                        <FloatingLabel label="Takeaway 1" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Takeaway 1"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Takeaway 2" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Takeaway 2"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Takeaway 3" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Takeaway 3"
                                required
                            />
                        </FloatingLabel>

                        <p><b>Additional Info</b></p>

                        <FloatingLabel label="List of Products & Services covered" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="List of Products & Services covered"
                                required
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Session Tracks" className="mb-3">
                            <Form.Select aria-label="Session Tracks" required>
                                <option value="Cloud Delivered Security Services (CDSS)">Cloud Delivered Security Services (CDSS)</option>
                                <option value="Cloud Native Application Protection (Prisma Cloud)">Cloud Native Application Protection (Prisma Cloud)</option>
                                <option value="Endpoint Security  (Cortex XDR)">Endpoint Security  (Cortex XDR)</option>
                                <option value="Industry Solutions">Industry Solutions </option>
                                <option value="Network Security (Next-Gen Firewall)">Network Security (Next-Gen Firewall)</option>
                                <option value="Partner Showcase">Partner Showcase</option>
                                <option value="Secure Access Service Edge (SASE)">Secure Access Service Edge (SASE)</option>
                                <option value="Security Operations (Cortex)">Security Operations (Cortex)</option>
                                <option value="Simplifying Security (Cross Portfolio)">Simplifying Security (Cross Portfolio) </option>
                                <option value="Threat Intel & Incident Response Services (Unit 42)">Threat Intel & Incident Response Services (Unit 42)</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Use Cases" className="mb-3">
                            <Form.Select aria-label="Use Cases" required>
                                <option value="Cloud Access Security Broker">Cloud Access Security Broker</option>
                                <option value="Data Loss Prevention">Data Loss Prevention</option>
                                <option value="DNS Security">DNS Security</option>
                                <option value="Extending Network Security to the Cloud">Extending Network Security to the Cloud</option>
                                <option value="Internet/Web Security">Internet/Web Security</option>
                                <option value="Intrusion Prevention (IPS/IDS)">Intrusion Prevention (IPS/IDS)</option>
                                <option value="Malware Analysis & Sandboxing">Malware Analysis & Sandboxing</option>
                                <option value="Ransomware Protection">Ransomware Protection</option>
                                <option value="Securing SaaS Applications">Securing SaaS Applications</option>
                                <option value="Unmanaged (IOT) Device Security and Segmentation">Unmanaged (IOT) Device Security and Segmentation</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Deployment Stage" className="mb-3">
                            <Form.Select aria-label="Deployment Stage" required>
                                <option value="Actively Using">Actively Using</option>
                                <option value="In-Deployment">In-Deployment</option>
                                <option value="Prospect Customer">Prospect Customer</option>
                                <option value="Not Applicable">Not Applicable</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="This session mostly assigns with..." className="mb-3">
                            <Form.Select aria-label="This session mostly assigns with..." required>
                                <option value="Business Transformation Strategies">Business Transformation Strategies</option>
                                <option value="How-To Implement">How-To Implement</option>
                                <option value="In-Depth Product Information">In-Depth Product Information</option>
                                <option value="Thought Leadership">Thought Leadership</option>
                                <option value="Tips and Tricks">Tips and Tricks</option>
                            </Form.Select>
                        </FloatingLabel>

                        <p><b>Are you willing to present at other Ignite events?</b></p>

                        <Form.Check 
                            type="radio"
                            label="Yes"
                            name="willingness_other"
                            value="yes"
                            required
                        />

                        <Form.Check 
                            type="radio"
                            label="No"
                            name="willingness_other"
                            value="no"
                            required
                        />
                        <br />

                        <p><b>Are you willing to present your session more than once at the event?</b></p>

                        <Form.Check 
                            type="radio"
                            label="Yes"
                            name="willingness_more"
                            value="yes"
                            required
                        />
                        
                        <Form.Check 
                            type="radio"
                            label="No"
                            name="willingness_more"
                            value="no"
                            required
                        />
                        <br />

                        <p><b>A handful of presentations will be selected to present at the in-person Ignite conference as well as pre-record the session to become a part of the On Demand module. Are you willing to do both if your submission is chosen?</b></p>

                        <Form.Check 
                            type="radio"
                            label="Yes"
                            name="willingness_both"
                            value="yes"
                            required
                        />

                        <Form.Check 
                            type="radio"
                            label="No"
                            name="willingness_both"
                            value="no"
                            required
                        />
                        <br />

                        <div className="buttonArea right">
                            <button className="customBtn" type="submit">
                                Continue
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </React.Fragment>
    )
  
}

export default Session