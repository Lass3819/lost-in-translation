import Header from "../../Components/Header/Header.js"
import InputBox from "../InputBox/InputBox";
import ShowTranslations from "../../Components/ShowTranslations/ShowTranslations"
const TranslationPage = (props)=>{
    return (
        <div>
            <Header/>
            <InputBox defaultValue="Hello"/>
            <ShowTranslations word="hej"/>
        </div>
            

    );
}


export default TranslationPage;