import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Goals from "./pages/Goals";
import Signup from "./pages/signup";
import Detail from "./pages/Detail";
import Testimonials from "./pages/Testimonials";
import  NavBar  from "./components/NavBar";
import  NavLink  from "./components/Navlink";

function App() {
  return (
    <Router>
      <NavBar>
      <NavLink to="/testimonials" activeStyle={{
      fontWeight: "bold",
      color: "blue"}}>
        Testimonials
      </NavLink>
      <NavLink to="/goal" activeStyle={{
      fontWeight: "bold",
      color: "red"}}>
        Goals
      </NavLink>
      <NavLink to="/signup" activeStyle={{
      fontWeight: "bold",
      color: "red" }}>
        signup
      </NavLink>
      </NavBar>
      <div>
        <Switch>
          <Route exact path={["/", "/testimonials"]}>
            <Testimonials />
          </Route>
          <Route exact path={["/goals"]}>
            <Goals />
          </Route>
          <Route exact path="/goals/:id">
            <Goals />
          </Route>
          <Route exact path="/goals/:id">
            <Detail />
          </Route>
          <Route exact path={["/Signup"]}>
            <Signup />
          </Route>
          <Route>  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
