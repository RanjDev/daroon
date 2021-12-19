import React from "react";
import { Link } from "react-router-dom";

export default function TheNavbar() {
  return (
    <div className="w-full flex justify-between items-center">
      <Link to="/" className="p-6">
        home
      </Link>
      <Link to="/about" className="p-6">
        aboutus
      </Link>
    </div>
  );
}
