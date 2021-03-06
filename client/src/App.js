import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";


function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
