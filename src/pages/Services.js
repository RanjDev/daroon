import React from "react";
import { FaCalendarCheck, FaLaptop, FaQuestion } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function Services() {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="flex flex-col justify-between items-center w-4/5 p-8">
        <Fade triggerOnce>
          <h1 className="text-2xl font-bold py-2">Our Services</h1>
        </Fade>
        <Fade triggerOnce>
          <h2 className="text-base text-gray-500">
            The list below is the services our system provides for the
            beneficiaries
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-5 my-6 ">
          <div className="flex flex-col justify-center  items-center p-6 transform hover:-translate-y-2 transition-all">
            <div className="flex justify-center items-center p-2">
              <Fade triggerOnce>
                <FaCalendarCheck className="text-teal-500 text-3xl" />
              </Fade>
            </div>
            <Fade triggerOnce>
              <p className="font-bold text-xl">Appointments</p>
            </Fade>
            <Fade triggerOnce>
              <p className="p-3 text-center">
                We provide the facilities to set up an appointment with the
                doctor of your choice in a real life setting
              </p>
            </Fade>
          </div>
          <div className="flex flex-col justify-center  items-center p-6 transform hover:-translate-y-2 transition-all">
            <div className="flex justify-center items-center p-2">
              <Fade triggerOnce>
                <FaLaptop className="text-teal-500 text-3xl" />
              </Fade>
            </div>
            <Fade triggerOnce>
              <p className="font-bold text-xl">Online Meetings</p>
            </Fade>
            <Fade triggerOnce>
              <p className="p-3 text-center">
                You could also meet with the doctors in an online setting if the
                real life isn't convinient
              </p>
            </Fade>
          </div>
          <div className="flex flex-col justify-center  items-center p-6 transform hover:-translate-y-2 transition-all">
            <div className="flex justify-center items-center p-2">
              <Fade triggerOnce>
                <FaQuestion className="text-teal-500 text-3xl" />
              </Fade>
            </div>
            <Fade triggerOnce>
              <p className="font-bold text-xl">Anonymity</p>
            </Fade>
            <Fade triggerOnce>
              <p className="p-3 text-center">
                Beneficiaries could also communicate without revealing their
                identity, this feature is to maximise user experience
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
