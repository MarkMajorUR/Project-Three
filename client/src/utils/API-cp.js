import axios from "axios";


export default {
    // Gets all books
    getTestimonial: function() {
      return axios.get("/api/testimonials");
    },
    // Gets the book with the given id
    getTestimonial: function(id) {
      return axios.get("/api/testimonials/" + id);
    },
    // Deletes the book with the given id
    deleteTestimonial: function(id) {
      return axios.delete("/api/testimonials/" + id);
    },
    // Saves a book to the database
    saveTestimonial: function(testimonialData) {
      console.log( {testimonialData} );
      return axios.post("/api/testimonials", testimonialData);
    }
  };