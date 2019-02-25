import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/pages/home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <NavBar />
        </header>

        <main className="container">
          <Home />
        </main>

        <footer
          className="footer mt-auto py-3"
          style={{ position: "absolute", left: "0", bottom: "0", right: "0" }}
        >
          <div className="container" style={{ display: "inline-block" }}>
            <span className="text-muted" style={{ color: "#fff" }}>
              {" "}
              <small>
                <strong>eSocial © 2019</strong>
              </small>
            </span>{" "}
            &nbsp;
            <img
              src="https://img.icons8.com/color/24/000000/facebook.png"
              style={{ marginRight: "6px" }}
            />
            <img
              src="https://img.icons8.com/color/24/000000/twitter.png"
              style={{ marginRight: "6px" }}
            />
            <img
              src="https://img.icons8.com/color/24/000000/instagram-new.png"
              style={{ marginRight: "6px" }}
            />
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
