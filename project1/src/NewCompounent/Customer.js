import React, { useEffect } from 'react'
import SideNav from './SideNav'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdAdd } from "react-icons/io";
import Customerpopup from './Customerpopup';
import { Container, Row, Col, Table, CardTitle } from 'react-bootstrap';
import axios from 'axios';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Customer = () => {
    const [modalShow, setModalShow] = useState(false);
    const [Customerdata,setCustomerdata]=useState([])
    const [searchcustomer, setsearchCustomer] = useState("")
    useEffect(() => {
        axios.get('http://localhost:3000/customer')
            .then((res) => {
                setCustomerdata(res.data);
                setsearchCustomer(res.data);
            })
            .catch((Error) => {
                console.log('error:', Error);
            })
    },[]);
    
    const addCus=(cusInput)=>
    {
        setCustomerdata(...Customerdata,cusInput)
    }
    
    const deleteService=(cusid)=>
        {
            axios.delete(`http://localhost:3000/customer/${cusid}`)
            .then(response=>{
              alert("delete success",response.data)
              setCustomerdata(Customerdata.filter(user => user.cusid !== cusid));
            })
        }
        
        const HandleSearch = (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredData = searchcustomer.filter(user =>
                user.cusname.toLowerCase().includes(searchTerm) || user.cusid.toString().includes(searchTerm)
            );
            setCustomerdata(filteredData);
        };
        const handleDelete = (cusid) => {
            if (window.confirm('Are you sure you want to delete this service?')) {
                deleteService(cusid);
            }
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
                            <Card className='w-75 '>
                            <Card.Header style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h3>Customer</h3>
                                    <input type='search' className='form-control w-25 ' placeholder='searchCustomer' onChange={HandleSearch}   ></input>
                                    <Button className='btn btn-secondary w-10'onClick={() => setModalShow(true)} > <IoMdAdd /></Button>
                                </Card.Header>
                            <Card.Body>
                            <Card.Title>Customer Informations</Card.Title>
                                    <Card.Text>
                                        { Customerdata.length > 0 ? (
                                            <Table className='w-70 text-center'>
                                                <tbody>
                                                    <tr className=''>
                                                        <th className='p-2 '>Customer id</th>
                                                        <th className='p-2 '>Customer Name</th>
                                                        <th className='p-2 '>Nobile Number</th>
                                                        <th className='p-2 '>Remarks</th>
                                                        <th className='p-2 '>Updates</th>
                                                        
                                                    </tr>
                                                    {Customerdata.map((datas, intex) => {
                                                        
                                                        return (
                                                            <tr key={intex}>
                                                                <td>{datas.cusid}</td>
                                                                <td>{datas.cusname}</td>
                                                                <td>{datas.mobile}</td>
                                                                <td>{datas.remork}</td>
                                                                <td ><Button ><FaUserEdit className='icon'/></Button> <Button className='bg-danger outline:none' onClick={() => handleDelete(datas.cusid)} ><MdDelete /></Button> </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </Table>
                                        ) : <h1 className='text-center'>NO DATA FOUND</h1>}
                                    </Card.Text>
                                    
                            </Card.Body>
                            </Card>
                          
                            <Customerpopup
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                addCus={addCus}
                            />
                          
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Customer