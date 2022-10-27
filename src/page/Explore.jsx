import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Explore = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    if (page === 10) setHasMore(false);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tech&language=en&apiKey=9ba6197398074565a30dc756ee82b8d0&pageSize=10&page=${page}`
      );
      const newsData = await response.data;
      console.log(newsData);
      setNews(news.concat(newsData.articles));
      localStorage.setItem(
        "news",
        JSON.stringify(news.concat(newsData.articles))
      );
      setPage((prev) => prev + 1);
      const data = JSON.parse(localStorage.getItem("news"));
      setNews(data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true)
    fetchData();
  }, []);

  const fetchedData = () => {
    fetchData();
  };

  if(isLoading) return <>Loading....</>

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={fetchedData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center", color: "darkblue" }}>
          <b>Thank You.</b>
        </p>
      }
    >
      <Row xs={1} md={4} className="g-4">
        {news?.map((item, idx) => (
          <Col key={new Date().getTime() + idx}>
            <Card style={{ margin: "10px" }}>
              <Card.Img
                style={{ aspectRatio: "3/2", objectFit: "cover" }}
                variant="top"
                src={item?.urlToImage}
              />
              <Card.Body>
                {/* <Card.Text>
                {item.description}
              </Card.Text> */}
                <Link to={`/details/${idx}`}>
                  <Card.Title>{item?.title.slice(0, 40)}...</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </InfiniteScroll>
  );
};

export default Explore;
