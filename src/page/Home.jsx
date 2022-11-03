import "../page/Home.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setPosts } from "../redux/actions/Homeaction";
import React, { useRef, useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
   //creating the ref
   const customeSliders = React.createRef();
   const customeSlider = React.createRef();
   const [sliderSettings, setSliderSettings] = useState({
     infinite: true,
     dots: true,
     slidesToShow: 4,
     slidesToScroll: 4,
     lazyLoad: true,
     autoplay: true,
     autoplaySpeed: 2000,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   });
   const gotoNext = () => {
     customeSliders.current.slickNext();
   };
   const gotoPrev = () => {
     customeSliders.current.slickPrev();
   };

   const gotoNext1 = () => {
    customeSlider.current.slickNext();
  };
  const gotoPrev1 = () => {
    customeSlider.current.slickPrev();
  };

   const categories = [
     {
       category: "business",
       img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
     {
       category: "entertainment",
       img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
     {
     category:"general", img:"https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
     {category:"health", img:"https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
     {category:"science", img:"https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
     {category: "sports", img:"https://images.pexels.com/photos/209933/pexels-photo-209933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
     {category: "technology", img: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
   ];
  const [date, setDate] = useState(new Date());
  const posts = useSelector((state) => state);
  const [isload, setIsload] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setIsload(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba6197398074565a30dc756ee82b8d0`
      );
      dispatch(setPosts(response.data));
      setIsload(false);
    };
    fetchData();
  }, []);
  
  if (isload) return <>Loading...</>;
  return (
    <>
      <div className="container-wrapper">
        <div className="row g-0 row-gap">
          <div className="col-xl-6 gap-bt">
            <>
              <div className="card ">
                <img
                  src={posts.results.posts?.articles[2]?.urlToImage}
                  style={{ aspectRatio: "3/2", objectFit: "cover" }}
                  className="card-img-top"
                  variant="top"
                  alt="..."
                />
                <Link to={`/details/${0}`}>
                  <h5 className="card-title">
                    {posts.results.posts?.articles[2]?.title.slice(0, 100)}...
                  </h5>
                </Link>
              </div>
            </>
          </div>
          <div className="col-xl-6 gap-bt">
            <div className="row g-0 ">
              {posts.results.posts.articles?.slice(1, 5)?.map((item, idx) => {
                {/* console.log(posts); */}
                return (
                  <div className="col-md-6 row-gapping hwt-ad" key={new Date().getTime() + idx}>
                    <div className="card ">
                      <img
                        src={item?.urlToImage}
                        style={{ aspectRatio: "3/2", objectFit: "cover" }}
                        className="card-img-top"
                        variant="top"
                        alt="..."
                      />
                      <Link to={`/details/${idx}`}>
                        <h5 className="card-title">
                          {item?.title.slice(0, 30)}...
                        </h5>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
       {/***********  trending posts *********/}
       <div className="row g-0">
        <h3 className="trend">Trending Posts</h3>
        <Slider className="my-4" {...sliderSettings} ref={customeSliders}>
          {posts.results.posts.articles?.slice(0, 10)?.map((item, idx) => {
            return (
              <div className="imgslider px-4" key={new Date().getTime() + idx}>
                <div className="card">
                  <img
                    src={item?.urlToImage}
                    style={{ aspectRatio: "3/2", objectFit: "cover" }}
                    className="card-img-top"
                    variant="top"
                    alt="..."
                  />
                  <Link to={`/details/${idx}`}>
                    <h5 className="card-title">
                      {item?.title.slice(0, 40)}...
                    </h5>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="arrow">
          <button
            type="button"
            className="btn-style"
            onClick={() => gotoNext()}
          >
            <i className="fa-solid fa-arrow-left btn-style"></i>
          </button>
          <button
            type="button"
            className="btn-style"
            onClick={() => gotoPrev()}
          >
            <i className="fa-solid fa-arrow-right btn-style"></i>
          </button>
        </div>
      </div>
      {/* end */}


       {/* categories */}
       <div className="row g-0">
        <h3 className="trend">Categories</h3>
        <Slider className="my-4" {...sliderSettings} ref={customeSlider}>
          {categories.map((item, index) => {
            return (
              <Link to={`/category/?category=${item.category}`} className="imgslider px-4">
                <div className="card">
                  <img
                    src={item?.img}
                    style={{ aspectRatio: "3/2", objectFit: "cover" }}
                    className="card-img-top"
                    variant="top"
                    alt="..."
                  />
                  <div className="position-absolute hover-text">
                    <h3>{item?.category}</h3>
                  </div>
                  {/* <Link to={`/details/${idx}`}>
                    <h5 className="card-title">
                      {item?.title.slice(0, 40)}...
                    </h5>
                  </Link> */}
                </div>
              </Link>
            );
          })}
        </Slider>
        <div className="arrow">
          <button
            type="button"
            className="btn-style"
          
            onClick={() => gotoNext1()}
          >
            <i className="fa-solid fa-arrow-left btn-style"></i>
          </button>
          <button
            type="button"
            className="btn-style"
          
            onClick={() => gotoPrev1()}
          >
            <i className="fa-solid fa-arrow-right btn-style"></i>
          </button>
        </div>
      </div>
      {/* category end */}
      <h3 className="trend">Popular Posts</h3>
      <div className="container-wrapper">
        <div className="row">
          <div
            // className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"
            className="col-xl-8 row-gapping"
          >
            {posts.results.posts.articles?.slice(0, 5)?.map((item, idx) => {
              {/* console.log(posts); */}
              return (
                <div className="card card-gap" key={new Date().getTime() + idx}>
                  <img
                    src={item?.urlToImage}
                    style={{ aspectRatio: "4/1", objectFit: "cover" }}
                    className="card-img-top"
                    variant="top"
                    alt="..."
                  />
                  <Link to={`/details/${idx}`}>
                    <h5 className="card-title">
                      {item?.title.slice(0, 50)}...
                    </h5>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="col-xl-4 offset-top-36">
            <form className="news-box">
              <h3>Follow Us</h3>
              <p>Read our latest news on any of these social networks!</p>
              <div className="social-container">
                <Link to="#" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </Link>
                <Link
                  to="#"
                  className="facebook social"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </Link>
                <Link to="#" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Link>
                <Link
                  to="#"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Link>
              </div>
              <hr className="divider divider-dashed"></hr>
              <h3 className=" font-weight-regular">
                Get latest news delivered daily!
              </h3>
              <p>We will send you breaking news right to your inbox</p>
              <div className="d-flex search-pd">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-dark" type="submit">
                  Search
                </button>
              </div>
            </form>
            <div className="app cal-re">
              <h3 className="text-center">Calendar</h3>
              <div className="calendar-container">
                <Calendar onChange={setDate} className="cal-gap" value={date} />
              </div>
              <p className="text-center">
                <span className="bold">Selected Date:</span>{" "}
                {date.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
