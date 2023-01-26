import logo from '../../../resources/Logo.png';
/* import {useEffect, useState} from "react"
 */import "./LoginPage.css"
import Header from "../../Header/Header.js"
import InputBox from '../LoginInputBox/LoginInputBox';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const LoginPage = props =>{
    let user = useSelector((state)=>state.userName.name)
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(user){
            navigate("/profile")
        }
    },[user,navigate])


    return (
        <div className="entire-page">
            <Header/>
            <div className="images-and-words">
                <div className="images">
                   
                    <img className="image" src={logo} alt=""/>
                </div>
                <div className="login-title">
                    <h2>Lost in Translation</h2>
                    <h3>Get started</h3>
                </div>
                    
            </div>
            
            <InputBox defaultValue="What's your name?"/>
        </div>
    )
}

export default LoginPage;