import React from "react";

function BioComponent() {
  return (
    <div className="mt-4">
      <h3 className="text-2xl font-bold underline decoration-4 underline-offset-8">
        Bio
      </h3>
      <div className="bio-content mt-4 text-base">
        <div className="flex">
          <div className="font-bold mr-4">1998</div>
          <div>Born in Ninh Binh, Vietnam</div>
        </div>
        <div className="flex">
          <div className="font-bold mr-4">2018</div>
          <div>Worked at FPT Information System</div>
        </div>
        <div className="flex">
          <div className="font-bold mr-4">2020</div>
          <div>Completed Bachelor's Degree at Greenwich Vietnam</div>
        </div>
        <div className="flex">
          <div className="font-bold mr-4">2020</div>
          <div>Worked at Toshiba Software Development</div>
        </div>
        <div className="flex">
          <div className="font-bold mr-4">2021</div>
          <div>Start a new position at CMC Global</div>
        </div>
      </div>
    </div>
  );
}

export default BioComponent;
