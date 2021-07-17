import "./single.css";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlepost/singlePost";

export default function Single() {
    return (
        <div className="single">
           <SinglePost />
            <Sidebar />
        </div>
    )
}
