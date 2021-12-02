import React,{useRef} from "react";
import './../../styles/Loginpage/loginpage.css';
import loginbackground from './../../assets/loginbackground.jpg';
import Header from "../Homepage/Header";
import {userDB} from './../../reducers/userReducer';
import { useDispatch, useSelector } from "react-redux";

export default function Signup(){
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    
    const username = useRef();
    const email = useRef();
    const password = useRef();

    console.log(username.current);
    const createAccount = (e)=>{
        e.preventDefault();
        if(username.current.value === "" || email.current.value===""||password.current.value===""){
            alert("fill all fields");
        }
        else{
            console.log("Account Created");
            dispatch(userDB(username.current.value,email.current.value,password.current.value));
            console.log(state);
        }
    }
    return(
        <div>
            <Header/>
        <div className="logincontainer" style={{"backgroundImage":`url(${loginbackground})`,"backgroundRepeat":"no-repeat","backgroundPosition": "center","backgroundSize":"cover"}}>
            <div className="formcontainer">   
                <form className="loginform">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Username" ref={username} required></input>
                    <input type="email" placeholder="Email" ref={email} required></input>
                    <input type="password" placeholder="Password" ref={password} required></input>
                    <button onClick = {createAccount}>Create Account</button>
                </form>    
            </div>
        </div>
        </div>
    )
}