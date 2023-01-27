import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInput } from "../../redux/translationInputSlice";
import { setTranslations } from "../../redux/translationSlice";
import { setName, setIndex } from "../../redux/userNameSlice";

function LogoutButton(){

    const dispatch = useDispatch();
    const currentName = useSelector((state)=>state.userName.name)
    const navigate = useNavigate();


    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(setName(""))
        dispatch(setIndex(0))
        dispatch(setTranslations([]))
        dispatch(setInput(""))
        localStorage.setItem('userName',JSON.stringify(""),[""])
        localStorage.setItem('index',JSON.stringify(0),[0])
        navigate("/")
        
    }
    
    
    return (
    <>
    {currentName&&<button onClick={handleLogout}>Logout</button>}
    </>);
}

export default LogoutButton;