import React, { useState } from 'react';
import "./style.css";
import logo from '../../../public/assets/logo.png';
import closeIcon from '../../../public/assets/Close.png'
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import Success from './Components/SuccessForm/Success';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
 const [success,setSuccess] = useState(false); // for keeping track of form submission success

 const navigate = useNavigate();

  return (
   <div className='register-page'>
     <div className='register-header'>
      <img src={logo} alt="logo" />
      <div style={{visibility:success?'hidden':'visible'}}  className='close'>
        <img onClick={()=>navigate('/')} src={closeIcon} alt="close-icon" />
      </div>
     </div>
   
   {
    success?<Success/>:<RegistrationForm setSuccess={setSuccess}/>
   }
 

   </div>
  )
}

export default RegistrationPage