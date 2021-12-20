import React from "react";
import OneDoctor from "./OneDoctor";
import { Fade } from "react-awesome-reveal";

export default function Doctors() {
  const doctors = [
    {
      name: "Zana",
      description: "Dktory daruni Shazara la bwary",
      number: 9991413,
    },
    {
      name: "Shaima",
      description: "Dktory daruni Shazara la bwary",
      number: 5550101,
    },
    {
      name: "Shushu",
      description: "Dktory daruni Shazara la bwary",
      number: 666666,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center my-4">
        <Fade triggerOnce>
          <h2 className="text-2xl font-bold">Doctors</h2>
        </Fade>
      </div>
      <div className="grid grid-cols-1 justify-center items-center my-4 w-4/5">
        {doctors.map((key, index) => {
          return (
            <Fade triggerOnce>
              <div
                className="flex flex-col justify-between items-center m-2 gap-5 rounded-sm bg-slate-100"
                key={index}
              >
                <h1 className="font-bold text-xl py-2">{key.name}</h1>
                <h1 className="text-base text-teal-500">{key.description}</h1>
                <h1 className="text-base text-gray-700 py-2">{key.number}</h1>
              </div>
            </Fade>
          );
        })}
      </div>
      <OneDoctor />
    </div>
  );
}