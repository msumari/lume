import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Watch from "./components/Watch";

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          {user && (
            <div>
              <Route path="/movies">
                <Home type="movies" />
              </Route>
              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </div>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
