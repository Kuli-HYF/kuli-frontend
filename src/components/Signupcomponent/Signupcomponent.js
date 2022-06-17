import {TextField} from "../Textfield/TextField";
import './style.css';
import {post} from '../../api/post';
import {Formik , Form} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import {Button} from "../../components/button/Button";
import {useEffect,useState,React} from 'react'
import {useNavigate} from "react-router-dom";
import {get} from "../../api/get";



 
export const Signup = () => {
  let navigate = useNavigate();
  
  // create the form using Formik
 // validating the form 
 //get validation values
// make the post request 

const [users, setUsers] = useState([]);
const [errMsg, seterrMsg] = useState("");

const LOGIN_URL = 'kuli-users';

const fetchUsers = async () => {          
  // try{
    const search = LOGIN_URL;
    const response = await get(search);
    const names = response.data;

    setUsers(names);
    // console.log("email: "+email+"password: "+pwd);
    console.log("get results: ", response, names,'userObjects',users);
  
   
  }
   



  //validating the form 
    const validate = Yup.object(
        {
         
            email: Yup.string()
            .email('email is invalid')
         
            .required('email Required'),
            password: Yup.string()
            .min(6, 'password must be at least 6 characters')
            .required('passoword is Required'),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'password must match' )
            .required('Confirm is Required'),

        }
    )

    useEffect( () => {
      fetchUsers();
    },[])
    const handleAdd = async (values) => {
        // function takes 'category' ="" 'value'={}
        // const search = event.target.parentElement.children[0].value;

        


        const body = {
          data: {
            email: values.email,
            firstName:values.firstName,
            lastName: values.lastName,
            password: values.password

          },
        };
        const result = await post("kuli-users", body);
        console.log("add", result);
      };


  return (
    //validation values
    <Formik
    initialValues={{

        firstName : '',
        lastName : '',
        email: '',
        password: '',
        confirmPassword: '',
    }}

    // make the post request 
   
    validationSchema = {validate} 
    onSubmit = {(values) => {
      return new Promise((resolve) => {
         
        setTimeout(() => {
           
          //  const postVules = post("kuli-users",values);
          console.log(values);
               
          users.map((user) => {
                if(user.attributes.email === values.email){
                  console.log("already exist")
                }else{
                  console.log("create new ")
                }


            // user.attributes.email === values.email? seterrMsg("user Already exist"): handleAdd(values)
            // setTimeout(navigate, 500, "/login" );
            
           })
             
  
          }, 1000);
      })
       

        
        // email: "sdw@yaho.com"
        // firstName: "Muwa"
        // lastName: "Hans Mbua"
        // password: "123456"

    }


    }
    
    
    >
        
        {formik => (

            <div>
             <p className={errMsg ? "text-danger" : "offscreen"} aria-live="assertive">{errMsg} </p>
             <h1 className ="my-4 font-weight-bold-display-4">Sign Up</h1>
             {console.log(formik)}
             <Form>
             <TextField label ="First Name" name ="firstName" type ="text"/>
             <TextField label ="Last Name" name ="lastName" type ="text"/>
             <TextField label ="Email" name ="email" type ="email"/>
             <TextField label ="Password" name ="password" type ="password"/>
             <TextField label ="Confirm Password" name ="confirmPassword" type ="password"/>
             {/* <button className="btn btn-primary mt-3" type= "submit">Register</button> */}
          
             {/* <Link to="login" > */}
              
               <Button color="btn btn-primary mt-3" kind="submit" title="Register" />
               
                {/* </Link> */}
                 
                
            </Form>
            </div>
           

            //using form from formick
        )}
    
      
    </Formik>
   
  )
}


