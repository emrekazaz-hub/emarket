import React, { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import appleIphoneImg from "../Images/iphone-14-pro-finish-unselect-gallery-1-202209_GEO_EMEA.jpg";
import appleWatchImg from "../Images/gps-lte__gi7uzrvkt5e2_og.png";
import appleWatchImg2 from "../Images/apple-watch-colors.jpeg";
import appleIpadImg from "../Images/Apple-iPad-10th-gen-hero-221018.jpg.og.jpg";
import appleMacBooxIMg from "../Images/og-macbook-pro-202301.jpg";
import appleAirpodsImg from "../Images/wp4823412.png";
import { Images } from "../Images/Images";

import "./Card.css";

const Card = () => {
  useEffect(() => {
    var carousel = document.querySelector("#carouselExampleSlidesOnly");
    var carouselInstance = new Carousel(carousel, {
      interval: 2000,
      pause: false,
      wrap: true,
    });
  }, []);

  const navigate = useNavigate();
  const handleCardClick = (url) => {
    navigate(url);
  };

  return (
    <div>
      {/* AUTO PLAY SLAYT */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Images[0].ImageAppleWatch}
              className="img-fluid"
              alt="appleWatchImg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Images[0].ImageIphone2}
              className="img-fluid"
              alt="appleIphoneImg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Images[0].ImageAppleWatch2}
              className="img-fluid"
              alt="appleWatchImg2"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Images[0].ImageIPad}
              className="img-fluid"
              alt="appleIpadImg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Images[0].ImageMacBook}
              className="img-fluid"
              alt="appleMacBooxIMg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Images[0].ImageAirpods3}
              className="img-fluid"
              alt="appleAirpodsImg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
        </div>
      </div>

      {/* CARDS */}
      <h2 className="cards-header">Products</h2>
      <div
        className="row row-cols-1 row-cols-md-3 g-5"
        style={{ paddingTop: "5%" }}
        id="toProducts"
      >
        <div className="col d-flex justify-content-center">
          <div
            className="card card-hover card-center"
            style={{ maxWidth: "48rem" }}
          >
            <img
              src={Images[0].ImageAppleWatch}
              className="card-img-top"
              alt="appleWatchImg"
              style={{ objectFit: "cover", height: "500px" }}
              onClick={() => handleCardClick("/WatchPage")}
            />
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div
            className="card card-hover card-center"
            style={{ maxWidth: "48rem" }}
          >
            <img
              src={Images[0].ImageIphone2}
              className="card-img-top"
              alt="..."
              style={{ objectFit: "cover", height: "500px" }}
              onClick={() => handleCardClick("/IPhonePage")}
            />
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div
            className="card card-hover card-center"
            style={{ maxWidth: "48rem" }}
          >
            <img
              src={appleIpadImg}
              className="card-img-top"
              alt="..."
              style={{ objectFit: "cover", height: "500px" }}
              onClick={() =>
                handleCardClick("/IPadPage")
              }
            />
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div
            className="card card-hover card-center"
            style={{ maxWidth: "48rem" }}
          >
            <img
              src={appleMacBooxIMg}
              className="card-img-top"
              alt="..."
              style={{ objectFit: "cover", height: "500px" }}
              onClick={() =>
                handleCardClick("/MacBookPage")
              }
            />
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div
            className="card card-hover card-center"
            style={{ maxWidth: "48rem" }}
          >
            <img
              src={appleAirpodsImg}
              className="card-img-top"
              alt="..."
              style={{ objectFit: "cover", height: "500px" }}
              onClick={() => handleCardClick("/AirpodsPage")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
