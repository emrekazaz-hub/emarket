import ProductAirpods  from "../Products/ProductAirpods/ProductAirpods";
import VideoAirpods from "../AirpodsPage/videoplayback.mp4"
import VideoAirpods2 from "../AirpodsPage/AppleAirPods - Official Trailer.mp4";
import React, { forwardRef } from "react";
import "./Video.css";

const AirpodsPage = forwardRef((props, ref) => {
    return (
        <section className="page-background">
          <div className="video-container">
            <video ref={ref} autoPlay loop muted>
              <source src={VideoAirpods} type="video/mp4" />
            </video>
          </div>
          <h2 className="product-group-header">Products</h2>
          <div style={{paddingTop : "15%"}}>
            <ProductAirpods />
          </div>
          <div className="video-container fixed">
            <video ref={ref} autoPlay loop muted>
              <source src={VideoAirpods2} type="video/mp4" />
            </video>
          </div>
        </section>
      );
    });

export default AirpodsPage;