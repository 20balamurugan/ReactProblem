// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { useNavigate } from 'react-router-dom';

// const pages = ['Products', 'Pricing',];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Dashboard(props) {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         event.preventDefault();
//         // setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         event.preventDefault();
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = (event) => {
//         event.preventDefault();
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = (event) => {
//         event.preventDefault();
//         setAnchorElUser(null);
//     };
//     const navigate = useNavigate()
//     const logouts = () => {

//         navigate('/');
//     }

//     return (
//         <div>

//             <AppBar position="static">
//                 <Container maxWidth="xxl">
//                     <Toolbar disableGutters>
//                         {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             component="a"
//                             // href="#app-bar-with-responsive-menu"
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'none', md: 'flex' },
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.2rem',
//                                 color: 'inherit',
//                                 textDecoration: 'none',
//                                 fontSize: '40px'
//                             }}
//                         >
//                             Sowseed
//                         </Typography>

//                         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 color="inherit"
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorElNav}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 open={Boolean(anchorElNav)}
//                                 onClose={handleCloseNavMenu}
//                                 sx={{
//                                     display: { xs: 'block', md: 'none' },
//                                 }}
//                             >
//                                 {pages.map((page) => (
//                                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                         <Typography textAlign="center">{page}</Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>
//                         <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//                         <Typography
//                             variant="h5"
//                             noWrap
//                             component="a"
//                             href="#app-bar-with-responsive-menu"
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'flex', md: 'none' },
//                                 flexGrow: 1,
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: 'inherit',
//                                 textDecoration: 'none',
//                             }}
//                         >
//                             LOGO
//                         </Typography>
//                         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                             {pages.map((page) => (
//                                 <Button
//                                     key={page}
//                                     onClick={handleCloseNavMenu}
//                                     sx={{ my: 2, color: 'white', display: 'block' }}
//                                 >
//                                     {page}
//                                 </Button>
//                             ))}
//                         </Box>

//                         <Box sx={{ flexGrow: 0 }}>
//                             <Tooltip title="Open settings">
//                                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                                 </IconButton>
//                             </Tooltip>
//                             <Menu
//                                 sx={{ mt: '45px' }}
//                                 id="menu-appbar"
//                                 anchorEl={anchorElUser}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={Boolean(anchorElUser)}
//                                 onClose={handleCloseUserMenu}
//                             >
//                                 {settings.slice(0, 2).map((setting) => (
//                                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                         <Typography textAlign="center">{setting}</Typography>
//                                     </MenuItem>
//                                 ))}

//                                 <MenuItem key={settings[settings.length - 1]} onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center" onClick={logouts}>{settings[settings.length - 1]}</Typography>
//                                 </MenuItem>



//                             </Menu>
//                         </Box>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//              <h1>wELCOME T0 {props.name}</h1>                       
//         </div>
//     );
// };

// export default Dashboard



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
              <tr className='border  text-center'>
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

                  <tr className='border text-center ' key={Index}>

                    <td className='border'>{data.regno }</td>
                    <td className='border'>{data.name}</td>
                    <td className='border'> {data.tamil}</td>
                    <td className='border'>{data.english}</td>
                    <td className='border'>{data.maths}</td>
                    <td className='border'>{data.science}</td>
                    <td className='border'>{data.social}</td>
                    <td className='border'>{result}</td>
                    <div className>
                    <Link to={`/update/${data.regno}`} className='btn btn-info '>update</Link>
                    <button className='btn btn-danger '>Delete</button>
                    </div>
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