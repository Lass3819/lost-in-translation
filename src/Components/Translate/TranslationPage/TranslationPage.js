import Header from "../../Header/Header.js"
import ShowTranslations from "../ShowTranslations/ShowTranslations"
import { useSelector } from "react-redux";
import TranslateInputBox from "../TranslateInputBox/TranslateInputBox.js";
import authentication from "../../authentication/authentication.js";
import { NavLink } from "react-router-dom";

const TranslationPage = (props)=>{
    
    const inputData = useSelector((state)=>state.input.value);
    

    return (
        

        <div>
            <Header/>
            <NavLink to="/profile"> <h2 className="route" id="translation-history">Go to profile: click here</h2></NavLink>
            <h2 className="login-header" id="translation-history">Start translating below</h2>
            <TranslateInputBox defaultValue=""/>
            <ShowTranslations inputString={inputData}/>
        </div>
            

    );
}


export default authentication(TranslationPage);