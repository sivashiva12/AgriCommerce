import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
          <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          It is an organic Product made completely from Farm without the Essence of Chemical Products.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Quantity</h1>
          <div className="productdisplay-right-sizes">
            <div>100G</div>
            <div>250G</div>
            <div>500G</div>
            <div>750G</div>
            <div>1000G</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Kitchen Essentials,Snacks,Combo</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Organic</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
