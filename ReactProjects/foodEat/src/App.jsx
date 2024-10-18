import React from "react";
import Profile from "./assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";

import "./App.css";

const Navbar = () => {
  return (
    <div className="bg-indigo-300 py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-4xl lg:text-3xl font-semibold">
            FOOD<span className="text-primary">EAT</span>
          </p>
        </div>
        {/* Menu section */}
        <div className="flex justify-center items-center gap-10">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase">Home</li>
            <li className="hover:border-b-2 border-primary uppercase">Menu</li>
            <li className="hover:border-b-2 border-primary uppercase">About</li>
          </ul>

          {/* login section */}
          <div className="flex gap-2 items-center">
            <img src={Profile} alt="" className="w-10 rounded-full" />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
