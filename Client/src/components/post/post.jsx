import "./post.css";
// import postimg from "./../../image/postImg.jpg";
import {Link} from "react-router-dom";

export default function Post({post}) {
    return (
        <div className="post">
            {post.photo && (
            <img className="postImg" src={post.photo} alt="" />
            )}
            
            <div className="postInfo">
                <div className="postCats">{
                    post.categories.map((c)=>{
                       return  <span className="postCat">{c.name}</span>
                    })
                    }
                    {/* <span className="postCat">Life</span> */}
                </div>

                <Link to={`/post/${post._id}`} className="link"> 
                    <span className="postTitle">
                        {post.title}
                    </span> 
                </Link>
                <hr />
                <span className="postDate"> {new Date(post.createdAt).toDateString()} </span>
            </div>
            <p className="postDesc">
                {post.description}
            </p>
        </div>
    )
}
