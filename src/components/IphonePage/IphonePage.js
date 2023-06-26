import ProductIPhone from "../Products/ProductIphone/ProductIphone";
import VideoIphone from "../IphonePage/iphone.mp4";
import React, { forwardRef, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Video.css";

const IPhonePage = forwardRef((props, ref) => {

  useEffect(() => {
    toast.info('iPhone products will not be displayed because they are listed on the server. Please run it with the server to list the products !!!');
  },[]);

  return (
    <section className="page-background">
      <div className="video-container">
        <video ref={ref} autoPlay loop muted>
          <source src={VideoIphone} type="video/mp4" />
        </video>
      </div>
      <h2 className="product-group-header">Products</h2>
      <ProductIPhone />
      <div className="video-container">
        <video ref={ref} autoPlay loop muted>
          <source
            src="https://cdn.dribbble.com/users/52573/screenshots/14385624/media/c8ef34e2f7810fb0359ac519b755500b.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
});

export default IPhonePage;
