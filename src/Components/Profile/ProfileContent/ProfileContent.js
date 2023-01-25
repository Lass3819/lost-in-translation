import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTranslationsAsync } from "../../../redux/translationsSlice";
import Header from "../../Header/Header";
import "./ProfileContent.css";
import ProfileHistoryFilter from "../ProfileHistoryFilter/ProfileHistoryFilter";


function ProfileContent(){

    const dispatch = useDispatch();
    const {translations, loadingTranslations, error} = useSelector((state)=>state.translations);
    const user = useSelector((state)=>state.userName);
     useEffect(()=>{
        dispatch(getTranslationsAsync());
    },[dispatch])



    return (
        <div>
            <Header/>
            <h2 className="login-header" id="translation-history">Translation history</h2>
            <div className="container">
                {loadingTranslations ? <p>loading...</p>:""}
                {error !== null ? <p>error occured</p>: <ProfileHistoryFilter name={user.value} arr={translations} loading={loadingTranslations}/>}
                
            </div>
        </div>
    );
}
export default ProfileContent;
