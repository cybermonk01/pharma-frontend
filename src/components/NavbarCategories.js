import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { NavData } from "../constants/NavData.js";
import { Link } from "react-router-dom";
import "./NavbarCategories.css";

const useStyles = makeStyles((theme) => ({
  component: {
    display: "flex",
    margin: "12px 30px 0 30px",
    justifyContent: "space-between",
    // backgroundColor: "rgb(191,139,156)",
    // background: "linear-gradient(to bottom right, #ccffff 20%, #3399ff 100%)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.action.hover, // Use theme hover color
    },
  },
  image: {
    width: 64,
    marginBottom: theme.spacing(1), // Add some spacing below the image
  },
  text: {
    marginTop: theme.spacing(1), // Add some spacing above the text
    fontSize: 14,
    fontWeight: 600,
  },
}));

const NavbarCategories = () => {
  const classes = useStyles();

  return (
    // <Box className={classes.component}>
    <div className="superContainer">
      <div class="container">
        <div class="innerContainer">
          <ul class="innerMostContainer">
            <li>
              <a href="/product">AK Products</a>
            </li>
            <li>
              <a href="/product">Baby Care</a>
            </li>
            <li>
              <a href="/product">Health Drinks &amp; Supplements</a>
            </li>
            <li>
              <a href="/product">Women Care</a>
            </li>
            <li>
              <a href="/product">Personal Care</a>
            </li>
            <li>
              <a href="/product">Ayurveda</a>
            </li>
            <li>
              <a href="/product">Health Devices</a>
            </li>
            <li>
              <a href="/product">Home Essentials</a>
            </li>
            <li>
              <a href="/product">Health Condition</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarCategories;

{
  /* {NavData.map((data, index) => (
  <Link to="/product" key={index} className={classes.container}>
    <img src={data.url} className={classes.image} alt="" />
    <Typography className={classes.text}>{data.text}</Typography>
  </Link>
))} */
}
// </Box>
