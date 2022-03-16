import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useProducts } from "../../contexts/ProductContext";
import { ADMIN } from "../../helpers/consts";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
  const { cart } = useProducts();

  const {
    user: { email },
  } = useAuth();
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
            alt="green"
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

        <CardActions>
          {email === ADMIN ? (
            <>
              <Button size="small" onClick={() => deleteProduct(item.id)}>
                DELETE
              </Button>
              <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                EDIT
              </Button>
            </>
          ) : (
            <>
              <IconButton onClick={() => addProductToCart(item)}>
                <FavoriteIcon
                  color={checkProductInCart(item.id) ? "seccondary" : ""}
                />
              </IconButton>
            </>
          )}

          <span onClick={() => navigate(`/products/${item.id}`)}>more...</span>
          <button className="dislikes">
            <Badge
              badgeContent={cart?.products ? cart.products.length : 0}
              // color="secondary"
            >
              <ThumbDownAltIcon />
            </Badge>
          </button>
          <button className="likes">
            <ThumbUpIcon />
          </button>
        </CardActions>
        <div className="comment__container">
          {/* <h1 className="comment__title">Add a new comment</h1> */}
          <div className="comment__body">
            {/* <img
            src="https://api.adorable.io/avatars/50/arefn@codepen"
            className="comment__avatar"
            alt="avatar"
          /> */}
            <div>
              <textarea
                className="comment__textarea"
                placeholder="Type your message ..."
                rows="4"
              ></textarea>
              <div className="comment__post">
                <div>
                  <button
                    className="comment__send"
                    onClick={() => navigate("/products")}
                    // onClick={() => {
                    //   addProduct(product);

                    //   navigate("/products");
                    // }
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
