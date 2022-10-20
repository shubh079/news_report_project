import React from "react";
import "../footer/Footer.css";
import { Link } from "react-router-dom";
import footerimg from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <div class="d-flex flex-column h-100">
      {/* <!-- FOOTER --> */}
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row py-4 px-5 g-0">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1-text text-white">ABC News.</h5>
              <Link to="/" className="d-flex align-items-center p-0 text-dark">
                <img src={footerimg} className="img-fluids" alt="news logo" />
              </Link>
              <p class="small ft-content text-muted">
                {" "}
                We are delivering authenticated news from verified sources with
                detailed analysis.
              </p>
            </div>
            <div class="col-lg-2 link-hover col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted footer_links">
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
            <div class="col-lg-2 link-hover col-md-6">
              <h5 class="text-white mb-3">Help</h5>
              <ul class="list-unstyled text-muted footer_links">
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
            <div class="col-lg-4 col-md-6">
              <h5 class="text-white mb-3">Newsletter</h5>
              <p class="small text-muted">
                Click to Subscribe. 
              </p>
              <form action="#">
                <div class="input-group mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-dark"
                    id="button-addon2"
                    type="button"
                  >
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
