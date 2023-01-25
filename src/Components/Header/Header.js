import "./Header.css"

import ProfileHeader from "../Profile/ProfileHeader/ProfileHeader";
import LogoutButton from "../LogoutButton/LogoutButton";

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

