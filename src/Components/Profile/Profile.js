import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTranslationsAsync } from "../../redux/translationsSlice";
import Header from "../Header/Header";
import "./Profile.css";

function Profile(){
    const dispatch = useDispatch();
    const translations = useSelector((state)=>state.translations);

    useEffect(()=>{
        dispatch(getTranslationsAsync());
    },[dispatch]
    )

    return (
        <>
        <Header/>
        <h2 className="login-header" id="translation-history">Translation history</h2>
        <div className="container">
            <p></p>
        </div>
        </>
    );
}
export default Profile;