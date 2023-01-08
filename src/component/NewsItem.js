import React, { Component } from 'react'

export class NewsItem extends Component {
 
    
  render() {
    let {title, description, imageurl,newsurl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{source}</span>
                <img src={imageurl?imageurl:"https://images.hindustantimes.com/tech/img/2022/07/02/1600x900/Free_fire_1639536067614_1656725016640.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author? "Unknown" : author} on {date}</small></p>
                    <a rel='noopener noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
        </div>
      </div>
    )
  }
}

export default NewsItem