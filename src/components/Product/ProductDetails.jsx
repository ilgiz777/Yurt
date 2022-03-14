import { Button, Rating } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
// import { useProducts } from "../../contexts/ProductContext";
// import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div
      className="details-wrap"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div></div>
      <img id="details-img" src={productDetails.picture} alt="" />

      <div className="details-list">
        <div className="details-list_name">
          <h2 className="title">{productDetails.name}</h2>
          <div className="type">
            <h3>{productDetails.type}</h3>
            <h2>{productDetails.genre}</h2>

            <Rating name="size-medium" defaultValue={4} />
          </div>
        </div>
        <div className="details-list_price">
          <h5 id="price_none" className="price">
            {+productDetails.price + +1000}$
          </h5>
          <h3 className="price">{productDetails.price}$</h3>
          <hr />
          <h5 className="descr">{productDetails.description}</h5>
        </div>
        <Link to="/products">
          <Button
            variant="outlined"
            color="error"
            sx={{ ml: "15vh", bgcolor: "#eeff41" }}
          >
            {/* <BsArrow90DegLeft /> */}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
