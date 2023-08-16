import React from "react";
import Header from "./header";
import Footer from "./footer";
const Card= () => {
  return (
    <>
  <Header />
  
    <div className="card-container">
      
      <div className="card" style={{ width: "18rem", border: '1px solid black', margin: '60px' }}>
        <img
          src="https://www.sportsadda.com/static-assets/waf-images/28/af/fc/16-9/nWA9qdC9pF.jpg?v=1.3&w=420%20420w"
          style={{ height: '200px', width: '600px', objectFit: 'cover' }}
          className="card-img-top"
          alt="Rohit Sharma"
        />
        <div className="card-body">
          <h5 className="card-title">Rohit Sharma🏏</h5>
          <p className="card-text">
            Rohit Gurunath Sharma, is an Indian international cricketer and the current captain of India men’s six-hitting abilities and leadership skills.
          </p>
          <a href="https://www.youtube.com/watch?v=BxjIvl51BBE" className="btn btn-primary">
            Hit it
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", border: '1px solid black', margin: '60px' }}>
        <img
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/364400/364496.jpg"
          style={{ height: '200px', width: '600px', objectFit: 'cover' }}
          className="card-img-top"
          alt="Virat Kohli"
        />
        <div className="card-body">
          <h5 className="card-title">Virat Kohli🏏</h5>
          <p className="card-text">
            Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen ...
          </p>
          <a href="https://youtu.be/cXxfvdVFt58" className="btn btn-primary">
           Run it
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", border: '1px solid black', margin: '60px' }}>
        <img
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS_Q-fRFfDWAEfOcz_R0vktnglTXYO4EKn9z8bBlX6mgl4cobbtQ8K4KZFq46SSM4ArMq51ma5AZGxc62Y"
          style={{ height: '200px', width: '600px', objectFit: 'cover' }}
          className="card-img-top"
          alt="MS Dhoni"
        />
        <div className="card-body">
          <h5 className="card-title">MS Dhoni🏏</h5>
          <p className="card-text">
            Mahendra Singh Dhoni is an Indian professional cricketer. He was captain of the Indian national team in limited-overs formats from 2007 to 2017
          </p>
          <a href="https://www.youtube.com/watch?v=R0alThHNb0Y&pp=ygUibXMgZGhvbmkgZmluaXNoaW5nIHdvcmxkIGN1cCAyMDExIA%3D%3D" className="btn btn-primary">
           Cool it
          </a>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default Card;
