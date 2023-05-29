import ProductIPhone from "../Products/ProductIphone/ProductIphone";
import VideoIphone from "../IphonePage/iphone.mp4";
import React, { forwardRef } from "react";
import "./Video.css";

const IPhonePage = forwardRef((props, ref) => {
  return (
    <section className="page-background">
      <div className="video-container">
        <video ref={ref} autoPlay loop muted>
          <source src={VideoIphone} type="video/mp4" />
        </video>
      </div>
      <h2 className="product-group-header">Products</h2>
      <ProductIPhone />
    </section>
  );
});

export default IPhonePage;
