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
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route> */}

          <Route path="/movies">
            <Home type="movie" />
          </Route>
          <Route path="/series">
            <Home type="series" />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
