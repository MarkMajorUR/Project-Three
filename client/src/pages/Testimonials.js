import React from "react";
import "./css/testi.css";
import { List, ListItem } from "../components/List";
import CreatePost from "../components/create-post";


function Testimonials(){
 //handle upload

  return(
    <div className="testimonials">
      <h1 
        className="testiHeading" 
        style={{ fontWeight: 'bold'  }}>
          Testimonials
      </h1>
      <CreatePost/>
    </div>
  )
}

export default Testimonials;