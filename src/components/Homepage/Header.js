import  React,{useRef} from 'react';
import { useDispatch } from 'react-redux';
import './../../styles/HomePage/homestyle.css';
import profile from "./../../assets/profile.png"
import Searchbar from './searchbar';
import { profileAction } from '../../reducers/userReducer';
import {Link} from 'react-router-dom';


export default function Header(){
    const profileimgcontainer = useRef();

    // const state = useSelector(state=>(state));
    const dispatch = useDispatch();
    //function call for open profile menu
    function profileClick(){
        dispatch(profileAction(profileimgcontainer));     
    }
    //header elements
    return(
        <div>
             <header className="headercontainer">
                <h1><Link className="linkstylehome" to="/">NewsApp</Link></h1>
                <Searchbar/>
                <div className="imgcontainer" onClick={profileClick}>
                    <img src={profile} alt="profile" width="40px" height="40px"></img>
                </div>
             </header>
             <div className="profilemenu" ref={profileimgcontainer}>
                <ul>
                    <li>My Profile</li>
                    <Link className="linkstylehome" to="/login"><li>Log In</li></Link>    
                </ul>
             </div>
        </div>
       
    )
}