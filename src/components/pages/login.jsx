import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Login extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{
            width: "40%",
            marginTop: "30px"
          }}
        >
          <Card.Body>
           <h1> Login </h1>
				    <input type = "text" name= "Email" placeholder = "Email"></input>
            <br></br>
            <br></br>
            <input type = "password" name= "Password" placeholder = "Password"></input>
            <br></br>
            <br></br>
            <button>Login</button> <t></t> <button>Forgot Password</button> 
           </Card.Body>
        </Card>

        
      </div>
    );
  }
}

export default Login;
