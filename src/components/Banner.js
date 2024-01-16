import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles, useTheme } from "@material-ui/core";
import { BannerData } from "../constants/BannerData";
import { Route } from "react-router-dom";
import SearchBox from "./SearchBox";
import "./Banner.css";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#162C2A",
    // maxWidth: "1340px",
    height: "50vh",
    margin: " -10px auto",
    backgroundImage:
      "url(https://images.apollo247.in/images/ui_revamp_searchBanner1.svg),url(https://images.apollo247.in/images/ui_revamp_searchBanner2.svg)",
    backgroundPosition: "0 100%,100% 100%",
    backgroundRepeat: "no-repeat",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "45vh", // Adjust the height as needed
  },
  image: {
    width: "400px",
    height: "auto",
    // [theme.breakpoints.down("sm")]: {
    //   height: 180,
    // },
  },
  carouselNavButton: {
    color: "#fff",
    backgroundColor: "#3498db", // Updated button background color
    borderRadius: "50%", // Circular border radius
    margin: 0,
    width: 40,
    height: 40,
    "&:hover": {
      backgroundColor: "#2980b9", // Updated button background color on hover
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      className={classes.container}
      navButtonsProps={{
        style: {
          color: theme.palette.common.white,
        },
      }}
    >
      {/* {BannerData.map((image, index) => (
        <div key={index} className={classes.imageContainer}>
          <img
            src={image}
            className={classes.image}
            alt={`Banner ${index + 1}`}
          /> */}
      <div className="searchContainer">
        <h1 className="headings">Buy Medicines and Essentials</h1>
        <div className="searchOuterBox">
          <a href="https://imgbb.com/">
            <img
              src="https://i.ibb.co/vJWfYmG/loupe.png"
              alt="loupe"
              border="0"
              width="20px"
            />
          </a>
          <Route
            className="searchBox"
            render={({ history }) => <SearchBox history={history} />}
          />
        </div>
      </div>
      {/* </div>
      ))} */}
    </Carousel>
  );
};

export default Banner;
