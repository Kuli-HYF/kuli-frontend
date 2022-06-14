import "./SignUp.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import wom3 from "../../assets/wom3.png";
import {Signup} from '../../components/Signupcomponent/Signupcomponent';
const SignUp = () => {

  return (

    <div className="container mt-3 ">
    <div className="row">
     <div className="col-md-5">
      <Signup/>
     </div>

     <div className="col-md-7 my-auto">
   
     <img  className="img-fluid w-50"  src={wom3} alt="" /> 

     </div>

    </div>

   </div>
 
  )
}

export default SignUp;


