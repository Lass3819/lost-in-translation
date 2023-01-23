import './App.css';
//import getTranslations from "../../Api/Api.js";
import authentication from '../authentication/authentication.js';
import { BrowserRouter, Routes, Route,NavLink } from 'react-router-dom';
import TranslationPage from '../TranslationPage/TranslationPage';
import Profile from '../Profile/Profile';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <TranslationPage/>
        
        <Routes>
          
          <Route path="translate" element={<TranslationPage/>}/>
          <Route path="profile" element={<Profile/>}/>
         

        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default authentication(App);
