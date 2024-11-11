import React from 'react'
import logo from "../assets/logo.png";

const Logo = ({ width = 100, height = 100 }) => {
  return <img src={logo} alt="Logo" width={width} height={height} />;
};

export default Logo