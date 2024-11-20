import React from "react";

function Header() {
  return (
    <div>
      <div className="bg-slate-100 p-3">
        <span className=" cursor-pointer text-center font-serif text-3xl mr-36 md:mr-48 ml-40 md:text-5xl">
          weebly
        </span>
        <span className="hidden cursor-pointer hover:text-blue-300 md:inline-block md:ml-64">
          Websites
        </span>
        <span className="hidden cursor-pointer hover:text-blue-300 md:inline-block md:-ml-64">
          Online storing
        </span>
        <span className="hidden cursor-pointer hover:text-blue-300 md:inline-block md:-ml-64 md:mr-32">
          Prices
        </span>
        <span className="mr-10 hover:text-blue-300 md:mr-20 md:ml-96 cursor-pointer">
          Log in
        </span>
        <button className=" hover:text-blue-800 border-blue-500 text-blue-500 cursor-pointer px-4 py-2 border rounded-md text-center">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
