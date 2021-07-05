import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid Navbar shadow-sm">
      <div className="Nav">
        <a href="#">Electronics</a>
        <i className="fas fa-angle-down pt-1"></i>
      </div>
      <div className="Nav">
        <a href="#">TVs & Appliances</a>
        <i className="fas fa-angle-down pt-1"></i>
      </div>
      <div className="Nav">
        <a href="#">Men</a>
        <i className="fas fa-angle-down pt-1"></i>
      </div>
      <div className="Nav">
        <a href="#">Women</a>
        <i className="fas fa-angle-down pt-1"></i>
      </div>
      <div className="Nav">
        <a href="#">Babies & Kids</a>
        <i className="fas fa-angle-down pt-1"></i>
      </div>
      <div className="Nav">
        <a href="#">Home & Furniture</a>
        <i className="fas fa-angle-down pt-1"></i>
      </div>
      <div className="Nav">
        <a href="#">Sports & More</a>
        <i className="fas fa-angle-down pt-1"></i>
      </div>
      <div className="Nav">
        <a href="#">Flights</a>
      </div>
      <div className="Nav">
        <a href="#">Offer Zone</a>
      </div>
    </div>
  );
};

export default Navbar;
