import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const doctor = {
  id: 123433,
  name: "Zana",
  description: "zammantrin dktor lasar kuray arz",
  num: 222,
  days: ["Tuesday", "Wednesday", "Thursday"],
};

export default function UserProfile() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col  justify-center items-center gap-6 p-4 sm:p-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            className="h-40 rounded-full sm:h-52"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt="user profile"
          />

          <div className="flex flex-col justify-center items-center h-full">
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
            <Link
              to={`/appointment/${doctor.id}`}
              className="bg-teal-500  hover:bg-teal-600 transition-all transform ease-in text-white my-2  py-1 px-2 rounded"
            >
              Set an Appointment Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
