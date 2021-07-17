import "./home.css";
import Header from '../../components/header/header';
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/posts";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    // console.log(location);

    useEffect(() => {
        const fetchPosts = async ()=>{
          const res = await axios.get("/posts"+ search)
          setPosts(res.data)
          console.log(res);
        }
        fetchPosts();
    }, [search])  
    return (
        <>
        <Header />
        <div className="home">
            <Posts  posts = {posts}/>
            <Sidebar />
            
        </div>
        </>
    )
}
