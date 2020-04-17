import React from "react";

const Button = ({ type, children, className }) => (
  <button type={type} className={className}>
    {children}
  </button>
);

export default Button;
