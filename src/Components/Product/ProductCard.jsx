import React from "react";

import "./ProductCard.css";


import { Link } from "react-router-dom";

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Rating from '@material-ui/lab/Rating';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

import VisibilityIcon from '@material-ui/icons/Visibility';

function ProductCard (props) {

    const [value, setValue] = React.useState(3);
    
    return (
        <>
            
            <section className="product_card_container">
                
                <div className="product_card_image_container">

                    <img className="product_card_img" src={props.product_card_img} alt=" Product Image "/>
                    
                    <div className="product_status">
                        {props.product_status}
                    </div>

                    <Link to="#">
                        <div className="product_card_add_to_cart">
                            <div>
                                <AddShoppingCartIcon style={{fontSize:"1.4rem"}}/>
                            </div>
                            <div>
                                <h4> Add To Cart </h4>
                            </div>
                        </div>
                    </Link>

                    <div className="product_card_side_icon_container">
                        <div>
                            <FavoriteBorderIcon style={{fontSize: "1.3rem", padding: "0.1rem"}}/>
                        </div>
                        <div>
                            <CompareArrowsIcon style={{fontSize: "1.3rem" , padding: "0.1rem"}}/>
                        </div>
                        <div>
                            <VisibilityIcon style={{fontSize: "1.3rem" , padding: "0.1rem"}}/>
                        </div>
                    </div>
                </div>

                <div className="product_card_details">
                
                    <h4> {props.dress_type} </h4>
                    <h5> {props.product_name} </h5>
                    <h6> {props.product_price} </h6>
                    
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />

                    <div className="product_card_preview">
                        <div>
                            <Link to="#"> <img src={props.product_card_preview_1} alt="Product Preview"/> </Link>
                        </div>

                        <div>
                            <Link to="#"> <img src={props.product_card_preview_2} alt="Product Preview"/> </Link>
                        </div>
                        
                        <div>
                            <Link to="#"> <img src={props.product_card_preview_3} alt="Product Preview"/> </Link>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default ProductCard;