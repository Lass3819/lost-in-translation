import "./LoginInputBox.css"
import { useDispatch, useSelector } from "react-redux";
import { setName, addUserAsync, getUserAsync } from "../../../redux/userNameSlice"
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";


const LoginInputBox = (props)=>{
    const [userName, setUserName] = useState("")
    const {users, loading, error} = useSelector((state)=> state.userName.users)
      
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getUserAsync());
    },[dispatch])



    const handleOnChange = (e)=>{
        setUserName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(setName(userName));
        localStorage.setItem('userName',JSON.stringify(userName),[userName])
        
        if (!loading){
            
            for(let user in users){
                console.log("hej")
                if(user.name===userName){
                    console.log("user already exists")
                    return;
                }
            }
            dispatch(addUserAsync({name: userName}))
        }
        
        
        
        



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