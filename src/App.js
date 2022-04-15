import React from "react";
import "./App.css";
import "./css/LandingPage.css";
import "./css/BudgetTable.css";
import "./components/config/fire.js";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Room from "./components/Room/Room";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/app" component={Homepage} />
          <Route exact path="/room" component={Room} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
