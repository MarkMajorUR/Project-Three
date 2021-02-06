import axios from "axios";


export default {
    // Gets all books
    getPost: function() {
      return axios.get("/api/postes");
    },
    // Gets the book with the given id
    getPost: function(id) {
      return axios.get("/api/postes/" + id);
    },
    // Deletes the book with the given id
    deletePost: function(id) {
      return axios.delete("/api/postes/" + id);
    },
    // Saves a book to the database
    savePost: function(goalData) {
      console.log( {goalData} );
      return axios.post("/api/postes", goalData);
    }
  };