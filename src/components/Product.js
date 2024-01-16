import React from "react";

import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="outer-card">
      <Card className="product-card">
        <Link to={`/product/${product._id}`} className="inner-card">
          <div className="ribbon">
            <span className="ribbon-text">BestSeller</span>
          </div>
          <Card.Img className="immg" src={product.image} variant="top" />
        </Link>

        <Card.Body className="details">
          <div>
            <Link to={`/product/${product._id}`}>
              <br></br>

              <div className="product-name">
                <p>{product.name}</p>
              </div>
            </Link>

            <div class="prc">
              <img
                src="https://images.apollo247.in/images/ic_circle_logo.png"
                alt="Circle"
              />
              ₹5.00 extra cashback
            </div>
            <div className="priceGrp">
              <span className="MRP">MRP </span>
              <span className="priceCut">(₹{product.price})</span>
              <span className="price">₹{product.price}</span>
            </div>
          </div>
        </Card.Body>
        <Link to={`/product/${product._id}`}>
          <button
            className="primBtn"
            style={{
              backgroundColor: "#165D59",
              width: "100%",
              fontSize: "14px",
              fontWeight: "900",
              borderRadius: "4px",
              padding: "11px 0 7px",
              border: "0",
              color: "#fff",
              textTransform: "uppercase",
              fontFamily: "LatoBold!important",
              cursor: "pointer",
            }}
            type="submit"
            title="ADD TO CART"
          >
            ADD TO CART
          </button>
        </Link>
      </Card>
    </div>
  );
};

export default Product;
