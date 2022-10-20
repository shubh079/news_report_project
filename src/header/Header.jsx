import React from "react";
import { Link } from "react-router-dom";
import footerimg from "../assets/logo.jpeg";
const NavigationBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
      {/* <div class="row py-4 px-5 g-0">
            <div class="col-lg-4 col-md-6">
              <Link to="/" className="d-flex align-items-center p-0 text-dark">
                <img src={footerimg} className="img-fluids" alt="news logo" />
              </Link>
              </div>
            </div> */}
           
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <img src={footerimg} width="45" alt="" class="d-inline-block align-middle mr-2"/>

        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link" to="/">
               
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
