import logo from '../../resources/Logo.png';
import {useEffect, useState} from "react"
import "./LoginPage.css"


const LoginPage = props =>{
    const [userName, setUserName] = useState("")
    useEffect(()=>{
        localStorage.setItem('userName',JSON.stringify(userName),[userName])
    })

    const handleOnChange = (e)=>{
        setUserName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        //alert("Welcome "+userName);
        localStorage.setItem('userName',JSON.stringify(userName),[userName])
        const test = JSON.parse(localStorage.getItem("userName"));
        console.log(test);
    }
    
    return (
        <div className="entire-page">
            <div className="login-header">
            <h3>Lost in Translation</h3>
            </div>
            <div className="login-title">
                <img src={logo} alt=""/>
                <h2>Lost in Translation</h2>
                <h3>Get started</h3>
            </div>
            
            <div className="input">
                <form className="input-form" onSubmit={handleSubmit}>
                    <input className="input-field" placeholder="What's your name?" value={userName} type="text" onChange={handleOnChange}/>
                    <button className="input-button" type="submit"></button>
                </form>
                    
                
            </div>

        </div>
    )
}

export default LoginPage;