import React from "react";
import Help from "../help.svg";
import { Fade } from "react-awesome-reveal";
import { FaBrain, FaSpa, FaUserNurse } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center my-4">
        <Fade triggerOnce>
          <h1 className="text-center my-12 font-bold text-2xl">About Us</h1>
        </Fade>
        <div className="w-4/5 grid grid-cols-1 justify-center items-center lg:flex lg:justify-between lg:items-end gap-y-16  p-8 ">
          <Fade triggerOnce>
            <div className="h-3/5 w-3/5 lg:flex-2 ">
              <img className="svg-rot  mx-auto" src={Help} alt="help icon" />
            </div>
          </Fade>
          <div className="flex flex-col flex-1">
            <Fade triggerOnce>
              <h2 className="text-teal-500 font-bold text-xl py-3">
                Why Daroon?
              </h2>
            </Fade>
            <Fade triggerOnce>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                cursus ligula non nulla congue, eu rhoncus leo auctor. Aliquam a
                volutpat nibh, quis dignissim justo. Pellentesque scelerisque
                augue a varius laoreet. Cras mollis congue felis et malesuada.
                Pellentesque vel consectetur urna, vitae hendrerit enim. In
                finibus pulvinar tellus in imperdiet. Etiam elementum vulputate
                neque, sit amet laoreet neque ullamcorper eu. Morbi eget diam
                risus. Proin commodo vel mauris sed volutpat. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam cursus ligula non
                nulla congue, eu rhoncus leo auctor. Aliquam a volutpat nibh,
                quis dignissim justo. Pellentesque scelerisque augue a varius
                laoreet. Cras mollis congue felis et malesuada. Pellentesque vel
                consectetur urna, vitae hendrerit enim. In finibus pulvinar
                tellus in imperdiet. Etiam elementum vulputate neque, sit amet
                laoreet neque ullamcorper eu. Morbi eget diam risus. Proin
                commodo vel mauris sed volutpat.
              </p>
            </Fade>
          </div>
        </div>
      </div>

      <div className="w-4/5 grid grid-cols-3 justify-center items-center my-12">
        <Fade triggerOnce>
          <div className="flex flex-col justify-center items-center">
            <FaBrain className="text-teal-500 text-6xl" />
            <p className="py-3 font-bold">Your mental health matters</p>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div className="flex flex-col justify-center items-center">
            <FaSpa className="text-teal-500 text-6xl" />
            <p className="py-3 font-bold">Seek peace of mind</p>
          </div>
        </Fade>
        <Fade triggerOnce>
          <div className="flex flex-col justify-center items-center">
            <FaUserNurse className="text-teal-500 text-6xl" />
            <p className="py-3 font-bold">Reach out to professionals</p>
          </div>
        </Fade>
      </div>

      <div className=" w-4/5  flex flex-col items-center justify-center my-12">
        <Fade triggerOnce>
          <h2 className="font-bold text-xl text-teal-500 py-3">
            More About Us
          </h2>
        </Fade>
        <Fade triggerOnce>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            cursus ligula non nulla congue, eu rhoncus leo auctor. Aliquam a
            volutpat nibh, quis dignissim justo. Pellentesque scelerisque augue
            a varius laoreet. Cras mollis congue felis et malesuada.
            Pellentesque vel consectetur urna, vitae hendrerit enim. In finibus
            pulvinar tellus in imperdiet. Etiam elementum vulputate neque, sit
            amet laoreet neque ullamcorper eu. Morbi eget diam risus. Proin
            commodo vel mauris sed volutpat.
          </p>
        </Fade>
      </div>
    </div>
  );
}
