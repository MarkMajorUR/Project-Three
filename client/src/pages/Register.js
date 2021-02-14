import API from "../utils/API";
import React, { useState } from "react";
import Container from "../components/Container"
import Col from "../components/Col";
import Row from "../components/Row";
import { Redirect } from "react-router-dom";



function Register() {
  const [username, setUsername] = useState();
  const [useremail, setUseremail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
  // function handleSubmit(){
    e.preventDefault();
    console.log("\n username is: " + username);
    console.log(" email is: " + useremail + " \n ");
    console.log(" password is: " + password + " \n ");

    // Post to the server with the input for user info
    // The post should return the token
    // Save to local storage
    
    API.userRegister({name: username, email: useremail, password: password})
      // .then(res => {
      //   console.log(" back in the REGISTER form1: res \n", res);
      //   console.log(" back in the REGISTER form2: res.data \n", res.data);
      // })
      .then(res => {
        // console.log("\nIn .then: \n   ", res)
        // console.log(" back in the REGISTER form1: res \n", res);
        // console.log(" back in the REGISTER form2: res.data \n", res.data);
        alert('Account created successfully')
        window.location.replace('/login');
      })
      // .catch(err => console.log("err: \n", {err}));
      // .catch(err => alert(`Error has occurred!`));
      .catch(err => {
        let message = err.response.data;
        console.log(message.error)
        console.log({message})

        switch (message.error) {
          case '"name" length must be at least 6 characters long':
            alert('Name length must be at least 6 characters long')
            break;
          case '"password" length must be at least 6 characters long':
            alert('Password length must be at least 6 characters long')
            break;
          case 'Email already exists':
            alert('Email already exists. Please use a different email.')
            break;
          default:
            alert('Account created successfully')
        }
      }
      );
  };


  return (
    <div className=""> 
      <div className="mt-4">
        <h2>Create an Account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="username"
                onChange={e => setUsername(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="useremail"
                onChange={e => setUseremail(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>

      </form>
    </div>
  );
}

export default Register;
