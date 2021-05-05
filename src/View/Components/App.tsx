import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Dates from './Dates';
import Numbers from './Numbers';
import Texts from './Texts';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dates">Dates</Link>
          </li>
          <li>
            <Link to="/numbers">Numbers</Link>
          </li>
          <li>
            <Link to="/texts">Texts</Link>
          </li>
        </ul>
      </nav>


      <Switch>
        <Route path="/">
          <h1>Main page</h1>
        </Route>
        <Route path="/dates">
          <Dates/>
        </Route>
        <Route path="/numbers">
          <Numbers/>
        </Route>
        <Route path="/texts">
          <Texts/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
