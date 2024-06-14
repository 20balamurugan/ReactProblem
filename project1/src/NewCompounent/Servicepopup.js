import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import axios from 'axios';


const Servicepopup = (props) => {
    const [servicedata, setServicedata] = useState({
        servicename: "", amount: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (servicedata.servicename === "" || servicedata.amount === "") {
            alert("please enter all data")
        }
        else {
            axios.post('http://localhost:3000/service', servicedata)
                .then(response => {
                    props.addService(servicedata);
                    props.onHide();
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error submitting service data:', error);
                    // Handle error if needed
                });
        }
    }

    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Customer Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <Form.Group className="mb-3">
                            <Form.Control type="text"  name="servicename" placeholder='Service Name' onChange={e => setServicedata({ ...servicedata, [e.target.name]: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number"  name="amount" placeholder='₹ Service Amount' onChange={e => setServicedata({ ...servicedata, [e.target.name]: e.target.value })} />
                        </Form.Group>

                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
  
                

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Servicepopup