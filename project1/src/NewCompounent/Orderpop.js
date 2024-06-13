import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import Select from 'react-select'
import axios from 'axios';


const Orderpop = (props) => {
    const Services = [
        { value: "Haircut", label: "Haircut", amount: "180" },
        { value: "Facial", label: "Facial", amount: "150" },
        { value: "Shaving", label: "Shaving", amount: "100" },
        { value: "Hairwash", label: "Hairwash", amount: "80" }
    ]
    const [orderInput, setOrderInput] = useState({
        cusname: "",
        orderdate: "",
        service: null,
        Disamount: "",
        doc: ""
    })
    const [selectedService, setSelectedService] = useState(null);
    const handleServiceChange = (selectedOption) => {
        setOrderInput({ ...orderInput, service: selectedOption });
        setSelectedService(selectedOption);

    };
    
    const submitHandle = (e) => {
        e.preventDefault();
        if (orderInput.cusname === "" && orderInput.orderdate === "" && orderInput.amount === "" && orderInput.Disamount === "" && orderInput.doc === "") {
            alert("please Enter all details")
        }
        else if (selectedService === null) {
            alert("please select service")
        }
        else {
            
            axios.post('http://localhost:3000/order', orderInput)
            props.addOrder(orderInput);
            props.onHide()
             
            
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
                        New Order Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>


                        <Form.Group className="mb-3">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="email" placeholder="Name" name="cusname" onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Order Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" name="orderdate" onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Service</Form.Label>
                           
                            <Select
                                options={Services.map(service => ({ value: service.label, label: `${service.label} - $${service.amount}`,amount:service.amount}))}
                                name='service'
                                onChange={handleServiceChange}
                                required
                            />
                       
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Discount Amount</Form.Label>
                            <Form.Control type="number" placeholder="" name="Disamount" onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date Of Creation</Form.Label>
                            <Form.Control type="date" placeholder="Date" name="doc" onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} />
                        </Form.Group>
                    </>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                    <Button onClick={submitHandle}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Orderpop