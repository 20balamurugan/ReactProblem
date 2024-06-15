import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import axios from 'axios';


const Customerpopup = (props) => {
    const randomNumber = Math.floor(Math.random(5) * 10000000);
    const [cusInput, seCusinput] = useState({
        cusid: randomNumber, cusname: "", mobile: "", email: "", address: "", remark: ""
    })

    const submitHandle = (e) => {
        e.preventDefault();
        if ( cusInput.cusname === "" && cusInput.mobile === "" && cusInput.email === "" && cusInput.address === "" && cusInput.remark === "") {
            alert("Please Enter all details");
        }
         
        else {
            axios.post('http://localhost:3000/customer',cusInput)
                .then(response => {
                    props.addCus(cusInput);
                    props.onHide();
                    window.location.reload(); 
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                    
                });
        }
    };
   
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
                            <Form.Control type="text" value={cusInput.cusid} readOnly="true" name="cusid" onChange={e => seCusinput({ ...cusInput, [e.target.name]: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Customer Name" name="cusname" onChange={e => seCusinput({ ...cusInput, [e.target.name]: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder="Customer Name" name="mobile" onChange={e => seCusinput({ ...cusInput, [e.target.name]: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Mail Id" name="email" controlId="formBasicEmail" onChange={e => seCusinput({ ...cusInput, [e.target.name]: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="textarea" placeholder="Address" name="address" onChange={e => seCusinput({ ...cusInput, [e.target.name]: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Remork" name="remork" onChange={e => seCusinput({ ...cusInput, [e.target.name]: e.target.value })} />
                        </Form.Group>
                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                    <div>
                    <Button onClick={submitHandle}>Submit</Button>
                   
                    </div>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Customerpopup