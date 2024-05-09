import React, { useEffect, useState } from 'react';
import tikIcon from "../../../../../public/assets/tik.png";
import SuccessSubmitted from '../../../../../public/assets/Success Submitted.png';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Success = () => {
const navigate = useNavigate();
 const [count,setCount] = useState(5);

    useEffect(()=>{
      let interval=setInterval(()=>{
         setCount((prev)=>{
            const newCount = prev - 1;
            if (newCount<=0) {
              clearInterval(interval);
              navigate('/');
            }
            return newCount;
         });
       
      },1000);

      return ()=>clearInterval(interval);
    },[])

  return (
    <div className='success'>
      <img width={50} src={tikIcon} alt='tik-icon'/>
      <img width={350} src={SuccessSubmitted} alt='success'/>
      <h1>Congratulations</h1>
      <p>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
      <p className='redirect'>Redirecting you to Homepage in <span>{count} Seconds</span></p>
    </div>
  )
}

export default Success