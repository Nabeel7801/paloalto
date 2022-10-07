import React from 'react'
import { Form, FloatingLabel, Tab, Tabs,
         Card, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import clock from '../assets/img/clock.png'

import SectionHeading from '../components/SectionHeading';

import Button from "../components/Button";


function StayUpdated() {    
    return (
        
        <React.Fragment>
            <Header />

            <div className="pageContainer">
                <div className="container scheduleArea">

                    <Tabs
                    defaultActiveKey= "nov"
                    id="schedule-tab"
                    className="myClass"
                    style={{ borderBottom: '4px solid #4288C8', }}
                    fill
                    >
                        <Tab eventKey="nov" title="November" className='card'>
                            <Row>
                                <Col sm={3}>
                                    <Card style={{ width: '15.5rem',border: 'none'}}>
                                    <Card.Img  src={ clock } style={{ width: '4rem', margin: '15px' }} />
                                    <Card.Body>
                                        <Card.Title>Fri 7 November, 2022 </Card.Title>
                                        <Card.Text style={{}}>
                                        <strong>5pm PST</strong>
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>


                                <Col sm={9}>
                                <br />
                                <div className='container'>
                                    <SectionHeading className="theme" title="Theme Topic"/>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                        printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>

                                </Col>
                            </Row>
            
                        </Tab>
                        <Tab eventKey="dec" title="December" className='card'>
                            <Row>
                            <Col sm={3}>
                                    <Card style={{ width: '15.5rem',border: 'none'}}>
                                    <Card.Img  src={ clock } style={{ width: '4rem', margin: '15px' }} />
                                    <Card.Body>
                                        <Card.Title>Fri 7 December, 2022 </Card.Title>
                                        <Card.Text style={{}}>
                                        <strong>5pm PST</strong>
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>


                                <Col sm={9}>
                                <br />
                                <div className='container'>
                                    <SectionHeading className="theme" title="Theme Topic"/>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                        printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>

                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="jan" title="January" className='card'>
                        <Row>
                            <Col sm={3}>
                                    <Card style={{ width: '15.5rem',border: 'none'}}>
                                    <Card.Img  src={ clock } style={{ width: '4rem', margin: '15px' }} />
                                    <Card.Body>
                                        <Card.Title>Fri 7 January, 2023 </Card.Title>
                                        <Card.Text style={{}}>
                                        <strong>5pm PST</strong>
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>


                                <Col sm={9}>
                                <br />
                                <div className='container'>
                                    <SectionHeading className="theme" title="Theme Topic"/>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                        printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>

                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="feb" title="February" className='card'>
                        <Row>
                            <Col sm={3}>
                                    <Card style={{ width: '15.5rem',border: 'none'}}>
                                    <Card.Img  src={ clock } style={{ width: '4rem', margin: '15px' }} />
                                    <Card.Body>
                                        <Card.Title>Fri 7 February, 2022 </Card.Title>
                                        <Card.Text style={{}}>
                                        <strong>5pm PST</strong>
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>


                                <Col sm={9}>
                                <br />
                                <div className='container'>
                                    <SectionHeading className="theme" title="Theme Topic"/>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                        printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>

                                </Col>
                            </Row>
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