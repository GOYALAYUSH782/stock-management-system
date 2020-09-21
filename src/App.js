import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./components/login";
import Home from "./components/dashboard";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/dashboard' component={Home} />
      {/* <Route
        path="/items/2"
        render={() => (<div>Item with id of 2</div>)}
      /> */}
    </Switch>
  );
}

export default App;
