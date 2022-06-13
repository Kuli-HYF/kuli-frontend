import {TextField} from "../Textfield/TextField";
import './style.css';
import {post} from '../../api/post';
import {Formik , Form} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';

import React from 'react'

 export const Signup = () => {






  //validating the form 
    const validate = Yup.object(
        {
            firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
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




  return (
    <Formik
    initialValues={{

        firstName : '',
        lastName : '',
        email: '',
        password: '',
        confirmPassword: '',
    }}

    //here we make the post request 

    validationSchema = {validate} 
    onSubmit = {(values) => {

        setTimeout(() => {

         const postVules = post("auth/local/register",values);


        }, 1000);



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


