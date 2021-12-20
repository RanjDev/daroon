import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function Experiences() {
  return (
    <div className="flex justify-center items-center flex-col p-6 ">
      <Fade triggerOnce>
        <h1 className="text-3xl font-bold my-6">Words from beneficiaries</h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center w-4/5 gap-5">
        <div className="flex flex-col items-center justify-center">
          <div className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors transform ease-in">
            <Fade triggerOnce>
              <h1 className="flex justify-center items-center">
                <FaQuoteRight className="text-center text-teal-400" />
              </h1>
            </Fade>
            <Fade triggerOnce>
              <p className="p-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                porta ultrices ipsum. Sed convallis, diam sit amet ornare
                fringilla, lacus risus sollicitudin arcu, vitae interdum ipsum
                mi sed ligula. Ut et tincidunt orci. Aliquam luctus, odio quis
                rutrum faucibus, diam leo pulvinar augue, id venenatis leo
                lectus nec magna.
              </p>
            </Fade>
          </div>
          <Fade triggerOnce>
            <h1 className="font-bold py-2">Hawda</h1>
          </Fade>
          <Fade triggerOnce>
            <h2 className=" text-sm text-gray-400">Beneficiary</h2>
          </Fade>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors transform ease-in">
            <Fade triggerOnce>
              <h1 className="flex justify-center items-center">
                <FaQuoteRight className="text-center text-teal-400" />
              </h1>
            </Fade>
            <Fade triggerOnce>
              <p className="p-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                porta ultrices ipsum. Sed convallis, diam sit amet ornare
                fringilla, lacus risus sollicitudin arcu, vitae interdum ipsum
                mi sed ligula. Ut et tincidunt orci. Aliquam luctus, odio quis
                rutrum faucibus, diam leo pulvinar augue, id venenatis leo
                lectus nec magna.
              </p>
            </Fade>
          </div>
          <Fade triggerOnce>
            <h1 className="font-bold py-2">Anonymous</h1>
          </Fade>
          <Fade triggerOnce>
            <h2 className=" text-sm text-gray-400">Beneficiary</h2>
          </Fade>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors transform ease-in">
            <Fade triggerOnce>
              <h1 className="flex justify-center items-center">
                <FaQuoteRight className="text-center text-teal-400" />
              </h1>
            </Fade>
            <Fade triggerOnce>
              <p className="p-3">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                porta ultrices ipsum. Sed convallis, diam sit amet ornare
                fringilla, lacus risus sollicitudin arcu, vitae interdum ipsum
                mi sed ligula. Ut et tincidunt orci. Aliquam luctus, odio quis
                rutrum faucibus, diam leo pulvinar augue, id venenatis leo
                lectus nec magna.
              </p>
            </Fade>
          </div>
          <Fade triggerOnce>
            <h1 className="font-bold py-2">Falah</h1>
          </Fade>
          <Fade triggerOnce>
            <h2 className=" text-sm text-gray-400">Beneficiary</h2>
          </Fade>
        </div>
      </div>
    </div>
  );
}
