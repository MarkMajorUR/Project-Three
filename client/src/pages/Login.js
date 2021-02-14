import API from "../utils/API";

import React, { useState } from "react";
import Container from "../components/Container"
import Col from "../components/Col";
import Row from "../components/Row";
import { Redirect } from "react-router-dom";



function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
  // function handleSubmit(){
    e.preventDefault();
    console.log("\n username is: " + username);
    console.log(" password is: " + password + " \n ");

    // Post to the server with the input for user info
    // The post should return the token
    // Save to local storage
    
    API.userLogin({email: username, password: password})

      .then(res => {
        console.log("\n1. In .then: \n   ", {res})
        console.log("\n2. In .then: \n   ", res.data.data.token)
        // API.setLocalStorage(res);
        API.setLocalStorage(res.data.data.token);
        return
        window.location.replace('/goals');
      })
      // .catch(err => console.log(err));
      .catch(err => {
        let message = err.response.data;
        console.log(message.error)
        console.log({message})

        switch (message.error) {
          case '"email" must be a valid email':
            alert('Email must be a valid email')
            break;
          case '"password" length must be at least 6 characters long':
            alert('Password is incorrect')
            break;
          case 'Password is wrong':
            alert('Password is incorrect')
            break;
          default:
            alert('email or password is incorrect')
        }
      });
  };


  return (
    <div className=""> 
      <div className="mt-4">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="email"
                placeholder="email"
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
        {/* <Container className="mt-4">
          <h3>Hello {username}</h3>
          <p>Your password is: {password}</p>
        </Container> */}
      </form>
    </div>
  );
}

export default Login;
