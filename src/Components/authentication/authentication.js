import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//hoc component to ensure that user can only see login screen if not logged in.
const authentication = Component => props =>{
    let user = useSelector((state) => state.userName.name);
     
    
    if (user){
        return <Component {...props}/>
    }else { 
        return <Navigate to="/"/>
    }
}

export default authentication;