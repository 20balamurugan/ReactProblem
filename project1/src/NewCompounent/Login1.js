import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import { TbPasswordMobilePhone } from "react-icons/tb";
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useState } from 'react';

const Login1 = () => {

  const [data, setData] = useState({
    name: '',
    password: ''
  })
  const [error, setError] = useState()
  const [api, setApi] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => console.table(res.data))
  })

  const handleInputValue = (e) => {
    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('success');
    console.log(data);
    const user = api.find(u => u.username === data.name && u.email === data.email);
    if (user && user.username && user.email) {
      setError('Success');
    } else {
      setError('Check it');
    }

    if (!Array.isArray(api) || api.length === 0) {
      setError('No users found');
      return;
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    {error && (
                      <p style={{ color: error === 'Success' ? 'green' : 'red', fontSize: '20px' }}>{error}</p>
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FaUser />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" value={data.name} name='name' onChange={handleInputValue} autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        {/* <CIcon icon={cilLockLocked} /> */}
                        <TbPasswordMobilePhone />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={data.password}
                        name='password'
                        onChange={handleInputValue}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" onClick={handleLogin} className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. */}
                      Welcome to Login Page , if You are already Register means Login-In or Not means Register
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login;






// Sincere@april.biz
// Bret