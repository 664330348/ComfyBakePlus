import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import { Navbar } from './app/Navbar';
import "./App.css";

import Home from './app/features/home/Home';
import Test from './Test';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />
          <Route exact path="/test" component={Test} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
