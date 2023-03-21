import React, { Component } from 'react'


const  NewsItem = (props) => {
const title = props.title;


// myStyle = {
//   width: "100%",
//   height: "40vh",
//   objectFit: "cover"
//   };
  

    

    return (
      <div>
        <div className="card my-2 mx-2 " >
          <img src={props.urlToImage === null ? 'https://cdn.telanganatoday.com/wp-content/uploads/2023/01/BHK.jpg' : props.urlToImage } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-muted">Published By : {props.author === null ? <b>...........</b> : props.author} <br /> On Date: {props.publishedAt.slice(0,10) } <br /> Time : {props.publishedAt.slice(11,19) } </small></p>
           <a href={props.url } rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
          </div>
        </div>

      </div>
    )
  }


export default NewsItem
