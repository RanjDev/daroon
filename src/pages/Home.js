import React from "react";
import { Link } from "react-router-dom";
import Love from "../love.svg";

export default function Home() {
  return (
    <div className="max-w-full h-auto flex flex-col items-center justify-center ">
      <div
        className="m-4 h-auto w-3/4  flex flex-col items-center 
       justify-evenly rounded "
      >
        <div className=" w-full h-auto flex flex-col md:flex-row justify-around items-center overflow-hidden">
          {/* Questions */}
          <div className="h-auto flex flex-col justify-center items-center gap-2">
            <h1 className="text-lg font-semibold">How are you today?</h1>
            <h1 className="text-lg font-semibold">
              Do you want someone to talk to?
            </h1>
            <p className="w-3/4 h-auto ">
              Daroon aims to give voice to those who can find a listening ear.
              Everyone has a story, and every story is worth listening to.
            </p>
            <Link
              to="/services"
              className=" text-teal-500 font-semibold filter hover:drop-shadow-xl transition-all duration-300"
            >
              What do you need?
            </Link>
          </div>
          <img className="h-60 m-16" src={Love} alt="Ribbon Icon" />
        </div>
        <div className="flex flex-col md:flex-row items-center w-3/4 gap-4 m-4 ">
          <button className="w-1/2 transform hover:-translate-y-0.5 hover:bg-teal-600 transition-all duration-300 p-2 bg-teal-500 rounded-md text-white text-sm">
            Mental wellness
          </button>{" "}
          <button className="w-1/2 transform hover:-translate-y-0.5 hover:bg-teal-600 transition-all duration-300 p-2 bg-teal-500 rounded-md text-white text-sm">
            Open Individuals
          </button>{" "}
          <button className="w-1/2 transform hover:-translate-y-0.5 hover:bg-teal-600 transition-all duration-300 p-2 bg-teal-500 rounded-md text-white text-sm">
            Greater Society
          </button>
        </div>
      </div>
    </div>
  );
}
