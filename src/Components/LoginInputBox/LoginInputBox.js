import "./LoginInputBox.css"
import {useDispatch} from "react-redux";
import { setName } from "../../redux/userNameSlice";
import { useState } from "react";
import { setInput } from "../../redux/translationInputSlice";

const LoginInputBox = (props)=>{
    const [userName, setUserName] = useState("")
    
    const dispatch = useDispatch();
    


    const handleOnChange = (e)=>{
        setUserName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(setName(userName));
        dispatch(setInput(userName));
        localStorage.setItem('userName',JSON.stringify(userName),[userName])


    }
    return (
        <div className="input">
            <form className="input-form" onSubmit={handleSubmit}>
                <input className="input-field" placeholder={props.defaultValue} value={userName} type="text" onChange={handleOnChange}/>
                <button className="input-button" type="submit">Submit</button>
            </form>
                    
                
        </div>
    );
}
export default LoginInputBox;