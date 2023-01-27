import "./Header.css"

import ProfileHeader from "../Profile/ProfileHeader/ProfileHeader";
import LogoutButton from "../LogoutButton/LogoutButton";
//this component displays the header for all pages
const Header = ()=>{


    return(
        <div className="login-header">
            <h2 className="title">Lost in Translation</h2>
            <ProfileHeader/>
            <LogoutButton/>
            <hr className="solid"/>
        </div>
    );
}

export default Header;

