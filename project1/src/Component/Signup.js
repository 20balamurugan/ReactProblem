import React, { useState } from 'react';
import "./Signup.css";
import { Link, } from 'react-router-dom';
import Header from './Header';
import Api from '../Services/Api';
import { emailValidator, } from '../Services/Validator'
import { Storagedata } from '../Services/Storage';
// import {Userdata} from '../Services/Userdata';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  
    const initialStateErrors = {
        email: { required: false },
        password: { required: false },
        name: { required: false },
        custom_error: null,
       
    }
    const [validate, setValidate] = useState('')
    const [errors, setErors] = useState(initialStateErrors)
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        usertype:"Admin"
    });
    const navigate = useNavigate();
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        let errors = initialStateErrors;
        let hasError = false;
        if (inputs.name === "") {
            errors.name.required = true;
            hasError = true;
        }

        if (!emailValidator(inputs.email))

            return setValidate('please Enter valid Email')

        if (inputs.email === "") {
            errors.email.required = true;
            hasError = true;
        }
        if (inputs.password === "") {
            errors.password.required = true;
            hasError = true;
        }
        setErors(errors);
        // setValidate("valid user")
        setInputs({ name: "", email: "", password: "" });

        if (!hasError) {
            setLoading(true)
            Api(inputs)
                .then(res => {
                    Storagedata(res.data.id)
                    navigate('/Dashboard')
                })
                .catch(error => {
                    alert("Error:", error);

                })
                .finally(() => {
                    setLoading(false)

                })

        }


    }


    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
        

    }



    return (
        <div>
            <Header />
            <section className=" register-block sign mt-5">
                <div className="container">
                    <div className="row">
                        
                        <div className="card  register-sec ">
                            <h2 className="text-center">Register Now</h2>
                            <form onSubmit={handleSubmit} className="register-form" action="" >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-uppercase ">Name</label>

                                    <input type="text" className="form-control" onChange={handleInput} name="name" id="1" />
                                    {errors.name.required ?
                                        (<span className="text-danger" >
                                            Name is required.
                                        </span>) : null
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>

                                    <input type="text" className="form-control" onChange={handleInput} name="email" id="2" />
                                    {errors.email.required ?
                                        (<span className="text-danger" >
                                            Email is required.
                                        </span>) : null
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                    <input className="form-control" type="password" onChange={handleInput} name="password" id="3" />
                                    {errors.password.required ?
                                        (<span className="text-danger" >
                                            Password is required.
                                        </span>) : null
                                    }
                                </div>

                                {validate.length > 0 && <div style={{ color: "red" }}>{validate}</div>}
                                <span>
                                <label htmlFor="select" className="text-uppercase mt-3 px-2">UserType</label>
                                <select name='usertype' onChange={handleInput} style={{borderRadius:"10px",}}>
                                    <option value="Admin">Admin</option>
                                    <option value="Customer">Customer</option>
                                </select>
                                </span>

                                <div className="form-group">

                                    <span className="text-danger" >
                                        {errors.custom_error ?
                                            (<p>{errors.custom_error}</p>)
                                            : null
                                        }
                                    </span>
                                    {loading ?
                                        (<div className="text-center">
                                            <div className="spinner-border text-primary mt-5 " role="status">
                                                <span className="sr-only"></span>
                                            </div>
                                        </div>) : null
                                    }

                                    <input type="submit" className="btn btn-login float-right" disabled={loading} value="Register" />
                                </div>
                                <div className="clearfix"></div>
                                <div className="form-group">
                                    Already have account ? Please <Link to="/">Login</Link>
                                </div>


                            </form>


                        </div>

                    </div>


                </div>
            </section>
        </div>

    )
}

export default Signup



