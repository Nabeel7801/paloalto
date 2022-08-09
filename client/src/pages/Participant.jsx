import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header';
import { Table, Modal, Form, Button, FloatingLabel } from 'react-bootstrap'

import { AppContext } from '../context';
import axios from 'axios'

function Participant() {
    
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.replace("/login")
    }

    const sessionID = localStorage.getItem('sessionID');
    if (!sessionID) {
        window.location.replace("/callforpapers")
    }

    const { appState } = useContext(AppContext);
    const url = appState.ATLAS_URI;

    const [formData, setFormData] = useState({
        Role: "",
        Email: "",
        FirstName: "",
        LastName: "",
        JobTitle: "",
        Company: ""
    })

    const [participantsList, setParticipantsList] = useState([])

    const [firstStep, setFirstStep] = useState(true)
    const [show, setShow] = useState(false);

    useEffect(() => {
        
        axios.get(`${url}/getParticipants/${sessionID}`)
        .then(({ data }) => {
            if (data) {
                setParticipantsList(data);
            }
        })
        .catch(err => console.log(err))

    }, [sessionID, url])

    const handleClose = () => {
        setShow(false)
        setFirstStep(true)
    };
    
    const handleShow = () => setShow(true);

    const changeHandler = e => {
        const data = {...formData};
        data[e.target.name] = e.target.value
        setFormData(data)
    }

    const handleFirstStep = e => {
        e.preventDefault();

        axios.get(`${url}/getUserByEmail/${formData.Email}`)
        .then(({ data }) => {
            if (data) {
                setFormData(prev => ({
                    ...prev,
                    ...data
                }))
            }
            setFirstStep(false);
            
        })
        .catch(err => console.log(err))

    }

    const handleSecondStep = e => {
        e.preventDefault();
        
        axios.put(`${url}/addParticipant/${sessionID}`, formData)
        .then(({ data }) => {
            if (data.status === 'success') {
                handleClose();
                setParticipantsList(prev => (
                    [...prev, formData]
                ))
            }
        })
        .catch(err => console.log(err))

    }

    const deleteParticipant = (e) => {
        e.preventDefault();

        const index = e.target.getAttribute('index')
        if (index >= 0) {
            const updatedList = [...participantsList]
            updatedList.splice(index, 1)
            
            axios.put(`${url}/removeParticipant/${sessionID}`, updatedList)
            .then(({ data }) => {
                if (data.status === 'success') {
                    setParticipantsList(updatedList)
                }
            })
            .catch(err => console.log(err))
        }
    }

    return (
        
        <React.Fragment>
            <Header />

            <div className="pageContainer">
                <div className="flex-box-section">
                
                    <div className="buttonArea right">
                        <button 
                            className="customBtn" 
                            type="button" 
                            onClick={handleShow}
                            style={{color: '#fff'}}
                        >
                            <i class="fas fa-plus"></i> &nbsp; Add Participant
                        </button>
                    </div>
                    <br />
                    <Table className="customTable" bordered responsive >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {participantsList.length === 0 ? 
                                <tr><td>No participants yet</td></tr>
                                :
                                participantsList.map((participant, key) => (
                                    <tr key={key}>
                                        <td>{participant.FirstName + " " + participant.LastName}</td>
                                        <td>{participant.Company}</td>
                                        <td>{participant.Role}</td>
                                        <td>
                                            <i class="fas fa-times" 
                                                style={{color: 'red', cursor: 'pointer'}}
                                                index={key}
                                                onClick={deleteParticipant}
                                            ></i>
                                        </td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </Table>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered size={firstStep ? "lg" : "md"}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Participant</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    {firstStep ? 
                        <section>
                            <Form onSubmit={handleFirstStep} id="insertForm">
                                <p>Select a role and enter the email address of the participant. If they don't already have an account, you'll be prompted to add additional information.</p>
                                <br />
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <FloatingLabel label="Participant Role" className="mb-3">
                                            <Form.Select aria-label="Participant Role" required
                                                name="Role" 
                                                value={formData.Role} 
                                                onChange={changeHandler}
                                            >
                                                <option value=""></option>
                                                <option value="Speaker">Speaker</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </div>
    
                                    <div className="col-12 col-lg-6">
                                        <FloatingLabel label="Email" className="mb-3">
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                required
                                                name="Email" 
                                                value={formData.Email} 
                                                onChange={changeHandler}
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
    
                            </Form>
                        </section>
                        :
                        <section>
                            <Form onSubmit={handleSecondStep} id="insertForm">

                                <FloatingLabel label="Participant Role" className="mb-3">
                                    <Form.Select aria-label="Participant Role" required
                                        name="Role" 
                                        value={formData.Role} 
                                        onChange={changeHandler}
                                        disabled
                                    >
                                        <option value=""></option>
                                        <option value="Speaker">Speaker</option>
                                    </Form.Select>
                                </FloatingLabel>

                                <FloatingLabel label="Email" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="Email" 
                                        value={formData.Email} 
                                        onChange={changeHandler}
                                        disabled
                                    />
                                </FloatingLabel>

                                <FloatingLabel label="First Name" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        required
                                        name="FirstName" 
                                        value={formData.FirstName} 
                                        onChange={changeHandler}
                                    />
                                </FloatingLabel>

                                <FloatingLabel label="Last Name" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        required
                                        name="LastName" 
                                        value={formData.LastName} 
                                        onChange={changeHandler}
                                    />
                                </FloatingLabel>

                                <FloatingLabel label="Job Title" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Job Title"
                                        required
                                        name="JobTitle" 
                                        value={formData.JobTitle} 
                                        onChange={changeHandler}
                                    />
                                </FloatingLabel>

                                <FloatingLabel label="Company" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Company"
                                        required
                                        name="Company" 
                                        value={formData.Company} 
                                        onChange={changeHandler}
                                    />
                                </FloatingLabel>
    
                            </Form>
                        </section>
                    }

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button 
                        variant="primary" 
                        form="insertForm" 
                        type="submit" 
                        style={{backgroundColor: "#4288C8"}}
                    >
                        {firstStep ? "Next" : "Add Participant"}
                    </Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    )
  
}

export default Participant