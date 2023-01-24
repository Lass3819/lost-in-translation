import './App.css';
//import getTranslations from "../../Api/Api.js";
//import authentication from '../authentication/authentication.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TranslationPage from '../TranslationPage/TranslationPage';
import LoginPage from '../LoginPage/LoginPage';
import Profile from '../Profile/Profile';
//import { useSelector } from 'react-redux';
//import { useEffect } from 'react';

function App() {
  //const user = useSelector((state)=>state.userName.value);



  return (
    <BrowserRouter>
      <div className="App">
        

        <Routes>
          <Route path="/" element={<TranslationPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/translate" element={<TranslationPage/>}/>
          <Route path="/profile" element={<Profile/>}/>
         

        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
