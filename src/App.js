import React, { Component } from "react";
import Home from "./components/Home";
import CalculateTax from "./components/CalculateTax";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="App-header">Tax Calculator</h1>
        </div>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/CalculateTax" component={CalculateTax} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
