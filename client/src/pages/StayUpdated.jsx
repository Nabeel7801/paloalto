import React, { useState }from 'react';
import { Form, FloatingLabel, Tab, Tabs,
         Card, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import clock from '../assets/img/clock.png'

import Button from "../components/Button";


function StayUpdated() {
    const [key, setKey] = useState('home');
    
    return (
        
        
        <React.Fragment>
            <Header />

            <div className="pageContainer">
                <div className="container scheduleArea">

                    <Tabs
                    activeKey= {key}
                    onSelect= {(k) => setKey(k)}
                    id="schedule-tab"
                    className=""
                    style={{ borderBottom: '4px solid #4288C8', }}
                    fill
                    >
                        <Tab eventKey="nov" title="November" className='card'>
                            <Row>
                                <Col sm={3}>
                                    <Card style={{ width: '18.7rem',}}>
                                    <Card.Img  src={ clock } style={{ width: '4rem', margin: '15px' }} />
                                    <Card.Body>
                                        <Card.Title>Fri 7 November, 2022 </Card.Title>
                                        <Card.Text>
                                        5pm PST
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>


                                <Col sm={9}>
                                    <Card>
                                    <Card.Title>Fri 7 November, 2022 </Card.Title>
                                    <Card.Text>
                                    5pm PST
                                    </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
            
                        </Tab>
                        <Tab eventKey="dec" title="December">
                        
                        </Tab>
                        <Tab eventKey="jan" title="January">
                            
                        </Tab>
                        <Tab eventKey="feb" title="February">
                            
                        </Tab>
                    </Tabs>
                </div>

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