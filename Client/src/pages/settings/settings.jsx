import "./settings.css";

import profilePic from "./../../image/postImg.jpg";

import Sidebar from "./../../components/sidebar/sidebar"


export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">

                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>

                <form  className="settingsForm">

                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={profilePic} alt="" />

                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>

                    <label>UserName</label>
                    <input type="text" placeholder="safak"/>

                    <label>Email</label>
                    <input type="text" placeholder="safak"/>

                    <label>Password</label>
                    <input type="password" />
                    
                    <button className="sttingsSubmit">Update</button>
                </form>
            </div>

            <Sidebar />
        </div>
    )
}
