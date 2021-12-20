import React from "react";
import { Link } from "react-router-dom";
import Love from "../love.svg";

export default function Home() {
  return (
    <div className="max-w-full h-screen flex items-center justify-center">
      <div
        className="m-4 h-3/4 w-3/4  flex flex-col items-center
       justify-evenly rounded"
      >
        {/* <p className="self-start m-4">
          It is okay to not feel alright all the time.
        </p> */}
        <div className=" w-full flex justify-around items-center overflow-hidden">
          {/* Questions */}
          <div className="h-1/2 flex flex-col justify-end gap-2">
            <h1 className="text-lg font-semibold">How are you today?</h1>
            <h1 className="text-lg font-semibold">
              Do you want someone to talk to?
            </h1>
            <p className="w-3/4 ">
              Daroon aims to give voice to those who can find a listening ear.
              Everyone has a story, and every story is worth listening to.
            </p>
            <Link
              to="/services"
              className=" text-teal-500 font-semibold self-start filter hover:drop-shadow-xl transition-all duration-300"
            >
              What do you need?
            </Link>
          </div>
          <img className="h-60 m-16" src={Love} alt="Ribbon Icon" />
        </div>
        <div className="flex justify-around w-3/4 m-4">
          <button className="transform hover:-translate-y-0.5 hover:bg-teal-600 transition-all duration-300 p-2 bg-teal-500 rounded-md text-white">
            Mental wellness
          </button>{" "}
          <button className="transform hover:-translate-y-0.5 hover:bg-teal-600 transition-all duration-300 p-2 bg-teal-500 rounded-md text-white">
            Open Individuals
          </button>{" "}
          <button className="transform hover:-translate-y-0.5 hover:bg-teal-600 transition-all duration-300 p-2 bg-teal-500 rounded-md text-white">
            Greater Society
          </button>
        </div>
      </div>
    </div>
  );
}
