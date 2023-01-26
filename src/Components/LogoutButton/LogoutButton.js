import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName } from "../../redux/userNameSlice";

function LogoutButton(){

    const dispatch = useDispatch();
    const currentName = useSelector((state)=>state.userName.name)
    const navigate = useNavigate();


    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(setName(""))
        localStorage.setItem('userName',JSON.stringify(""),[""])
        navigate("/")
        
    }
    
    
    return (
    <>
    {currentName&&<button onClick={handleLogout}>Logout</button>}
    </>);
}

export default LogoutButton;