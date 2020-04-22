import React from 'react';

const Button = ({type, children, className, onClick}) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
