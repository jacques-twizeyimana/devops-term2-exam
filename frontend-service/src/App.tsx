import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";
import Buy from "./views/Buy";
import Load from "./views/Load";
import Balance from "./views/Balance";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/load" component={Load} />
        <Route exact path="/balance" component={Balance} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
