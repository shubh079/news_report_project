import React from "react";
import { Link } from "react-router-dom";
import footerimg from "../assets/logo.jpeg";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { setSearch } from "../redux/actions/Homeaction";
import "../header/Header.css";
import {useNavigate} from 'react-router-dom'
const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [query, setQuery] = useState("");
  
  const fetchData = async (title) => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${title}&apiKey=9ba6197398074565a30dc756ee82b8d0`);
     console.log(response);
     dispatch(setSearch(response.data));
     navigate('/search')
     
   };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(query);
  }

  return (

    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <img src={footerimg} width="45" alt="" className="d-inline-block align-middle mr-2 image-height"/>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link" to="/">
               
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Category
              </Link>
            </li>
          </ul>
          <form onSubmit={handleSearch} className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
