import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../constants/EquipmentsData";
import {
  Box,
  Button,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles({
  component: {
    marginTop: 12,
    background: "#F3F7FB",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
    background: "#ffffff !important",

  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    scrollSnapAlign: "center",
  },
  image: {
    height: 150,
  },
  Button: {
    marginLeft: "auto",
    backgroundColor: "#24AEB1",
    textEmphasisColor:"white" ,
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    fontSize: 14,
    marginRight: 5,
    
  },
  wrapper: {
    padding: "35px 15px",
  },
});

const Equipments = ({ timer, title,product }) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} Left{" "}
      </span>
    );
  };

  return (
    <>
      <Box className={classes.component}>
        <Box className={classes.deal}>
          <Typography className={classes.dealText}>{title}</Typography>
          {timer && (
            <>
              <img src={timerURL} alt="Timer" style={{ width: 24 }} />
              <Countdown date={Date.now() + 5.04e7} renderer={renderer} />,
              <Button
                variant="contained"
                color="primary"
                className={classes.Button}
              >
                <Link to="/product" style={{color:"white"}}> View All</Link>
              </Button>
            </>
          )}
        </Box>
        <Divider />
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product) => (
            <>
              {" "}
              <Link to="/product">
                <Box textAlign="center" className={classes.wrapper}>
                  <img src={product.url} className={classes.image} alt="" />
                  <Typography
                    className={classes.text}
                    style={{ fontWeight: 600, color: "#212121" }}
                  >
                    {product.title.shortTitle}
                  </Typography>
                  <Typography
                    className={classes.text}
                    style={{ color: "green" }}
                  >
                    {product.discount}
                  </Typography>
                  <Typography
                    className={classes.text}
                    style={{ color: "#212121", opacity: ".6" }}
                  >
                    {product.tagline}
                  </Typography>
                </Box>
              </Link>
            </>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Equipments;
