import React from "react";
import "./Load.css";
import imageLoad from "../Images/7bdf164aaed98d4336084d0b33e3e588.gif";
import { Images } from "../Images/Images";

const Load = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <img className="image-loader" src={Images[0].ImageCartLoading} alt="imageLoad" />
      <h2 className="image-loader-h2">Loading...</h2>
    </div>
  );
}

export default Load;
