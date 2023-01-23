import Header from "../../Components/Header/Header.js"
import ShowTranslations from "../../Components/ShowTranslations/ShowTranslations"
import { useSelector } from "react-redux";
import TranslateInputBox from "../TranslateInputBox/TranslateInputBox.js";

const TranslationPage = (props)=>{
    
    const inputData = useSelector((state)=>state.input.value);
    

    return (
        

        <div>
            <Header/>
            <TranslateInputBox defaultValue="Hello"/>
            <ShowTranslations inputString={inputData}/>
        </div>
            

    );
}


export default TranslationPage;