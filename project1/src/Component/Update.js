import React from 'react'
import Header from './Header'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Update = () => {
    const { regno } = useParams();
    const [datas, setDatas] = useState({
        regno: regno,
        name: "",
        tamil: "",
        english: "",
        maths: "",
        science: "",
        social: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/marks?regno=${regno}`)
        .then(response => {
            // console.log(response.data);
          setDatas({
              ...datas,
              name:response.data[0].name, tamil:response.data[0].tamil, english:response.data[0].english,maths:response.data[0].maths,science:response.data[0].science,social:response.data[0].social
            })
            
          })
          .catch(error => {
            console.log("Error:", error);
          });
    }, [regno]); 



    
 
    const navigate=useNavigate()
    const HandleUpdate = (e) => {
      console.log(datas);
        e.preventDefault();
        axios.put(`http://localhost:3000/marks?regno=${regno}`,datas)

          .then(response => {
            console.log(response.data[0]);
            navigate('/Dashboard')
          })
          .catch(error => {
            console.error("Error:", error);
          });
      }
      
    
  return (
    <div>
        <Header/>
        <div className='text center'>
            <h1 style={{display:"flex", justifyContent:"center"}}>UPDATE PAGE</h1>
        </div>
        <form onSubmit={HandleUpdate} className="register-form" action="" >
            <div className='container col-xl-4 col-xs-12 card mt-5 '>
              <div className='card-body' style={{ display: "flex", justifyContent: "space-between" }}>
                <div className='card-text mx-auto'>
                  <span>
                    <div className='mt-4 ' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3'  >REG NO:</label>
                      <input type="text" name="regno" value={datas.regno}  />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 mx-2'  >NAME:</label>
                      <input type="text" name="name" value={datas.name} onChange={(e)=>setDatas({...datas,name:e.target.value})} />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 mx-2'  >TAMIL:</label>
                      <input type="text" name="tamil"  value={datas.tamil} onChange={e=>setDatas({...datas,tamil:e.target.value})}/>
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 mx-2'  >ENGLISH:</label>
                      <input type="text" name="english"  value={datas.english} onChange={e=>setDatas({...datas,english:e.target.value})}/>
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 '  >MATHS:</label>
                      <input type="text" name="maths"  value={datas.maths} onChange={e=>setDatas({...datas,maths:e.target.value})}/>
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3'  >SCIENCE:</label>
                      <input type="text" name="science" value={datas.science} onChange={e=>setDatas({...datas,science:e.target.value})} />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 '  >SOCIAL SCIENCE:</label>
                      <input type="text" name="social" value={datas.social} onChange={e=>setDatas({...datas,social:e.target.value})} />
                    </div>
                  </span>
                  <button className="btn btn-info mt-4" type='submit' name="submit">UPDATE</button>
                </div>
              </div>
            </div></form>
    </div>
   )
}

export default Update