import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Dates from './Dates';
import Navbar from './Navbar';
import Numbers from './Numbers';
import Texts from './Texts';


const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>
      
      <Switch>
        <Route path="/dates" >
          <Dates/>
        </Route>
        <Route path="/numbers">
          <Numbers/>
        </Route>
        <Route path="/texts">
          <Texts/>
        </Route>
        <Route path="/">
          <h1>Main page</h1>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
