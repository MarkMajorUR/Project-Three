import Moment from 'react-moment';
import axios from "axios";

export default {
  // Gets all books
  getGoals: function() {
    return axios.get("/api/goals");
  },
  // Gets the book with the given id
  getGoal: function(id) {
    return axios.get("/api/goals/" + id);
  },
  // Deletes the book with the given id
  deleteGoal: function(id) {
    return axios.delete("/api/goals/" + id);
  },
  // Saves a book to the database
  saveGoal: function(goalData) {
    // console.log(goalData);
    // let startDate =  Moment(goalData.startDate).tz("America/New_York").format();
    // let targetDate = goalData.targetDate;

    // console.log( startDate );
    return axios.post("/api/goals", goalData);
  }
};
