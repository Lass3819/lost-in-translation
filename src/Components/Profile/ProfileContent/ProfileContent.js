import { useDispatch, useSelector } from "react-redux";
import authentication from "../../authentication/authentication"
import Header from "../../Header/Header";
import "./ProfileContent.css";
import ProfileHistoryFilter from "../ProfileHistoryFilter/ProfileHistoryFilter";
import { NavLink } from "react-router-dom";
import { setTranslations } from "../../../redux/translationSlice";

//profile page
function ProfileContent(){
    const dispatch = useDispatch();
    const trans = useSelector((state) => state.translation.translations)
    function handleClearHistory(e){
        dispatch(setTranslations([]))
        localStorage.setItem('translations',JSON.stringify([]),[])
    }



    return (
        <div>
            <Header/>
            <NavLink to="/translate"> <h2 className="route" id="translation-history">Start translating: click here</h2></NavLink>
            <h2 className="login-header" id="translation-history">Translation history</h2>
            <h3 className="login-header" id="translation-history" onClick={handleClearHistory}>Click here to clear History</h3>
            <div className="container">
            <ProfileHistoryFilter arr={trans}/>

            
            </div>
        </div>
    );
}
export default authentication(ProfileContent);
