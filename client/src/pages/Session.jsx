import React, { useEffect} from 'react'
import { Form, FloatingLabel } from "react-bootstrap";
import Header from "../components/Header";

function Session() {

    const tracks = [
        { 
            title: "Cloud Delivered Security Services (CDSS)",
            usecases: [
                "Cloud Access Security Broker",
                "Data Loss Prevention",
                "DNS Security",
                "Extending Network Security to the Cloud",
                "Internet/Web Security",
                "Intrusion Prevention (IPS/IDS)",
                "Malware Analysis & Sandboxing",
                "Ransomware Protection",
                "Securing SaaS Applications",
                "Unmanaged (IOT) Device Security and Segmentation"
            ]
        },
        { 
            title: "Cloud Native Application Protection (Prisma Cloud)",
            usecases: [
                "Cloud Code Security (Infrastructure as Code Security)",
                "Cloud Infrastructure Entitlement Management (CIEM)",
                "Cloud Native Application Protection Platform (CNAPP)",
                "Cloud Network Security and Microsegmentation",
                "Cloud Security Posture Management (CSPM)",
                "Cloud Workload Protection (CWP)",
                "Web App and API Security"
            ]
        },
        { 
            title: "Endpoint Security (Cortex XDR)",
            usecases: [
                "Digital Forensics",
                "Endpoint Protection",
                "Endpoint Detection &amp; Response",
                "Ransomware Protection"

            ]
        },
        { 
            title: "Industry Solutions",
            usecases: [
                "Financial Services",
                "Healthcare",
                "ICS/SCADA",
                "Manufacturing",
                "Oil & Gas",
                "Retail",
                "Service Providers",
                "State and local Government and Education",
                "Utilities",
                "Other"
            ]
        },
        { 
            title: "Network Security (Next-Gen Firewall)",
            usecases: [
                "AIOPs",
                "Container Network Security / Container Firewalls",
                "Data Center Security",
                "Enterprise 5G Security",
                "Network Perimeter / Internet Edge Security",
                "Network Security Management",
                "Public Cloud Network Security &amp; Cloud NGFW",
                "Secure Network Segmentation",
                "Securing SDN/Virtualized Infrastructure",
                "Zero Trust for Users",
                "Zero Trust Security"
            ]
        },
        { 
            title: "Partner Showcase",
            usecases: [
                "Actively Using",
                "In-Deployment",
                "Prospect Customer",
                "Not Applicable"
            ]
        },
        { 
            title: "Secure Access Service Edge (SASE)",
            usecases: [
                "Autonomous Digital Experience Management (ADEM)",
                "Cloud Access Security Broker (CASB)",
                "Cloud Secure Web Gateway (SWG)",
                "Firewall as a Service (FWaaS)",
                "Home Network (Okyo Garde)",
                "SD-WAN",
                "Zero Trust Network Access (ZTNA)"
            ]
        },
        { 
            title: "Security Operations (Cortex)",
            usecases: [
                "Attack Surface Management",
                "Cloud Security & Automation",
                "Cloud Detection & Response",
                "Compliance Management",
                "Incident Case Management",
                "Managed Detection & Response",
                "Managed Threat Hunting",
                "Network Security Automation",
                "Security Operations Workflow Automation",
                "Third-Party Security",
                "Threat Intel Management",
                "Umanaged Cloud Security"
            ]
        },
        { 
            title: "Simplifying Security (Cross Portfolio)",
            usecases: [
                "Complete Cloud Security",
                "Consolidating Security with the PANW Portfolio",
                "Hybrid Work",
                "Securing 5G",
                "Zero Trust Enterprise: A Deep Dive"
            ]
        },
        { 
            title: "Threat Intel & Incideent Response Services (Unit 42)",
            usecases: [
                "Advanced Persistent Threat Investigation",
                "Breach Readiness",
                "Business Email Compromise",
                "Cloud Incident Response",
                "Cybersecurity Risk Assessments",
                "Incident Response",
                "Incident Simulations (Tabletop Exercises, Red/Blue/Purple Team Exercises)",
                "Ransomware Investigation",
                "Threat Intelligence/Threat Landscape",
                "Supply Chain Risk Assessments"
            ]
        },
    ]

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
                                {tracks.map(track => <option value={track.title}>{track.title}</option>)}
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