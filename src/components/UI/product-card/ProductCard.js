import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './product-card.css'

const ProductCard = (props) => {
  const { id, title, working_time, image, desc, github, website } = props.item;
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={image} alt="product-img" className="w-50" />
      </div>
      <div className="product_content">
         <h5><Link to= {`/foods/${id}`}> Project Name: {title} </Link> </h5>
         <h6> Project Period: {working_time}  </h6>
         <div className="product_desc">
         <p> Description: {desc}</p>
         </div>
          
      </div>
      <div className="product_link">
      <div className="home_btn d-flex justify-content-center pt-4">
        <Button className="btn btn-primary"> 
            <a href={github} target='_blank'> Github</a>
        </Button>
        <Button className="btn btn-primary">
        <a href={website} target='_blank'> Website</a>
        </Button>   
      </div>
    </div>
    </div>
  );
};
export default ProductCard;
