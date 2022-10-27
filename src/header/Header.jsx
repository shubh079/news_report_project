import React from "react";
import { Link } from "react-router-dom";
import footerimg from "../assets/logo.jpeg";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { setPosts } from "../redux/actions/Homeaction";

const NavigationBar = () => {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);
  // const  API_URL = ' https://newsapi.org/v2/everything?q=bitcoin&apiKey=9ba6197398074565a30dc756ee82b8d0';
  
  const fetchData = async (title) => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${title}&language=hi&apiKey=9ba6197398074565a30dc756ee82b8d0`);
      // setNews(response.news);
      
     console.log(response);
     dispatch(setPosts(response.data));
 
    // const newsData = await response.data;
    // setNews(newsData.articles);
     
   };

 

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(query);
  }


  // useEffect(() => {
  //   const fetchData = async (title) => {
  //     const response = await axios.get(`${API_URL}&s=${title}`);
  //       // setNews(response.news);
      
       

  //     // const newsData = await response.data;
  //     // setNews(newsData.articles);
    
  //    };

  //   fetchData(query);
  // }, []);


  
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

        <img src={footerimg} width="45" alt="" className="d-inline-block align-middle mr-2"/>

        
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
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            {/* <ul className="list">
                {news.map}

            </ul> */}
            <button className="btn btn-outline-light" onClick={handleSearch} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
