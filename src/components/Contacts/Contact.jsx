import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import "./Contacts.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const style = {
  width: "800px",
  marginTop: "100px",
  background: "rgba(255, 255, 255, 0.1)",
  border: "3px solid #616161",
};

const styleInput = {
  border: "3px solid #616161",
};

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: "#e0e0e0" }}>
      <Grid maxWidth="lg" sx={{ margin: "0 auto" }}>
        {open ? (
          <center>
            <Card style={style}>
              <CardContent>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        label="First Name"
                        placeholder="Enter first name"
                        style={{ textAlign: "center" }}
                        disableElevation
                        variant="outlined"
                        fullWidth
                        color="warning"
                      />
                    </Grid>

                    <Grid xs={12} sm={6} item>
                      <TextField
                        label="Last Name"
                        placeholder="Enter  last name"
                        style={{ textAlign: "center" }}
                        disableElevation
                        variant="outlined"
                        fullWidth
                        required
                        color="success"
                      />
                    </Grid>

                    <Grid xs={12} item>
                      <TextField
                        type="email"
                        label="Email"
                        placeholder="Enter  email"
                        style={{ textAlign: "center" }}
                        disableElevation
                        variant="outlined"
                        fullWidth
                        required
                        color="primary"
                      />
                    </Grid>

                    <Grid xs={12} item>
                      <TextField
                        type="number"
                        label="Phone"
                        placeholder="Enter phone number"
                        style={{ textAlign: "center" }}
                        disableElevation
                        variant="outlined"
                        fullWidth
                        required
                        color="success"
                      />
                    </Grid>

                    <Grid xs={12} item>
                      <TextField
                        label="Message"
                        placeholder="Type your message"
                        style={{ textAlign: "center" }}
                        disableElevation
                        variant="outlined"
                        //   style={border: 2px}
                        fullWidth
                        required
                        multiline
                        rows={4}
                        color="success"
                      />
                    </Grid>

                    <Grid xs={12} item>
                      <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        //   color="success"
                        onClick={() => setOpen(false)}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                  <Button
                    sx={{ marginTop: "5px", background: "grey" }}
                    variant="contained"
                    fullWidth
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </Button>
                </form>
              </CardContent>
            </Card>
          </center>
        ) : (
          <div>
            <Grid container maxWidth="lg">
              <Grid item lg={6} sx={{ marginTop: "13vh" }}>
                <Grid item lg={12}>
                  {" "}
                  <Typography className="grid-text" variant="h2">
                    Connect
                  </Typography>
                </Grid>

                <Grid item lg={12} sx={{ marginTop: "7vh" }}>
                  <Typography
                    sx={{ fontSize: 20 }}
                    color="text.black"
                    gutterBottom
                    maxWidth="sm"
                  >
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    id consectetur quae, inventore qui nesciunt dolorum nemo,
                    fuga mollitia vitae sapiente ducimus eum adipisci dolore
                    quibusdam nobis labore. Error, fugit!.”
                  </Typography>
                </Grid>

                <Grid item lg={12}>
                  {" "}
                  <Typography
                    data-aos="fade-up-left"
                    sx={{ fontSize: 20 }}
                    color="text.black"
                    gutterBottom
                    maxWidth="sm"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    veniam unde eum? Nobis rem tenetur ducimus delectus aperiam,
                    cupiditate deserunt cumque mollitia, laudantium neque
                    facilis quos, necessitatibus non sapiente officia.
                  </Typography>
                </Grid>

                <Grid lg={12} sx={{ marginTop: "10vh" }}>
                  <Link
                    //   href="https://google.com"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 900,
                      fontSize: "22px",
                      textDecoration: "none",
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <LocalPhoneOutlinedIcon
                      className="grid-icon"
                      color="#424242"
                      sx={{ marginRight: "1vw", transition: "all 0.3s ease" }}
                    />
                    +996 705 272766
                  </Link>

                  <Link
                    href="https://google.com"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 900,
                      fontSize: "22px",
                      textDecoration: "none",
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <InstagramIcon
                      color="#424242"
                      sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
                      className="grid-icon"
                    />
                    Yurt_apartment
                  </Link>

                  <Link
                    href="https://google.com"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 900,
                      fontSize: "22px",
                      textDecoration: "none",
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <GitHubIcon
                      className="grid-icon"
                      color="#424242"
                      sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
                    />
                    yurt_apartment@gmail.com
                  </Link>

                  <Link
                    href="https://google.com"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 900,
                      fontSize: "22px",
                      textDecoration: "none",
                    }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <FacebookOutlinedIcon
                      className="grid-icon"
                      color="#424242"
                      sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
                    />
                    Yurt_apartment
                  </Link>
                </Grid>
              </Grid>
              <div className="contacts_img">
                <Grid item lg={6}>
                  {itemData.map((item) => (
                    <img src={`${item.img}`} />
                  ))}
                </Grid>
              </div>
            </Grid>

            <center>
              <Button
                className="grid-button"
                variant="contained"
                onClick={() => setOpen(true)}
              >
                Сonnect with us
              </Button>
            </center>
          </div>
        )}
      </Grid>
    </div>
  );
};

const itemData = [
  {
    img: "https://esquilo.io/png/thumb/U4kTMbHAOfOQVxf-Taj-Mahal-Fort-PNG-Clipart.png",
  },
];

export default Contact;
