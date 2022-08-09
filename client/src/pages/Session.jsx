import React, { useState, useEffect, useContext } from 'react'
import { Form, FloatingLabel } from "react-bootstrap";
import { useHistory } from 'react-router-dom' 

import Header from "../components/Header";
import tracks from '../tracks';

import { AppContext } from '../context';
import axios from 'axios'

function Session() {

    const { appState } = useContext(AppContext);
    const url = appState.ATLAS_URI;
    const history = useHistory()

    const [formData, setFormData] = useState({
        Participants: [],
        SessionLength: "",
        SessionType: "",
        Title: "",
        Description: "",
        Takeaways: [
            "", "", ""
        ],
        ListOfServicesCovered: "",
        SessionTracks: "",
        Usecase: "",
        DeploymentStage: "",
        MostlyAssignWith: "",
        WillingForOther: "No",
        WillingForMore: "No",
        WillingForBoth: "No"
    })

    useEffect(() => {
        
        const user = localStorage.getItem('user');
        if (typeof user == 'undefined' || user == null) {
            window.location.replace("/login")
        }

    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        
        axios.post(`${url}/createSession`, formData)
        .then(({ data }) => {
            if (data.status === 'success') {
                localStorage.setItem('sessionID', data._doc._id)
                history.push("/cfp/participant")
            }
        })
        .catch(err => console.log(err))

    }

    const changeHandler = (e, index) => {
        index = typeof index !== 'undefined' ? index : -1;
        const data = {...formData};
        if (index === -1) {
            data[e.target.name] = e.target.value
        }else {
            data[e.target.name][index] = e.target.value
        }

        setFormData(data)
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
                            <Form.Select aria-label="Session Length" required
                                name="SessionLength" 
                                value={formData.SessionLength} 
                                onChange={changeHandler}
                            >
                                <option value=""></option>
                                <option value="20 min">20 Min (Lightning Session)</option>
                                <option value="40 min">40 Min</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Session Type" className="mb-3">
                            <Form.Select aria-label="Session Type" required 
                                name="SessionType"
                                value={formData.SessionType}
                                onChange={changeHandler}
                            >
                                <option value=""></option>
                                <option value="presentation">Presentation</option>
                                <option value="panel presentation">Panel Presentation</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Title" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                required
                                name="Title" 
                                value={formData.Title} 
                                onChange={changeHandler}
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Session Description (Limit to 350 Words)" className="mb-3">
                            <Form.Control
                                as="textarea"
                                style={{ height: '120px' }}
                                placeholder="Session Description (Limit to 350 Words)"
                                required
                                name="Description" 
                                value={formData.Description} 
                                onChange={changeHandler}
                            />
                        </FloatingLabel>

                        <p><b>Top Takeaways</b></p>
                        <p>Provide 3 takeaways that attendees will gain from this session.</p>
                        <p>For example, this session will cover how to..., benefits of..., learn about..., learn the process on..., etc.</p>

                        {formData.Takeaways.map((takeaway, key) => 
                            <FloatingLabel label={`Takeaway ${key+1}`} className="mb-3">
                                <Form.Control
                                    key={key}
                                    type="text"
                                    placeholder="Takeaway 1"
                                    required
                                    name="Takeaways" 
                                    value={takeaway} 
                                    onChange={(e) => changeHandler(e, key)}
                                />
                            </FloatingLabel>
                        )}
                        
                        <p><b>Additional Info</b></p>

                        <FloatingLabel label="List of Products & Services covered" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="List of Products & Services covered"
                                required
                                name="ListOfServicesCovered" 
                                value={formData.ListOfServicesCovered} 
                                onChange={changeHandler}
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Session Tracks" className="mb-3">
                            <Form.Select aria-label="Session Tracks" required
                                name="SessionTracks" 
                                value={formData.SessionTracks} 
                                onChange={changeHandler}
                            >
                                {tracks.map((track, key) => <option key={key} value={track.title}>{track.title}</option>)}
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Use Cases" className="mb-3">
                            <Form.Select aria-label="Use Cases" required
                                name="Usecase" 
                                value={formData.Usecase} 
                                onChange={changeHandler}
                            >
                                <option value=""></option>
                                {
                                    tracks.filter(track => track.title === formData.SessionTracks)[0].usecases
                                    .map((usecase, key) => 
                                        <option key={key} value={usecase}>{usecase}</option>
                                    )
                                }
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="Deployment Stage" className="mb-3">
                            <Form.Select aria-label="Deployment Stage" required
                                name="DeploymentStage" 
                                value={formData.DeploymentStage} 
                                onChange={changeHandler}
                            >
                                <option value=""></option>
                                <option value="Actively Using">Actively Using</option>
                                <option value="In-Deployment">In-Deployment</option>
                                <option value="Prospect Customer">Prospect Customer</option>
                                <option value="Not Applicable">Not Applicable</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel label="This session mostly assigns with..." className="mb-3">
                            <Form.Select aria-label="This session mostly assigns with..." required
                                name="MostlyAssignWith" 
                                value={formData.MostlyAssignWith} 
                                onChange={changeHandler}
                            >
                                <option value=""></option>
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
                            name="WillingForOther"
                            required
                            checked={formData.WillingForOther === "Yes"}
                            value="Yes"
                            onChange={changeHandler}
                        />

                        <Form.Check 
                            type="radio"
                            label="No"
                            name="WillingForOther"
                            required
                            checked={formData.WillingForOther === "No"}
                            value="No"
                            onChange={changeHandler}
                        />
                        <br />

                        <p><b>Are you willing to present your session more than once at the event?</b></p>

                        <Form.Check 
                            type="radio"
                            label="Yes"
                            name="WillingForMore"
                            required
                            checked={formData.WillingForMore === "Yes"}
                            value="Yes"
                            onChange={changeHandler}
                        />

                        <Form.Check 
                            type="radio"
                            label="No"
                            name="WillingForMore"
                            required
                            checked={formData.WillingForMore === "No"}
                            value="No"
                            onChange={changeHandler}
                        />
                        <br />

                        <p><b>A handful of presentations will be selected to present at the in-person Ignite conference as well as pre-record the session to become a part of the On Demand module. Are you willing to do both if your submission is chosen?</b></p>

                        <Form.Check 
                            type="radio"
                            label="Yes"
                            name="WillingForBoth"
                            required
                            checked={formData.WillingForBoth === "Yes"}
                            value="Yes"
                            onChange={changeHandler}
                        />

                        <Form.Check 
                            type="radio"
                            label="No"
                            name="WillingForBoth"
                            required
                            checked={formData.WillingForBoth === "No"}
                            value="No"
                            onChange={changeHandler}
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