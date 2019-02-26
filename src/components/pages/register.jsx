import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Register extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: "80%",
            marginTop: "30px"
          }}
        >
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <label htmlFor="basic-url">Your vanity URL</label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">
                https://example.com/users/
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>With textarea</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </div>
        ;
      </div>
    );
  }
}

export default Register;
