import LoginPage from "../LoginPage/LoginPage.js";

const Authentication = Component => props =>{
    let session = JSON.parse(localStorage.getItem("userName"));
     
    
    if (session){
        return <Component {...props}/>
    }else { 
        return <LoginPage/>
    }
}

export default Authentication;