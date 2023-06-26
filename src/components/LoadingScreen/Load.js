import React from "react";
import "./Load.css";
import { Images } from "../Images/Images";

const Load = () => {
  return (
    <div>
      <div
        className="d-flex flex-column align-items-center justify-content-center vh-100"
        style={{ backgroundColor: "#0d0e10" }}
      >
        <h2 className="image-loader-h2-header">Welcome to WooX</h2>
        <img
          className="image-loader"
          src={Images[0].ImageCartLoading2}
          alt="imageLoad"
        />
        <h2 className="image-loader-h2">Loading...</h2>
      </div>
    </div>
  );
};

export default Load;
