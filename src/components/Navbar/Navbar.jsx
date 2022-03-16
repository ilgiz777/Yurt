import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/images/Yurt.webp";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import "./Navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
import { useProducts } from "../../contexts/ProductContext";

const pages = [
  { name: "PRODUCTS", link: "/products", id: 1 },
  { name: "ABOUT US", link: "/aboutus", id: 2 },
  { name: "CONTACTS", link: "/contacts", id: 3 },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const { cart } = useProducts();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar id="navbar_color" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                YURT
              </Button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/444/444860.png"
                alt=""
              />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {/* ADMIN PANEL */}
              {email == ADMIN ? (
                <MenuItem>
                  <Link to="/admin">
                    <Typography textAlign="center">ADMIN PANNEL</Typography>
                  </Link>
                </MenuItem>
              ) : null}
              {/* ADMIN PANEL */}
            </Menu>
          </Box>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              {/* <img className="logo" src={Logo} alt="" /> */}
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link}>
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "#fafafa",
                    display: "block",
                    fontSize: 16,
                    fontFamily: "sans-serif",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}

            {/* ADMIN PANEL */}
            {email == ADMIN ? (
              <Link to="/admin">
                <Button
                  sx={{
                    my: 3,
                    color: "#fafafa",
                    display: "block",
                    fontSize: 16,
                    fontFamily: "sans-serif",
                  }}
                >
                  ADMIN PANEL
                </Button>
              </Link>
            ) : (
              <Link to="/cart">
                <Button sx={{ my: 2, color: "#e53935" }}>
                  <Badge
                    badgeContent={cart?.products ? cart.products.length : 0}
                    color="secondary"
                  >
                    <FavoriteIcon />
                  </Badge>
                </Button>
              </Link>
            )}
            {/* ADMIN PANEL */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {email ? (
              <Button
                id="button"
                variant="outlined"
                color="error"
                sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : null}

            {email ? null : (
              <Link to="/auth">
                <Button
                  id="button"
                  variant="outlined"
                  color="error"
                  sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
                  onClick={handleLogout}
                >
                  Login
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
