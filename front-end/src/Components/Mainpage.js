import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "./Header.js";

import { Link } from "react-router-dom";

export default function Mainpage() {
  return (
    <div>
      <Header />
      <main>
        <Form>
          <Form.Group>
            <Form.Label>Enter Your College Email:</Form.Label>
            <Form.Control
              className="form-control mb-3"
              type="email"
              placeholder="email"
            ></Form.Control>
            <Form.Label>Enter Your College Password:</Form.Label>
            <Form.Control
              className="form-control mb-3"
              type="email"
              placeholder="password:"
            ></Form.Control>
            <Form.Group>
              <Link className="link " to="/form">
                <Button className="btn btn-primary submit-btn" type="submit">
                  Login
                </Button>
              </Link>
            </Form.Group>
          </Form.Group>
        </Form>
      </main>
    </div>
  );
}
