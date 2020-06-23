import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
        </Switch>
      </Router>
  );
}

export default App;
