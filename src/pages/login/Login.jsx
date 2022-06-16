import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from '../../components/Signin/Sigin';
import wom1 from "../../assets/wom1.png";

const Login = () => {

        
  return (
    <div className="container mt-3 ">
    <div className="row">
     <div className="col-md-5">
      <Signin />
     </div>

     <div className="col-md-7 my-auto">
   
   <img  className="img-fluid w-50"  src={wom1} alt="" /> 

   </div>

    </div>

   </div>





  )
}



export default Login

