import React from "react";

export default function HomePage2() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        background: "black",
        minHeight: 500,
        overflow: "auto",
      }}
    >
      <div className="col-3" style={{ paddingTop: 140 }}>
        <h1
          className="Display-1 fw-semibold text-start"
          style={{ fontSize: 52 }}
        >
          Enjoy on your TV.
        </h1>
        <p className="lead fs-3 text-start">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className="col-3" style={{ paddingTop: 140 }}>
        <img src="" alt="stream" />
      </div>
    </div>
  );
}
