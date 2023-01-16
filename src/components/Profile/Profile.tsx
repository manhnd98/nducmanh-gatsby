import { Image } from "@chakra-ui/react";
import React from "react";

function ProfileComponent() {
  return (
    <React.Fragment>
      <div className="flex justify-between mt-8">
        <div>
          <div className="block text-4xl font-bold pb-2">Manh Nguyen Duc</div>
          <div className="block text-base">
            Software Engineer
          </div>
        </div>
        <div className="ml-8">
          <div className="border-white-black-80 border-2 border-solid w-24 h-24 rounded-full">
            <Image
              src="avatar.jpg"
              className="rounded-full p-0 border-none"
            ></Image>
          </div>
        </div>
      </div>

      <div className="text-base text-justify mt-4">
        Manh is a software engineer with 4+ years of experience facilitating
        cutting-edge solutions with a wide range of e-commerce application and
        technology skills. Proven ability to leverage full-stack expertise to
        build interactive and user-centered website designs to scale.
      </div>
    </React.Fragment>
  );
}

export default ProfileComponent;
