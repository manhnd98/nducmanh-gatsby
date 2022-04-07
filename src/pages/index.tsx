import React from "react";
import BioComponent from "../components/Bio/Bio";
import FooterComponent from "../components/Footer/Footer";
import HelloComponent from "../components/Hello/Hello";
import LandComponent from "../components/Land/Land";
import Navbar from "../components/Navbar/Navbar";
import ProfileComponent from "../components/Profile/Profile";
import SocialComponent from "../components/Social/Social";
// markup
const IndexPage = () => {
  return (
    <div className="w-full h-full">
      <Navbar></Navbar>

      <div className="h-160 max-w-screen-sm mx-auto -mb-44">
        {typeof document !== `undefined` && <LandComponent />}
      </div>
      <div className="max-w-screen-sm m-auto">
        <div className="mx-12">
          <HelloComponent />
          <ProfileComponent />
          <BioComponent />
          <SocialComponent />
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
