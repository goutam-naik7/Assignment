import React from "react";

const Banner = () => {
  return (
    <div class="container-fluid">
      <div class="row row-cols-3">
        <div class="col pl-0 pr-2">
          <img
            class="img-fluid cur"
            alt="Furniture Bestsellers"
            srcset="https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50 1x"
            src="https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50"
          />
        </div>
        <div class="col pl-0 pr-2">
          <img
            class="img-fluid cur"
            alt="cv"
            srcset="https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50 1x"
            src="https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50"
          />
        </div>
        <div class="col px-0">
          <img
            class="img-fluid cur"
            alt="Wash5thFeb"
            srcset="https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50 1x"
            src="https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
