import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TranslationPage from "../Translate/TranslationPage/TranslationPage";
import LoginPage from '../Login/LoginPage/LoginPage';
import ProfileContent from '../Profile/ProfileContent/ProfileContent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        

        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/translate" element={<TranslationPage/>}/>
          <Route path="/profile" element={<ProfileContent/>}/>
         

        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
