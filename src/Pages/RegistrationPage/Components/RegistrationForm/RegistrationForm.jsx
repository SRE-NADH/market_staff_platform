import React, { useEffect } from 'react';
import './style.css';
import registrationForm from '../../../../../public/assets/Registration Form.png';
import { useState } from 'react';
import error from '../../../../../public/assets/error.png';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = ({setSuccess}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [disable,setDisable] = useState(true);
    const [emailError,setEmailError] = useState(false);
    const navigate = useNavigate();
  
    useEffect(()=>{
        //make disable state true if both fields are there
        if(name && email){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
    });

    function validateEmail(email){
        const tmp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return tmp.test(email);
    }

    function handleSubmit(){
       if(validateEmail(email)){
         setSuccess(true);
         setEmailError(false);
       }
       else{
        setEmailError(true);
       }
    }

  return (
    <div className='register-form'>
     <img src={registrationForm} alt="registration form" />
     <h1>Start Your Success Journey here!</h1>
      <form>
        <input onChange={(e)=>setName(e.target.value)} className={disable?'disable':''} type='text' placeholder='Name'/>
        <div className='email-input'>
            <input onChange={(e)=>setEmail(e.target.value)} className={disable?'disable':''} type='text' placeholder='Email'/>
            <div style={{visibility:emailError?'visible':'hidden'}}><img src={error} alt="error" /> <p>Enter a valid email address</p></div>
            </div>
        <div onClick={handleSubmit} className={disable?'disable-button':'black-hover'}>Submit</div>
      </form>
    </div>
  )
}

export default RegistrationForm;