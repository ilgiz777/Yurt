import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
// import "./styles/AddProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
    genre: "",
  });

  const navigate = useNavigate();
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <div>
      <Box sx={{ bgcolor: "#ffe0b2", height: "100vh", padding: "20vh auto" }}>
        <center variant="h6" gutterBottom>
          EDIT PRODUCT
        </center>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: "10vh auto",
            boxShadow: 3,
            borderRadius: 3,
            bgcolor: "#ffcc80",
          }}
        >
          <form>
            <TextField
              value={product.name}
              fullWidth
              id="outlined-basic"
              label="NAME"
              variant="outlined"
              name="name"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.description}
              fullWidth
              id="outlined-basic"
              label="DESCRIPTION"
              variant="outlined"
              name="description"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.price}
              fullWidth
              id="outlined-basic"
              label="PRICE"
              variant="outlined"
              name="price"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.picture}
              fullWidth
              id="outlined-basic"
              label="PICTURE"
              variant="outlined"
              name="picture"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.type}
              fullWidth
              id="outlined-basic"
              label="TYPE"
              variant="outlined"
              name="type"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.genre}
              fullWidth
              id="outlined-basic"
              label="GENRE"
              variant="outlined"
              name="genre"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <Stack direction="row" spacing={2} sx={{ bgcolor: "#880e4f" }}>
              <Button
                id="button"
                sx={{
                  bgcolor: "#263238",
                  borderColor: "error.main",
                  fontFamily: "Monospace",
                }}
                color="error"
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => {
                  saveEditedProduct(product);
                  navigate("/products");
                }}
              >
                EDIT PRODUCT
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default EditProduct;
