import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar p-4 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-xl font-semibold text-white"
          style={{ fontFamily: "Poppins" }}
        >
          <a href="#">YourBrand</a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Create
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
