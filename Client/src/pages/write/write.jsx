import "./write.css";
import travel from "./../../image/travelmg.jpg";



export default function Write() {
    return (
        <div className="write" >

            <img src={travel} alt="" className="writeImg" />

            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none",}}/>
                    <input type="text" placeholder="Title" className= "writeInput" autoFocus={true} />
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" ></textarea>
                </div>

                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}