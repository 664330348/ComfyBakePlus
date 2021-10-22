import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";

import HomePage from "./pages/HomePage";
import Shop from "./pages/shop/ShopPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <HomePage />
              </React.Fragment>
            )}
          />
          <Route exact path="/Shop" component={Shop} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
