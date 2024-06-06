import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Cuspage = () => {
  const [datas, setDatas] = useState("");
  const [value,setvalue]=useState(" ") //sorted



  const navigate = useNavigate()
  function Logout() {

    localStorage.removeItem("cus")
    navigate('/')

  }

  useEffect(() => {
    axios.get("http://localhost:3000/marks")
      .then(abc => {
        setDatas(abc.data); 
        setvalue(abc.data)
      })
      .catch(error => {
        alert("Error:", error)
      })
  }, []);

  const InputHandle = (e) => {
    e.preventDefault();
    
    const filteredData = value.filter(user =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase()) || user.regno.includes(e.target.value))
     
      setDatas(filteredData)
    
  }
 

 

  return (
    <>
    <div className='row bg-info'>
      <div className='col-1 text-center'>
      <div className=" dropdown  ">
        <Link className="nav-link mt-3 " data-bs-toggle="dropdown" aria-expanded="false">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuHGQcoh2XCa6j_kBji17CIrfC0YMdzKaeyH7nVWmLTK91zTcEeisGgAl_YEZnItoioE&usqp=CAU' alt='' style={{ width: "50px", borderRadius: "60%" }} />
        </Link>
        <ul className="dropdown-menu dropdown-menu-start" style={{ marginRight: "20%" }}>
          <Link to='' className="dropdown-item" >About</Link>
          <Link to='' className="dropdown-item" >Profile</Link>
          <Link to='/' className="dropdown-item" onClick={() => Logout()}>Logout</Link>
         

        </ul>
      </div>
      </div>
      </div>
     
       
        <div style={{display:"flex",justifyContent:"center"}} className='py-3'>
        <input type='search' className='form-control w-25 ' placeholder='searchItem' onChange={InputHandle}  ></input>
        
        </div>
       
    


      <div className="container">
        <h1 className="text-center">GET DATA</h1>
        <div className="row justify-content-center">
          <table className='col-8'>
            <tbody className="p-3">
            <tr className='border p-5 text-center'>
                      <th className='border px-4' >Register number</th>
                      <th className='border px-4'>Name</th>
                      <th className='border px-4'>Tamil</th>
                      <th className='border px-4'>English</th>
                      <th className='border px-4'>Maths</th>
                      <th className='border px-4'>Science</th>
                      <th className='border px-4'>Social Science</th>
                      <th className='border px-4'>Result</th>
                      
                    </tr>

         
                {datas ? datas.map((data,Index) =>{ 
                  const result = data.tamil > 35 && data.english > 35 && data.maths>35 && data.science>35 && data.social>35 ? "PASS" : "FAIL";
                     
                  return(
                    
                    <tr className='border text-center' key={Index}>
                      
                        <td className='border'>{data.regno}</td>
                        <td className='border'>{data.name}</td>
                        <td className='border'> {data.tamil}</td>
                        <td className='border'>{data.english}</td>
                        <td className='border'>{data.maths}</td>
                        <td className='border'>{data.science}</td>
                        <td className='border'>{data.social}</td>
                        <td className='border'>{result}</td>

                    </tr>

                    
                    
                  )
                }):null}
            </tbody>
          </table>

        </div>
      </div>
    
    </>
  );
}

export default Cuspage