import React from 'react';
import './App.css';
// import { Link } from "react-router-dom";
// import { ButtonLink } from "./components/ButtonLink"
// import LogoDrivers from "./components/Logos";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LogoDrivers className="App-logo" alt="logo" /> */}
        <img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586515096/drivers/logo/logo-drivers-red_gbk3gt.png" className="App-logo" alt="logo" />
        <button to="#" className="button"> GO!</button>
      </header>
    </div>
  );
}

export default App;
