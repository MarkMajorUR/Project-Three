import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Goals from "./pages/Goals";
<<<<<<< HEAD
import Signup from "./pages/signup"
=======
import Detail from "./pages/Detail";
>>>>>>> 5c21467fc7b064cf17c700e77c69338d50e4ce5b

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/goals"]}>
<<<<<<< HEAD
<<<<<<< HEAD
            <Goals />
=======
            <Books />
>>>>>>> 31f839dec00cea22d827eb00dbd5bf9160c06d7e
          </Route>
          <Route exact path="/goals/:id">
           
=======
            <Goals />
          </Route>
          <Route exact path="/goals/:id">
            <Detail />
>>>>>>> 5c21467fc7b064cf17c700e77c69338d50e4ce5b
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
