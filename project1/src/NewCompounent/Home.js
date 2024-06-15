import React, { useEffect } from 'react'
import SideNav from './SideNav'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdAdd } from "react-icons/io";
import Orderpop from './Orderpop';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';


const Home = () => {
    const [orderdata, setOrderdata] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [searchcustomer, setsearchCustomer] = useState("")
    useEffect(() => {
        axios.get('http://localhost:3000/order')
            .then((res) => {
                setsearchCustomer(res.data)
                setOrderdata(res.data)
            })
            .catch((Error) => {
                console.log('error:', Error);
            })
    }, []);

    const HandleSearch = (e) => {
        e.preventDefault();
        const filteredData = searchcustomer.filter(user =>
            user.cusname.toLowerCase().includes(e.target.value.toLowerCase()) || user.id.toLowerCase().includes(e.target.value.toLowerCase()));
        setOrderdata(filteredData);
    };
    const addOrder = (newOrder) => {
        setOrderdata([...orderdata, newOrder]);
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
                        <Col lg={8} md={11} sm={11} xs={12} className='p-3 justify-content-center'>
                            <Card className='w-100'>
                                <Card.Header style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h2>Order List</h2>
                                    <input type='search' className='form-control w-25 ' placeholder='searchOrder' onChange={HandleSearch}   ></input>
                                    <Button className='btn btn-secondary' onClick={() => setModalShow(true)}>
                                        <IoMdAdd />New Order
                                    </Button>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Order Details</Card.Title>
                                    <Card.Text>
                                        {Array.isArray(orderdata) && orderdata.length > 0 ? (
                                            <Table className='w-70 text-center'>
                                                <tbody>
                                                    <tr className=''>
                                                        <th className='p-2 '>Order Date</th>
                                                        <th className='p-2 '>Customer Id</th>
                                                        <th className='p-2 '>Customer Name</th>
                                                        <th className='p-2 '>Service List</th>
                                                        <th className='p-2 '>Total Cost</th>
                                                        
                                                    </tr>
                                                    {orderdata.map((datas, intex) => {
                                                        const totalamount = datas.service.amount - datas.Disamount
                                                        return (
                                                            <tr key={intex}>
                                                                <td>{datas.orderdate}</td>
                                                                <td>{datas.id }</td>
                                                                <td>{datas.cusname ? datas.cusname.toUpperCase() : ''}</td>
                                                                <td>{datas.service.value}</td>
                                                                <td>₹{totalamount}</td>
                                                                {/* Fill in other table cells with respective data */}
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </Table>
                                        ) : <h1 className='text-center'>NO DATA FOUND</h1>}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Orderpop
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                addOrder={addOrder}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    )

}

export default Home