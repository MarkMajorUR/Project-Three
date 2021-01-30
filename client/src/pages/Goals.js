import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form"
import Moment from 'react-moment';
import moment from 'moment'

function Goals(){
     // Setting our component's initial state
  const [goals, setGoals] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadGoals()
  }, [])

  // Loads all books and sets them to books
  function loadGoals() {
    API.getGoals()
      .then(res => {
        setGoals(res.data);
        console.log(res.data);
      }
      )
      .then(console.log(goals))
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
  // const [selectedDate, setSelctedDate] = useState(new Date());
  function handleFormSubmit(event) {
    console.log("tay");
    event.preventDefault();
    console.log({formObject});
    let startDate =  moment(formObject.startDate).format();
    let targetDate = moment(formObject.targetDate).format();

    console.log( startDate );
    if (formObject.name && formObject.date) {
      API.saveGoal({
        user_id: "0000",
        title: formObject.goal,
        startdate: startDate,
        targetdate: targetDate,
        reason: formObject.reason,
      }) 
        .then(res => loadGoals())
        .catch(err => console.log(err));
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
              placeholder="Goal"
            />
            <Input
              onChange={handleInputChange}
              name="startDate"
              placeholder="MM/DD/YYYY - Goal Start Date"
            />
            <Input
              onChange={handleInputChange}
              name="targetDate"
              placeholder="MM/DD/YYYY - Goal Target Date"
            />
            <TextArea
              onChange={handleInputChange}
              name="reason"
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
                      '{goal.title}' by <Moment format="MM-DD-YYYY">{goal.targetdate}</Moment>   
                    </strong>
                  </Link>
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
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Goals;