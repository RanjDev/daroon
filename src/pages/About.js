import React from "react";
import Help from "../help.svg";
import Say from "../say.svg";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="text-center m-2">About Us</h1>
        <div className="grid grid-cols-2 gap-y-16 items-center p-8">
          <img className="h-56 mx-auto" src={Help} alt="help icon" />
          <p className="w-2/4 text-center">
            Our Aim is to connect people who need help, but cannot find it to
            those who can help.
          </p>

          <p className="mx-auto w-2/4 text-center ">
            We aspire to give voice to people who remain voiceless due to
            various reasons.
          </p>
          <img className="h-56" src={Say} alt="say icon" />
        </div>
      </div>
    </div>
  );
}
