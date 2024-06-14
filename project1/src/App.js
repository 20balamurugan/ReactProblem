// import './App.css';
// import Login from './Component/Login';
// import Signup from './Component/Signup';
// import Footer from './Component/Footer';
// import Dashboard from './Component/Dashboard';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { useState } from 'react';


// function App() {

  
//   const [who,setWho] = useState('')
 

//   const route = createBrowserRouter([
//     {
//       path: "/",
//       element: <Login setWho={setWho} />
//     },
//     {
//       path: "/Signup",
//       element: <Signup />
//     },
//     {
//       path: "/Dashboard" ,
//       element:  <Dashboard name={who}  /> 
//     }
    
//   ]);

//   return (
//     <div>
      
//       <RouterProvider router={route}></RouterProvider>
//       <Footer />
     
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Header from './Component/Header';
// import Footer from './Component/Footer';
// import Login from './Component/Login';
// import Signup from './Component/Signup';
// import Dashboard from './Component/Dashboard';
// import { useState } from 'react';
// import Cuspage from './Component/Cuspage';
// import Update from './Component/Update';
// import SideNav from './NewCompounent/SideNav';


// function App() {
//   const [who,setWho] = useState({
//     name:"",
//     usertype:" "
//   })  
//   return (
//     <div>
//     <Router>     
//         {/* <Header /> */}
//         <Routes>
          
//           <Route path="/" element={<Login  setWho={setWho}/>} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/Dashboard" element={<Dashboard  name={who.name} usertype={who.usertype} />} />
//           <Route path='/customer' element={<Cuspage />}/>
//           <Route path='/update/:regno' element={<Update />}/>
//         </Routes>
//         <SideNav/>
//         <Footer />
        
//           </Router>
        
//     </div>
//   );
// }

// export default App;


// new components

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import { useState } from 'react';
import ReactLogin from './NewCompounent/ReactLogin';
import Register from './NewCompounent/Register';
import SideNav from './NewCompounent/SideNav';
import Home from './NewCompounent/Home';
import Newservices from './NewCompounent/Newservices';
import Customer from './NewCompounent/Customer';



function App() {
  const [who, setWho] = useState({
    name: "",
    usertype: ""
  });
  // Mahesh - code
  // Dhana - code

  return (
    
    <div>
    <Router>
      {/* <div className='d-flex'>
        <div className='col-auto'>
        <SideNav/>
        </div>
      </div> */}
      <Routes>      
        <Route path='register' element={<Register />} />
        <Route path='/' element={<ReactLogin />} />    
        <Route path='/home' element={<Home />} />
        <Route path='/sericice' element={<Newservices />} />
        <Route path='/customer' element={<Customer />} />
      </Routes>
      
    </Router>
   
    
    </div>
   
  );
}

export default App;
