import React from 'react';
import './style.css';
import WhatsOnYourMind from '../../../../../public/assets/whatsOnYourMind.png';
import Union from '../../../../../public/assets/Union.png';
import PlusIcon from '../../../../../public/assets/PlusIcon.png';
import MinusIcon from '../../../../../public/assets/MinusIcon.png';

const AskQuestions = () => {
  return (
    <div className='ask-questions'>
     <img src={WhatsOnYourMind} alphabetic='logo-text' />
     <div className="ask-questions-container">

     <div className='ask-questions-left'>
     <h1>ASK Questions</h1>
     <img src={Union} alt='union-image' />
     </div>
     <div className='ask-questions-right'>
       <div className='plus-container'><p>Do you offer freelancers?</p><img src={PlusIcon}/></div>
      
       <div className='plus-container'><p>What’s the guarantee that I will be satisfied
        with the hired talent?</p><img src={PlusIcon}/></div>
       
        <div className='minus-container' ><p>Can I hire multiple talents at once?</p><img  src={MinusIcon}/></div>
        <p>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
       
        <div className='plus-container'><p>Why should I not go to an agency directly?</p><img src={PlusIcon}/></div>
    
        <div className='plus-container'><p>Who can help me pick a right skillset
         and duration for me?</p><img src={PlusIcon}/></div>
     </div>
     </div>
    </div>
  )
}

export default AskQuestions