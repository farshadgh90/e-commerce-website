import React from "react";
import { Alert } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-[60vh]">
      <div>
        <Alert color="red" className="text-xl font-inter font-bold">
          Sorry no products match your filter search ... Clear the filter and try again 😃.
        </Alert>
      </div>
    </div>
  );
};

export default Error;
