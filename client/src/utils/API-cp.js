import axios from "axios";


export default {
    // Gets all books
    getTestimonials: function() {
      return axios.get("/api/testimonial");
    },
    // Gets the book with the given id
    getTestimonial: function(id) {
      return axios.get("/api/testimonial/" + id);
    },
    // Deletes the book with the given id
    deleteTestimonial: function(id) {
      return axios.delete("/api/testimonial/" + id);
    },
    // Saves a book to the database
    saveTestimonial: function(testimonialData) {
      console.log( {testimonialData} );
      return axios.post("/api/testimonial", testimonialData);
    }
  };