import React from "react";

const Mycontainer = ({ className, children }) => {
  return <div className={`${className} w-11/12 mx-auto`}>{children}</div>;
};

export default Mycontainer;
