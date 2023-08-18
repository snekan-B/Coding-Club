import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { formvalidate } from "../helper/validate";
import { useFormik } from "formik";
import { formsubmit } from "../helper/helper";
import Header from "./Header.js";
import { Link } from "react-router-dom";
export default function NewFaculty() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      department: "",
      subject: "",
    },
    validate: formvalidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let registerpromise = formsubmit(values);
      toast.promise(registerpromise, {
        loading: "creating...",
        success: <b>Registered successfully</b>,
        error: <b>Could not Register</b>,
      });
      console.log(values);
    },
  });
  return (
    <div>
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <Header></Header>
      <main>
        <Form onSubmit={formik.handleSubmit}>
          <h1 className="title">Application Form</h1>
          <Form.Group>
            <Form.Label>Enter Your Name:</Form.Label>
            <Form.Control
              className="form-control mb-3"
              {...formik.getFieldProps("name")}
              type="text"
              placeholder="Name"
            ></Form.Control>
            <Form.Label>Enter Your email:</Form.Label>
            <Form.Control
              className="form-control mb-3"
              {...formik.getFieldProps("email")}
              type="email"
              placeholder="Email:"
            ></Form.Control>
            <Form.Label>Department:</Form.Label>
            <Form.Control
              className="form-control mb-3"
              {...formik.getFieldProps("department")}
              type="text"
              placeholder="Department:"
            ></Form.Control>
            <Form.Label>Enter Your subject:</Form.Label>
            <Form.Control
              className="form-control mb-3"
              {...formik.getFieldProps("subject")}
              type="text"
              placeholder="Subject:"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Link className="link " to="/success">
              <Button className="btn btn-primary submit-btn " type="submit">
                submit
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </main>
    </div>
  );
}
