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

const MyVerticallyCenteredModal = (props) => {
    const Services = [
        { value: "Haircut", label: "Haircut" },
        { value: "Facial", label: "Facial" },
        { value: "Shaving", label: "Shaving" },
        { value: "Hairwash", label: "Hairwash" }
    ]
    const [orderInput, setOrderInput] = useState({
        cusname: "",
        orderdate: "",
        service: null,
        amount: "",
        Disamount: "",
        doc: ""
    })
    const [selectedService, setSelectedService] = useState(null);
    const handleServiceChange = (selectedOption) => {
        setOrderInput({ ...orderInput, service: selectedOption.value });
        setSelectedService(selectedOption);
    };

    const submitHandle = (e) => {
        e.preventDefault();
        // alert(`Selected Service: ${selectedService ? selectedService.label : 'None'}`);
        if (orderInput.cusname === "" && orderInput.orderdate === "" && orderInput.amount === "" && orderInput.Disamount === "" && orderInput.doc === "") {
            alert("please Enter all details")
        }
        else if (selectedService === null) {
            alert("please select service")
        }
        else {
            console.log(orderInput);
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

                        <FloatingLabel
                            label="Customer Name"
                            className="mb-3"

                        >
                            <Form.Control type="email" placeholder="Name" name="cusname" onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} />
                        </FloatingLabel>

                        <FloatingLabel
                            label="Order Date"
                            className="mb-3"
                            name="orderdate"
                        >
                            <Form.Control
                                type="date"
                                placeholder="Date"
                                name="orderdate"
                                onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })}
                                required 
                            />
                        </FloatingLabel>

                        <FloatingLabel className="mb-3">
                            <Select options={Services} name='service' onChange={handleServiceChange} required />
                        </FloatingLabel>

                        <FloatingLabel
                            label="Amount"
                            className="mb-3"

                        >
                            <Form.Control type="number" placeholder="" name="amount" onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} />
                        </FloatingLabel>

                        <FloatingLabel
                            label="Discount Amount"
                            className="mb-3"

                        >
                            <Form.Control type="number" placeholder="" name="Disamount" onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} />
                        </FloatingLabel>
                        <FloatingLabel
                            label="Date Of Creation"
                            className="mb-3"
                            name="doc"
                        >
                            <Form.Control type="date" placeholder="Date" name="doc" onChange={e => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} />
                        </FloatingLabel>
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

export default MyVerticallyCenteredModal