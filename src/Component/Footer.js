import React from "react";

const Footer = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col ml-md-3 Footer">
          <h6>ABOUT</h6>
          <div>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Decathlon Stories</a>
            <a href="#">Press</a>
            <a href="#">Decathlon</a>
            <a href="#">Wholesale</a>
          </div>
        </div>
        <div class="col Footer">
          <h6>HELP</h6>
          <div>
            <a href="#">Payments</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation & Returns</a>
            <a href="#">FAQ</a>
            <a href="#">Report</a>
            <a href="#">Infringement</a>
          </div>
        </div>
        <div class="col Footer">
          <h6>POLICY</h6>
          <div>
            <a href="#">Return Policy</a>
            <a href="#">Term of Use</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">Sitemap</a>
            <a href="#">EPR Compliance</a>
          </div>
        </div>
        <div class="col Footer">
          <h6>SOCIAL</h6>
          <div>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">You Tube</a>
          </div>
        </div>
        <div class="col Footer border-left border-secondary">
          <h6>Mail Us:</h6>
          <div>
            <p>Decathlon Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
          </div>
        </div>
        <div class="col Footer">
          <h6>Registered Office Address:</h6>
          <div>
            <p>Decathlon Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring </p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>
              Telephone:{" "}
              <a href="#" class="text-primary">
                1800 208 9898
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="row border-top mt-5 py-3 border-secondary">
        <div class="col">
          <i class="fa fa-briefcase text-warning"></i>
          <span>Sell On Decathlon</span>
        </div>
        <div class="col">
          <i class="fab fa-stumbleupon-circle text-warning"></i>
          <span>Advertise</span>
        </div>
        <div class="col">
          <i class="fa fa-gift text-warning"></i>
          <span>Gift Cards</span>
        </div>
        <div class="col">
          <i class="fa fa-question-circle text-warning"></i>
          <span>Help Center</span>
        </div>
        <div class="col col-md-2 col-xs-4">
          <span>&copy; 2007-2020 decathlon.com</span>
        </div>
        <div class="col col-md-5 col-xs-6">
          <img
            class="img-fluid"
            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_7934bc.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
