
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Routes,Route } from 'react-router-dom';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';


function App() {


  return (
    <>
     <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/register' element={<RegistrationPage/>} />
     </Routes>
    
    </>
  )
}

export default App
