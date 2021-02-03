import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css"
//import API from "../../utils/API-cp"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';



function CreatePost(){
    // making user data for post
  // const [user, setUser] = useContext(UserContext).user
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [postObject, setPostObject] = useState({})

    useEffect(()=>{
        loadPosts()
    }, [] )

    function loadPosts(){
        // API.getPosts()
        // .then(res => {
        //     setCaption(res.data);
        //     console.log(res.data);
        // })
        // .then(console.log(caption))
        // .catch(err => console.log(err));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostObject({...postObject, [name]: value})

        if(e.target.files[0]){
            setImage(e.target.files[0]);

            var selectedImgSrc = URL.createObjectURL(e.target.files[0]);

            var imgPreview = document.getElementById("image-preview");
            
            imgPreview.src = selectedImgSrc;
            imgPreview.style.display="block"
        }
    }

    const handleUpload = (e) => {
        e.preventDefault();
    }

    return(
        <div className="createpost">
            <p 
            className="p">
                add a post
            </p>
            <div className="createpost_container" >
                <textarea 
                className="createpost_textarea"
                rows="3"
                placeholder= "place message here"
                value={caption}
                onChange={(e) => setCaption(e.target.value), {handleChange}}
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