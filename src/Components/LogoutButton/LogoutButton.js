import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../redux/userNameSlice";

function LogoutButton(){

    const dispatch = useDispatch();
    const currentName = useSelector((state)=>state.userName.value)
    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(setName(""))
        localStorage.setItem('userName',JSON.stringify(""),[""])
        
    }
    
    
    return (
    <>
    {currentName&&<button onClick={handleLogout}>Logout</button>}
    </>);
}

export default LogoutButton;