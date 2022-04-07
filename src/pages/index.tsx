import React from "react";
import LandComponent from "../components/Land/Land";
import Navbar from "../components/Navbar/Navbar";
// markup
const IndexPage = () => {
  return (
    <div className="w-full h-full">
      <Navbar></Navbar>

      <div className="h-160 max-w-screen-sm mx-auto">
        <LandComponent />
      </div>
    </div>
  );
};

export default IndexPage;
