import React from 'react';
import logo from '../../../../../public/assets/logo.png';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <img src={logo} alt='logo'/>
      <div>
        <button onClick={()=>{navigate('/register')}} className='white-hover'>Get Projects</button>
        <button className='black-hover'>Onboard Talent</button>
      </div> 
    </div>
  )
}

export default Header