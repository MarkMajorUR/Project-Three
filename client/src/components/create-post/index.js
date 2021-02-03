import React, { useState } from "react";
import ReactDOM from "react-dom"
import "./style.css"

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';



function CreatePost(){
    // making user data for post
  // const [user, setUser] = useContext(UserContext).user
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);

            var selectedImgSrc = URL.createObjectURL(e.target.files[0]);

            var imgPreview = document.getElementById("image-preview");
            
            imgPreview.src = selectedImgSrc;
            imgPreview.style.display="block"
        }
    }

    const handleUpload = () => {
        
    }

    return(
        <div className="createpost">
            <p 
            className="p">
                add a post
            </p>
            <div className="createpost_container" >
                <textarea className="createpost_textarea"
                rows="3"
                placeholder= "place message here"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                ></textarea>
            
                <div className="createpost_imgPreview">
                    <img id="image-preview" alt=""/>
                </div>
            </div>
            <div className="createpost_imgUpload">
                <label htmlFor="fileInput">
                <AddAPhotoIcon style={{ cursor: "pointer", fontSize: "20px"}} /> 
                </label>
                <input id="fileInput" type="file" accept="image/*" onChange=
                {handleChange} />
            </div>
            <button className="createpost_UploadBtn" 
            onClick={handleUpload}
            style={{color: caption ? "#000" : "lightgray", cursor: "pointer",}}
            >Upload
            </button>
        </div>
    )
}


export default CreatePost;