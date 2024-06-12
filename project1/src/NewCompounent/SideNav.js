import React, { useState } from 'react';
// import "../Component/Login.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";


const SideNav = () => {
 
    function Logout() {

        localStorage.removeItem("auth")
       
    }
    const[icon,setIcon]=useState(false)
    const change=()=>
        {
            setIcon(!icon)    
        }
    return (
        <div >

            <nav className="navbar bg- fixed-top">

                <div className="container-fluid col-11 mx-auto ">

                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" dropdown">
                        <Link className="nav-link mt-3 " data-bs-toggle="dropdown" aria-expanded="false">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuHGQcoh2XCa6j_kBji17CIrfC0YMdzKaeyH7nVWmLTK91zTcEeisGgAl_YEZnItoioE&usqp=CAU' alt='' style={{ width: "50px", borderRadius: "60%" }} />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end" style={{ marginRight: "20%" }}>
                            <Link to='' className="dropdown-item" >Setting</Link>
                            <Link to='' className="dropdown-item" >Profile</Link>
                            <Link to='/' className="dropdown-item" onClick={() => Logout()}>Logout</Link>


                        </ul>
                    </div>
                    <div className="offcanvas offcanvas-start bg-body-tertiary " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width:"auto"}} onClick={change}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title mt-3 " id="offcanvasNavbarLabel">SOWSEED</h5>
                            <button type="button" className="btn-close mt-2 " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex">
                            <ul className="navbar-nav  fs-4 d-flex ">
                            <li className="nav-item" style={{ display: "inline-flex", alignItems: "center" }}>
                                    <IoHome className='icon' style={{ marginRight: "8px" }} />
                                    <Link to='/home' className="nav-link active" aria-current="page" style={{ marginLeft: "15px" }}>Dashboard</Link>
                                </li>
                                
                                <hr className='text-dark'/>
                                <li className="nav-item" style={{ display: "inline-flex", alignItems: "center" }}>
                                <MdBorderColor className='icon' style={{ marginRight: "8px" }} />
                                    <Link to='/register' className="nav-link active" aria-current="page" style={{ marginLeft: "15px" }}>Order</Link>
                                </li>
                                <li className="nav-item" style={{ display: "inline-flex", alignItems: "center" }}>
                                <MdOutlineMiscellaneousServices className='icon' style={{ marginRight: "8px" }} />
                                    <Link to='/register' className="nav-link active" aria-current="page" style={{ marginLeft: "15px" }}>Services</Link>
                                </li>
                                <li className="nav-item" style={{ display: "inline-flex", alignItems: "center" }}>
                                <FaUserGroup className='icon' style={{ marginRight: "8px" }} />
                                    <Link to='/register' className="nav-link active" aria-current="page" style={{ marginLeft: "15px" }}>Customers</Link>
                                </li>
                                <li className="nav-item" style={{ display: "inline-flex", alignItems: "center" }}>
                                <GrUserWorker className='icon' style={{ marginRight: "8px" }} />
                                    <Link to='/register' className="nav-link active" aria-current="page" style={{ marginLeft: "15px" }}>Employes</Link>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default SideNav;