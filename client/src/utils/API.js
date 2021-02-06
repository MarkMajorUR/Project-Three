import axios from "axios";

export default {
  // Gets all goals
  getGoals: function() {
    return axios.get("/api/goals");
  },
  // Gets the goal with the given id
  getGoal: function(id) {
    return axios.get("/api/goals/" + id);
  },
  // Deletes the goal with the given id
  deleteGoal: function(id) {
    return axios.delete("/api/goals/" + id);
  },
  // Saves a goal to the database
  saveGoal: function(goalData) {
    console.log( {goalData} );
    return axios.post("/api/goals", goalData);
  },


  userLogin: function(obj) {
    console.log("  In clientUserAuth API: ", obj)
    return console.log(axios.post('/api/user/login', obj));
},
  setLocalStorage: function(userData) {
    localStorage.setItem('jwtToken', userData.token);
},
};

