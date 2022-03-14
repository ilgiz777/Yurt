import { Badge, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useProducts } from "../../contexts/ProductContext";
// import MediaCard from "../ProductCard/ProductCard";

// import "../ProductList/ProductList/.css";
// import "./ProductList.css";
import { useAuth } from "../../contexts/AuthContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  //   const { cart } = useProducts();

  const {
    user: { email },
  } = useAuth();

  const { getProducts, products } = useProducts();

  //   const [searchParams, setSearchParams] = useSearchParams();

  //   const [search, setSearch] = useState(
  //     searchParams.get("q") ? searchParams.get("q") : ""
  //   );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="blog-left">
        <Grid container spacing={6}>
          {products ? (
            products.map((item) => (
              <Grid item>
                <ProductCard item={item} key={item.id} />
              </Grid>
            ))
          ) : (
            <>
              <h2>..Loading</h2>
            </>
          )}
        </Grid>
      </div>
    </>
  );
};

export default ProductList;
