import React from "react";

export default function Paragraph(props) {
  return (
    <p
      {...props}
      className={`text-green-800 tracking-wider mb-2 ${props.className}`}
    >
      {props.children}
    </p>
  );
}
