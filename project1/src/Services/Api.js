import axios from 'axios';


const Api = (inputs) => {
    let data={displayname:inputs.name,email:inputs.email,password:inputs.password,usertype:inputs.usertype}
     return axios.post('http://localhost:3000/posts',data)     
 }

//  const marks=(datas)=>
//     {
//         let StudentMark={Regnum:datas.regno,Displayname:datas.name,Tamil_mark:datas.tamil,English_mark:datas.english,Maths_mark:datas.maths,Science_mark:datas.science,Social_mark:datas.social}
//         axios.post('http://localhost:3000/marks',StudentMark)
//     }
export default Api
