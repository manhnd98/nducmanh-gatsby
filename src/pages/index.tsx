import React from "react";
import HelloComponent from "../components/Hello/Hello";
import LandComponent from "../components/Land/Land";
import Navbar from "../components/Navbar/Navbar";
import ProfileComponent from '../components/Profile/Profile';
// markup
const IndexPage = () => {
  return (
    <div className="w-full h-full">
      <Navbar></Navbar>

      <div className="h-160 max-w-screen-sm mx-auto -mb-44">
        <LandComponent />
      </div>
      <div className="max-w-screen-sm m-auto">
        <div className="mx-12">
          <HelloComponent />
          <ProfileComponent />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
