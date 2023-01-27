import "./LoginInputBox.css"
import { useDispatch, useSelector } from "react-redux";
import { setName, setIndex } from "../../../redux/userNameSlice"
import { useEffect, useState } from "react";
import { getUsersAsync, addUserAsync } from "../../../redux/usersSlice";
import { setTranslations } from "../../../redux/translationSlice";


//component for login text box and button. Once the user presses submit, the handleSubmit function will check if there are currently
//any users in the api with that same name. if there is, it will loads the translations from server and set so that future translations will be put in the same place. 
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
            //foolproof way of iterating over the users  incase there could be a missing entry in the api.
            //even though we would get index directly by iterating over indices.               
            
            for(let user of users){
                     
                                 
                if(user.username.name === userName){
                    console.log(user.translations)
                    dispatch(setTranslations(user.translations))
                    const i = users.indexOf(user)
                    localStorage.setItem('index',JSON.stringify(i),[i])
                    localStorage.setItem('translations',JSON.stringify(user.translations),[user.translations])
                    dispatch(setIndex(i))
                    return;
                }
            }
            //incase there are no users in api with that name it makes a new one in api.
            dispatch(setIndex(users.length))
            localStorage.setItem('index',JSON.stringify(users.length),[users.length])
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