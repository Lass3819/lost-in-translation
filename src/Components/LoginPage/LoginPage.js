import logo from '../../resources/Logo.png';
import {useEffect, useState} from "react"
import "./LoginPage.css"
import Header from "../Header/Header.js"


const LoginPage = props =>{
    const [userName, setUserName] = useState("")
    useEffect(()=>{
        localStorage.setItem('userName',JSON.stringify(userName),[userName])
    })

    const handleOnChange = (e)=>{
        setUserName(e.target.value)
    }
    const handleSubmit = (e)=>{
        //alert("Welcome "+userName);
        localStorage.setItem('userName',JSON.stringify(userName),[userName])
        const test = JSON.parse(localStorage.getItem("userName"));
        console.log(test);
    }
    
    return (
        <div className="entire-page">
            <Header/>
            <div className="images-and-words">
                <div className="images">
                    {/* <img className="image" src={splash} alt=""/> */}
                    <img className="image" src={logo} alt=""/>
                </div>
                <div className="login-title">
                    <h2>Lost in Translation</h2>
                    <h3>Get started</h3>
                </div>
                    
            </div>
            
            <div className="input">
                <form className="input-form" onSubmit={handleSubmit}>
                    <input className="input-field" placeholder="What's your name?" value={userName} type="text" onChange={handleOnChange}/>
                    <button className="input-button" type="submit">submit</button>
                </form>
                    
                
            </div>

        </div>
    )
}

export default LoginPage;