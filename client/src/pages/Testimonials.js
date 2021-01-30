import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


function Testimonials(){
//     // Setting our component's initial state
//  const [goals, setGoals] = useState([])
//  const [formObject, setFormObject] = useState({})

//  // Load all books and store them with setBooks
//  useEffect(() => {
//    loadGoals()
//  }, [])

//  // Loads all books and sets them to books
//  function loadGoals() {
//    API.getGoals()
//      .then(res => 
//        setGoals(res.data)
//      )
//      .then(console.log({goals}))
//      .catch(err => console.log(err));
//  };

//  // Deletes a book from the database with a given id, then reloads books from the db
//  function deleteGoal(id) {
//    API.deleteGoal(id)
//      .then(res => loadGoals())
//      .catch(err => console.log(err));
//  }

//  // Handles updating component state when the user types into the input field
//  function handleInputChange(event) {
//    const { name, value } = event.target;
//    setFormObject({...formObject, [name]: value})
//  };

 // When the form is submitted, use the API.saveBook method to save the book data
 // Then reload books from the database
//  const [selectedDate, setSelctedDate] = useState(new Date());
//  function handleFormSubmit(event) {
//    console.log("tay");
//    event.preventDefault();
//    console.log(formObject);
//    if (formObject.name && formObject.date) {
//      API.saveGoal({
//        goal: formObject.goal,
//        date: formObject.date,
//      }) 
//        .then(res => loadGoals())
//        .catch(err => console.log(err));
//    }
//  };
 
 return (
   <Container fluid>
     <Row>
       <Col size="md-6">
         <Jumbotron>
           <h1>Testimonials</h1>
           <FormBtn
             //disabled={!(formObject.name && formObject.date)}
             onClick={handleFormSubmit}>
             +
           </FormBtn>
         </Jumbotron>
         

           <FormBtn
             //disabled={!(formObject.name && formObject.date)}
             onClick={handleFormSubmit}>
             Add Goal
           </FormBtn>
      
       </Col>
       <Col size="md-6 sm-12">
         <hr></hr>
         <Jumbotron>
           <h1>My Goals List</h1>
         </Jumbotron>
         {goals.length ? (
           <List>
             {goals.map(goal => (
               <ListItem key={goal._id}>
                 <Link to={"/goals/" + goal._id}>
                   <strong>
                     {goal.name} by {goal.date}
                   </strong>
                 </Link>
                 <DeleteBtn onClick={() => deleteGoal(goal._id)} />
               </ListItem>
             ))}
             <FormBtn
             //disabled={!(formObject.name && formObject.date)}
             onClick={handleFormSubmit}
           >
             All Done
           </FormBtn>
           </List>
         ) : (
           <h3>No Results to Display</h3>
         )}
       </Col>
     </Row>
   </Container>
 );
}

export default Testimonials;