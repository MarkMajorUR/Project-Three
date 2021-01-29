import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, ShowDatePicker } from "../components/Form"


function Goals(){
     // Setting our component's initial state
  const [goals, setGoals] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadGoals()
  }, )

  // Loads all books and sets them to books
  function loadGoals() {
    API.getGoals()
      .then(res => 
        setGoals(res.data)
      )
      .then(console.log({goals}))
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteGoal(id) {
    API.deleteGoal(id)
      .then(res => loadGoals())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    console.log("tay");
    event.preventDefault();
    if (formObject.name && formObject.date) {
      API.saveGoal({
        name: formObject.name,
        date: formObject.date,
        synopsis: formObject.synopsis
      }) 
        .then(res => loadGoals())
        .catch(err => console.log(err));
    } else {
      console.log("err");
    }
  };
  
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Create Your goal</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="goal"
              placeholder="goal (required)"
            />
            <ShowDatePicker
              name="date"
              placeholder="date (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="reason (Optional)"
            />
            <FormBtn
              //disabled={!(formObject.name && formObject.date)}
              onClick={handleFormSubmit}
            >
              Add Goal
            </FormBtn>
          </form>
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

export default Goals;