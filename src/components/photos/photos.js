import React from "react";
import photo1 from "../assets/img/cock1.jpg";
import photo2 from "../assets/img/cock2.jpg";
import photo3 from "../assets/img/cock3.jpg";
import photo4 from "../assets/img/cock4.jpg";
import photo5 from "../assets/img/cock5.jpg";
import "./photos.css";

function Photos() {
  return (
    <div className="photos__inner">
      <div className="photos__container-wrapper">
        <img src={photo1} alt="post-photo" />
        <img src={photo2} alt="post-photo" />
        <img src={photo3} alt="post-photo" />
        <img src={photo4} alt="post-photo" />
        <img src={photo5} alt="post-photo" />
      </div>
    </div>
  );
}
export default Photos;
