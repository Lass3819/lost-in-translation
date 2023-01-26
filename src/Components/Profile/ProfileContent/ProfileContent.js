import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTranslationsAsync } from "../../../redux/translationsSlice";
import authentication from "../../authentication/authentication"
import Header from "../../Header/Header";
import "./ProfileContent.css";
import ProfileHistoryFilter from "../ProfileHistoryFilter/ProfileHistoryFilter";
import { NavLink } from "react-router-dom";


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
            <NavLink to="/translate"> <h2 className="route" id="translation-history">Start translating: click here</h2></NavLink>
            <h2 className="login-header" id="translation-history">Translation history</h2>
            <div className="container">
                {loadingTranslations ? <p>loading...</p>:""}
                {error !== null ? <p>error occured</p>: <ProfileHistoryFilter name={user.value} arr={translations} loading={loadingTranslations}/>}
                
            </div>
        </div>
    );
}
export default authentication(ProfileContent);
