import React from "react";
import "./TrustedBy.scss";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <strong><span>Trusted by:</span></strong>
        <img src="./img/t1.png" alt="" />
        <img src="./img/t2.png" alt="" />
        <img src="./img/t3.png" alt="" />
        {/* <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" /> */}
        <img src="./img/t4.jpg" alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;
