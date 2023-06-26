import ProductWatch from "../Products/ProductWatch/ProductWatch";
import React, { forwardRef } from "react";
import { useRef, useEffect } from 'react';
import VideoIphone from "../IphonePage/iphone.mp4";
import "./Video.css";

const WatchPage = forwardRef((props, ref) => {

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const resizeVideo = () => {
      const containerHeight = document.querySelector('.video-container').clientHeight;
      videoElement.style.height = `${containerHeight}px`;
    };

    resizeVideo();
    window.addEventListener('resize', resizeVideo);

    return () => {
      window.removeEventListener('resize', resizeVideo);
    };
  }, []);

  return (
    <section style={{ backgroundColor: "black" }}>
      <div className="video-container">
        <video ref={videoRef} autoPlay loop muted>
          <source src="https://cdn.dribbble.com/userupload/4281349/file/original-33ecb4908f0fa6aeb16913901b884823.mp4" type="video/mp4" />
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
      <div className="video-container">
        <video ref={videoRef} autoPlay loop muted>
          <source src="https://cdn.dribbble.com/users/987543/screenshots/14888128/media/25f4841b146a02534ef639f81d936714.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
});

export default WatchPage;
