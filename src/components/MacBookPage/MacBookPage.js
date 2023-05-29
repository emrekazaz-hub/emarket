import ProductMacBook  from "../Products/ProductMacBook/ProductMacBook";
import VideoMac from "../MacBookPage/Adsiztasarim.mp4";
import React, { forwardRef } from "react";
import "./Video.css";

const MacBookPage = forwardRef((props, ref) => {
  return (
    <section className="page-background">
      <div className="video-container">
        <video ref={ref} autoPlay loop muted>
          <source src={VideoMac} type="video/mp4" />
        </video>
      </div>
      <h2 className="product-group-header">Products</h2>
      <ProductMacBook />
    </section>
  );
});

export default MacBookPage;