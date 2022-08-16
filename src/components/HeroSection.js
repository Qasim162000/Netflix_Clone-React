import React from "react";
import BgImg from "./herobg.png";

export default function HeroSection() {
  return (
    <div>
      <img
        src={BgImg}
        className="img-fluid"
        alt="Bground"
        style={{
          marginTop: -100,
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      ></img>
    </div>
  );
}
