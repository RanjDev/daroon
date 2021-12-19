import React from "react";
import { FaCalendarCheck, FaLaptop, FaQuestion } from "react-icons/fa";

export default function Services() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-between items-center w-4/5">
        <h1 className="text-2xl font-bold">Our Services</h1>
        <h2 className="text-base text-gray-500">
          The list below is the services our system provides for the
          beneficiaries
        </h2>
        <div className="grid grid-cols-3 justify-between items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <FaCalendarCheck className="text-teal-500" />
            </div>
            <p>Appointments</p>
            <p>
              We provide the facilities to set up an appointment with the doctor
              of your choice in a real life setting
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <FaLaptop />
            </div>
            <p>Online Meetings</p>
            <p>
              You could also meet with the doctors in an online setting if the
              real life isn't convinient
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <FaQuestion />
            </div>
            <p>Anonymity</p>
            <p>
              Beneficiaries could also communicate without revealing their
              identity, this feature is to maximise user experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
