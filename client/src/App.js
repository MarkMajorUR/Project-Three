import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Goals from "./pages/Goals";
import Signup from "./pages/signup"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/goals"]}>
<<<<<<< HEAD
            <Goals />
=======
            <Books />
>>>>>>> 31f839dec00cea22d827eb00dbd5bf9160c06d7e
          </Route>
          <Route exact path="/goals/:id">
           
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
