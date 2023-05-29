import ProductIPad  from "../Products/ProductIPad/ProductIPad";
import VideoIPad from "../IPadPage/ipad-reverse-convert.mp4";
import "./Video.css";
import React, { forwardRef } from "react";

const IPadPage = forwardRef((props, ref) => {
    return (
      <section className="page-background">
        <div className="video-container">
          <video ref={ref} autoPlay loop muted>
            <source src={VideoIPad} type="video/mp4" />
          </video>
        </div>
        <h2 className="product-group-header">Products</h2>
        <ProductIPad />
      </section>
    );
  });

export default IPadPage;