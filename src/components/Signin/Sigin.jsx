import React from 'react'
import {get} from '../../api/get';
import {Formik , Form} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import {TextField} from "../Textfield/TextField";
import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from "./context/AuthProvider";
import axios from '../../api/axios';
 
const LOGIN_URL = '/kuli-users';


const Signin = () => {
/**
 * when we successfully authenticat when we loginin 
 * we will set the new AuthSate and store it in the global context
 * 
 */
const{setAuth} = useContext(AuthContext);


  const emailRef = useRef();
  const errRef = useRef();

  const[email , setEmail] = useState('');
  const[pwd, setPwd] = useState('');
  const[errMsg, setErrMsg] = useState('');
  const[success, setSuccess] = useState(false);
     
  //set forcus on the first time the component loads
 useEffect( () => {
    //  emailRef.current.focus();
 }, []

 )
// when user changes the use states or password 
 useEffect( () => {
  errRef.current.focus();
}, [email,pwd]

)
 

    //validating the form 
    const validate = Yup.object(
      {
          // firstName: Yup.string()
          // .max(15, 'Must be 15 characters or less')
          // .required('Required'),
          // lastName: Yup.string()
          // .max(20, 'Must be 20 characters or less')
          // .required('Required'),

          email: Yup.string()
          .email('email is invalid'),
      
          password: Yup.string()
          .required('passoword is Required'),

      }
  )

  //get data from database
  const handleGet = async () => {
            
  try{

    const search = LOGIN_URL;
    const response = await get(search);
    console.log("get results: ", response);
    setAuth({email,pwd});

  setEmail('');
  setPwd('');
  setSuccess(true);

  }catch(err){

    if(!err?.response){
      setErrMsg('No server Response');
    }else if(err.response?.status === 400){
      setErrMsg('Missing email or password');
    }else if(err.response?.status === 401){
      setErrMsg('Unauthorized !');
    }else{
  
      setErrMsg('Login failed');
    }
  
    errRef.current.focus();// setting the error so the screen can read it 
  

  }

   
  };



  

  

  return (

   





  //validation values
  <Formik

  
  initialValues={{

     
      email: '',
      password: '',
     
  }}

  // make the post request 

  validationSchema = {validate} 
  onSubmit = {
    

    (values) => {

      setTimeout(() => {
         
      //  const postVules = post("kuli-users",values);
      
     handleGet(values);
    
       
  }, 1000)
}
  }

      

      
      // email: "sdw@yaho.com"
      // firstName: "Muwa"
      // lastName: "Hans Mbua"
      // password: "123456"

  

      // const data = new FormData();
      // for (let i = 0; i < values.length; i++) {
      //     data.append(values[i]);

      // }
      // data.append('data',JSON.stringify(data));

      // const request = await fetch('https://kuli-strapi.herokuapp.com/api/',{
      //     method: 'POST',
      //     body:data,
    

      // })


     
  
  
  >




      {
        
      
      formik => (

        
        

    
          <div>
           
           {success ? (

            <section>
                 <h1>You are logged in!</h1>
                    <br />
                    <p>

                  <a href="#">Go To Home </a>
                 </p>
             </section>
         ) : (

               <>



          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg} </p>
           <h1 className ="my-4 font-weight-bold-display-4">Sign in</h1>
           {console.log(formik)}
           <Form>
           <TextField
            label ="Email"
            name ="email" 
            type ="email"
            // value = {email}
            // onChange = {(e) => setEmail(e.target.value)}
             />
           <TextField
            label="Password"
             name ="password" 
             type ="password"
            //  onChange = {(e) => setPwd(e.target.value)} 
            //  value = {pwd}
             
             />
           <button className="btn btn-primary mt-3" type= "submit">login</button>
               
          </Form>

          <p>
            Need an Account?<br/>

            <span className="line">
              {/**put router link here  */}

              <a href="#">Sign Up</a>
            </span>



          </p>

              </>

)
    }




          </div>
         

          //using form from formick
      )}
  
    
  </Formik>




   
  )
}

export default Signin
