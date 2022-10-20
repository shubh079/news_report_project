import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Details = () => {
  const [news, setNews] = useState({});
  const params = useParams()


  
  useEffect(() => {

    const arr = JSON.parse(localStorage.getItem('news')).filter((item, index) => {
      return index == params.id
    })
    
    setNews(arr[0]);
    
  }, [params]);


  // if(!params.id) return <Navigate to="/explore"/>
  
  const printDate= (numbers) =>{
    return new Date(numbers).toLocaleString()
  }
  return <>
  
  {/* {news.content} */}

   <div className="mt-4">
   <Card>
      <Card.Body>
        <Card.Body>Posted By <b>{news.author}</b> on <b> { printDate(news.publishedAt)} </b> </Card.Body>
        <Card.Body className="mt-3">
          <h3>{news.title}</h3>
        </Card.Body>
        <div className="image-container mt-4 shadow " style={{maxWidth:"50%"}}>
          <img className="img-fluid" src={news.urlToImage} alt="preview" />
        </div>
        <Card.Body className="mt-5" dangerouslySetInnerHTML={{__html:news.content}}></Card.Body>
       </Card.Body>
    </Card>  
   </div>

  </>;
};

export default Details;
