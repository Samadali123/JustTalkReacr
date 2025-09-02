import { createContext, useState, useContext } from "react";

const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState("india"); // default India

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => useContext(RegionContext);
