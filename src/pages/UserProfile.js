import React from "react";

export default function UserProfile() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col md:flex-row  justify-center items-center gap-6 p-4 sm:flex-row sm:p-8">
        <div className="h-full flex flex-col items-center ">
          <img
            className="h-40 rounded-full sm:h-52"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt="user profile"
          />
          <h1 className="text-lg font-semibold text-black mt-4">
            Obito Uchiha
          </h1>
          <p className="text-md">Obito@email.com</p>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex gap-4 items-center justify-center ">
            <button
              className=" transition-all duration-300 p-2
             text-white bg-teal-400 hover:bg-teal-500 rounded self-end"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
