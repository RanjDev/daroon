import React from "react";
import { FaPhone } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function OneDoctor() {
  const doctor = {
    id: 123433,
    name: "Zana",
    description: "zammantrin dktor lasar kuray arz",
    num: 222,
    days: ["Tuesday", "Wednesday", "Thursday"],
  };
  return (
    <div className="flex justify-center items-center w-screen my-2">
      <div className="w-4/5 grid grid-cols-2 justify-center items-center gap-3 bg-slate-100">
        <Fade triggerOnce>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">{doctor.name}</h1>
            <h1 className="text-gray-500">{doctor.description}</h1>
            <h1 className="flex justify-center items-center gap-3 text-teal-500">
              {doctor.num}
              <FaPhone />
            </h1>

            <h1 className="text-gray-500">
              Days Available:
              {doctor.days.map((key) => {
                return " " + key;
              })}
            </h1>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div className=" flex justify-center items-center">
            <Link
              to={`/appointment/${doctor.id}`}
              className="bg-teal-500 w-1/3 hover:bg-teal-600 transition-all transform ease-in text-white my-2  py-1 px-2 rounded"
            >
              Set an Appointment Now
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
}
