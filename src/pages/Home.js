import React from "react";
import Love from "../love.svg";

export default function Home() {
  return (
    <div className="max-w-full h-screen flex items-start justify-center">
      <div
        className="m-4 h-3/4 w-3/4  flex flex-col items-center
       justify-evenly rounded"
      >
        <div className=" w-full flex justify-around items-center overflow-hidden">
          <img className="h-60 m-16" src={Love} alt="Ribbon Icon" />
          <div className="text-lg font-semibold h-1/2 flex flex-col justify-end">
            <h1>How are you today?</h1>
            <h1>Do you want someone to talk to?</h1>
          </div>
        </div>
        <div className="flex  m-4">
          <p className="p-2">Everyone needs help... </p>
          <button className="p-2 bg-teal-500 rounded-md text-white">
            What do you need?
          </button>
        </div>
      </div>
    </div>
  );
}
