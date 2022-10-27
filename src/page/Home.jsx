import React from "react";
import background from "../assets/new.jpg";
import desktopImage from "../assets/desktopImage.jpg";
import news2 from "../assets/news2.jpg";
import "../page/Home.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setPosts } from "../redux/actions/Homeaction";

const Home = () => {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=9ba6197398074565a30dc756ee82b8d0`
      );
      dispatch(setPosts(response.data));
    };

    fetchData();
  }, []);

  return (
    <div className="homepage-wrapper">
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-resizer"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner caro-height">
          <div className="carousel-item active">
            <img src={background} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={desktopImage} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={news2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/***********  trending posts *********/}

      {/* <h3 className="trend">Trending Post</h3>
      {posts.allPosts.posts.articles?.slice(0, 10)?.map((item, idx) => {
        return (
          <div
            id="carouselExampleControls"
            class="carousel slide card-slider"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" key={new Date().getTime() + idx}>
              <div className="carousel-item active">
              <div className="cards-wrapper">
                <div
                  className=""
                  key={new Date().getTime() + idx}
                >
                
                  <div className="card" style= {{width: "18rem"}}>
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
              <div className="carousel-item">
              <div
                  className=""
                  key={new Date().getTime() + idx}
                >
                  <div className="card" style= {{width: "18rem"}}>
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
              </div>
              <div className="carousel-item">
              <div
                  className=""
                  key={new Date().getTime() + idx}
                >
                  <div className="card" style= {{width: "18rem"}}>
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
              </div>
              </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        );
      })} */}

      {/* end */}
      <h3 className="trend">Trending Posts</h3>
      <div className="row g-0">
        {posts.allPosts.posts.articles?.slice(0, 10)?.map((item, idx) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"
              key={new Date().getTime() + idx}
            >
              <div className="card">
                <img
                  src={item?.urlToImage}
                  style={{ aspectRatio: "3/2", objectFit: "cover" }}
                  className="card-img-top"
                  variant="top"
                  alt="..."
                />

                <Link to={`/details/${idx}`}>
                  <h5 className="card-title">{item?.title.slice(0, 40)}...</h5>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
