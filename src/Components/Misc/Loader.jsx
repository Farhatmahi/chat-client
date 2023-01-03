import React from "react";

import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    
    <MutatingDots 
    height="100"
    width="100"
    color="#5853d5"
    secondaryColor= '#B181F0'
    radius='12.5'
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
   />
  );
};

export default Loader;
