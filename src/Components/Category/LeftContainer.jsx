import React from 'react';
import './LeftContainer.css';
import Button from 'react-bootstrap/Button';

const LeftContainer = (props) => {
    return(
        <>
      <section>    
<figure class="left_content_container">
  <div class="left_content_image">
    <img src={props.img} alt="sq-sample15"/>
    <div class="left_content_icons">
      <a href="#"><i class="left_content_ion-star"></i></a>
      <a href="#"> <i class="left_content_ion-share"></i></a>
      <a href="#"> <i class="left_content_ion-search"></i></a>
    </div>
    <a href="#" class="left_content_add-to-cart">Add to Cart</a>
  </div>
  <figcaption>
    <h2>{props.title}</h2>
    <p>{props.data}</p>
    <span class="left_content_price"> {props.price} </span>
  </figcaption>
</figure>
</section>

        </>
    );
}

export default LeftContainer;