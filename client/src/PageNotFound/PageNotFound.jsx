import React from "react";
import Pagenotfound from "../images/Pagenotfound.jpeg";

function PageNotFound() {
  return (
    <div className="pt-10">
      <div className="text-center text-red-600 text-[1.5rem] italic font-[800]">
        Page Not Found
      </div>
      <img
        src={Pagenotfound}
        alt=""
        className="mx-auto mt-5 w-[500px] max-w-full mb-5"
      />
    </div>
  );
}

export default PageNotFound;
