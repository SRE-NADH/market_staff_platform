import React from 'react';
import Header from './Components/Header/Header';
import successStories from '../../../public/assets/SuccessStories.png';
import tenDaysIcon from '../../../public/assets//Frame.png';
import image from '../../../public/assets//image.png';
import framePercent from '../../../public/assets//FramePercent.png';
import image3 from '../../../public/assets//image3.png';
import './style.css';
import DotCarousel from './Components/DotCarousel/DotCarousel';
import arrowIcon from '../../../public/assets/Vector.png'
import AskQuestions from './Components/AskQuestionsComponent/AskQuestions';
import Footer from './Components/Footer/Footer';

const HomePage = () => {
  return (
      <>
        <Header/>
        <div className='success-stories'>
         <img src={successStories} alt='success-stories'/>
         <p>Every success journey we’ve encountered.</p>
         <div className='success-stories-folows'>
            <div className='image-container'>
             <img className='image-1' src={image} alt='image1'/>
             <img className='image-2' src={framePercent} alt='image2'/>
             <img className='image-3' src={image3} alt='image3'/>

             <div className='ten-days'>
              <div className='icon'><img src={tenDaysIcon} alt="frame logo" width={32} height={32}/></div>
               <div className='tendays-para'>
                <p style={{fontSize:'24px'}} >10 DAYS</p>
                <p  style={{fontSize:'16px'}}  className='light-color'>Staff Deployment</p>
               </div>
               
             </div>
            </div>
           <div className='para'>
             <p>Enhance fortune 50 company’s insights teams research capabilities</p>
             <div className='dot-carousel-container'> <DotCarousel/></div>
             <button className='black-hover'> <p>Explore More</p> <img src={arrowIcon} alt='arrow icon'/> </button>
          </div>
         </div>
        </div>
        <div><AskQuestions/></div>
        <div style={{marginTop:'50px'}}><Footer/></div>
      </>
  )
}

export default HomePage