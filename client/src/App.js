import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Goals from "./pages/Goals";
import Signup from "./pages/signup"
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/goals"]}>

            <Goals />

         

          </Route>
          <Route exact path="/goals/:id">
           

            <Goals />
          </Route>
          <Route exact path="/goals/:id">
            <Detail />

          </Route>
          <Route exact path={["/", "/register"]}>
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
