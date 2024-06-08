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


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Component/Header';
import Footer from './Component/Footer';
import Login1 from './NewComponent/Login1';
// import Signup from './Component/Signup';
// import Dashboard from './Component/Dashboard';
import { useState } from 'react';
// import Cuspage from './Component/Cuspage';
// import Update from './Component/Update';
// import Navbar from './NewCompounent/Navbar';


function App() {
  const [who,setWho] = useState({
    name:"",
    usertype:" "
  })  
  return (
    <div>
    {/* <Router>     
        
        <Routes>
          
          <Route path="/" element={<Login  setWho={setWho}/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard  name={who.name} usertype={who.usertype} />} />
          <Route path='/customer' element={<Cuspage />}/>
          <Route path='/update/:regno' element={<Update />}/>
        </Routes>
        <Footer />
        
          </Router>
         */}

         <Login1 />
    </div>
  );
}

export default App;


