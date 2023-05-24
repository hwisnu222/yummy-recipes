import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Group 1.png";

export default function Header(props) {
  return (
    <div className="p-4 border-b mb-4 bg-white flex items-center justify-between">
      <div className="flex">
        <Link to="/">
          <img className="mr-4 rounded-full mb-0 w-11" src={Logo} />
        </Link>
        {props.children}
      </div>
      <ul>
        <Link to="/about">
          <li className="font-bold text-green-800">About</li>
        </Link>
      </ul>
    </div>
  );
}
