import {Image} from "@chakra-ui/react";
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
                Hi, I'm Manh, a senior software engineer with over 5 years of experience in developing innovative
                solutions for various projects.
                I'm proficient in multiple programming languages, frameworks, and tools and always eager to learn new
                technologies and methodologies. With my leadership skills and talent for problem-solving, I ensure that
                projects are delivered on time and within budget. I'm committed to delivering high-quality software
                solutions and driving innovation in the field.
            </div>
        </React.Fragment>
    );
}

export default ProfileComponent;
