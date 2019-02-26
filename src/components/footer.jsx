import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer mt-auto py-3"
      style={{ position: "absolute", left: "10px", bottom: "0", right: "0" }}
    >
      <div style={{ display: "inline-block", backgroundColor: "#fff" }}>
        <span className="text-muted" style={{ color: "#fff" }}>
          {" "}
          <small>
            <strong>eSocial © 2019</strong>
          </small>
        </span>{" "}
        &nbsp;
        <span className="text-muted" style={{ color: "#fff" }}>
          {" "}
          <small>
            <strong>follow us on</strong>
          </small>
        </span>{" "}
        <a href="https://facebook.com">
          <img
            src="https://img.icons8.com/color/24/000000/facebook.png"
            style={{ marginRight: "6px" }}
            alt=""
          />
        </a>
        <a href="https://twitter.com">
          <img
            src="https://img.icons8.com/color/24/000000/twitter.png"
            style={{ marginRight: "6px" }}
            alt=""
          />
        </a>
        <a href="https://instagram.com">
          <img
            src="https://img.icons8.com/color/24/000000/instagram-new.png"
            style={{ marginRight: "6px" }}
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
