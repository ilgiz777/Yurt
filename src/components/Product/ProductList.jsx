import { Badge, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useProducts } from "../../contexts/ProductContext";
import { useAuth } from "../../contexts/AuthContext";
import ProductCard from "./ProductCard";
import { Link, useSearchParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ADMIN } from "../../helpers/consts";
const ProductList = ({ products }) => {
  const { cart } = useProducts();

  const {
    user: { email },
  } = useAuth();

  const { getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div>
        <TextField
          label="Search"
          variant="standard"
          sx={{ margin: "2vw", width: "35vw" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {email == ADMIN ? null : (
          <Link to="/cart">
            <Button sx={{ my: 2, color: "white" }}>
              <Badge badgeContent={cart?.products ? cart.products.length : 0}>
                <FavoriteIcon sx={{ color: "#f0a500" }} />
              </Badge>
            </Button>
          </Link>
        )}

        <Grid container spacing={6}>
          {products ? (
            products.map((item) => (
              <Grid item>
                {/* <ProductCard item={item} key={item.id} /> */}
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
    </div>
  );
};

export default ProductList;
