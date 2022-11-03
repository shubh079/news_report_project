import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Category = () => {
  const [articles, setArticles] = useState([]);
  const [params] = useSearchParams();
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getCategoryData = async (category) => {
    setIsLoading(true);
    if (!category) {
      category = "general";
    }
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=9ba6197398074565a30dc756ee82b8d0&country=in`
    );
    // console.log(response.data)
    setArticles(response.data.articles);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategoryData(params.get("category"));
  }, [params]);

  if (isLoading) return <>Loading...</>;

  return (
    
    <>
    <InfiniteScroll
     dataLength={articles.length}
     next={getCategoryData}
     hasMore={hasMore}
     loader={<h4>Loading...</h4>}
     endMessage={
       <p style={{ textAlign: "center", color: "darkblue" }}>
         <b>Thank You.</b>
       </p>
     }
    >
      <Row xs={1} md={4} className="g-4">
        {articles?.map((item, idx) => (
          <Col key={new Date().getTime() + idx}>
            <Card style={{ margin: "10px" }}>
              <Card.Img
                style={{ aspectRatio: "3/2", objectFit: "cover" }}
                variant="top"
                src={item?.urlToImage}
              />
              <Card.Body>
                <a href={item?.url}>
                  <Card.Title>{item?.title.slice(0, 40)}...</Card.Title>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </InfiniteScroll>
    </>
  );
};

export default Category;
