import React, { useState, useEffect } from "react";
import "./style.css"
import API from "../../utils/API-cp"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteBtn from "../DeleteBtn";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form"
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";
import Moment from 'react-moment';


// three things that i want
// the caption is what the user type
// the im
function CreatePost(){
    //making user data for post
    //const [user, setUser] = useContext(UserContext).user
    const [caption, setCaption] = useState(""); // The Testimonial
    const [image, setImage] = useState(null);   // Image to include with Testimonial
    const [testimonialObject, setTestimonialsObject] = useState({}); // Testimonial being inputed
    const [testimonials, setTestimonials] = useState([]);            // Testimonials from DB

    useEffect(()=>{
        loadtestimonials()
    }, []);

    function loadtestimonials(){
        API.getTestimonials()
        .then(res => {
            console.log("\n 1. res from DB res: \n", res);
            setTestimonials(res.data);
        })
        .then(console.log(caption))
        .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTestimonialsObject({...testimonialObject, [name]: value})

        if(e.target.files[0]){
            setImage(e.target.files[0]);

            var selectedImgSrc = URL.createObjectURL(e.target.files[0]);
            var imgPreview = document.getElementById("image-preview");
            
            imgPreview.src = selectedImgSrc;
            imgPreview.style.display="block"
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
    }

    return(
        <Container fluid>
            <Row className="createpost">
                <Row>
                    <Col size="md-4">
                        <p className="p">
                            Add a post
                        </p>
                    </Col>
                        {/* <Row className="createpost_container" > */}
                    <Col size="md-8">
                        <TextArea 
                        className="createpost_textarea"
                        rows="3"
                        placeholder= "Place a message here"
                        value={caption}
                        //onChange={handleChange}
                        onChange={(e) => setCaption(e.target.value)}
                        >
                        </TextArea>

                        
                        <button className="createpost_UploadBtn" 
                        // onClick={handleUpload}
                        onClick={handleChange}
                        style={{color: caption ? "#000" : "lightgray", cursor: "pointer",}}
                    >
                        Post
                    </button>
                    </Col>

                            <Col size="md-6" className="createpost_imgPreview">
                                <img id="image-preview" alt=""/>
                            </Col>
                </Row>

                        {/* <div className="createpost_container" >
                            <textarea 
                            className="createpost_textarea"
                            rows="3"
                            placeholder= "place message here"
                            value={caption}
                            //onChange={handleChange}
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
                        </div> */}

                {/* </div> */}
            </Row>

            <Row>
                <Jumbotron>
                    <h1>Testimonial List</h1>
                </Jumbotron>
                {console.log(testimonials)}
                {testimonials.length ? (
                    <List>
                        {testimonials.map(testimonial => (
                            <ListItem key={testimonial._id}>

                            {/* <Link to={"/goals/" + testimonial._id}>
                                <strong>
                                '{testimonial.caption}' by <Moment format="MM-DD-YYYY">{goal.targetdate}</Moment>   
                                </strong>
                            </Link> */}
                            <p>
                                <strong>
                                '{testimonial.caption}'    
                                </strong>
                            
                            </p>
                            <p>
                                <strong>
                                posted: <Moment format="MM-DD-YYYY">{testimonial.date}</Moment>
                                </strong>
                            </p>


                            <DeleteBtn onClick={() => deleteGoal(goal._id)} />
                            </ListItem>
                        ))}
                        
                    {/* <FormBtn
                    //disabled={!(formObject.name && formObject.date)}
                    onClick={handleFormSubmit}
                    >
                    All Done
                    </FormBtn> */}
                    </List>
                ) : (
                    <h3>No Testimonials to Display</h3>
                )}


            </Row>

        </Container>

    )
}


export default CreatePost;