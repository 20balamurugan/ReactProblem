import React from 'react'
import SideNav from './SideNav'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdAdd } from "react-icons/io";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { Container, Row, Col,Table  } from 'react-bootstrap';

const Home = () => {

    const [modalShow, setModalShow] = React.useState(false);
    return (
        

        <div>
            <Container fluid className='border border-info'>
                <Row className='border p-3'>
                    <Col className='border p-4'>
                        <SideNav />
                    </Col>
                </Row>
            </Container>
            <section>
                <Container fluid className='border border-success justify-content-center'>
                    <Row className='justify-content-center'>
                        <Col lg={9} md={11} sm={11} xs={12} className='border p-3 justify-content-center'>
                            <Card className='w-100'>
                                <Card.Header style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h2>Order List</h2>
                                    <Button className='btn btn-secondary' onClick={() => setModalShow(true)}>
                                        <IoMdAdd />New Order
                                    </Button>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Order Details</Card.Title>
                                    <Card.Text>
                                        <Table className='w-100 text-center'>
                                            <tbody>
                                                <tr className='border'>
                                                    <th className='p-2 border'>Cutomer Name</th>
                                                    <th className='p-2 border'>Order Date</th>
                                                    <th className='p-2 border'>Status</th>
                                                    <th className='p-2 border'>Service List</th>
                                                    <th className='p-2 border'>TotalCost</th>
                                                    <th className='p-2 border'>DiscountAmt</th>
                                                    <th className='p-2 border'>DateOfCreation</th>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
        
    )

}

export default Home