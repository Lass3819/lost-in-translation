import { useSelector } from "react-redux";
import "./ProfileHeader.css";

const ProfileHeader = ()=>{
    const user = useSelector((state)=>state.userName.name);


    return (
        <div className="profile">
            
            {user}
        </div>
    );
}

export default ProfileHeader;