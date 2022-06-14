import React from 'react';
import './style.css'
import {ErrorMessage, useField } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TextField = ({label, ...props}) => {
 //accsessing the field name
   //fixing the shadow

    const [field,meta] = useField(props);
   
   
  return (
    <div className="mb-2">
        {/* accsessing the field name  */}
        <label htmlFor={field.name}>{label}</label>
      <input
    //  fixing the shadow
      className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
      {...field} {...props}
       autoComplete ="off"
      
      />
      <ErrorMessage component="div" name={field.name} className="error"/>
    </div>
  )
}

