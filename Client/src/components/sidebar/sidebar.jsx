import "./sidebar.css";
import aboutme from "./../../image/aboutme.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            // console.log(res.data);
            setCats(res.data)
        };
        getCats();
    })
    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img  src={aboutme} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum totam saepe, 
                    adipisci maiores iure distinctio aspernatur magni,</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sideebarList">
                    {cats.map((c)=>{
                        return (
                            <Link to={`/?cat=${c.name}`} className="link">
                                <li className="sidebarListItem">{c.name}</li> 
                            </Link>
                       
                        )
                    })}
                    
                    
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
