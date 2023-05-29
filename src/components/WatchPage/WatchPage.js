import ProductWatch from "../Products/ProductWatch/ProductWatch";
import React, { forwardRef } from "react";
import VideoIphone from "../IphonePage/iphone.mp4";
import "./Video.css";

const WatchPage = forwardRef((props, ref) => {
  return (
    <section style={{ backgroundColor: "black" }}>
      <div className="video-container">
        <video ref={ref} autoPlay loop muted>
          <source src={VideoIphone} type="video/mp4" />
        </video>
      </div>
      <h2
        style={{
          color: "white",
          paddingTop: "10%",
          paddingBottom: "5%",
          fontSize: "66px",
          fontFamily: "-moz-initial"
        }}
        className="d-flex justify-content-center"
      >
        Products
      </h2>
      <div style={{paddingBottom: "5%"}}>
      <ProductWatch />
      </div>
    </section>
  );
});

export default WatchPage;
