import "./Header.css"

import ProfileHeader from "../ProfileHeader/ProfileHeader";

const Header = ()=>{


    return(
        <div className="login-header">
            <h2 className="title">Lost in Translation</h2>
            <ProfileHeader/>
            <hr className="solid"/>
        </div>
    );
}

export default Header;

