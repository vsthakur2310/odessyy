import React from "react";
import "./App.css";
import PoetryFeed from "./Poetry/PoetryFeed";
import Profile from "./Profile/Profile";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/profile">
            <LeftSidebar />

            <Profile />

            <RightSidebar />
          </Route>

          <Route path="/">
            <LeftSidebar />

            <PoetryFeed />

            <RightSidebar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
