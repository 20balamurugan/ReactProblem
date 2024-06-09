import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Form, InputGroup } from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserPlus } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios';
import { passwordValidator } from '../NewCompounent/Service/Validation';
import 'bootstrap/dist/css/bootstrap.min.css';





const Register = () => {
  const [Input, setInput] = useState({
    name: "", email: " ", password: "", re_Enter: ""
  })

  const [password, setPassword] = useState(" ");
  const [validatepassword, setValidatepassword] = useState(true)

  const InputHandle = (event) => {
    event.preventDefault();
    if (!passwordValidator(Input.password)) {
            setValidatepassword(false)
    }
    else if (Input.password !== Input.re_Enter) {
      setPassword("Password Mismatch")
    }
    else {
      setPassword("password matched");
      axios.post('http://localhost:3000/posts', Input)
        .then(response => {
          console.log(response.data);
          alert("upload successful");
          setInput({name: "", email: "", password: "", re_Enter: ""})
        })
        .catch(error => {
          alert("upload error: " + error);
        });
    }
  };
  const [check,setChech]=useState(false)
  const HandleCheck=(e)=>
    {
      setChech(!check)
    }
  return (
    <>
      <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={9} lg={7} xl={6} >
              <Card className="mx-auto ">
                <Card.Body className="p-3">
                  <h1 className='text-center text-info'>Create your account</h1>
                  <Form onSubmit={InputHandle} className='need-validation'>
                    <Form.Group className="mb-2 was-validated">
                      <InputGroup>
                        <InputGroup.Text>
                          <FaUserPlus />
                        </InputGroup.Text>
                        <Form.Control type="text" name='name' onChange={e => setInput({ ...Input, [e.target.name]: e.target.value })} placeholder="Enter Name" required />
                        <Form.Text className="text-muted invalid-feedback">
                          Enter your Name
                        </Form.Text>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-2 was-validated" controlId="formBasicEmail">
                      <InputGroup>
                        <InputGroup.Text>
                          <MdMarkEmailRead />
                        </InputGroup.Text>
                        <Form.Control type="email" name='email' onChange={e => setInput({ ...Input, [e.target.name]: e.target.value })} placeholder="Enter Email" required />
                        <Form.Text className="text-muted invalid-feedback">
                          Enter your email
                        </Form.Text>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-2  was-validated" controlId="formBasicPassword">
                      <InputGroup>
                        <InputGroup.Text>
                          <RiLockPasswordFill />
                        </InputGroup.Text>
                        <Form.Control type="password" name='password' value={Input.password} onChange={e => setInput({ ...Input, [e.target.name]: e.target.value })} placeholder="Password" required />
                        <Form.Text className="text-muted invalid-feedback">
                          Enter your Password
                        </Form.Text>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-2 was-validated" controlId="formBasicPasswordConfirmation">
                      <InputGroup>
                        <InputGroup.Text>
                          <RiLockPasswordFill />
                        </InputGroup.Text>
                        <Form.Control type="password" name='re_Enter' value={Input.re_Enter} onChange={e => setInput({ ...Input, [e.target.name]: e.target.value })} placeholder="Re-Enter Password" required />
                        <Form.Text className="text-muted invalid-feedback">
                          Re-enter your password
                        </Form.Text>
                        <Form.Text className="text-muted ">

                        </Form.Text>
                      </InputGroup>
                    </Form.Group>
                    <p className={password === "Password Mismatch" ? "text-danger" : "text-success"}>{password}</p>
                    {!validatepassword && <p className='text-danger'>Please Enter Strong Password</p>}

                    <Form.Group className="mb-2" controlId="formBasicCheckbox" onChange={HandleCheck}>
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="text-center">
                    <Button variant="info" className="w-50 text-white"  type="submit" active={!check}>
                        Submit
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Register