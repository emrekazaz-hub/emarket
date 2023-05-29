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
              src={appleWatchImg}
              className="img-fluid"
              alt="appleWatchImg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={appleIphoneImg}
              className="img-fluid"
              alt="appleIphoneImg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={appleWatchImg2}
              className="img-fluid"
              alt="appleWatchImg2"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={appleIpadImg}
              className="img-fluid"
              alt="appleIpadImg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={appleMacBooxIMg}
              className="img-fluid"
              alt="appleMacBooxIMg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={appleAirpodsImg}
              className="img-fluid"
              alt="appleAirpodsImg"
              style={{ width: "100%", height: "1000px" }}
            />
          </div>
        </div>
      </div>

      {/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
      <div className="card text-bg-dark" style={{ border: "none" }}>
        <img src={appleIphoneImg} className="card-img" alt="appleIphoneImg" />
        <div className="card-img-overlay" style={{ color: "black" }}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
        </div>
      </div>

      <div className="card text-bg-dark">
        <img src={appleWatchImg2} alt="appleWatchImg2" />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
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
              src={appleWatchImg}
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
              src={appleIphoneImg}
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
              src={appleWatchImg2}
              className="card-img-top"
              alt="..."
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
