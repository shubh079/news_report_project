
import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import "../page/Contact.css";
import newimage from "../assets/news1.jpg";

import * as Yup from "yup";

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
                    <label htmlFor="subject">Date</label>
                    <Field
                      name="subject"
                      className={
                        formik.touched.subject && formik.errors.subject
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      type="date"
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                      <div className="invalid-feedback">
                        {formik.errors.subject}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="d-flex">
                  <div className="form-group">
                    {/* <label htmlFor="content">Select Country</label> */}
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

                  <div class="form-group">
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

                <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <Field
                    name="content"
                    className="form-control"
                    as="textarea"
                    rows={3}
                    cols={10}
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
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
