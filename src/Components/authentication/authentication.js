import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const authentication = Component => props =>{
    let user = useSelector((state) => state.userName.name);
     
    
    if (user){
        return <Component {...props}/>
    }else { 
        return <Navigate to="/"/>
    }
}

export default authentication;