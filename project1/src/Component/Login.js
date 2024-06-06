// import React, { useState } from 'react';
// import './Login.css';
// import { Link} from 'react-router-dom';


// const Login = () => {
//     const [credentials, setCredentials] = useState({
//         username: "",
//         password: ""
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setCredentials(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };
//     // let navigate = useNavigate ();
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (credentials.username === "admin12" && credentials.password === "Admin@12") {
//             console.log("admin");

//         } else if(credentials.username === "cus12" && credentials.password === "cus@12") {
//             console.log("customer");
//         }
//         else{
//           console.log("not a user");
//         }
//     };

//     return (
//         <div>
//             <div className='container border d-flex justify-content-center align-item-center'>
//                 <div className='card d-flex justify-content-center align-item-center text-center mx-auto w-50 mt-5 card1'>
//                     <div className="cover text-center mt-5 ">
//                         <h1>Login</h1>
//                         <form onSubmit={handleSubmit} className='inputs'>
//                             <input
//                                 type="text"
//                                 placeholder="username"
//                                 name="username"
//                                 value={credentials.username}
//                                 onChange={handleChange}
//                                 className='mt-5'
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="password"
//                                 name="password"
//                                 value={credentials.password}
//                                 onChange={handleChange}
//                                 className='mt-5'
//                             />

//                             <button type="submit" className="login-btn card mx-auto mt-5">Login</button>
//                             <p className='mt-3'>Not an account?</p>
//                             <Link to="/Signup" className='login-btn mx-auto'>Sign-up</Link>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate ,} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import {ErrosHandle} from '../Services/Validator'
// import{emailValidator,passwordValidator} from '../Services/Validator'



const Login = ({ setWho }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('auth');
        const isCustomer = localStorage.getItem('cus');
        
        if (isAuthenticated) {
          navigate('/Dashboard');
        } else if (isCustomer) {
          navigate('/customer');
        }
      }, [navigate]);

  const [data,setdata]=useState(" ")
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

   
//  Handlechange function    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
   useEffect(() => {
  axios.get('http://localhost:3000/posts')
    .then(response => {
        // console.log(response.data);
      setdata(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);
// console.log(data);


    //  Handle submit function...
    const handleSubmit = (event) => {
        event.preventDefault();
        ErrosHandle(credentials)
        // 
        // if (data && data.length > 0) {
        //     data.map((datas) => {
        //         console.log(datas);
        //     });
        // }
       
       
        const user = data.find(user => user.email === credentials.username && user.password === credentials.password);
        if (user) {
            console.log(user);

            
            
           
            setWho({name:user.displayname.toUpperCase(),
                    usertype:user.usertype.toUpperCase()
            });
            
            if(user.usertype==="Admin")
                {
                    localStorage.setItem('auth', user.id);      
            navigate('/Dashboard');
                }
            else if(user.usertype==="Customer")
            {   
                localStorage.setItem('cus', user.id);
                navigate('/customer');   
            }
        }
         else {
            alert("Invalid user")
        }

        // else if (credentials.username === "cus12" && credentials.password === "cus@12") {
        //     let whom = "CUSTOMER"
        //     setWho(whom)
        //     console.log("customer");
        //     navigate('/Dashboard');
        // } 
       
        
    };

    return (

        <div>
            <Header />
            <div className='container  d-flex justify-content-center align-item-center'>
                <div className='card d-flex justify-content-center align-item-center text-center mx-auto w-50 mt-5 card1'>
                    <div className="cover text-center mt-5 ">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit} className='inputs'>
                            <input
                                type="text"
                                placeholder="Email Id"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                className="mt-5"
                            />{
                                !credentials.username ? <p style={{ color: "red", marginRight: "40%" }}>Enter Username</p> : null
                            }
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                className='mt-4'
                            />
                            {
                                !credentials.password ? <p style={{ color: "red", marginRight: "40%" }}>Enter password</p> : null
                            }
                            <button type="submit" className="login-btn  mx-auto mt-5 ">Login</button>
                            <p className='mt-3'>Not an account?</p>
                            <Link to="/Signup" className='login-btn mx-auto mb-3'>Sign-up</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
