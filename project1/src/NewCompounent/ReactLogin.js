import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import { FaUser } from 'react-icons/fa';
import { TbPasswordMobilePhone } from 'react-icons/tb';

const ReactLogin = () => {
  const [data, setData] = useState({
    name: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((res) => {
        setApi(res.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = api.find(u => u.name === data.name && u.password === data.password);
    if (user) {
      setError('Success');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
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
                  <CButton color="primary" onClick={handleLogin} className="px-4">
                    Login
                  </CButton>
                  <Link to="/forgot-password" className="text-right mt-2 d-block">
                    Forgot password?
                  </Link>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard className="text-white bg-primary py-5" style={{ width: '100%' }}>
              <CCardBody className="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Welcome to the Login Page. If you are already registered, please sign in. If not, please register.
                  </p>
                  <Link to="/register">
                    <CButton color="primary" className="mt-3" active tabIndex={-1}>
                      Register Now!
                    </CButton>
                  </Link>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ReactLogin;
