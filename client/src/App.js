import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Goals";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/goals"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
           
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
