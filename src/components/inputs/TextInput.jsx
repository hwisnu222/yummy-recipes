import React from "react";

export default function TextInput(props) {
  return (
    <input
      {...props}
      type="text"
      className={`p-2 rounded-full text-center bg-gray-100 w-full text-gray-500 ${props.className}`}
    />
  );
}
