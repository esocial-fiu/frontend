import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Faq from "./components/pages/faq";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Profile from "./components/pages/profile";
import EditProfile from "./components/pages/editProfile";
import Events from "./components/pages/events";
import NewEvent from "./components/pages/newEvent"

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div style={{ marginBottom: "60px" }}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/events" component={Events} />
            <Route path = "/newEvent" component = {NewEvent} />
          </div>
          <div className="fixed-bottom">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
