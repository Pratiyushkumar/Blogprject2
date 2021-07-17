import "./topbar.css";
import pictures from "./../../image/avatar.png";

import { Link } from "react-router-dom";


export default function TopBar() {
    const user = false;

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-pinterest"></i>
                <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"> <Link className="link" to="/">HOME</Link> </li>
                    <li className="topListItem"><Link className="link" to="/settings">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <>
                            <img src={pictures} alt="Profile"  className="topImg"/>
                            
                        </>
                    ):(
                        
                       
                        <ul className="topList">
                            <li className="topListItem"> <Link className="link" to="/login">LOGIN</Link>  </li>
                            <li  className="topListItem"> <Link className="link" to="/register">REGISTER</Link> </li>
                        </ul>
                            
                            
                       
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
                
            </div>
        </div>
    )
}
