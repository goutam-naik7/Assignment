import React from "react";

const Header = () => {
  return (
    <div className="container-fluid  Header fixed-top">
      <div className="row py-2 d-flex">
        <div className="col logo offset-lg-1">
          <a href="#">
            <img
              class="img-fluid"
              src="https://cdncontent.decathlon.in/_next/static/images/logo-93d12d8cff484ab736d2a39f15bf66d8.svg"
              alt="Decathlon"
            />
          </a>
        </div>

        <div class="col col-md-4  search d-flex dropdown bg-white">
          <input
            class="form-control dropdown-toggle"
            type="search"
            placeholder="Search for products, brands and more"
            aria-label="Search"
            id="navbarDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <i class="fa fa-search mt-2 ml-sm-1 text-primary"></i>
          <div
            class="dropdown-menu col-12 search-item"
            aria-labelledby="navbarDropdown"
          >
            <h6 class="ml-4">Discover More</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item py-2" href="">
              <i class="fa fa-search text-secondary mr-3"></i>mobiles
            </a>
            <a class="dropdown-item py-2" href="">
              <i class="fa fa-search text-secondary mr-3"></i>t-shirts
            </a>
            <a class="dropdown-item py-2" href="">
              <i class="fa fa-search text-secondary mr-3"></i>shoes
            </a>
            <a class="dropdown-item py-2" href="">
              <i class="fa fa-search text-secondary mr-3"></i>laptop
            </a>
            <a class="dropdown-item py-2" href="">
              <i class="fa fa-search text-secondary mr-3"></i>tv
            </a>
            <a class="dropdown-item py-2" href="">
              <i class="fa fa-search text-secondary mr-3"></i>sarees
            </a>
          </div>
        </div>
        <div class="col dropdown login">
          <button
            class="btn bg-white text-primary"
            type="button"
            id="loginMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
