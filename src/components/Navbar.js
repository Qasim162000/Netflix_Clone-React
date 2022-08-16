import React from "react";
import NetflixLogo from "./NetlfixClone.png";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#/">
          <img
            src={NetflixLogo}
            alt="Netflix Clone"
            width="100%"
            height="60"
            style={{ marginLeft: 20, marginTop: 7 }}
          />
        </a>
        <button
          type="button"
          className="btn btn-danger"
          style={{ marginRight: 70, marginTop: 7 }}
        >
          Sign in
        </button>
      </nav>
    </div>
  );
}
