import React from 'react'

export default function Header() {
  return (
    <div className='container-fluio' id='header'>
      <div className='container text-center' id="about">
        <h3>TIME-LINE<br />
          <small className="text-light opacity-50">A dynamic website that allows users to easily customize and displays event timelines in a concise and organized manner. </small>
        </h3>
      </div>
      {/* Carousel code */}
      <div className='container' id='example'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="snip1.jpg" className="d-block w-100" alt="snip1" />
            </div>
            <div className="carousel-item">
              <img src="snip2.jpg" className="d-block w-100" alt="snip2" />
            </div>
            <div className="carousel-item">
              <img src="snip3.jpg" className="d-block w-100" alt="snip3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
