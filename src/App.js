import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        {/* // NOTE Bubble page protected // */}
        <PrivateRoute path="/protected">
          <BubblePage />
        </PrivateRoute>

        {/* LOGIN route */}
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
// :+1: Render BubblePage as a PrivateRoute
