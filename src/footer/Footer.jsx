import React from "react";
import "../footer/Footer.css";
import { Link } from "react-router-dom";
import footerimg from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <div className="d-flex flex-column h-100">
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row py-4 px-5 g-0">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1-text text-white">ABC News.</h5>
              <Link to="/" className="d-flex align-items-center p-0 text-dark">
                <img src={footerimg} className="img-fluids footer-height" alt="news logo" />
              </Link>
              <p className="small ft-content text-muted">
                {" "}
                We are delivering authenticated news from verified sources with
                detailed analysis.
              </p>
            </div>
            <div className="col-lg-2 link-hover col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted footer_links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
                <li>
                  <Link to="/details">Details</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 link-hover col-md-6">
              <h5 className="text-white mb-3">Help</h5>
              <ul className="list-unstyled text-muted footer_links">
                <li>
                  <Link to="/">Sign Up</Link>
                </li>
                <li>
                  <Link to="#">Sign In</Link>
                </li>
                <li>
                  <Link to="#">Get started</Link>
                </li>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">Click to Subscribe.</p>
              <button type="button" className="btn btn-light btn-newsletter">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
