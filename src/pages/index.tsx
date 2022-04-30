import { useMediaQuery } from '@chakra-ui/react';
import React from "react";
import BioComponent from "../components/Bio/Bio";
import FooterComponent from "../components/Footer/Footer";
import HelloComponent from "../components/Hello/Hello";
import LandComponent from "../components/Land/Land";
import Navbar from "../components/Navbar/Navbar";
import ProfileComponent from "../components/Profile/Profile";
import SEO from '../components/Seo/Seo';
import SocialComponent from "../components/Social/Social";
// markup
const IndexPage = () => {
    const [isMobile] = useMediaQuery('(max-width: 600px)'); 
  return (
    <div className="w-full h-full">
      <Navbar></Navbar>
      <SEO />

      <div className={` desktop:h-160 desktop:max-w-screen-sm desktop:-mb-44 mobile:h-72 mobile:max-w-xs mobile:-mb-10 mobile:pt-10 mx-auto`}>
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
