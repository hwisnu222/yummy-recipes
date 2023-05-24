import React from "react";

export default function LayoutLoading(props) {
  props.isLoading ? (
    <p>Loading</p>
  ) : (
    <div {...props}>{props.children}hello</div>
  );
}
