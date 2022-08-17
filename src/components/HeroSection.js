import React from "react";
import BgImg from "./herobg.png";

export default function HeroSection() {
  const noWrap = { whiteSpace: "nowrap" };
  return (
    <div>
      <div
        style={{
          marginTop: -100,
          paddingTop: 250,
          height: 750,
          backgroundImage: `url(${BgImg})`,
        }}
      >
        <div className="justify-content-center">
          <h1 className="display-3 fw-semibold" style={noWrap}>
            Unlimited movies, TV
          </h1>
          <h1 className="display-3 fw-semibold" style={noWrap}>
            shows, and more.
          </h1>
          <p className="fs-4 fw-normal mb-4" style={noWrap}>
            Watch anywhere. Cancel anytime.
          </p>
          <p className="lead fw-normal">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="input-group justify-content-center">
          <input
            style={{ height: 60, maxWidth: 650 }}
            type="email"
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
            }}
          >
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
