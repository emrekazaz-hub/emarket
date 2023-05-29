import React from "react";
import appleIphoneImg from "../Images/iphone-14-pro-finish-unselect-gallery-1-202209_GEO_EMEA.jpg";
import appleWatchImg from "../Images/gps-lte__gi7uzrvkt5e2_og.png";
import appleWatchImg2 from "../Images/apple-watch-colors.jpeg";
import "./Page.css";

const Page = () => {
  return (
    <section style={{backgroundColor: "black"}}>
      <div className="container">
        <h2 style={{display: "flex", justifyContent: "center", paddingTop: "5%", fontSize: "65px", color: "white", fontFamily: "-moz-initial"}}>Apple</h2>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={appleWatchImg} class="d-block w-100" alt="appleWatchImg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Buraya bir metin girilecek.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={appleIphoneImg} class="d-block w-100" alt="appleIphoneImg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={appleWatchImg2} class="d-block w-100" alt="appleWatchImg2" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
