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
          width: "100%",
        }}
      ></img>
      <div
        className="container"
        style={{
          position: "relative",
          textAlign: "center",
          justifyContent: "center",
          display: "inline",
        }}
      >
        <h1
          className="display-3"
          style={{ marginTop: "-42%", color: "white", fontWeight: 600 }}
        >
          Unlimited movies, TV
        </h1>
        <h1
          className="display-3"
          style={{ color: "white", fontWeight: 600, marginTop: "-1%" }}
        >
          shows, and more.
        </h1>
        <h4 style={{ color: "white", fontWeight: 400 }}>
          Watch anywhere. Cancel anytime.
        </h4>
        <h5
          className="pt-4"
          style={{ color: "white", fontWeight: 400, fontSize: 18 }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
      </div>
      <div
        className="container mt-3"
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="col-6">
          <div className="input-group">
            <input
              style={{ height: 60 }}
              type="text"
              className="form-control"
              placeholder="Email Address"
              aria-label="email"
            />
            <button
              className="btn pt-0 btn-outline-danger"
              type="submit"
              style={{
                fontSize: 26,
                background: "red",
                color: "white",
              }}
            >
              Get Started >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
