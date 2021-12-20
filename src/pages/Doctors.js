import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function Doctors() {
  const doctors = [
    {
      id: 1234,
      name: "Zana",
      description: "Dktory daruni Shazara la bwary",
      number: 9991413,
    },
    {
      id: 1234,
      name: "Shaima",
      description: "Dktory daruni Shazara la bwary",
      number: 5550101,
    },
    {
      id: 1234,
      name: "Shushu",
      description: "Dktory daruni Shazara la bwary",
      number: 666666,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center my-12">
        <Fade triggerOnce>
          <h2 className="text-2xl font-bold">Doctors</h2>
        </Fade>
      </div>
      <div className="grid grid-cols-1 justify-center items-center my-4 w-4/5">
        {doctors.map((key, index) => {
          return (
            <Fade triggerOnce>
              <div
                className="flex justify-around items-center m-2 gap-5 rounded-sm bg-slate-100 py-4 my-3"
                key={index}
              >
                <img
                  className="inline object-cover w-16 h-16 mr-2 rounded-full"
                  src="https://myteledoc.app/wp-content/uploads/2020/09/happy-young-female-doctor-smiling-and-looking-at-c-WDEKYYG.jpg"
                  alt=""
                />
                <Link
                  to={`/profile/${key.id}`}
                  className="font-bold text-xl py-2"
                >
                  {key.name}
                </Link>
                <h1 className="text-base text-teal-500">{key.description}</h1>
                <h1 className="text-base text-gray-700 py-2">{key.number}</h1>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
