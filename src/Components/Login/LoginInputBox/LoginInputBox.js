import "./LoginInputBox.css"
import { useDispatch, useSelector } from "react-redux";
import { setName, setIndex } from "../../../redux/userNameSlice"
import { useEffect, useState } from "react";
import { getUsersAsync, addUserAsync } from "../../../redux/usersSlice";



const LoginInputBox = (props)=>{
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("")
    const {users, loading} = useSelector((state)=> state.users)
      
    
    useEffect(()=>{
        dispatch(getUsersAsync());
    },[dispatch])



    const handleOnChange = (e)=>{
        setUserName(e.target.value)
    }
    const handleSubmit = (e)=>{
        
        e.preventDefault();
        if(!userName){
            return
        }
        dispatch(setName(userName));
        localStorage.setItem('userName',JSON.stringify(userName),[userName])
        
        if (!loading){
            //foolproof way of iterating over the users array
            //even though we would get index directly by iterating over indices.               
            for(let user of users){                           
                if(user.username.name === userName){
                    console.log("user already exists")
                    const i = users.indexOf(user)
                    dispatch(setIndex(i))
                    return;
                }
            }
            dispatch(addUserAsync({name: userName}))
        }
        
        
        
        



    }
    return (
        <div className="input">
            {loading ? <p>loading...</p>:""}
            <form className="input-form" onSubmit={handleSubmit}>
                <input className="input-field" placeholder={props.defaultValue} value={userName} type="text" onChange={handleOnChange}/>
                <button className="input-button" type="submit">Submit</button>
            </form>
                    
                
        </div>
        
    );
}
export default LoginInputBox;