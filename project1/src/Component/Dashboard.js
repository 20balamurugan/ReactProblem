
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// import marks from '../Services/Api';


const Dashboard = (props) => {
  const navigate = useNavigate()
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [navigate]);
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  const [data, setData] = useState({
    regno: " ",
    name: " ",
    tamil: " ",
    english: " ",
    maths: " ",
    science: " ",
    social: " "
  })


  const HandleInput = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/marks', data)
    event.target.reset();

  }
  const InputHandle = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  const [datas, setDatas] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/marks")
      .then(abc => {
        setDatas(abc.data);
        setvalue(abc.data);

      })
      .catch(error => {
        alert("Error:", error)
      })
  }, []);


  const [value, setvalue] = useState(" ") //sorted
  const InputSort = (e) => {
    e.preventDefault();

    const filteredData = value.filter(user =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase()) || user.regno.includes(e.target.value))

      setDatas(filteredData)

  }

  const DataDelete=(regno)=> 
    {
      const config=window.confirm("do you wand delete")
      if(config)
        {
          
          axios.delete('http://localhost:3000/marks/1')
          .then(response=>{
            alert("delete success",response.data)
            setData(data.filter(user => user.regno !== regno));
          })
        }
    }


  return (
    <div className='text-center'>
      <Navbar name={props.name} usertype={props.usertype} />
    
      <button className=" text-center" onClick={toggleVisibility} style={{ marginTop: "8%" }}>ADD DETAILS</button>
      {visible ? (
        <>
          <form onSubmit={HandleInput} className="register-form" action="" >
            <div className='container col-xl-4 col-xs-12 card mt-5 '>
              <div className='card-body' style={{ display: "flex", justifyContent: "space-between" }}>
                <div className='card-text mx-auto'>
                  <span>
                    <div className='mt-4 ' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3'  >REG NO:</label>
                      <input type="text" name="regno" onChange={InputHandle} disabled={!visible} />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 mx-2'  >NAME:</label>
                      <input type="text" name="name" onChange={InputHandle} disabled={!visible} />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 mx-2'  >TAMIL:</label>
                      <input type="text" name="tamil" onChange={InputHandle} disabled={!visible} />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 mx-2'  >ENGLISH:</label>
                      <input type="text" name="english" onChange={InputHandle} disabled={!visible} />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 '  >MATHS:</label>
                      <input type="text" name="maths" onChange={InputHandle} disabled={!visible} />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3'  >SCIENCE:</label>
                      <input type="text" name="science" onChange={InputHandle} disabled={!visible} />
                    </div>
                  </span>
                  <span>
                    <div className='text-center mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                      <label className='fs-3 '  >SOCIAL SCIENCE:</label>
                      <input type="text" name="social" onChange={InputHandle} disabled={!visible} />
                    </div>
                  </span>
                  <button className=" mt-4" type='submit' name="submit">SUBMIT</button>
                </div>
              </div>
            </div></form>
        </>) :
        <>
          <div style={{ display: "flex", justifyContent: "center" }} className='py-3'>
            <input type='search' className='form-control w-25 ' placeholder='searchItem' onChange={InputSort}  ></input>

          </div>

          <table className='container col-8 mt-5 d-flex justify-content-center'>
            <tbody className="p-2">
              <tr className='  text-center'>
                <th className='border px-4' >Register number</th>
                <th className='border px-4'>Name</th>
                <th className='border px-4'>Tamil</th>
                <th className='border px-4'>English</th>
                <th className='border px-4'>Maths</th>
                <th className='border px-4'>Science</th>
                <th className='border px-4'>Social Science</th>
                <th className='border px-4'>Result</th>

              </tr>
              {datas ? datas.map((data, Index) => {
                const result = data.tamil > 35 && data.english > 35 && data.maths > 35 && data.science > 35 && data.social > 35 ? "PASS" : "FAIL";
                
                return (

                  <tr className=' text-center ' key={Index}>

                    <td className='border'>{data.regno }</td>
                    <td className='border'>{data.name}</td>
                    <td className='border'> {data.tamil}</td>
                    <td className='border'>{data.english}</td>
                    <td className='border'>{data.maths}</td>
                    <td className='border'>{data.science}</td>
                    <td className='border'>{data.social}</td>
                    <td className='border'>{result}</td>
                    
                    <td className='p-2'>
                    <Link to={`/update/${data.regno}`} className='btn btn-info '>update</Link>
                    <button className='btn btn-danger  ' onClick={()=>DataDelete(data.regno)}>Delete</button>
                    </td>
                   
                  </tr>
                )
              }) : null}
            </tbody>
          </table>
        </>
      }
    </div>
  )
}

export default Dashboard