import React from "react";
import './../../styles/Loginpage/loginpage.css';
import loginbackground from './../../assets/loginbackground.jpg';
import {Link} from 'react-router-dom';
import Header from "../Homepage/Header";

export default function Login(){
    return(
        //loginform
        <div>
            <Header/>
        <div className="logincontainer" style={{"backgroundImage":`url(${loginbackground})`,"backgroundRepeat":"no-repeat","backgroundPosition": "center","backgroundSize":"cover"}}>
            <div className="formcontainer">   
                <form className="loginform">
                    <h1>Login</h1>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button>Login</button>
                </form> 
                <div className="container2">
                    <p className="signupbtn"><Link className="linkstyle" to="/signup">Create Account</Link></p>
                    <p className="forgotpasswordlnk">forgot password?</p>
                </div>   
            </div> 
        </div>
        </div>
    )
}