import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import "../page/Contact.css";
import newimage from "../assets/news1.jpg";
import MaskedInput from "react-text-mask";

import * as Yup from "yup";

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const Contact = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="contact-wrap">
      <div className="row">
        <div className="col-md-6">
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              content: "",
              select: "",
              date: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 1000);
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Name is required"),
              subject: Yup.string().required("Subject is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              date: Yup.string().required("DOB is required"),
              phone: Yup.string().required("Required"),
            })}
          >
            {(formik, isSubmitting) => (
              <Form className="contactUs">
                <h2>Contact Form</h2>
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      name="name"
                      className={
                        formik.touched.name && formik.errors.name
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      type="text"
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="invalid-feedback">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <Field
                      name="email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      type="email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="invalid-feedback">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <Field
                      name="subject"
                      className={
                        formik.touched.subject && formik.errors.subject
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      type="text"
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                      <div className="invalid-feedback">
                        {formik.errors.subject}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <Field
                      name="date"
                      className={
                        formik.touched.date && formik.errors.date
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      type="date"
                    />
                    {formik.touched.date && formik.errors.date ? (
                      <div className="invalid-feedback">
                        {formik.errors.date}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="content">Select Country</label>
                    <select
                      class="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                    >
                      <option selected>Choose Country</option>
                      <option value="1">India</option>
                      <option value="2">Nepal</option>
                      <option value="3">Dubai</option>
                    </select>
                  </div>

                  <div className="form-group ">
                    <label htmlFor="file upload">File Upload</label>
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                      onChange={onImageChange}
                      fullWidth
                      name="image"
                    />
                  </div>
                </div>

                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    className="img-fluid img-disp"
                    alt="preview"
                  />
                )}
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="content">Phone Number</label>
                    {/* <input type="tel" name="phone" className="form-control" /> */}
                    <Field
                      name="phone"
                      render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={phoneNumberMask}
                          id="phone"
                          // placeholder="Enter your phone number"
                          className={
                            formik.errors.phone && formik.touched.phone
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          type="text"
                        />
                      )}
                    />

                    {formik.errors.phone && formik.touched.phone && (
                      <div className="invalid-feedback">
                        {formik.errors.phone}
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="category">Choose Your Category</label>
                  <div class="form-check">
                  
                  <label class="form-check-label" for="inlineCheckbox1">
                      Entertainment
                    </label>
                    <input
                      className="form-check-input form-control"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    
                  </div>
                  <div className="form-check ">
                    <input
                      className="form-check-input form-control"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineCheckbox2">
                      Sports
                    </label>
                  </div>
                  </div>

                </div>

                <div className="form-group-text">
                  <label htmlFor="content">Content</label>
                  <textarea name="content" className="form-control" />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-light submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="col-md-6">
          <img src={newimage} className="img-fluid" alt="new logo" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
