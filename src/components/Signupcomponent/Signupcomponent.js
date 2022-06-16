import {TextField} from "../Textfield/TextField";
import './style.css';
import {post} from '../../api/post';
import {Formik , Form} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';

import React from 'react'

 export const Signup = () => {
  // create the form using Formik
 // validating the form 
 //get validation values
// make the post request 




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
            .email('email is invalid')
            .max(15, 'Must be 15 characters or less')
            .required('email Required'),
            password: Yup.string()
            .min(6, 'password must be at least 6 characters')
            .required('passoword is Required'),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'password must match' )
            .required('Confirm is Required'),

        }
    )

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

        setTimeout(() => {
           
        //  const postVules = post("kuli-users",values);
        console.log(values);
      
          handleAdd(values);
        }, 1000);

        
        // email: "sdw@yaho.com"
        // firstName: "Muwa"
        // lastName: "Hans Mbua"
        // password: "123456"

    }

        // const data = new FormData();
        // for (let i = 0; i < values.length; i++) {
        //     data.append(values[i]);

        // }
        // data.append('data',JSON.stringify(data));

        // const request = await fetch('https://kuli-strapi.herokuapp.com/api/',{
        //     method: 'POST',
        //     body:data,
      

        // })


    }
    
    
    >
        
        {formik => (

            <div>
             <h1 className ="my-4 font-weight-bold-display-4">Sign Up</h1>
             {console.log(formik)}
             <Form>
             <TextField label ="First Name" name ="firstName" type ="text"/>
             <TextField label ="Last Name" name ="lastName" type ="text"/>
             <TextField label ="Email" name ="email" type ="email"/>
             <TextField label ="Password" name ="password" type ="password"/>
             <TextField label ="Confirm Password" name ="confirmPassword" type ="password"/>
             <button className="btn btn-primary mt-3" type= "submit">Register</button>
                 
                
            </Form>
            </div>
           

            //using form from formick
        )}
    
      
    </Formik>
   
  )
}


