import React, { useEffect } from 'react'
import SideNav from './SideNav'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdAdd } from "react-icons/io";
import Servicepopup from './Servicepopup';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';


const Newservices = () => {
    const [servicedata, setservicedata] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [searchcustomer, setsearchCustomer] = useState("")
    useEffect(() => {
        axios.get('http://localhost:3000/service')
            .then((res) => {
                setsearchCustomer(res.data)
                setservicedata(res.data)
            })
            .catch((Error) => {
                console.log('error:', Error);
            })
    }, []);

    const HandleSearch = (e) => {
        e.preventDefault();
        const filteredData = searchcustomer.filter(user =>
            user.service.toLowerCase().includes(e.target.value.toLowerCase()));
            setservicedata(filteredData);
    };
    const addService = (servicedata) => {
      setservicedata([...servicedata, servicedata]);
    };

    return (
        <div>
            <Container fluid >
                <Row className=' p-3'>
                    <Col className=' p-4'>
                        <SideNav />
                    </Col>
                </Row>
            </Container>
            <section>
                <Container fluid className='justify-content-center'>
                    <Row className='justify-content-center'>
                        <Col lg={8} md={11} sm={11} xs={12} className='p-3 d-flex justify-content-center'>
                            <Card className='w-75'>
                                <Card.Header style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h2>Service List</h2>
                                    <input type='search' className='form-control w-25 ' placeholder='searchOrder' onChange={HandleSearch}   ></input>
                                    <Button className='btn btn-secondary' onClick={() => setModalShow(true)}>
                                        <IoMdAdd />New service</Button>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Order Details</Card.Title>
                                    <Card.Text>
                                        {Array.isArray(servicedata) && servicedata.length > 0 ? (
                                            <Table className='w-70 text-center'>
                                                <tbody>
                                                    <tr className=''>
                                                        <th className='p-2 '>Service Name</th>
                                                        <th className='p-2 '>Amount</th>
                                                        <th className='p-2 '>Status</th>   
                                                    </tr>
                                                    {servicedata.map((datas, intex) => {
                                                        
                                                        return (
                                                            <tr key={intex}>
                                                                <td>{datas.servicename ? datas.servicename.toUpperCase() : ''}</td>
                                                                <td>{datas.amount }</td>
                                                                
                                                                
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </Table>
                                        ) : <h1 className='text-center'>NO DATA FOUND</h1>}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Servicepopup
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                addService={addService}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    )

}

export default Newservices
