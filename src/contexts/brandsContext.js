import React, { createContext, useState } from "react";

const CurrentBrandContext = createContext();

export const CurrentBrandContextProvider = ({ children }) => {
  const [currentName, setCurrentName] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  return (
    <CurrentBrandContext.Provider
      value={{
        currentName,
        setCurrentName,
        currentImage,
        setCurrentImage
      }}
    >
      {children}
    </CurrentBrandContext.Provider>
  );
};

export default CurrentBrandContext;
