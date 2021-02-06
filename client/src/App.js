import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Goals from "./pages/Goals";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Testimonials from "./pages/Testimonials";
import  NavBar  from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
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
          <Route exact path={["/login"]}>
            <Login />
          </Route>
          <Route>  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
