import React, { useEffect } from "react";

const AdScriptComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//pl24230425.cpmrevenuegate.com/2f1ccf4abf07edf9fbe3089f2d1dcc09/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    // Append the script to the document body or another appropriate location
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return <div id="container-2f1ccf4abf07edf9fbe3089f2d1dcc09"></div>;
};

export default AdScriptComponent;
