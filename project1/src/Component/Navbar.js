import React from 'react';
import "../Component/Login.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate=useNavigate()
  function Logout() {
 
        localStorage.removeItem("auth")
        navigate('/')
        
    }

    return (
        <div>

            <nav className="navbar bg-info fixed-top">

                <div className="container-fluid col-11 ">

                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='text-center'>
                        <h1>WELCOME TO {props.name} YOU ARE {props.usertype}</h1> 
                    </div>
                    <div className=" dropdown">
                        <Link className="nav-link mt-3 " data-bs-toggle="dropdown" aria-expanded="false">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuHGQcoh2XCa6j_kBji17CIrfC0YMdzKaeyH7nVWmLTK91zTcEeisGgAl_YEZnItoioE&usqp=CAU' alt='' style={{ width: "50px", borderRadius: "60%" }} />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end" style={{ marginRight: "20%" }}>
                            <Link to='' className="dropdown-item" >About</Link>
                            <Link to='' className="dropdown-item" >Profile</Link>
                            <Link to='/' className="dropdown-item" onClick={()=>Logout()}>Logout</Link>


                        </ul>
                    </div>
                    <div className="offcanvas offcanvas-start bg-info " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: "15%" }}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title mt-3 fs-2" id="offcanvasNavbarLabel">SOWSEED</h5>
                            <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav  fs-4">
                                <li className="nav-item ">
                                    <Link to='' className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='' className="nav-link" >Link</Link>
                                </li>

                            </ul>


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
