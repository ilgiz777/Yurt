import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <Card className="div_cart" sx={{ borderRadius: 3 }}>
        <div className="cardProduct">
          <CardMedia
            className="cart_img"
            sx={{ borderRadius: 2 }}
            component="img"
            height="300"
            image={item.picture}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {item.description}
            </Typography>
          </CardContent>
        </div>

        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
      </Card>
    </>
  );
};

export default ProductCard;
