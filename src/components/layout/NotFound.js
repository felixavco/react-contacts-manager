import React from "react";

const NotFound = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src="https://orig00.deviantart.net/4872/f/2016/174/d/0/travalo_by_greenanimator-da7f5zc.gif"
          alt="Not Found"
        />
      </div>
      <div className="col-md-6 pt-5">
        <h1 className="display-1 text-center mt-5">
          404 <i class="fas fa-frown-open" />
        </h1>
        <h3 className="display-4 text-center my-3">PAGE NOT FOUND</h3>
        <div className="text-center">
        </div>
      </div>
    </div>
  );
};

export default NotFound;
