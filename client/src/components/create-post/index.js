import React, { useState, useEffect } from "react";
import "./style.css"
import API from "../../utils/API-cp"
import DeleteBtn from "../DeleteBtn";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form"
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";
import Moment from 'react-moment';

function CreatePost(){
    const [caption, setCaption] = useState(""); // The Testimonial

    const [testimonialObject, setTestimonialsObject] = useState({}); // Testimonial being inputed
    const [testimonials, setTestimonials] = useState([]);            // Testimonials from DB

    useEffect(()=>{
        loadtestimonials()
    }, []);

    const loadtestimonials = () => {
        API.getTestimonials()
        .then(res => {
            // console.log("\n 1. res from DB res: \n", res);
            setTestimonials(res.data);
        })
        .then(console.log(caption))
        .catch(err => console.log(err));
    };

      // Handles updating component state when the user types into the input field
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("\nname: ", name)
    console.log("value: ", value)
    setTestimonialsObject({...testimonialObject, [name]: value})
  };

    // // Handles updating component state when the user types into the input field
    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     console.log("\nname: ", name)
    //     console.log("\nvalue: ", value)
    //     setTestimonialsObject(value)
    //     console.log(testimonialObject)
    //   };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log({caption});
        if (caption) {
          console.log("\nCAPTION: ", caption);
          API.saveTestimonial({
            caption: caption,
          }) 
            .then(res => loadtestimonials())
            .then(window.location.reload())
            .catch(err => console.log(err));
        }
      };

      // Delete testimonial
      const deleteTestimonial = (id) => {
          console.log("\nID IN DELETE: ", id )
        API.deleteTestimonial(id)
          .then(res => loadtestimonials())
          .catch(err => console.log(err));
      }


    return(
        <Container fluid>
            <Row>
                <Row>
                    <Col size="md-4">
                        <div className="createpost">
                        <p>
                            Add a post
                        </p>
                        </div>
                    </Col>
                        {/* <Row className="createpost_container" > */}
                    <Col size="md-7">
                        <TextArea 
                        className="createpost_textarea"
                        rows="3"
                        placeholder= "Place a message here"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        // onChange={(e) => setTestimonialsObject(e.target.value)}
                        // onChange={handleInputChange}
                        name="caption"
                        >
                        </TextArea>

                    </Col>
                    <Col size="md-1">
                        <button className="createpost_UploadBtn" 
                        // onClick={handleUpload}
                        onClick={handleFormSubmit}
                        style={{color: caption ? "#000" : "lightgray", cursor: "pointer"}}
                        >
                            Post
                        </button>
                    </Col>
                </Row>

            </Row>

            <Row>
                <Col size="md-6 sm-12">
                    {/* <Jumbotron>
                    <h1>Testimonial List</h1>
                    </Jumbotron> */}
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
                                <Row>
                                    <p>
                                        <strong>
                                        '{testimonial.caption}'    
                                        </strong>
                                    </p>
                                </Row>
                                <Row>
                                    <p>
                                        <strong>
                                        posted: <Moment format="MM-DD-YYYY">{testimonial.date}</Moment>
                                        </strong>
                                    </p>
                                </Row>
                                <DeleteBtn onClick={() => deleteTestimonial(testimonial._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Testimonials to Display</h3>
                    )}
                    
                </Col>

            </Row>

        </Container>

    )
}


export default CreatePost;