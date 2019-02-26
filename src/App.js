import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Faq from "./components/pages/faq";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
